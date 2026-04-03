import { Resend } from "resend";
import type { ReservationFormValues } from "@/lib/form-schema";

/**
 * Central place for what happens after a valid reservation POST.
 *
 * Extend here later:
 * - Stripe: createCheckoutSession(data), record payment intent
 * - Google Sheets: appendRowToSheet(data)
 * - Airtable / Supabase: insertRecord(data)
 * - CRM webhook: fetch(process.env.CRM_WEBHOOK_URL, { body: JSON.stringify(data) })
 */
export async function processReservationPayload(
  data: ReservationFormValues,
): Promise<{ emailSent: boolean }> {
  const emailSent = await sendReservationEmail(data);
  return { emailSent };
}

function formatYesNo(v: "yes" | "no") {
  return v === "yes" ? "Yes" : "No";
}

async function sendReservationEmail(data: ReservationFormValues): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;

  if (!apiKey || !from || !to) {
    console.warn(
      "[reservation] Email skipped: set RESEND_API_KEY, RESEND_FROM, and RESEND_TO. Payload:",
      JSON.stringify(data),
    );
    return false;
  }

  const resend = new Resend(apiKey);

  const rows: [string, string][] = [
    ["Name", `${data.firstName} ${data.lastName}`],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Move date", data.moveDate],
    ["Preferred delivery", data.preferredDeliveryDate],
    ["Preferred pickup", data.preferredPickupDate],
    ["Current address", data.currentAddress],
    ["New address", data.newAddress],
    ["Bins needed", String(data.binCount)],
    ["Dolly needed", formatYesNo(data.dollyNeeded)],
    ["Stairs involved", formatYesNo(data.stairsInvolved)],
    ["Realtor referral", formatYesNo(data.realtorReferral)],
    ["Notes", data.notes?.trim() || "—"],
  ];

  const html = `
    <h1>New bin reservation</h1>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px 6px 0;border-bottom:1px solid #eee;font-weight:600;vertical-align:top;">${escapeHtml(k)}</td><td style="padding:6px 0;border-bottom:1px solid #eee;">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  const { error } = await resend.emails.send({
    from,
    to: to.split(",").map((s) => s.trim()),
    subject: `New reservation — ${data.firstName} ${data.lastName}`,
    html,
  });

  if (error) {
    console.error("[reservation] Resend error:", error);
    return false;
  }

  return true;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

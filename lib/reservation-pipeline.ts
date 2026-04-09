import { Resend } from "resend";
import { pricingPackages, rentalPeriodOptions, type RentalPeriod } from "@/content/site";
import type { ReservationFormValues } from "@/lib/form-schema";

function formatRentalPeriod(period: RentalPeriod): string {
  const opt = rentalPeriodOptions.find((o) => o.value === period);
  return opt?.label ?? period;
}

function formatPackageLine(data: ReservationFormValues): string {
  const pkg = pricingPackages.find((p) => p.id === data.packageId);
  if (!pkg) return data.packageId;
  const price = data.rentalPeriod === "2-week" ? pkg.price2Week : pkg.price4Week;
  const suffix = data.rentalPeriod === "2-week" ? "(2-week)" : "(4-week)";
  return `${pkg.name} (${pkg.totes} totes) — ${price} ${suffix}`;
}

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
    ["Preferred delivery", data.preferredDeliveryDate],
    ["Preferred pickup", data.preferredPickupDate],
    ["Current address", data.currentAddress],
    ["New address", data.newAddress],
    ["Rental period", formatRentalPeriod(data.rentalPeriod)],
    ["Package", formatPackageLine(data)],
    ["Dolly needed", formatYesNo(data.dollyNeeded)],
    ["Realtor name", data.realtorName?.trim() || "—"],
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

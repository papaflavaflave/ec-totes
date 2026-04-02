import { NextResponse } from "next/server";
import { reservationFormSchema } from "@/lib/form-schema";
import { processReservationPayload } from "@/lib/reservation-pipeline";

/**
 * FORM HANDLING — POST /api/reserve
 * ---------------------------------
 * Validates JSON body with the same Zod schema as the client.
 *
 * To extend:
 * - Import Stripe and create a session after validation
 * - Push rows to Google Sheets with googleapis + service account
 * - Insert into Supabase with @supabase/supabase-js
 *
 * Resend email runs inside processReservationPayload when env vars are set.
 */

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false as const, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = reservationFormSchema.safeParse(json);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const path = issue.path[0];
      if (typeof path === "string" && !fieldErrors[path]) {
        fieldErrors[path] = issue.message;
      }
    }
    return NextResponse.json(
      { ok: false as const, error: "Validation failed", fieldErrors },
      { status: 422 },
    );
  }

  try {
    const { emailSent } = await processReservationPayload(parsed.data);
    return NextResponse.json({
      ok: true as const,
      message: emailSent
        ? "Thanks — we received your request. Our team has been notified and will follow up shortly."
        : "Thanks — we received your request. We'll follow up shortly.",
      emailSent,
    });
  } catch (e) {
    console.error("[api/reserve]", e);
    return NextResponse.json(
      { ok: false as const, error: "Something went wrong. Please try again or call us." },
      { status: 500 },
    );
  }
}

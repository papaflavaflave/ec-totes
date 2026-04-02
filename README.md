# EC Totes — moving tote rental MVP

A one-page marketing site with a reservation form. Stack: **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Zod**, **react-hook-form**, optional **Resend** email.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where to edit content

| What | File |
|------|------|
| Headlines, FAQ, service area, brand name | [`content/site.ts`](content/site.ts) |
| Pricing grid and footnote | [`content/site.ts`](content/site.ts) (`pricingPackages`, `pricingFootnote`) |
| Accent color | [`app/globals.css`](app/globals.css) (`--accent`, `--accent-soft`) |
| Form fields + validation rules | [`lib/form-schema.ts`](lib/form-schema.ts) |
| After-submit behavior (email, future CRM/Sheets) | [`lib/reservation-pipeline.ts`](lib/reservation-pipeline.ts) |
| HTTP handler for `POST /api/reserve` | [`app/api/reserve/route.ts`](app/api/reserve/route.ts) |

## Email (optional for launch)

1. Copy [`.env.local.example`](.env.local.example) to `.env.local`.
2. Create a [Resend](https://resend.com) account, add API key, and set `RESEND_FROM` / `RESEND_TO`.
3. For production, verify your sending domain in Resend so you can use `noreply@yourdomain.com`.

If env vars are missing, submissions still return success so you can demo the UI; the server logs the payload and skips sending mail.

## Scripts

- `npm run dev` — local development (Turbopack).
- `npm run build` — production build.
- `npm run start` — run production build locally.
- `npm run lint` — ESLint.

## Deployment (recommended: Vercel)

Fastest path for this stack:

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Add environment variables (`RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO`) in the project settings.
4. Deploy — Vercel runs `next build` automatically.

Alternatives: any host that runs Node (Railway, Render, Fly.io) with `next start`, or Docker.

## Next steps (integrations)

- **Stripe (deposits or full payment)**  
  Add a server route (e.g. `app/api/checkout/route.ts`) that creates a [Stripe Checkout Session](https://stripe.com/docs/checkout) from validated reservation data. Call it from `processReservationPayload` after email, or replace “submit” with a two-step flow: save lead → redirect to Checkout. Use a webhook to mark paid.

- **Google Sheets**  
  In `processReservationPayload`, use the [Google Sheets API](https://developers.google.com/sheets/api) with a service account JSON key stored in env; append one row per submission.

- **Airtable / Supabase**  
  `fetch` POST from `processReservationPayload` to Airtable’s REST API or insert a row with `@supabase/supabase-js`.

- **Lead tracking**  
  Add hidden fields or query params (`?utm_source=`) and pass them through the form into the pipeline for analytics/CRM.

- **Customer confirmation email**  
  Second `resend.emails.send` in `sendReservationEmail` to `data.email` with a plain summary.

## Project structure

```
app/
  api/reserve/route.ts   # POST handler
  globals.css
  layout.tsx
  page.tsx
components/
  reservation-form.tsx   # Client form (validation + fetch)
  sections/              # Hero, pricing, FAQ, etc.
content/
  site.ts                # Marketing copy & pricing placeholders
lib/
  form-schema.ts
  reservation-pipeline.ts
```

## License

Private / your business — adjust as needed.

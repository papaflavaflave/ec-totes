import { pricingFootnote, pricingPackages, pricingRentalWindow } from "@/content/site";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-y border-zinc-200 bg-zinc-100 px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight text-zinc-900">
          Simple packages
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600">
          Pick the tier that fits your home—starting rates; we&apos;ll confirm details when you reserve.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <article
              key={pkg.id}
              className={`flex flex-col rounded-2xl border-2 bg-white p-6 shadow-sm ${
                pkg.highlighted ? "border-[var(--pricing-yellow)] shadow-md" : "border-zinc-200"
              }`}
            >
              {pkg.highlighted ? (
                <p className="mb-3 inline-flex w-fit rounded-full bg-[var(--pricing-yellow)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-zinc-900">
                  Most Popular
                </p>
              ) : null}
              <h3 className="text-xl font-bold text-zinc-900">{pkg.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-bold text-zinc-900">{pkg.price}</span>
              </p>
              <p className="mt-3 text-sm font-medium text-zinc-700">
                Includes: <span className="text-zinc-900">{pkg.includes}</span>
              </p>
              <a
                href="#reserve"
                className={`mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 text-center text-sm font-bold transition ${
                  pkg.highlighted
                    ? "bg-[var(--pricing-yellow)] text-zinc-900 hover:bg-[var(--pricing-yellow-hover)]"
                    : "border-2 border-zinc-900 bg-white text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                View Details
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-zinc-700">{pricingRentalWindow}</p>
        <p className="mt-5 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-center text-sm text-zinc-700">
          {pricingFootnote.line}
        </p>
      </div>
    </section>
  );
}

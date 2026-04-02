import { hero, nav } from "@/content/site";

export function Hero() {
  return (
    <section className="border-b border-zinc-100 bg-gradient-to-b from-zinc-50 to-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--accent)]">
          Local · Reusable · Delivered
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          {hero.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">{hero.subheadline}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#reserve"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[var(--accent)] px-6 text-base font-semibold text-white shadow-md transition hover:opacity-95"
          >
            {nav.primaryCta}
          </a>
          <a
            href="#reserve"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 text-base font-semibold text-zinc-800 transition hover:bg-zinc-50"
          >
            {nav.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

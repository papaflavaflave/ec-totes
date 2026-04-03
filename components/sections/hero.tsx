import Image from "next/image";
import { hero, nav } from "@/content/site";

export function Hero() {
  return (
    <section className="scroll-mt-24 border-b border-zinc-100 bg-gradient-to-b from-zinc-50 to-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--accent)]">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">{hero.subheadline}</p>
          <ul className="mt-6 max-w-xl space-y-2.5 text-zinc-700">
            {hero.bullets.map((line) => (
              <li key={line} className="flex gap-2.5 text-base leading-snug">
                <span className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden>
                  ✓
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#reserve"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[var(--accent)] px-6 text-base font-semibold text-white shadow-md transition hover:opacity-95"
            >
              {nav.primaryCta}
            </a>
            <a
              href={hero.secondaryHref}
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 text-base font-semibold text-zinc-800 transition hover:bg-zinc-50"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl shrink-0 sm:max-w-2xl lg:mx-0 lg:ml-auto lg:w-full lg:max-w-2xl lg:justify-self-end xl:max-w-3xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/hero-product-photo.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 42rem, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

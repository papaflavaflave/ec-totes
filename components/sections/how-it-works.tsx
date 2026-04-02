import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="how-heading">
      <div className="mx-auto max-w-5xl">
        <h2 id="how-heading" className="text-3xl font-bold tracking-tight text-zinc-900">
          {howItWorks.title}
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600">{howItWorks.subtitle}</p>
        <ol className="mt-12 grid gap-10 sm:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="mb-2 block text-3xl leading-none" aria-hidden>
                {step.emoji}
              </span>
              <span
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent)]"
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

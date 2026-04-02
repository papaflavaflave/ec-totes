import { whyTotes } from "@/content/site";

export function WhyTotes() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="why-heading">
      <div className="mx-auto max-w-5xl">
        <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-zinc-900">
          {whyTotes.title}
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600">{whyTotes.subtitle}</p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-3">
          {whyTotes.points.map((p) => (
            <li key={p.title}>
              <h3 className="text-lg font-semibold text-zinc-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

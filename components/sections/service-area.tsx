import { serviceArea } from "@/content/site";

export function ServiceArea() {
  return (
    <section
      className="border-t border-zinc-100 bg-white px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="area-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id="area-heading" className="text-3xl font-bold tracking-tight text-zinc-900">
          {serviceArea.title}
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600">{serviceArea.intro}</p>
        {/**
         * EDIT SERVICE AREA LIST in content/site.ts → serviceArea.regions
         */}
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {serviceArea.regions.map((r) => (
            <li
              key={r}
              className="rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm font-medium text-zinc-800"
            >
              {r}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-zinc-600">{serviceArea.note}</p>
      </div>
    </section>
  );
}

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
        <p className="mt-3 max-w-2xl text-zinc-600">{serviceArea.body}</p>
      </div>
    </section>
  );
}

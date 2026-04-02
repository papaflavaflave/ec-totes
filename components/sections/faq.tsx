import { faq } from "@/content/site";

export function FAQ() {
  return (
    <section className="border-t border-zinc-100 bg-zinc-50/50 px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-zinc-900">
          {faq.title}
        </h2>
        <div className="mt-8 space-y-3">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm open:pb-4"
            >
              <summary className="cursor-pointer list-none font-medium text-zinc-900 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-2">
                  {item.q}
                  <span className="text-zinc-400 transition group-open:rotate-180" aria-hidden>
                    ▼
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

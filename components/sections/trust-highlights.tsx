import { trustHighlights } from "@/content/site";

export function TrustHighlights() {
  return (
    <section
      className="border-b border-zinc-100 bg-white px-4 py-10 sm:px-6 sm:py-12"
      aria-label="Why choose us"
    >
      <div className="mx-auto max-w-5xl">
        <ul className="grid gap-6 sm:grid-cols-3">
          {trustHighlights.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center rounded-xl bg-white px-5 py-8 text-center shadow-md ring-1 ring-zinc-100"
            >
              <span className="text-4xl leading-none" aria-hidden>
                {item.emoji}
              </span>
              <h3 className="mt-4 text-lg font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{item.subtext}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

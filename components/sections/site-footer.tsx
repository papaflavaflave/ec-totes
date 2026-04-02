import { brand, footer, nav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-900 px-4 py-12 text-zinc-300 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">{brand.name}</p>
          <p className="mt-1 text-sm">{brand.tagline}</p>
          <p className="mt-3 text-sm text-zinc-400">{footer.note}</p>
          <p className="mt-2 text-sm text-zinc-500">{footer.contactLine}</p>
        </div>
        <a
          href="#reserve"
          className="inline-flex min-h-[44px] items-center justify-center self-start rounded-xl bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 sm:self-center"
        >
          {nav.primaryCta}
        </a>
      </div>
    </footer>
  );
}

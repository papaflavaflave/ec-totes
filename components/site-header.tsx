import Link from "next/link";
import { brand, nav } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
          {brand.name}
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3" aria-label="Primary">
          <a
            href="#reserve"
            className="hidden min-h-[44px] items-center rounded-lg border border-zinc-300 px-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 sm:inline-flex"
          >
            {nav.secondaryCta}
          </a>
          <a
            href="#reserve"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-[var(--accent)] px-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            {nav.primaryCta}
          </a>
        </nav>
      </div>
    </header>
  );
}

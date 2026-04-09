/**
 * EDIT LAUNCH COPY HERE
 * ---------------------
 * This file holds marketing copy, pricing placeholders, service area, and brand strings.
 * Update `pricingPackages` and `pricingFootnote` when you finalize rates.
 */

export const brand = {
  /** Short name shown in nav and footer */
  name: "EC Totes",
  /** One-line tagline for metadata / footer */
  tagline: "Plastic moving bins delivered. Pickup when you're settled.",
};

export const nav = {
  primaryCta: "Reserve Your Bins",
  secondaryCta: "Check availability",
};

export const hero = {
  eyebrow: "🏠 Local · ♻️ Reusable · 🚚 Delivered",
  headline: "Move with sturdy bins—not a mountain of cardboard.",
  subheadline:
    "We drop off stackable plastic totes for your move and pick them up when you're done. Simple pricing. Local service. Less waste, less tape, less stress.",
  bullets: [
    "Heavy-duty stackable totes with secure lids—no tape marathon.",
    "We deliver clean bins and pick them up when you're unpacked.",
    "Local Eau Claire service with transparent package pricing.",
  ] as const,
  secondaryCta: "See Pricing",
  secondaryHref: "#pricing",
};

/** Three-up trust cards (emoji + title + line) — edit copy anytime */
export const trustHighlights = [
  {
    emoji: "🏠",
    title: "Eau Claire family business",
    subtext: "Serving our community since 2026",
  },
  {
    emoji: "♻️",
    title: "100% eco-friendly",
    subtext: "Sustainable moving solutions",
  },
  {
    emoji: "⭐",
    title: "Professional service",
    subtext: "Reliable & on-time delivery",
  },
] as const;

export const howItWorks = {
  title: "How it works",
  subtitle: "Three steps from quote to empty nest.",
  steps: [
    {
      emoji: "📋",
      title: "Tell us about your move",
      description:
        "Share dates, addresses, and how many bins you need. We'll confirm availability and pricing.",
    },
    {
      emoji: "🚚",
      title: "We deliver to your door",
      description:
        "Totes arrive clean and ready to pack—stackable, sturdy, and easy to carry. A dolly is included with every package.",
    },
    {
      emoji: "📦",
      title: "Move, then we pick up",
      description:
        "Unpack at your pace. When you're done, we collect the bins so you're not stuck with boxes to break down.",
    },
  ],
};

/**
 * EDIT PRICING HERE — packages, prices, and “includes” lines (totes + dolly per tier).
 * `highlighted` = yellow “Most Popular” styling in the pricing grid (matches your reference layout).
 */
export type RentalPeriod = "2-week" | "4-week";

export const rentalPeriodOptions = [
  { value: "2-week" as const, label: "2-Week Rental" },
  { value: "4-week" as const, label: "4-Week Rental" },
] as const;

export const pricingPackages = [
  {
    id: "studio",
    name: "Studio",
    totes: 20,
    price2Week: "$99",
    price4Week: "$149",
    includes: "20 totes + dolly",
    lateReturn: "+$25/week",
    highlighted: true,
  },
  {
    id: "1-bed",
    name: "1-Bedroom",
    totes: 30,
    price2Week: "$119",
    price4Week: "$179",
    includes: "30 totes + dolly",
    lateReturn: "+$25/week",
    highlighted: false,
  },
  {
    id: "2-bed",
    name: "2-Bedroom",
    totes: 40,
    price2Week: "$149",
    price4Week: "$224",
    includes: "40 totes + dolly",
    lateReturn: "+$30/week",
    highlighted: false,
  },
  {
    id: "3-bed",
    name: "3-Bedroom",
    totes: 50,
    price2Week: "$189",
    price4Week: "$284",
    includes: "50 totes + dolly",
    lateReturn: "+$30/week",
    highlighted: true,
  },
  {
    id: "4-bed",
    name: "4-Bedroom",
    totes: 75,
    price2Week: "$249",
    price4Week: "$374",
    includes: "75 totes + dolly",
    lateReturn: "+$35/week",
    highlighted: false,
  },
  {
    id: "5-bed",
    name: "5-Bedroom",
    totes: 100,
    price2Week: "$339",
    price4Week: "$509",
    includes: "100 totes + dolly",
    lateReturn: "+$35/week",
    highlighted: false,
  },
] as const;

export type PricingPackage = (typeof pricingPackages)[number];

export function priceForPeriod(pkg: PricingPackage, period: RentalPeriod): string {
  return period === "2-week" ? pkg.price2Week : pkg.price4Week;
}

export function rentalPriceSuffix(period: RentalPeriod): string {
  return period === "2-week" ? "(2-week)" : "(4-week)";
}

/** EDIT — directly under the package grid (rental terms) */
export const pricingRentalWindow =
  "All packages include your choice of a 2-week or 4-week rental.";

/** EDIT — note under the grid (dolly is bundled in every tier above) */
export const pricingFootnote = {
  line:
    "Every package includes a dolly. Delivery and pickup are included in our service area—we'll confirm timing when you reserve. Totes are included for the full rental period. Late returns are charged per additional 7-day period.",
};

export const whyTotes = {
  title: "Why plastic totes beat cardboard",
  subtitle: "Built for real moves—not one-trip boxes.",
  points: [
    {
      emoji: "💪",
      title: "Stronger and stackable",
      body: "Rigid walls protect dishes and books. Stack safely without crushing what's underneath.",
    },
    {
      emoji: "✨",
      title: "No tape spiral",
      body: "Lidded bins snap shut. Spend time packing, not building and sealing boxes.",
    },
    {
      emoji: "🌧️",
      title: "Reusable and cleaner",
      body: "No soggy cardboard on rainy days—and no pile of boxes at the curb when you're done.",
    },
  ],
};

/**
 * EDIT SERVICE AREA — copy shown on the landing page.
 */
export const serviceArea = {
  title: "Where we deliver",
  body: "We deliver within a ~30-minute radius of Eau Claire. Not sure if you're in range? Submit a reservation and we'll confirm.",
};

export const faq = {
  title: "Common questions",
  items: [
    {
      q: "How long can I keep the bins?",
      a: "Choose a 2-week rental or a 4-week rental at 1.5× the 2-week rate—enough time for most pack-and-move timelines. Need more time? Ask in your notes and we'll work with you.",
    },
    {
      q: "What if my move date changes?",
      a: "Life happens. Reply to your confirmation email or call us as soon as you know—we'll reschedule delivery or pickup when we can.",
    },
    {
      q: "Do you offer dollies?",
      a: "Yes—a dolly is included with every pricing tier so you can roll stacks safely through hallways and tight turns.",
    },
    {
      q: "Are the bins clean?",
      a: "We inspect and sanitize bins between rentals so you get a fresh set for your home.",
    },
    {
      q: "Can my realtor refer me?",
      a: "Absolutely. Enter your realtor’s name in the optional field on the form so we can thank them and keep your booking organized.",
    },
    {
      q: "How do I pay?",
      a: "For now, we confirm details by email and send payment instructions. Online payments (card) are coming soon.",
    },
  ],
};

export const reservation = {
  title: "Reserve your bins",
  subtitle:
    "Tell us about your move. We'll follow up to confirm availability, pricing, and delivery windows—usually within one business day.",
};

export const footer = {
  note: "Local moving tote rental. Questions? Use the form above—we read every message.",
  /** EDIT — add your public email or phone when ready */
  contactLine: "",
};

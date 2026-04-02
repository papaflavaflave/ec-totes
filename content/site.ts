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
  headline: "Move with sturdy bins—not a mountain of cardboard.",
  subheadline:
    "We drop off stackable plastic totes for your move and pick them up when you're done. Simple pricing. Local service. Less waste, less tape, less stress.",
};

export const howItWorks = {
  title: "How it works",
  subtitle: "Three steps from quote to empty nest.",
  steps: [
    {
      title: "Tell us about your move",
      description:
        "Share dates, addresses, and how many bins you need. We'll confirm availability and pricing.",
    },
    {
      title: "We deliver to your door",
      description:
        "Totes arrive clean and ready to pack—stackable, sturdy, and easy to carry. A dolly is included with every package.",
    },
    {
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
export const pricingPackages = [
  {
    id: "studio",
    name: "Studio",
    price: "$99",
    includes: "20 totes + dolly",
    highlighted: true,
  },
  {
    id: "1-bed",
    name: "1-Bedroom",
    price: "$119",
    includes: "30 totes + dolly",
    highlighted: false,
  },
  {
    id: "2-bed",
    name: "2-Bedroom",
    price: "$149",
    includes: "40 totes + dolly",
    highlighted: false,
  },
  {
    id: "3-bed",
    name: "3-Bedroom",
    price: "$189",
    includes: "55 totes + dolly",
    highlighted: true,
  },
  {
    id: "4-bed",
    name: "4-Bedroom",
    price: "$249",
    includes: "75 totes + dolly",
    highlighted: false,
  },
  {
    id: "5-bed",
    name: "5-Bedroom",
    price: "$339",
    includes: "100 totes + dolly",
    highlighted: false,
  },
] as const;

/** EDIT — note under the grid (dolly is bundled in every tier above) */
export const pricingFootnote = {
  line:
    "Every package includes a dolly. Delivery and pickup are included in our service area—we’ll confirm timing when you reserve.",
};

export const whyTotes = {
  title: "Why plastic totes beat cardboard",
  subtitle: "Built for real moves—not one-trip boxes.",
  points: [
    {
      title: "Stronger and stackable",
      body: "Rigid walls protect dishes and books. Stack safely without crushing what's underneath.",
    },
    {
      title: "No tape spiral",
      body: "Lidded bins snap shut. Spend time packing, not building and sealing boxes.",
    },
    {
      title: "Reusable and cleaner",
      body: "No soggy cardboard on rainy days—and no pile of boxes at the curb when you're done.",
    },
  ],
};

/**
 * EDIT SERVICE AREA — cities / regions you serve (display only for MVP).
 */
export const serviceArea = {
  title: "Where we deliver",
  intro:
    "We're a local team focused on moves in our community. Start with a reservation and we'll confirm your addresses.",
  /** List the areas you actually cover; customers still submit addresses on the form for verification */
  regions: ["Downtown & nearby neighborhoods", "North County corridor", "Eastside communities"],
  note: "Not sure if you're in range? Submit the form—we'll reply with availability.",
};

export const faq = {
  title: "Common questions",
  items: [
    {
      q: "How long can I keep the bins?",
      a: "Our standard rental window is two weeks—enough for most pack-and-move timelines. Need more time? Ask in your notes and we'll work with you.",
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
      a: "Absolutely. Select “yes” for realtor referral on the form so we can thank them and keep your booking organized.",
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
  contactLine: "Prefer email? Add your address here once you have one.",
};

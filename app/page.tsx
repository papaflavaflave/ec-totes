import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { TrustHighlights } from "@/components/sections/trust-highlights";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { WhyTotes } from "@/components/sections/why-totes";
import { ServiceArea } from "@/components/sections/service-area";
import { FAQ } from "@/components/sections/faq";
import { ReservationSection } from "@/components/sections/reservation-section";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TrustHighlights />
        <HowItWorks />
        <Pricing />
        <WhyTotes />
        <ServiceArea />
        <FAQ />
        <ReservationSection />
      </main>
      <SiteFooter />
    </>
  );
}

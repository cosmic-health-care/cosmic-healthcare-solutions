import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { PartnerNetwork } from "@/components/sections/partner-network";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <PartnerNetwork />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}

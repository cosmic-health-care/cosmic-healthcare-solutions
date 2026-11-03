import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ProductLines } from "@/components/sections/product-lines";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProductLines />
      <HowItWorks />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}

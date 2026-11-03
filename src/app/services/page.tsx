import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hospital equipment supply, surgical supplies, pharma products, asset management, AMC/CMC contracts, calibration, and rental services from Cosmic HealthCare Solutions.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your facility needs, one partner"
        description="Supply, service, and rental, covering the full lifecycle of your hospital equipment."
      />

      <section className="border-b border-border bg-surface pb-16 md:pb-24">
        <div className="page-container pt-4">
          <ServicesGrid linkLabel="View details" />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

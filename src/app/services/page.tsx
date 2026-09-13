import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/services-grid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hospital equipment supply, surgical supplies, pharma products, asset management, AMC/CMC contracts, calibration, and rental services from Cosmic HealthCare Solutions.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Our Services
        </span>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
          Everything your facility needs, one partner
        </h1>
        <p className="mt-4 text-muted-foreground">
          Supply, service, and rental — covering the full lifecycle of your
          hospital equipment.
        </p>
      </div>

      <ServicesGrid linkLabel="View details" />
    </section>
  );
}

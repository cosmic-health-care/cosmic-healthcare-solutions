import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";

export function ServicesOverview() {
  return (
    <section id="services" className="page-section scroll-mt-24">
      <div className="page-container">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Full-lifecycle support for your equipment"
            description="From first purchase to daily upkeep, we cover every stage of your hospital equipment's life, backed by biomedical engineering expertise."
          />
        </Reveal>
        <ServicesGrid />
      </div>
    </section>
  );
}

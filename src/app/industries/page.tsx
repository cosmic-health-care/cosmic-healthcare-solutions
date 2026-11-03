import type { Metadata } from "next";
import { Building2, Cross, Stethoscope, TestTube2 } from "lucide-react";
import { CtaBanner } from "@/components/sections/cta-banner";
import { IconTile } from "@/components/shared/icon-tile";
import { PageHero } from "@/components/shared/page-hero";
import { RevealItem, StaggerGroup } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Cosmic HealthCare Solutions serves hospitals, nursing homes, diagnostic centers, and clinics with equipment supply and maintenance services.",
  alternates: { canonical: "/industries" },
};

const industries = [
  {
    icon: Building2,
    title: "Hospitals",
    description:
      "Full equipment supply, AMC/CMC contracts, and calibration support aligned with NABH/JCI accreditation requirements.",
  },
  {
    icon: Cross,
    title: "Nursing Homes",
    description:
      "Right-sized equipment packages, furniture, and maintenance plans suited to nursing home budgets and patient loads.",
  },
  {
    icon: TestTube2,
    title: "Diagnostic Centers",
    description:
      "Calibration and preventive maintenance for equipment where measurement accuracy directly affects diagnosis quality.",
  },
  {
    icon: Stethoscope,
    title: "Clinics & Specialty Practices",
    description:
      "Flexible supply and rental options for clinics that need equipment without a large upfront capital outlay.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Built for institutional healthcare buyers"
        description="Whichever type of facility you run, we tailor equipment supply and service plans to your scale and compliance needs."
      />

      <section className="page-section border-b border-border bg-surface">
        <div className="page-container">
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <RevealItem
                key={industry.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <IconTile icon={industry.icon} />
                <h2 className="mt-4 text-xl font-semibold">{industry.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </RevealItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner
        title="Not sure which services fit your facility?"
        description="Tell us about your facility and requirements, and we'll suggest a plan."
        actionLabel="Talk to Us"
      />
    </>
  );
}

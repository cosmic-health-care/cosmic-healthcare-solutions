import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  {
    title: "Share your requirement",
    description: "Tell us the equipment, quantity and timeline. We match it to your specification.",
  },
  {
    title: "We source and quote",
    description: "We evaluate vendors, negotiate pricing and send you one consolidated quote.",
  },
  {
    title: "Install and commission",
    description: "Delivery is coordinated and equipment is installed, commissioned and handed over.",
  },
  {
    title: "Keep it running",
    description: "AMC/CMC, calibration and asset records keep equipment in service and audit-ready.",
  },
];

export function HowItWorks() {
  return (
    <section className="page-section">
      <div className="page-container">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Four steps, one team throughout"
            centered
          />
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <RevealItem key={step.title} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-heading text-4xl font-semibold text-brand">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

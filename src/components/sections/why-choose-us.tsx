import { Award, HeartHandshake, Network, Timer, X } from "lucide-react";
import { CheckList } from "@/components/shared/check-list";
import { IconTile } from "@/components/shared/icon-tile";
import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { PartnerNetwork } from "@/components/sections/partner-network";

const withoutPartner = [
  "A different vendor for equipment, consumables and service",
  "Warranty and service history spread across files",
  "Calibration due dates tracked by hand",
];

const withPartner = [
  "One contact from sourcing to commissioning",
  "Audit-ready records for NABH and JCI",
  "Scheduled calibration and preventive visits",
];

const reasons = [
  {
    icon: Award,
    title: "Biomedical engineering expertise",
    description:
      "Led by a qualified Bio Medical Engineer, so decisions rest on technical understanding, not just sales.",
  },
  {
    icon: Network,
    title: "A vetted partner network",
    description:
      "Quality-assured manufacturers and distributors give you breadth without managing multiple vendors.",
  },
  {
    icon: Timer,
    title: "Uptime you can plan around",
    description:
      "AMC/CMC contracts and scheduled calibration keep critical equipment audit-ready.",
  },
  {
    icon: HeartHandshake,
    title: "One team, full lifecycle",
    description:
      "Sales, service and rental sit with the same team, so support continues after delivery.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="page-section theme-deep bg-background">
      <div className="page-container">
        <Reveal>
          <SectionHeading
            eyebrow="Why Cosmic"
            title="Built for hospitals that can't afford downtime"
            centered
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-inset p-6">
            <h3 className="text-lg font-semibold text-muted-foreground">Managing it yourself</h3>
            <ul className="mt-4 space-y-2.5">
              {withoutPartner.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <X aria-hidden className="mt-0.5 size-4 shrink-0 text-subtle-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-2xl border border-ring bg-card p-6">
            <h3 className="text-lg font-semibold">With Cosmic HealthCare</h3>
            <CheckList items={withPartner} className="mt-4" />
          </Reveal>
        </div>

        <StaggerGroup className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <RevealItem key={reason.title} className="rounded-2xl border border-border bg-card p-6">
              <IconTile icon={reason.icon} />
              <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </RevealItem>
          ))}
        </StaggerGroup>

        <PartnerNetwork />
      </div>
    </section>
  );
}

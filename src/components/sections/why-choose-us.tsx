import { Award, HeartHandshake, Network, Timer } from "lucide-react";
import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";

const reasons = [
  {
    icon: Award,
    title: "Biomedical engineering expertise",
    description:
      "Led by a qualified Bio Medical Engineer, so procurement and maintenance decisions are grounded in real technical understanding, not just sales.",
  },
  {
    icon: Network,
    title: "A vetted partner network",
    description:
      "We source equipment, spares, and furniture through a network of quality-assured manufacturers and distributors, so you get breadth without managing multiple vendors.",
  },
  {
    icon: Timer,
    title: "Uptime you can plan around",
    description:
      "AMC/CMC contracts and scheduled calibration keep critical equipment audit-ready and minimize unplanned downtime.",
  },
  {
    icon: HeartHandshake,
    title: "One team, full lifecycle",
    description:
      "Sales, service, and rental are handled by the same team — support doesn't end once equipment is delivered.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Why Cosmic HealthCare Solutions
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Built for hospitals that can&apos;t afford downtime
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <RevealItem key={reason.title} className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green-dark">
                <reason.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold">{reason.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </RevealItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

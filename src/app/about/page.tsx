import type { Metadata } from "next";
import {
  Building,
  Building2,
  ClipboardList,
  Cpu,
  Eye,
  FileCheck2,
  Gauge,
  GraduationCap,
  Hammer,
  HeartPulse,
  ShoppingCart,
  Target,
  Wrench,
} from "lucide-react";
import { TeamMemberCard } from "@/components/about/team-member-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Chip } from "@/components/shared/chip";
import { IconTile } from "@/components/shared/icon-tile";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cosmic HealthCare Solutions is a Kalaburagi-based healthcare technology and medical equipment solutions company founded by Basavaraj Angadi, Biomedical Engineer, serving hospitals across Kalyana Karnataka since 2019.",
  alternates: { canonical: "/about" },
};

const expertise = [
  { icon: Building2, title: "Hospital Medical Equipment Projects" },
  { icon: Cpu, title: "Biomedical Engineering Department Support" },
  { icon: ShoppingCart, title: "Medical Equipment Procurement & Consultancy" },
  { icon: Wrench, title: "Installation & Commissioning" },
  { icon: Hammer, title: "Preventive & Breakdown Maintenance" },
  { icon: FileCheck2, title: "AMC / CMC Management" },
  { icon: Gauge, title: "Calibration & Equipment Management" },
  { icon: ClipboardList, title: "Biomedical Documentation & Asset Tracking" },
  { icon: GraduationCap, title: "User Training & Technical Support" },
  { icon: Building, title: "New Hospital Setup & Equipment Planning" },
  { icon: HeartPulse, title: "ICU, OT, NICU & General Hospital Equipment Solutions" },
];

const equipmentCovered = [
  "Anesthesia Workstations",
  "ICU Ventilators",
  "Cardiac Monitors",
  "ECG Machines",
  "Defibrillators",
  "Syringe & Infusion Pumps",
  "CPAP / BiPAP",
  "Oxygen Concentrators",
  "Suction Units",
  "Phototherapy Units",
  "Baby Warmers",
  "OT Tables",
  "OT Lights",
  "Cautery Machines",
  "X-Ray & C-Arm Systems",
];

const visionMission = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a trusted healthcare technology partner for hospitals by providing reliable medical equipment, professional biomedical engineering services, and complete hospital project solutions.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To improve healthcare infrastructure through quality equipment, technical expertise, timely service, transparent consultancy, and long-term customer support.",
  },
];

export default function AboutPage() {
  const founder = teamMembers.find((member) => member.slug === "basavaraj-angadi");

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Cosmic HealthCare Solutions"
        description="A healthcare technology and medical equipment solutions company based in Kalaburagi, Karnataka, founded and led by Mr. Basavaraj Angadi, Biomedical Engineer."
      >
        <p className="mt-3 max-w-2xl leading-relaxed text-subtle-foreground">
          Since 2019, delivering medical equipment consultancy, installation, calibration, and
          technical service solutions to hospitals across Kalyana Karnataka, with 12+ years of
          biomedical engineering expertise and support for NQAS, KAYAKALPA, NABH, and JCI
          compliance.
        </p>
      </PageHero>

      <section className="page-section border-b border-border bg-surface">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Expertise"
              title="End-to-end support for hospitals and healthcare institutions"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <RevealItem
                key={item.title}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
              >
                <IconTile icon={item.icon} className="size-10" />
                <span className="text-sm font-medium">{item.title}</span>
              </RevealItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-4 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">
              Technical expertise across critical hospital equipment
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {equipmentCovered.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <Reveal>
            <SectionHeading eyebrow="Meet the Team" title="The people behind Cosmic" />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.slug} member={member} delay={index * 0.08} />
            ))}
          </div>

          {founder?.quote && (
            <Reveal className="mt-4 rounded-2xl border border-border bg-card px-6 py-10 text-center sm:px-12">
              <blockquote className="mx-auto max-w-2xl font-heading text-2xl font-semibold text-balance">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground">
                {founder.name}, {founder.role}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="page-section border-y border-border bg-surface">
        <div className="page-container">
          <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {visionMission.map((item) => (
              <RevealItem key={item.title} className="rounded-2xl border border-border bg-card p-7">
                <IconTile icon={item.icon} />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
              </RevealItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner
        title="Want to know more about how we work?"
        description="Reach out and we'll walk you through our services in detail."
      />
    </>
  );
}

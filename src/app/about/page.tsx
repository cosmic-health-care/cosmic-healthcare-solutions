import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
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
  Quote,
  ShoppingCart,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { teamMembers } from "@/data/team";
import { TeamMemberCard } from "@/components/about/team-member-card";
import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";

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
      <section className="bg-brand-gradient text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90">
            About Us
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Cosmic HealthCare Solutions</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            A healthcare technology and medical equipment solutions company based in Kalaburagi,
            Karnataka, founded and led by Mr. Basavaraj Angadi, Biomedical Engineer.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-[15px]">
            Since 2019, delivering medical equipment consultancy, installation, calibration, and
            technical service solutions to hospitals across Kalyana Karnataka — with 12+ years of
            biomedical engineering expertise and support for NQAS, KAYAKALPA, NABH, and JCI
            compliance.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Our Expertise
            </span>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              End-to-end support for hospitals and healthcare institutions
            </h2>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <RevealItem
                key={item.title}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </span>
                <span className="text-sm font-medium">{item.title}</span>
              </RevealItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-heading text-base font-semibold">
              Technical expertise across critical hospital equipment
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {equipmentCovered.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Meet the Team
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">The people behind Cosmic</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.slug} member={member} delay={index * 0.08} />
          ))}
        </div>

        {founder?.quote && (
          <Reveal className="relative mt-10 overflow-hidden rounded-2xl bg-brand-gradient px-6 py-10 text-center text-white sm:px-12">
            <Quote className="mx-auto size-8 text-white/70" />
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium sm:text-xl">
              &ldquo;{founder.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm text-white/80">
              — {founder.name}, {founder.role}
            </p>
          </Reveal>
        )}
      </section>

      <section className="border-y border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {visionMission.map((item) => (
              <RevealItem key={item.title} className="rounded-2xl border border-border bg-card p-7">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green-dark">
                  <item.icon className="size-6" />
                </span>
                <h3 className="mt-4 font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </RevealItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-6 flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-muted-foreground">
            <Sparkles className="size-4 shrink-0 text-primary" />
            Cosmic HealthCare Solutions — Your Trusted Partner in Hospital Medical Equipment &amp;
            Biomedical Engineering Solutions.
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-secondary/40 px-6 py-14 text-center sm:px-12">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] [background-size:26px_26px]"
          />
          <div className="relative">
            <h3 className="font-heading text-2xl font-bold sm:text-3xl">
              Want to know more about how we work?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Reach out and we&apos;ll walk you through our services in detail.
            </p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "mt-6")}>
              Contact Us
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

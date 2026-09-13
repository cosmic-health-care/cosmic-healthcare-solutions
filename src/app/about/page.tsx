import type { Metadata } from "next";
import Link from "next/link";
import { Award, ShieldCheck, Target } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cosmic HealthCare Solutions is led by Basavaraj Angadi, a Bio Medical Engineer, providing hospital equipment supply, asset management, and calibration services from Kalaburagi, Karnataka.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "Our mission",
    description:
      "To be the single reliable partner hospitals and clinics turn to for equipment supply and lifecycle support — from first purchase through daily maintenance.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-first approach",
    description:
      "Every recommendation and service we deliver is guided by NABH and JCI accreditation norms, so your facility stays audit-ready.",
  },
  {
    icon: Award,
    title: "Engineering-led, not just sales-led",
    description:
      "Decisions are backed by real biomedical engineering knowledge — the right equipment, correctly maintained, not just the next sale.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-gradient text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90">
            About Us
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            A biomedical engineer&apos;s approach to hospital equipment
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Cosmic HealthCare Solutions was founded to give hospitals and
            clinics a single, technically grounded partner for equipment
            supply, maintenance, and lifecycle management.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold sm:text-3xl">Our story</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Cosmic HealthCare Solutions is a Kalaburagi-based medical
                equipment distribution and services company, founded by{" "}
                <strong className="text-foreground">{siteConfig.founder.name}</strong>,
                a {siteConfig.founder.title.toLowerCase()}. That biomedical
                engineering background shapes how we operate: equipment
                recommendations are grounded in technical fit, not just
                catalog pricing, and our service contracts are built around
                real maintenance and compliance needs.
              </p>
              <p>
                We work with hospitals, nursing homes, diagnostic centers, and
                clinics — supplying hospital equipment, surgical supplies, and
                pharma products, and supporting them afterward with asset
                management, AMC/CMC contracts, calibration services, and
                equipment rental.
              </p>
              <p>
                Rather than manufacturing equipment ourselves, we operate a
                vetted network of manufacturers and distributors across
                anesthesia and OT equipment, surgical consumables, and
                hospital furniture — so your facility gets a wide catalog
                through a single point of contact.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-semibold">
                {siteConfig.founder.name}
              </h3>
              <p className="text-sm text-primary">{siteConfig.founder.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Operational expertise in asset management, calibration
                services, and equipment procurement as per NABH &amp; JCI
                norms.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-secondary/50 p-8">
          <div>
            <h3 className="font-heading text-xl font-semibold">
              Want to know more about how we work?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Reach out and we&apos;ll walk you through our services in detail.
            </p>
          </div>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

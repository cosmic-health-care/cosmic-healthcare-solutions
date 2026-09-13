import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Cross, Stethoscope, TestTube2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

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
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Industries We Serve
        </span>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
          Built for institutional healthcare buyers
        </h1>
        <p className="mt-4 text-muted-foreground">
          Whichever type of facility you run, we tailor equipment supply and
          service plans to your scale and compliance needs.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {industries.map((industry) => (
          <div key={industry.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <industry.icon className="size-5" />
            </div>
            <h2 className="mt-4 font-heading text-lg font-semibold">{industry.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl bg-secondary/50 p-8">
        <div className="flex-1">
          <h3 className="font-heading text-xl font-semibold">
            Not sure which services fit your facility?
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us about your facility and requirements — we&apos;ll suggest
            a plan.
          </p>
        </div>
        <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
          Talk to Us
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

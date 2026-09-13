import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <Reveal
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-14 text-center text-white sm:px-12"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:26px_26px]"
        />
        <div className="relative">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to simplify your equipment procurement?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Talk to us about your hospital&apos;s equipment, supply, or
            maintenance needs — we&apos;ll get back to you with a tailored
            plan.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-white text-brand-blue-dark hover:bg-white/90")}
            >
              Contact Us
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneLinks[0]}`}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/40 bg-transparent text-white hover:bg-white/10"
              )}
            >
              Call {siteConfig.contact.phones[0]}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

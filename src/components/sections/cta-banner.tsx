import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/data/site";

export function CtaBanner({
  title = "Ready to simplify your equipment procurement?",
  description = "Talk to us about your hospital's equipment, supply or maintenance needs, and we'll get back to you with a tailored plan.",
  actionLabel = "Contact Us",
}: {
  title?: string;
  description?: string;
  actionLabel?: string;
}) {
  return (
    <section className="page-section">
      <div className="page-container">
        <Reveal className="theme-deep grid overflow-hidden rounded-3xl bg-background lg:grid-cols-[1.5fr_1fr]">
          <div className="px-6 py-12 sm:px-10 md:py-16">
            <h2 className="text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                {actionLabel}
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneLinks[0]}`}
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                Call {siteConfig.contact.phones[0]}
              </a>
            </div>
          </div>
          <div className="relative hidden bg-tile lg:block">
            <Image
              src="/furniture/sc-3054.png"
              alt="Anesthesia machine"
              fill
              sizes="400px"
              className="product-image p-8"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

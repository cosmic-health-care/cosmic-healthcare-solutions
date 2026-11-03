import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { AssetRegisterMock } from "@/components/sections/asset-register-mock";
import { EquipmentMarquee } from "@/components/sections/equipment-marquee";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { siteConfig, whatsappLink } from "@/data/site";

const trustPoints = ["Biomedical engineer-led", "NABH & JCI norms", "Serving hospitals since 2019"];

const stagger = (seconds: number): CSSProperties => ({ animationDelay: `${seconds}s` });

export function Hero() {
  return (
    <section className="header-underlap relative isolate overflow-hidden border-b border-border bg-card">
      <EquipmentMarquee />

      <div className="page-container grid items-center gap-14 py-14 md:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <div>
          <p
            className="inline-flex animate-rise items-center gap-2 rounded-full border border-border bg-card py-1.5 pr-3.5 pl-3 text-sm text-muted-foreground"
            style={stagger(0)}
          >
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            {siteConfig.tagline} in Kalaburagi
          </p>

          <h1
            className="mt-6 animate-rise text-5xl leading-[1.05] font-semibold text-balance sm:text-6xl"
            style={stagger(0.08)}
          >
            Hospital equipment, supplied and <span className="text-brand">kept running.</span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-muted-foreground"
            style={stagger(0.16)}
          >
            One partner for hospital equipment, surgical consumables and pharma products, with
            asset management, AMC/CMC contracts, calibration and rental under one roof.
          </p>

          <div className="mt-8 flex animate-rise flex-wrap items-center gap-3" style={stagger(0.24)}>
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Get a Quote
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={whatsappLink("Hi, I'd like to enquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              <WhatsAppIcon className="size-4" />
              Chat on WhatsApp
            </a>
          </div>

          <ul
            className="mt-7 flex animate-rise flex-wrap gap-x-5 gap-y-2 text-sm text-subtle-foreground"
            style={stagger(0.32)}
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <Check aria-hidden className="size-4 text-success" strokeWidth={2.5} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise" style={stagger(0.2)}>
          <AssetRegisterMock />
        </div>
      </div>
    </section>
  );
}

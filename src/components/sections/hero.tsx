"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { HeroMarquee } from "@/components/sections/hero-marquee";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stats = [
  { label: "Service model", value: "Sales · Service · Rental" },
  { label: "Compliance focus", value: "NABH & JCI norms" },
  { label: "Based in", value: "Kalaburagi, Karnataka" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 size-96 rounded-full bg-brand-orange/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 sm:pt-28 sm:pb-14 lg:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-3xl">
          <motion.span
            variants={item}
            className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90"
          >
            Medical Equipment Distribution &amp; Services
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Your single point of contact for hospital equipment,
            <span className="text-white/80"> supplies, and lifecycle support.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-white/85">
            Cosmic HealthCare Solutions supplies hospital equipment, surgical
            consumables, and pharma products — and keeps them running with
            asset management, AMC/CMC contracts, calibration, and rental
            services, all under one roof.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-white text-brand-blue-dark hover:bg-white/90")}
            >
              Get a Quote
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={whatsappLink("Hi, I'd like to enquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/40 bg-transparent text-white hover:bg-white/10"
              )}
            >
              <WhatsAppIcon className="size-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-xl grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-wide text-white/60">{stat.label}</dt>
                <dd className="mt-1 font-heading text-base font-semibold">{stat.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      <motion.div variants={item} initial="hidden" animate="show" className="relative pb-16 sm:pb-20">
        <HeroMarquee />
      </motion.div>
    </section>
  );
}

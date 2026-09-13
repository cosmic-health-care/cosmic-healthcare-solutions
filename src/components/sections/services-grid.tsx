"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, type Service } from "@/data/services";
import { RevealItem, StaggerGroup } from "@/components/shared/reveal";

export function ServicesGrid({
  items = services,
  linkLabel = "Learn more",
}: {
  items?: Service[];
  linkLabel?: string;
}) {
  return (
    <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service) => (
        <RevealItem
          key={service.slug}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="h-full"
        >
          <Link
            href={`/services/${service.slug}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100"
            />
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 ease-out group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="size-5" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{service.shortDescription}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
              {linkLabel}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </RevealItem>
      ))}
    </StaggerGroup>
  );
}

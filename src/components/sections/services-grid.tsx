import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "cn";
import { CheckList } from "@/components/shared/check-list";
import { Chip } from "@/components/shared/chip";
import { IconTile } from "@/components/shared/icon-tile";
import { RevealItem, StaggerGroup } from "@/components/shared/reveal";
import { services } from "@/data/services";

// These span two columns and show their deliverables beside the text.
const FEATURED_SLUGS = new Set(["equipment-supply", "calibration"]);

export function ServicesGrid({ linkLabel = "Learn more" }: { linkLabel?: string }) {
  return (
    <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const featured = FEATURED_SLUGS.has(service.slug);
        return (
          <RevealItem
            key={service.slug}
            className={cn(featured ? "sm:col-span-2" : "sm:last:col-span-2 lg:last:col-span-1")}
          >
            <Link
              href={`/services/${service.slug}`}
              className={cn(
                "group grid h-full gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-ring",
                featured && "md:grid-cols-2"
              )}
            >
              <div className="flex flex-col">
                <IconTile icon={service.icon} />
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
                {!featured && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.heroPoints.map((point) => (
                      <Chip key={point}>{point}</Chip>
                    ))}
                  </div>
                )}
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-brand">
                  {linkLabel}
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>

              {featured && (
                <div className="rounded-xl border border-border bg-inset p-4">
                  <p className="font-mono text-xs text-subtle-foreground">What you get</p>
                  <CheckList items={service.deliverables} className="mt-3" />
                </div>
              )}
            </Link>
          </RevealItem>
        );
      })}
    </StaggerGroup>
  );
}

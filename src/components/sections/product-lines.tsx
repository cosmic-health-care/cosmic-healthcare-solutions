import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CategoryCard } from "@/components/products/category-card";
import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { productCategories } from "@/data/products";

const FEATURED_COUNT = 6;

export function ProductLines() {
  return (
    <section className="page-section border-y border-border bg-surface">
      <div className="page-container">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Products"
            title="A wide catalogue, one point of contact"
            description="Pricing and availability depend on your specification and quantity, so every quote is tailored."
          />
          <Link href="/products" className={buttonVariants({ variant: "outline" })}>
            All product categories
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.slice(0, FEATURED_COUNT).map((category) => (
            <RevealItem key={category.slug}>
              <CategoryCard category={category} />
            </RevealItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

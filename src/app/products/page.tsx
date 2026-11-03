import type { Metadata } from "next";
import { CategoryCard } from "@/components/products/category-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/shared/page-hero";
import { RevealItem, StaggerGroup } from "@/components/shared/reveal";
import { productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse hospital equipment, surgical & consumables, hospital furniture, and pharma product categories from Cosmic HealthCare Solutions.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Categories"
        title="A wide catalog, one point of contact"
        description="We don't run a fixed online catalog: pricing and availability depend on your specification and quantity. Browse categories below and send us an enquiry for a tailored quote."
      />

      <section className="page-section border-b border-border bg-surface">
        <div className="page-container">
          <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {productCategories.map((category) => (
              <RevealItem key={category.slug}>
                <CategoryCard category={category} showItems />
              </RevealItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner
        title="Can't find what you're looking for?"
        description="Share your specification and quantity, and we'll respond with options from our partner network."
        actionLabel="Send an Enquiry"
      />
    </>
  );
}

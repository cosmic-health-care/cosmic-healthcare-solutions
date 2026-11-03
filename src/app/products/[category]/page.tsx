import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { cn } from "cn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CatalogGallery } from "@/components/products/catalog-gallery";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CheckList } from "@/components/shared/check-list";
import { Chip } from "@/components/shared/chip";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";
import { productCategories, getProductCategoryBySlug } from "@/data/products";
import { accessoriesGroups } from "@/data/accessories-products";
import { furnitureGroups } from "@/data/furniture-products";
import { mgplGroups } from "@/data/mgpl-products";
import { surgicalGroups } from "@/data/surgical-products";
import type { CatalogGroup } from "@/data/catalog-types";

/**
 * Full product catalogues shown below a category's checklist. Unlike furniture (whose gallery
 * replaces the checklist), these complement the short category overview rather than replace it.
 */
const supplementaryCatalogues: Record<
  string,
  {
    groups: CatalogGroup[];
    heading: string;
    subheading: string;
    searchable?: boolean;
  }
> = {
  "surgical-consumables": {
    groups: surgicalGroups,
    heading: "Featured items",
    subheading: "A selection from this category. Tap any product for full specifications.",
  },
  "accessories-spare-parts": {
    groups: accessoriesGroups,
    heading: "Browse the full catalogue",
    subheading:
      "Search by brand, model or part, or tap a category to browse. Tap any product for full specifications and compatibility.",
    searchable: true,
  },
  mgpl: {
    groups: mgplGroups,
    heading: "Browse the full catalogue",
    subheading:
      "Medical gas pipeline, modular OT and anaesthesia products. Tap any product for full specifications.",
  },
};

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getProductCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/products/${category.slug}` },
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getProductCategoryBySlug(slug);
  if (!category) notFound();

  const hasGroups = !!category.groups?.length;
  const hasPackages = !!category.packages?.length;
  // Furniture's image gallery is a strict superset of its short teaser list, so it replaces
  // the plain checklist below. Other catalogues aren't supersets of their category checklist,
  // so they're shown as an extra section after it.
  const isFurnitureGallery = category.slug === "furniture";
  const supplementaryCatalogue = supplementaryCatalogues[category.slug];

  return (
    <>
      <PageHero
        title={category.title}
        description={category.description}
        breadcrumbs={[{ href: "/products", label: "Products" }]}
      >
        {category.tagline && <p className="mt-3 font-medium text-brand">{category.tagline}</p>}
      </PageHero>

      <section className="page-section border-b border-border bg-surface">
        <div className="page-container space-y-6">
          {category.quickList && category.quickList.length > 0 && (
            <Reveal className="rounded-2xl border border-border bg-card p-6">
              <h2 className="eyebrow">Available on rental</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.quickList.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </Reveal>
          )}

          {isFurnitureGallery ? (
            <CatalogGallery groups={furnitureGroups} />
          ) : hasGroups ? (
            <Reveal className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold">Browse by category</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tap a category to see everything available in it.
              </p>
              <Accordion className="mt-4">
                {category.groups!.map((group, index) => (
                  <AccordionItem key={group.title} value={group.title}>
                    <AccordionTrigger>
                      <span className="flex items-center gap-2.5">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-semibold text-brand">
                          {index + 1}
                        </span>
                        {group.title}
                        <span className="text-xs font-normal text-subtle-foreground">
                          ({group.items.length})
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <CheckList
                        items={group.items}
                        className="grid grid-cols-1 gap-2.5 space-y-0 pl-8 sm:grid-cols-2"
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ) : (
            <Reveal className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold">What&apos;s in this category</h2>
              <CheckList
                items={category.items}
                className="mt-4 grid grid-cols-1 gap-3 space-y-0 sm:grid-cols-2"
              />
            </Reveal>
          )}

          {supplementaryCatalogue && (
            <CatalogGallery
              groups={supplementaryCatalogue.groups}
              heading={supplementaryCatalogue.heading}
              subheading={supplementaryCatalogue.subheading}
              searchable={supplementaryCatalogue.searchable}
            />
          )}

          {hasPackages && (
            <div className="pt-6">
              <Reveal>
                <h2 className="text-2xl font-semibold">Home-care rental packages</h2>
                <p className="mt-1 text-muted-foreground">
                  Common equipment combinations, bundled for convenience and customized to your
                  patient&apos;s exact needs on request.
                </p>
              </Reveal>

              <StaggerGroup className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {category.packages!.map((pkg, index) => {
                  const isFeatured = index === category.packages!.length - 1;
                  return (
                    <RevealItem
                      key={pkg.title}
                      className={cn(
                        "flex h-full flex-col rounded-2xl border bg-card p-6",
                        isFeatured ? "border-ring" : "border-border",
                      )}
                    >
                      {isFeatured && <span className="eyebrow mb-3">Most comprehensive</span>}
                      <h3 className="text-lg font-semibold">{pkg.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{pkg.description}</p>
                      <CheckList items={pkg.items} className="mt-4" />
                    </RevealItem>
                  );
                })}
              </StaggerGroup>
            </div>
          )}

          {category.serviceHighlights && category.serviceHighlights.length > 0 && (
            <Reveal className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-border bg-inset p-6">
              {category.serviceHighlights.map((highlight) => (
                <span key={highlight} className="flex items-center gap-2 text-sm font-medium">
                  <ShieldCheck aria-hidden className="size-4 text-success" />
                  {highlight}
                </span>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      <CtaBanner
        title={`Need a quote for ${category.title.toLowerCase()}?`}
        description="Share your specification and quantity, and we'll respond with options from our partner network."
        actionLabel="Enquire Now"
      />
    </>
  );
}

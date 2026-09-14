import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { productCategories, getProductCategoryBySlug } from "@/data/products";
import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";
import { CatalogGallery } from "@/components/products/catalog-gallery";
import { furnitureGroups } from "@/data/furniture-products";
import { surgicalGroups } from "@/data/surgical-products";

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
  // the plain checklist below. Surgical's gallery is a distinct, separate set of featured
  // items (not a superset of the ortho-implant checklist), so it's shown as an extra section.
  const isFurnitureGallery = category.slug === "furniture";
  const surgicalFeaturedGallery = category.slug === "surgical-consumables" ? surgicalGroups : null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="text-sm text-muted-foreground">
        <Link href="/products" className="hover:text-primary">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{category.title}</span>
      </nav>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <category.icon className="size-6" />
        </span>
        <h1 className="text-3xl font-extrabold sm:text-4xl">{category.title}</h1>
      </div>
      <p className="mt-4 max-w-2xl text-muted-foreground">{category.description}</p>
      {category.tagline && (
        <p className="mt-2 text-sm font-medium text-primary">{category.tagline}</p>
      )}

      {category.quickList && category.quickList.length > 0 && (
        <Reveal className="mt-8 rounded-2xl border border-border bg-secondary/40 p-6">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Available on rental
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {category.quickList.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      )}

      {isFurnitureGallery ? (
        <CatalogGallery groups={furnitureGroups} />
      ) : hasGroups ? (
        <Reveal className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-heading text-base font-semibold">Browse by category</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap a category to see everything available in it.
          </p>
          <Accordion className="mt-4">
            {category.groups!.map((group, index) => (
              <AccordionItem key={group.title} value={group.title}>
                <AccordionTrigger>
                  <span className="flex items-center gap-2.5">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {index + 1}
                    </span>
                    {group.title}
                    <span className="text-xs font-normal text-muted-foreground">
                      ({group.items.length})
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-2.5 pl-8 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green-dark" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      ) : (
        <Reveal className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-heading text-base font-semibold">What&apos;s in this category</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {category.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green-dark" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {surgicalFeaturedGallery && (
        <CatalogGallery
          groups={surgicalFeaturedGallery}
          heading="Featured items"
          subheading="A selection from this category — tap any product for full specifications."
        />
      )}

      {hasPackages && (
        <div className="mt-12">
          <Reveal>
            <h2 className="text-2xl font-bold">Home-care rental packages</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Common equipment combinations, bundled for convenience — customized to your
              patient&apos;s exact needs on request.
            </p>
          </Reveal>

          <StaggerGroup className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {category.packages!.map((pkg, index) => {
              const isFeatured = index === category.packages!.length - 1;
              return (
                <RevealItem
                  key={pkg.title}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={cn(
                    "flex h-full flex-col rounded-2xl border p-6",
                    isFeatured
                      ? "border-primary/40 bg-primary/5 shadow-md shadow-primary/10"
                      : "border-border bg-card"
                  )}
                >
                  {isFeatured && (
                    <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                      <Sparkles className="size-3.5" />
                      Most comprehensive
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-semibold">{pkg.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{pkg.description}</p>
                  <ul className="mt-4 space-y-2">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green-dark" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              );
            })}
          </StaggerGroup>
        </div>
      )}

      {category.serviceHighlights && category.serviceHighlights.length > 0 && (
        <Reveal className="mt-12 rounded-2xl bg-secondary/40 p-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {category.serviceHighlights.map((highlight) => (
              <span key={highlight} className="flex items-center gap-2 text-sm font-medium">
                <ShieldCheck className="size-4 text-brand-green-dark" />
                {highlight}
              </span>
            ))}
          </div>
        </Reveal>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl bg-secondary/50 p-6">
        <div className="flex-1">
          <h3 className="font-heading text-base font-semibold">
            Need a quote for {category.title.toLowerCase()}?
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Share your specification and quantity — we&apos;ll respond with
            options from our partner network.
          </p>
        </div>
        <Link href="/contact" className={cn(buttonVariants())}>
          Enquire Now
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductCard } from "@/components/products/product-card";
import type { CatalogGroup } from "@/data/catalog-types";

function ProductGrid({ products }: { products: CatalogGroup["products"] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.code} product={product} />
      ))}
    </div>
  );
}

export function CatalogGallery({
  groups,
  heading = "Browse the full catalogue",
  subheading = "Tap a category to browse, then tap any product for full specifications.",
}: {
  groups: CatalogGroup[];
  heading?: string;
  subheading?: string;
}) {
  const productCount = groups.reduce((total, group) => total + group.products.length, 0);
  const isSingleGroup = groups.length <= 1;

  return (
    <div className="mt-8 rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-heading text-base font-semibold">{heading}</h2>
        <span className="text-xs text-muted-foreground">
          {productCount} {productCount === 1 ? "product" : "products"}
          {!isSingleGroup && ` across ${groups.length} categories`}
        </span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{subheading}</p>

      {isSingleGroup ? (
        <div className="mt-4">
          <ProductGrid products={groups[0]?.products ?? []} />
        </div>
      ) : (
        <Accordion className="mt-4" defaultValue={[groups[0].title]}>
          {groups.map((group, index) => (
            <AccordionItem key={group.title} value={group.title}>
              <AccordionTrigger>
                <span className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  {group.title}
                  <span className="text-xs font-normal text-muted-foreground">
                    ({group.products.length})
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="py-2 pl-8">
                  <ProductGrid products={group.products} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}

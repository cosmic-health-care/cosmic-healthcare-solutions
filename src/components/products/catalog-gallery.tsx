"use client";

import { useDeferredValue, useId, useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/products/product-card";
import type { CatalogGroup, CatalogProduct } from "@/data/catalog-types";

function ProductGrid({ products }: { products: CatalogGroup["products"] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.code} product={product} />
      ))}
    </div>
  );
}

function normalise(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function searchableText(product: CatalogProduct, groupTitle: string) {
  return normalise(
    [product.code, product.name, product.specs, product.compatibility ?? "", groupTitle].join(" "),
  );
}

export function CatalogGallery({
  groups,
  heading = "Browse the full catalogue",
  subheading = "Tap a category to browse, then tap any product for full specifications.",
  searchable = false,
}: {
  groups: CatalogGroup[];
  heading?: string;
  subheading?: string;
  /** Show a search box that filters products across every group. */
  searchable?: boolean;
}) {
  const productCount = groups.reduce((total, group) => total + group.products.length, 0);
  const isSingleGroup = groups.length <= 1;
  const searchId = useId();
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const searchIndex = useMemo(
    () =>
      searchable
        ? groups.flatMap((group) =>
            group.products.map((product) => ({
              product,
              text: searchableText(product, group.title),
            })),
          )
        : [],
    [groups, searchable],
  );

  const terms = normalise(deferredQuery).split(" ").filter(Boolean);
  const isSearching = terms.length > 0;
  const matches = isSearching
    ? searchIndex
        .filter(({ text }) => terms.every((term) => text.includes(term)))
        .map(({ product }) => product)
    : [];

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl font-semibold">{heading}</h2>
        <span className="font-mono text-xs text-subtle-foreground">
          {productCount} {productCount === 1 ? "product" : "products"}
          {!isSingleGroup && ` across ${groups.length} categories`}
        </span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{subheading}</p>

      {searchable && (
        <div className="relative mt-4">
          <label htmlFor={searchId} className="sr-only">
            Search products
          </label>
          <Search
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by product, brand, model or code — e.g. “Mindray SpO2”"
            autoComplete="off"
            className="pl-10"
          />
        </div>
      )}

      {isSearching ? (
        <div className="mt-4">
          <p className="mb-3 text-sm text-muted-foreground" aria-live="polite">
            {matches.length} {matches.length === 1 ? "match" : "matches"} for “
            {deferredQuery.trim()}”
          </p>
          {matches.length > 0 ? (
            <ProductGrid products={matches} />
          ) : (
            <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
              No products match your search. Try a brand or model name, or contact us — we can
              source parts that aren&apos;t listed here.
            </p>
          )}
        </div>
      ) : isSingleGroup ? (
        <div className="mt-4">
          <ProductGrid products={groups[0]?.products ?? []} />
        </div>
      ) : (
        <Accordion className="mt-4" defaultValue={[groups[0].title]}>
          {groups.map((group, index) => (
            <AccordionItem key={group.title} value={group.title}>
              <AccordionTrigger>
                <span className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-semibold text-brand">
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

"use client";

import { useState } from "react";
import Image from "next/image";
import type { CatalogProduct } from "@/data/catalog-types";
import { ProductDialog } from "@/components/products/product-dialog";

/** Catalogue tile. Opens a dialog with the full specification. */
export function ProductCard({ product }: { product: CatalogProduct }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:border-ring focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      >
        <span className="relative block aspect-4/3 w-full bg-tile">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
            className="product-image p-4"
          />
        </span>
        <span className="flex flex-1 flex-col gap-1 border-t border-border p-3">
          <span className="font-mono text-[11px] text-subtle-foreground">{product.code}</span>
          <span className="font-heading text-sm leading-snug font-semibold">{product.name}</span>
        </span>
      </button>

      <ProductDialog product={product} open={open} onOpenChange={setOpen} />
    </>
  );
}

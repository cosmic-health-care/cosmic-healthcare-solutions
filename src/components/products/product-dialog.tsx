"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import type { CatalogProduct } from "@/data/catalog-types";

export function ProductDialog({
  product,
  open,
  onOpenChange,
}: {
  product: CatalogProduct;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-2xl">
        <DialogHeader>
          <span className="w-fit font-mono text-xs text-subtle-foreground">{product.code}</span>
          <DialogTitle className="pr-8 text-lg">{product.name}</DialogTitle>
          <DialogDescription>{product.specs}</DialogDescription>
        </DialogHeader>

        {/* Body scrolls on its own so long spec tables never push the header/footer off-screen. */}
        <div className="-mx-4 max-h-[calc(100dvh-14rem)] space-y-4 overflow-y-auto px-4">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-tile">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 640px) 600px, 90vw"
              className="product-image p-6"
            />
          </div>

          {product.description && (
            <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
          )}

          {product.compatibility && (
            <p className="text-sm leading-relaxed">
              <span className="font-medium">Compatible with: </span>
              <span className="text-muted-foreground">{product.compatibility}</span>
            </p>
          )}

          {product.details && product.details.length > 0 && (
            <dl className="divide-y divide-border overflow-hidden rounded-xl border border-border text-sm">
              {product.details.map((detail) => (
                <div
                  key={detail.label}
                  className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-3 px-3.5 py-2"
                >
                  <dt className="text-muted-foreground">{detail.label}</dt>
                  <dd className="font-medium break-words">{detail.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <DialogFooter>
          <DialogClose
            render={<button type="button" className={cn(buttonVariants({ variant: "outline" }))} />}
          >
            Close
          </DialogClose>
          <Link
            href={`/contact?service=equipment-supply&item=${encodeURIComponent(product.code)}`}
            className={cn(buttonVariants())}
          >
            Enquire about {product.code}
            <ArrowRight className="size-4" />
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

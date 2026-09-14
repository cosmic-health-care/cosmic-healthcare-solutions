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
          <span className="w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
            {product.code}
          </span>
          <DialogTitle className="text-lg">{product.name}</DialogTitle>
          <DialogDescription>{product.specs}</DialogDescription>
        </DialogHeader>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 640px) 600px, 90vw"
            className="object-contain p-6"
          />
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

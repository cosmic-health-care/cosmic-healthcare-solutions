"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Maximize2 } from "lucide-react";
import type { CatalogProduct } from "@/data/catalog-types";
import { ProductDialog } from "@/components/products/product-dialog";

/**
 * Product card with a subtle 3D tilt + cursor-tracked spotlight on hover
 * (inspired by Aceternity UI's "3D Card"/"Card Spotlight" patterns, rebuilt
 * here with our own Framer Motion + Tailwind setup rather than copied code).
 * Click opens a detail dialog with the full spec sheet.
 */
export function ProductCard({ product }: { product: CatalogProduct }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 250, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), springConfig);
  const spotlightX = useTransform(mouseX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(mouseY, (v) => `${v * 100}%`);

  function handleMouseMove(event: MouseEvent<HTMLButtonElement>) {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set((event.clientX - bounds.left) / bounds.width);
    mouseY.set((event.clientY - bounds.top) / bounds.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <>
      <motion.button
        ref={ref}
        type="button"
        onClick={() => setOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [spotlightX, spotlightY],
              ([x, y]) =>
                `radial-gradient(220px circle at ${x} ${y}, color-mix(in oklch, var(--primary) 15%, transparent), transparent 70%)`
            ),
          }}
        />

        <div className="relative aspect-4/3 w-full overflow-hidden bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
            className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <span className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-background/90 text-muted-foreground opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
            <Maximize2 className="size-3.5" />
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-1 border-t border-border p-3">
          <span className="w-fit rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
            {product.code}
          </span>
          <h3 className="font-heading text-sm font-semibold leading-snug">{product.name}</h3>
        </div>
      </motion.button>

      <ProductDialog product={product} open={open} onOpenChange={setOpen} />
    </>
  );
}

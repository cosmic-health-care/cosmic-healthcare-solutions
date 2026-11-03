import type { CSSProperties } from "react";
import Image from "next/image";
import {
  marqueeRowFurniture,
  marqueeRowSurgical,
  type MarqueeItem,
} from "@/data/equipment-marquee";

// Left out of the background: catalogue shots with printed captions or frames, the
// room photo, and a near-duplicate. Text behind the hero copy would compete with it.
const EXCLUDED_IMAGES = new Set([
  "/furniture/sc-2091.jpg",
  "/surgical/chc-rc-102.png",
  "/surgical/chc-rc-103.jpeg",
  "/surgical/chc-rc-104.jpg",
  "/surgical/chc-rc-105.jpg",
  "/surgical/chc-rc-106.jpeg",
  "/surgical/chc-rc-107.jpg",
]);

const items: MarqueeItem[] = [...marqueeRowFurniture, ...marqueeRowSurgical].filter(
  (item) => !EXCLUDED_IMAGES.has(item.image)
);

/** Decorative hero background: one line of product photos running behind the content. */
export function EquipmentMarquee() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[min(70%,26rem)] -translate-y-1/2 overflow-hidden"
    >
      <ul
        className="flex h-full w-max animate-marquee-left"
        style={{ "--marquee-duration": "90s" } as CSSProperties}
      >
        {[...items, ...items].map((item, index) => (
          <li key={`${item.name}-${index}`} className="relative aspect-square h-full shrink-0">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="416px"
              loading="eager"
              className="hero-marquee-image p-8"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

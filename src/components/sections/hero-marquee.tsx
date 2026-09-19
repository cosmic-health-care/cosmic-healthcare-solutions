"use client";

import Image from "next/image";
import { marqueeRowFurniture, marqueeRowSurgical, type MarqueeItem } from "@/data/equipment-marquee";

const heroMarqueeItems: MarqueeItem[] = [...marqueeRowFurniture, ...marqueeRowSurgical];

function HeroMarqueeCard({ item, hidden = false }: { item: MarqueeItem; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="w-36 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:w-44"
    >
      <div className="relative aspect-4/3 w-full bg-white">
        <Image
          src={item.image}
          alt={hidden ? "" : item.name}
          fill
          sizes="176px"
          className="object-contain p-3"
        />
      </div>
      <div className="border-t border-border px-2.5 py-2">
        <p className="truncate text-xs font-semibold text-foreground">{item.name}</p>
        <p className="truncate text-[10px] text-muted-foreground">{item.category}</p>
      </div>
    </div>
  );
}

export function HeroMarquee() {
  return (
    <div className="relative mt-14 overflow-hidden mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] sm:mt-16">
      <div
        className="flex w-max shrink-0 gap-3 animate-marquee-left hover:paused sm:gap-4"
        style={{ "--marquee-duration": "55s" } as React.CSSProperties}
      >
        {heroMarqueeItems.map((item) => (
          <HeroMarqueeCard key={item.name} item={item} />
        ))}
        {heroMarqueeItems.map((item) => (
          <HeroMarqueeCard key={`${item.name}-dup`} item={item} hidden />
        ))}
      </div>
    </div>
  );
}

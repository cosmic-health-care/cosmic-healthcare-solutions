import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="rounded-lg bg-tile px-1.5 py-1">
        <Image
          src="/brand/cosmic-icon.png"
          alt=""
          width={362}
          height={201}
          priority={priority}
          className="h-6 w-auto"
        />
      </span>
      <span className="leading-tight">
        <span className="block font-heading text-base font-semibold text-foreground">Cosmic</span>
        <span className="block text-[11px] font-medium text-subtle-foreground">
          HealthCare Solutions
        </span>
      </span>
      <span className="sr-only">{siteConfig.name} home</span>
    </Link>
  );
}

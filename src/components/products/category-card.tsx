import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CheckList } from "@/components/shared/check-list";
import { IconTile } from "@/components/shared/icon-tile";
import type { ProductCategory } from "@/data/products";

export function CategoryCard({
  category,
  showItems = false,
}: {
  category: ProductCategory;
  /** List the category's teaser items under its description. */
  showItems?: boolean;
}) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-ring"
    >
      <IconTile icon={category.icon} />
      <h3 className="mt-4 text-xl font-semibold">{category.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
      {showItems && <CheckList items={category.items} className="mt-4" />}
      <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-brand">
        View category
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}

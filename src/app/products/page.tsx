import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { productCategories } from "@/data/products";
import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse hospital equipment, surgical & consumables, hospital furniture, and pharma product categories from Cosmic HealthCare Solutions.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Product Categories
        </span>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
          A wide catalog, one point of contact
        </h1>
        <p className="mt-4 text-muted-foreground">
          We don&apos;t run a fixed online catalog — pricing and availability
          depend on your specification and quantity. Browse categories below
          and send us an enquiry for a tailored quote.
        </p>
      </Reveal>

      <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {productCategories.map((category) => (
          <RevealItem
            key={category.slug}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100"
            />
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 ease-out group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <category.icon className="size-5" />
            </div>
            <h2 className="mt-4 font-heading text-lg font-semibold">{category.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
            <ul className="mt-4 space-y-2">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green-dark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href={`/products/${category.slug}`}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                View category
                <ArrowUpRight className="size-4" />
              </Link>
              <Link href="/contact" className={cn(buttonVariants({ size: "sm" }))}>
                Enquire
              </Link>
            </div>
          </RevealItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

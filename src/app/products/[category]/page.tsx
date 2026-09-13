import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { productCategories, getProductCategoryBySlug } from "@/data/products";

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getProductCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/products/${category.slug}` },
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getProductCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="text-sm text-muted-foreground">
        <Link href="/products" className="hover:text-primary">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{category.title}</span>
      </nav>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <category.icon className="size-6" />
        </span>
        <h1 className="text-3xl font-extrabold sm:text-4xl">{category.title}</h1>
      </div>
      <p className="mt-4 max-w-2xl text-muted-foreground">{category.description}</p>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <h2 className="font-heading text-base font-semibold">What&apos;s in this category</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {category.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green-dark" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl bg-secondary/50 p-6">
        <div className="flex-1">
          <h3 className="font-heading text-base font-semibold">
            Need a quote for {category.title.toLowerCase()}?
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Share your specification and quantity — we&apos;ll respond with
            options from our partner network.
          </p>
        </div>
        <Link href="/contact" className={cn(buttonVariants())}>
          Enquire Now
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { services, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="bg-brand-gradient text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/70">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-xl bg-white/15">
              <service.icon className="size-6" />
            </span>
            <h1 className="text-3xl font-extrabold sm:text-4xl">{service.title}</h1>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{service.shortDescription}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.heroPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">{service.body.heading}</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {service.body.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-base font-semibold">What&apos;s included</h3>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green-dark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h3 className="font-heading text-base font-semibold">
                Ask about {service.title.toLowerCase()}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us your requirement and we&apos;ll get back with options
                and pricing.
              </p>
              <Link
                href="/contact"
                className={cn(buttonVariants({ className: "mt-4 w-full" }))}
              >
                Get a Quote
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneLinks[0]}`}
                className={cn(buttonVariants({ variant: "outline", className: "mt-2 w-full" }))}
              >
                Call {siteConfig.contact.phones[0]}
              </a>
            </div>

            <div>
              <h3 className="font-heading text-sm font-semibold text-muted-foreground">
                Other services
              </h3>
              <ul className="mt-3 space-y-2">
                {otherServices.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/services/${other.slug}`}
                      className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-medium hover:bg-secondary"
                    >
                      <other.icon className="size-4 text-primary" />
                      {other.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

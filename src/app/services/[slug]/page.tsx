import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CheckList } from "@/components/shared/check-list";
import { Chip } from "@/components/shared/chip";
import { PageHero } from "@/components/shared/page-hero";
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
      <PageHero
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[{ href: "/services", label: "Services" }]}
      >
        <div className="mt-6 flex flex-wrap gap-2">
          {service.heroPoints.map((point) => (
            <Chip key={point}>{point}</Chip>
          ))}
        </div>
      </PageHero>

      <section className="page-section bg-surface">
        <div className="page-container grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-balance">{service.body.heading}</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {service.body.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">What&apos;s included</h3>
              <CheckList items={service.deliverables} className="mt-4" />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">Ask about {service.title.toLowerCase()}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tell us your requirement and we&apos;ll get back with options and pricing.
              </p>
              <Link href="/contact" className={buttonVariants({ className: "mt-4 w-full" })}>
                Get a Quote
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneLinks[0]}`}
                className={buttonVariants({ variant: "outline", className: "mt-2 w-full" })}
              >
                Call {siteConfig.contact.phones[0]}
              </a>
            </div>

            <div>
              <h3 className="eyebrow">Other services</h3>
              <ul className="mt-3 space-y-2">
                {otherServices.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/services/${other.slug}`}
                      className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-3 text-sm font-medium transition-colors hover:border-ring"
                    >
                      <other.icon aria-hidden className="size-4 text-brand" />
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

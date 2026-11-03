import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ContactForm } from "@/components/shared/contact-form";
import { IconTile } from "@/components/shared/icon-tile";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { siteConfig, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cosmic HealthCare Solutions in Kalaburagi, Karnataka for hospital equipment supply, service, and rental enquiries.",
  alternates: { canonical: "/contact" },
};

const LOCATION_URL =
  "https://maps.google.com/maps/search/Cosmic%20Healthcare%20Solutions/@17.30652024,76.83482438,17z?hl=en";
const LOCATION_EMBED_URL =
  "https://www.google.com/maps?q=17.30652024,76.83482438&z=17&output=embed";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.contact.phones.join(" / "),
      href: `tel:${siteConfig.contact.phoneLinks[0]}`,
      external: false,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      external: false,
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: "Chat with us instantly",
      href: whatsappLink("Hi, I'd like to enquire about your services."),
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk"
        description="Send us your requirement, or reach out directly by phone or WhatsApp. We typically respond within one business day."
      />

      <section className="page-section border-b border-border bg-surface">
        <div className="page-container grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold">Reach us directly</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Based in Kalaburagi, Karnataka. Pick whichever works best for you.
            </p>

            <StaggerGroup className="mt-5 space-y-2.5">
              {contactMethods.map((method) => (
                <RevealItem key={method.label}>
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-inset p-3 transition-colors hover:border-ring"
                  >
                    <IconTile icon={method.icon} className="size-10" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-subtle-foreground">{method.label}</span>
                      <span className="block truncate text-sm font-medium text-foreground">
                        {method.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 shrink-0 text-subtle-foreground transition-colors group-hover:text-brand"
                    />
                  </a>
                </RevealItem>
              ))}
            </StaggerGroup>

            <p className="mt-5 border-t border-border pt-4 font-mono text-xs text-subtle-foreground">
              GST {siteConfig.contact.gst}
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <Reveal>
            <SectionHeading eyebrow="Find Us" title="Visit us in Kalaburagi" />
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-5">
            <div className="overflow-hidden rounded-2xl border border-border lg:col-span-3">
              <iframe
                title="Cosmic HealthCare Solutions location"
                src={LOCATION_EMBED_URL}
                className="h-80 w-full lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-7 lg:col-span-2">
              <IconTile icon={MapPin} />
              <h3 className="mt-4 text-xl font-semibold">Kalaburagi, Karnataka</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                {siteConfig.contact.address.city} - {siteConfig.contact.address.pincode}
              </p>
              <a
                href={LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", className: "mt-5 w-fit" })}
              >
                View on Google Maps
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { ContactForm } from "@/components/shared/contact-form";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";
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
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Contact Us
        </span>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Let&apos;s talk</h1>
        <p className="mt-4 text-muted-foreground">
          Send us your requirement, or reach out directly by phone or
          WhatsApp — we typically respond within one business day.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-heading text-base font-semibold">Reach us directly</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Based in Kalaburagi, Karnataka — pick whichever works best for you.
            </p>

            <StaggerGroup className="mt-5 space-y-2.5">
              {contactMethods.map((method) => (
                <RevealItem key={method.label}>
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-border p-3 transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                      <method.icon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-muted-foreground">{method.label}</span>
                      <span className="block truncate text-sm font-medium text-foreground">
                        {method.value}
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </a>
                </RevealItem>
              ))}
            </StaggerGroup>

            <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
              GST: {siteConfig.contact.gst}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Find Us
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Visit us in Kalaburagi</h2>
        </Reveal>

        <Reveal className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
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
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="size-5" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold">Kalaburagi, Karnataka</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
              {siteConfig.contact.address.city} - {siteConfig.contact.address.pincode}
            </p>
            <a
              href={LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "mt-5 w-fit")}
            >
              View on Google Maps
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

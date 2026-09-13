import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/shared/contact-form";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { siteConfig, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cosmic HealthCare Solutions in Kalaburagi, Karnataka for hospital equipment supply, service, and rental enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.pincode}`
  );

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

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-heading text-base font-semibold">Reach us directly</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                  {siteConfig.contact.address.city} - {siteConfig.contact.address.pincode},{" "}
                  {siteConfig.contact.address.state}, {siteConfig.contact.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                <a
                  href={`tel:${siteConfig.contact.phoneLinks[0]}`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {siteConfig.contact.phones.join(" / ")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="size-4 shrink-0 text-brand-green-dark" />
                <a
                  href={whatsappLink("Hi, I'd like to enquire about your services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
            <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
              GST: {siteConfig.contact.gst}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Cosmic HealthCare Solutions location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

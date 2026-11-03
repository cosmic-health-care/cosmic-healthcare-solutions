import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/shared/brand-logo";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries We Serve" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const linkClass = "text-sm text-muted-foreground underline-offset-4 hover:underline";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { address, email, gst, phones, phoneLinks } = siteConfig.contact;

  return (
    <footer className="border-t border-border bg-card [--foreground:var(--brand)] [--muted-foreground:var(--brand)] [--subtle-foreground:var(--brand)]">
      <div className="page-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <p className="mt-4 font-mono text-xs text-subtle-foreground">GST {gst}</p>
        </div>

        <div>
          <h2 className="eyebrow">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className={linkClass}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
              <span>
                {address.line1}, {address.line2}, {address.city} - {address.pincode},{" "}
                {address.state}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone aria-hidden className="size-4 shrink-0 text-brand" />
              <a href={`tel:${phoneLinks[0]}`} className={linkClass}>
                {phones.join(" / ")}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail aria-hidden className="size-4 shrink-0 text-brand" />
              <a href={`mailto:${email}`} className={`${linkClass} break-all`}>
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="page-container flex flex-col gap-2 py-6 text-xs text-subtle-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Founded by {siteConfig.founder.name}, {siteConfig.founder.title}
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-heading text-lg font-bold">
            <Image
              src="/brand/cosmic-icon.png"
              alt="Cosmic HealthCare Solutions"
              width={40}
              height={22}
              className="h-8 w-auto"
            />
            <span>
              Cosmic <span className="text-muted-foreground">HealthCare Solutions</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">GST: {siteConfig.contact.gst}</p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-foreground">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-foreground">Company</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link href="/industries" className="text-sm text-muted-foreground hover:text-primary">
                Industries We Serve
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-foreground">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                {siteConfig.contact.address.city} - {siteConfig.contact.address.pincode},{" "}
                {siteConfig.contact.address.state}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href={`tel:${siteConfig.contact.phoneLinks[0]}`} className="hover:text-primary">
                {siteConfig.contact.phones.join(" / ")}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
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

import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: September 2026</p>

      <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-sm text-muted-foreground">
        <p>
          These terms govern your use of the {siteConfig.name} website. By
          using this website, you agree to these terms.
        </p>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Informational purpose
          </h2>
          <p className="mt-2">
            Content on this website — including service descriptions, product
            categories, and pricing indications — is provided for general
            informational purposes only. Final pricing, availability, and
            specifications are confirmed directly with our team on enquiry.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            No online transactions
          </h2>
          <p className="mt-2">
            This website does not process payments or online orders. All
            purchases, service agreements, and rental arrangements are
            confirmed offline through direct communication with{" "}
            {siteConfig.name}.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Third-party products
          </h2>
          <p className="mt-2">
            Some equipment and products referenced on this website are sourced
            through our network of manufacturers and distributors. Product
            specifications, warranties, and certifications are subject to the
            respective manufacturer&apos;s terms.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-primary">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

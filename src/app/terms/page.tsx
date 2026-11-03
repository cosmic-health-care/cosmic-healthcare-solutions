import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/shared/legal-page";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="September 2026">
        <p>
          These terms govern your use of the {siteConfig.name} website. By
          using this website, you agree to these terms.
        </p>

        <LegalSection heading="Informational purpose">
            Content on this website — including service descriptions, product
            categories, and pricing indications — is provided for general
            informational purposes only. Final pricing, availability, and
            specifications are confirmed directly with our team on enquiry.
          </LegalSection>

        <LegalSection heading="No online transactions">
            This website does not process payments or online orders. All
            purchases, service agreements, and rental arrangements are
            confirmed offline through direct communication with{" "}
            {siteConfig.name}.
          </LegalSection>

        <LegalSection heading="Third-party products">
            Some equipment and products referenced on this website are sourced
            through our network of manufacturers and distributors. Product
            specifications, warranties, and certifications are subject to the
            respective manufacturer&apos;s terms.
          </LegalSection>

        <LegalSection heading="Contact">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-brand underline underline-offset-3">
              {siteConfig.contact.email}
            </a>
            .
          </LegalSection>
    </LegalPage>
  );
}

import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/shared/legal-page";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 2026">
        <p>
          {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
          respects your privacy. This policy explains what information we
          collect through this website and how we use it.
        </p>

        <LegalSection heading="Information we collect">
            When you submit our contact/enquiry form, we collect the name,
            phone number, email address, service interest, and message you
            provide. We do not collect payment information through this
            website.
          </LegalSection>

        <LegalSection heading="How we use your information">
            We use the information you submit solely to respond to your
            enquiry, provide quotations, and follow up on your requirements.
            We do not sell or share your information with third parties for
            marketing purposes.
          </LegalSection>

        <LegalSection heading="Third-party services">
            This website may use Google Analytics to understand site traffic
            and Netlify Forms to process enquiry submissions. These services
            may process data according to their own privacy policies.
          </LegalSection>

        <LegalSection heading="Contact us">
            For questions about this policy or to request removal of your
            data, contact us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-brand underline underline-offset-3">
              {siteConfig.contact.email}
            </a>
            .
          </LegalSection>
    </LegalPage>
  );
}

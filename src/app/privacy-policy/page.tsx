import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: September 2026</p>

      <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-sm text-muted-foreground">
        <p>
          {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
          respects your privacy. This policy explains what information we
          collect through this website and how we use it.
        </p>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Information we collect
          </h2>
          <p className="mt-2">
            When you submit our contact/enquiry form, we collect the name,
            phone number, email address, service interest, and message you
            provide. We do not collect payment information through this
            website.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            How we use your information
          </h2>
          <p className="mt-2">
            We use the information you submit solely to respond to your
            enquiry, provide quotations, and follow up on your requirements.
            We do not sell or share your information with third parties for
            marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Third-party services
          </h2>
          <p className="mt-2">
            This website may use Google Analytics to understand site traffic
            and Netlify Forms to process enquiry submissions. These services
            may process data according to their own privacy policies.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">Contact us</h2>
          <p className="mt-2">
            For questions about this policy or to request removal of your
            data, contact us at{" "}
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

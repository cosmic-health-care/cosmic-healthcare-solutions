import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";
import { MotionProvider } from "@/components/shared/motion-provider";
import { siteConfig } from "@/data/site";

// Bundled in the repo so dev and CI builds never depend on reaching Google Fonts.
const plexSans = localFont({
  src: "./fonts/ibm-plex-sans-variable.woff2",
  variable: "--font-sans",
  weight: "100 700",
  display: "swap",
});

const bricolage = localFont({
  src: "./fonts/bricolage-grotesque-variable.woff2",
  variable: "--font-heading",
  weight: "200 800",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400.woff2", weight: "400" },
    { path: "./fonts/ibm-plex-mono-500.woff2", weight: "500" },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Hospital Equipment Supplier in Kalaburagi`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "medical equipment supplier Kalaburagi",
    "hospital equipment supplier Karnataka",
    "surgical supplies distributor",
    "AMC CMC medical equipment",
    "medical equipment calibration services",
    "hospital equipment rental",
    "biomedical equipment asset management",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Hospital Equipment Supplier in Kalaburagi`,
    description: siteConfig.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phoneLinks[0],
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.state,
    postalCode: siteConfig.contact.address.pincode,
    addressCountry: "IN",
  },
  areaServed: "Karnataka",
  founder: {
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.title,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // Lets Next.js disable smooth scrolling during route transitions (scroll-smooth below).
      data-scroll-behavior="smooth"
      className={`${plexSans.variable} ${bricolage.variable} ${plexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <FloatingWhatsApp />
        </MotionProvider>
      </body>
    </html>
  );
}

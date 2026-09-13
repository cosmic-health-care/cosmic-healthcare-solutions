# Cosmic HealthCare Solutions — Website Build Plan

Production-grade plan for a Next.js + React + TypeScript + Tailwind CSS marketing/lead-gen website, deployed to Netlify on a GoDaddy-purchased custom domain.

## Post-launch-prep polish pass (2026-09-12)

Requested and shipped after the initial Phase 1-5 build:
- **Navbar:** phone number removed, WhatsApp CTA kept as the only direct-contact button (header + mobile menu). Phone number still shown on the footer, contact page, CTA banner, and service detail sidebar.
- **Logo:** extracted the real mark from the business-card image (`WhatsApp Image 2026-09-11 at 8.34.46 AM (1).jpeg`), background-removed to transparent PNGs via Pillow, saved to `public/brand/` (`cosmic-icon.png` = icon-only mark used in header/footer, `cosmic-logo-full.png` = full icon+wordmark lockup, available if a larger lockup is needed later). Also generated `src/app/favicon.ico` and `src/app/apple-icon.png` from the same source art, replacing the default Next.js icons.
- **Animation:** added a small motion system (`src/components/shared/reveal.tsx` — `Reveal`/`RevealItem`/`StaggerGroup`, plus `MotionProvider` in the root layout wiring `prefers-reduced-motion` support via Framer Motion's `MotionConfig`). Applied to the hero (on-load stagger + slow-breathing background blobs), the "What we do" services grid (scroll-triggered stagger, spring hover-lift, animated top border and icon fill on hover), why-choose-us, the partner-capability strip, and the CTA banner (scale-in on scroll).
- **Content:** tightened service/product copy to use more authentic, specific terminology drawn from the three reference vendor sites (e.g. rotameters, medical gas pipeline regulators/flowmeters/alarms, fiber-optic/pediatric laryngoscopes, NIBP cuffs, oxygen sensors, OT/examination lights, autoclave/suction/fogger machines) while keeping all vendor names generic, per the earlier decision.

---

## 1. Business Snapshot (extracted from your materials)

**Company:** Cosmic HealthCare Solutions
**Principal:** Basavaraj Angadi — Bio Medical Engineer
**Location:** Plot No. 61, Siddhaganga Nilaya, Near VKG Nivas, Naganahalli PTC Road, Jamashetty Nagar, Kalaburagi – 585102, Karnataka, India
**Phone:** +91 8050404143 / +91 9538318834
**Email:** cosmichealthcares@gmail.com
**GST:** 29AOBPA5825J2ZY

**Services:**
- Hospital equipment supply (general + specialty)
- Surgical supplies & consumables
- Pharma products
- Equipment asset management
- AMC / CMC contracts
- Calibration services (NABH & JCI-norm compliant)
- Equipment rental (incl. sleep study & critical care equipment)
- Modular hospital design elements (MGPS, AHU)
- Hospital furniture & accessories

**Tagline direction:** "Sales · Service · Rental" — full-lifecycle medical equipment partner for hospitals/clinics.

**Sourcing/vendor network** (reference only — these are third-party manufacturers you distribute for/partner with, not to be presented as Cosmic-owned):
| Vendor | Role | Style notes |
|---|---|---|
| [MN Life Care Products](https://www.mnlifecareproducts.com/) | Anesthesia systems, MGPS, OT equipment, laryngoscopes (est. 1999, FDA/CE/ISO/WHO-GMP) | Navy/white, catalog-driven |
| [Cardio Beats LLP](https://cardiobeatsllp.com/) | Spares, consumables, accessories (SpO2, ECG, NIBP, sensors) — authorized distributor for Medtronic, Edan, Analytical Industries, ResMed | Clean neutral, specialty cards |
| [Sanjivani Carecrafts](https://sanjivanicarecrafts.com/) | Hospital furniture — ICU/hospital beds, OT tables, stretchers, lights | Medical blue, real hospital photography |

**Implication for site:** Cosmic is positioned as a **single point of contact / distribution & services company**, not a manufacturer. The site should sell trust, breadth of catalog, and service reliability (AMC/CMC/calibration/rental) — not run an e-commerce cart. Primary conversion goal = **inquiry (call / WhatsApp / form)**, not checkout.

---

## 2. Tech Stack Decisions

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | SEO-friendly SSR/SSG, file-based routing, Netlify has first-class support |
| Language | **TypeScript** | Type safety, easier long-term maintenance for a solo owner |
| Styling | **Tailwind CSS v3.4** | Fast, utility-first, pairs with component libraries below |
| Component library | **shadcn/ui** (Radix primitives + Tailwind, MIT, code lives in your repo — no runtime dependency lock-in) | Free, fully customizable, accessible out of the box, the de-facto modern standard for Next+Tailwind |
| Motion/flourish | **Framer Motion** + a few copy-in blocks from **Aceternity UI** / **Magic UI** (free, MIT-style snippets) for hero/bento/marquee sections | Gives the "modern, premium" texture the client wants without a heavy design budget |
| Icons | **lucide-react** | Ships with shadcn/ui, consistent line-icon style |
| Forms | **React Hook Form + Zod** on the client; **Netlify Forms** (or a Netlify Function using Resend for email) on the backend | No custom backend needed |
| SEO | Next.js **Metadata API**, `next-sitemap`, JSON-LD (`LocalBusiness`/`MedicalBusiness` schema) | Critical for local search ("medical equipment supplier Kalaburagi") |
| Analytics | Google Analytics 4 + Google Search Console + Google Business Profile | Free, standard for local B2B lead gen |
| Hosting | **Netlify** (`@netlify/plugin-nextjs`) | As requested |
| Domain | GoDaddy-purchased domain pointed to Netlify | As requested |

---

## 3. Information Architecture

```
/                     Home
/about                About Us (founder, mission, compliance expertise)
/services             Overview grid → anchors or sub-routes:
  /services/equipment-supply
  /services/surgical-supplies
  /services/pharma-products
  /services/asset-management
  /services/amc-cmc-contracts
  /services/calibration
  /services/rental
/products              Catalog-style showcase (Equipment / Surgical & Consumables /
                        Furniture / Pharma) — inquiry CTA per category, not cart
/industries             Who we serve: Hospitals, Nursing Homes, Diagnostic Centers, Clinics
/contact                Address, map embed, phone/WhatsApp, email, inquiry form
/privacy-policy, /terms  Required for form data collection + Google/GA compliance
```

Global chrome: sticky header with click-to-call + WhatsApp button, footer with services sitemap, GST number, service area, social links.

---

## Phase 0 — Prep & Assets (you + me, before coding)
- [ ] Recover/recreate the Cosmic logo as a clean **transparent-background SVG/PNG** (the card scans have white backgrounds/QR codes baked in — need a clean master file for web + favicon).
- [ ] Decide brand color palette from the logo (green leaf `#4CD137`-ish, blue hand gradient, orange accent) — I'll formalize this into a Tailwind theme.
- [ ] Collect (or approve stock alternatives for) real photos: founder photo, equipment photos, any site/installation photos. Distributor sites lean heavily on trust signals — generic stock will look weaker than real photos.
- [ ] Confirm final service list/wording and whether product-level vendor attribution (MGPL/Cardiobeats/Sanjivani) should be named on-site or kept generic ("our vendor network").
- [ ] Confirm the GoDaddy domain name you purchased, and that you have login access to the GoDaddy account.

## Phase 1 — Project Scaffold ✅ Done
- Initialized Next.js **16** (App Router) + TypeScript + Tailwind **v4** in this folder (create-next-app pulled the current stable versions — newer than the v15/v3.4 named above, no functional downside).
- shadcn/ui initialized (`components.json`); note it now ships on **Base UI** primitives (`@base-ui/react`) rather than Radix, and the `cn()` helper comes from the published `cn` package. Functionally equivalent, but composition uses a `render` prop instead of `asChild` — see below.
- Installed lucide-react, Framer Motion, React Hook Form + Zod + @hookform/resolvers, next-sitemap.
- ESLint (flat config, via `eslint-config-next`) passes clean; git repo initialized by create-next-app.

## Phase 2 — Design System ✅ Done
- Fonts: **Inter** (body) + **Manrope** (headings) via `next/font/google`, replacing the default Geist pairing for a more distinct brand voice; Geist Mono kept for monospace.
- Tailwind v4 theme tokens in `src/app/globals.css`: primary = medical blue, accent = brand green, plus custom `brand-blue`/`brand-green`/`brand-orange` tokens and a `bg-brand-gradient` utility used for the hero/CTA sections.
- Base primitives added via shadcn/ui: Button, Card, Badge, Accordion, Tabs, Dialog, NavigationMenu, Sheet, Select, Input, Textarea, Label, Separator, Avatar, Skeleton. (Carousel was added then removed — unused and its generated code tripped a React Compiler lint rule; re-add via `npx shadcn@latest add carousel` if a testimonials/logo carousel is wanted later.) The shadcn `form` wrapper isn't available yet on this CLI version for Base UI, so forms are wired directly with React Hook Form + Controller instead (see Phase 4).
- Hero/CTA sections use a gradient-mesh + dot-grid + icon-card treatment rather than photography, since stock photos couldn't be safely sourced in this session (see note under Phase 0 below) — fully modern/on-brand, and easy to swap for real photography later.

## Phase 3 — Page Build-out ✅ Done
All routes below are built and statically generated (`○`/`●` in `next build` output):
- Layout shell: `SiteHeader` (logo mark, nav, call + WhatsApp CTA, mobile `Sheet` menu), `SiteFooter` (services sitemap, GST, address, contact), floating WhatsApp button on every page.
- `/` — hero, services overview grid, partner-network capability strip (generic, no vendor names), why-choose-us, CTA banner.
- `/about` — founder bio, mission/compliance/engineering-led value props.
- `/services` + `/services/[slug]` (dynamic, `generateStaticParams`) — all 7 services from the brief.
- `/products` + `/products/[category]` (dynamic) — Equipment, Surgical & Consumables, Furniture, Pharma.
- `/industries`, `/contact` (form + click-to-call/WhatsApp + embedded Google Map), `/privacy-policy`, `/terms`.

## Phase 4 — Forms & Lead Capture ✅ Done (pending real API key + live test)
- `ContactForm` (`src/components/shared/contact-form.tsx`): React Hook Form + Zod validation, Base UI `Select` wired via `Controller`.
- **Real-time branded email via Resend**: `src/app/api/contact/route.ts` validates the submission (shared schema in `src/lib/contact-schema.ts`, honeypot field checked server-side — a filled-in honeypot gets a fake `{ok:true}` response so bots don't learn they were caught), then sends a styled HTML email (template in `src/lib/contact-email-template.ts`) to the business inbox with reply-to set to the enquirer's address. Free at this business's scale (Resend free tier: 3,000/mo, 100/day). Needs `RESEND_API_KEY` set (see README's "Contact form emails" section) — without it the route safely no-ops with a 500 rather than crashing.
- **Netlify Forms was tried and removed** (2026-09-12, by request): originally the form also posted to Netlify's built-in form-detection endpoint as a free backup submission log. User decided one delivery path (Resend) is simpler and sufficient, so that's been stripped out — the form now only calls `/api/contact`. Trade-off worth remembering: there is no longer a dashboard-level backup log of submissions if a Resend send silently fails; the business inbox is the only record.
- **Email template redesign + logo** (2026-09-13): the logo is now embedded in the email header as a CID inline attachment (`src/lib/email-logo.ts` holds a base64 copy of `public/brand/cosmic-icon-email.png`, a smaller/optimized 240px-wide export of the site logo made specifically for email — attached in `route.ts` and referenced via `cid:cosmic-logo` in `contact-email-template.ts`). This works without a live public domain (no external image URL needed) — verified end-to-end with a real send, logo renders correctly in Gmail. Header redesigned as a white rounded badge holding the logo next to the eyebrow/heading text; the "Service" value is now a pill/chip for better visual hierarchy.
- **Input hardening** (2026-09-12): there's no SQL database anywhere in this flow (no ORM, no DB), so "SQL injection" isn't literally applicable here — instead hardened against what actually matters for an email-sending form: (1) `serviceInterest` changed from free text to a strict allow-list (only real service slugs + `"other"` — this closed a real bug where an unrecognized value would have flowed unescaped into the email); (2) length caps on every field (name ≤100, email ≤254, message ≤3000, phone ≤20) to block oversized/abusive payloads while staying generous for genuine use; (3) phone validation now checks digit-count (7–15) via a permissive character class (`digits, spaces, + - ()`) instead of a crude total-length check, which is actually *more* flexible for real international formatting, not less; (4) all user text is HTML-escaped before going into the email body (`src/lib/contact-email-template.ts`), and name/service are additionally stripped of CR/LF before going into the subject line, to prevent HTML/script injection and email-header injection; (5) zod already strips unrecognized JSON keys by default. Verified against adversarial payloads (`<script>` tags, CRLF header-injection attempts, oversized messages, invalid service slugs, malformed phone text) — all correctly rejected or neutralized; realistic flexible input (hyphenated names, `+91 (805) 040-4143`-style phone numbers) still passes.
- WhatsApp deep-links (`wa.me/918050404143`) in header, mobile menu, floating button, and contact page.

## Phase 5 — SEO & Performance ✅ Done (baseline)
- Metadata API with title template, per-route metadata + canonicals on every page; Open Graph/Twitter defaults in root layout.
- JSON-LD `MedicalBusiness` schema (address, phone, founder) injected in root layout.
- `next-sitemap` wired into `npm run build` (runs after `next build`) generating `sitemap.xml` + `robots.txt` into `public/` — gitignored as build output, regenerated every build.
- Still open: real Core Web Vitals/Lighthouse pass (needs a live/deploy-preview URL, see Phase 6), and final keyword pass once you confirm on-page copy.

## Phase 6 — QA — Next up
- Cross-browser/cross-device manual pass — not yet done (no browser automation available in this session; do this against the Netlify deploy preview).
- Accessibility: Base UI primitives ship with correct ARIA/keyboard behavior out of the box; no manual audit done yet.
- Contact form email test — can now be done locally once `RESEND_API_KEY` is set (no deploy required, unlike the earlier Netlify Forms approach), and should be re-tested against the live Netlify deploy too.
- Lighthouse/PageSpeed pass — do this against the deploy preview URL.

## Phase 7 — Deployment to Netlify — Next up
- `netlify.toml` added (`npm run build`, `@netlify/plugin-nextjs` plugin, publish `.next`).
- Still to do: push this repo to GitHub, connect the repo in Netlify, set any environment variables, deploy to a `*.netlify.app` preview URL, and run the Phase 6 QA against that preview.

## Phase 8 — Custom Domain (GoDaddy → Netlify)
Domain: **cosmichealthcaresolutions.com** (purchase on GoDaddy).

- In Netlify: Site settings → Domain management → Add custom domain → enter `cosmichealthcaresolutions.com`.
- Two connection options:
  1. **Netlify DNS (recommended)** — In Netlify, choose "Use Netlify DNS," it gives you 4 nameservers (e.g. `dns1.p0X.nsone.net` style). Go to GoDaddy → My Products → DNS → Nameservers → Change → Enter custom nameservers → paste the 4 Netlify ones → Save. Propagation: 1–24 hrs (usually much faster). Netlify then manages all records and auto-provisions HTTPS.
  2. **Keep GoDaddy DNS** — In GoDaddy DNS management for the domain, add:
     - `A` record: Host `@` → Netlify's load-balancer IP (Netlify shows the current IP at connect-time, currently `75.2.60.5`, but always use the value Netlify displays).
     - `CNAME` record: Host `www` → your `<sitename>.netlify.app` address.
     Netlify shows these exact values when you add the domain — follow what's on-screen over this doc if they differ.
- In Netlify, set `cosmichealthcaresolutions.com` as primary domain and `www.cosmichealthcaresolutions.com` as an alias with auto-redirect to primary (or vice versa — pick one canonical host for SEO consistency).
- Enable Netlify's free auto-provisioned Let's Encrypt SSL (automatic once DNS resolves); verify `https://cosmichealthcaresolutions.com` loads with a valid cert (can take minutes to a few hours after DNS propagates).
- Update all canonical URLs, Open Graph URLs, sitemap, and JSON-LD `url` fields (Phase 5) to use the final `https://cosmichealthcaresolutions.com` host once confirmed.

## Phase 9 — Post-Launch
- Submit sitemap to Google Search Console; verify domain ownership.
- Set up/claim Google Business Profile for local map pack visibility in Kalaburagi.
- Wire GA4, monitor first-week traffic and form submissions.
- Handover doc: how to edit page copy, add a new service/product card, and redeploy (push to `main` → Netlify auto-builds).

---

## Decisions (confirmed)
1. **Vendor attribution:** Kept generic on-site — referred to as "our partner network" / "our sourcing network," no vendor names (MN Life Care, Cardio Beats, Sanjivani) displayed.
2. **Photography:** Stock photos for launch (placeholder), swappable later for real photos of the founder/office/equipment. **Update:** the Chrome browser tool needed to source and verify real stock photos wasn't connected during the build session, so Phase 2/3 shipped with an abstract gradient/icon-driven visual system instead (no photography dependency, no risk of broken/unverified hotlinked images). This looks modern on its own, but if you still want real photos: reconnect the Claude in Chrome extension and ask to source them, or drop image files directly into `public/images/` and they can be wired into the hero/about/products sections.
3. **Domain:** `cosmichealthcaresolutions.com` (to be purchased on GoDaddy) — Phase 8 DNS steps below are written against this domain.

Phase 1 (project scaffold) starts now.

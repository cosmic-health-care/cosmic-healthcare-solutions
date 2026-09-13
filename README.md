# Cosmic HealthCare Solutions — Website

Marketing/lead-gen website for Cosmic HealthCare Solutions, built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

See **[PROJECT-PLAN.md](./PROJECT-PLAN.md)** for the full phase-by-phase build and deployment plan, current status, and the GoDaddy → Netlify domain setup steps.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Most site copy lives in typed data files, not scattered across components:

- `src/data/site.ts` — company name, tagline, contact details, address, GST number.
- `src/data/services.ts` — the 7 services (add/edit an entry here to add a new `/services/[slug]` page automatically).
- `src/data/products.ts` — the 4 product categories (same pattern for `/products/[category]`).

Page-specific copy (hero text, about page story, etc.) lives directly in each route's `page.tsx` under `src/app/`.

## Build & lint

```bash
npm run build   # runs `next build` then `next-sitemap` to regenerate sitemap.xml/robots.txt
npm run lint
```

## Contact form emails (Resend)

The contact form (`/contact`) sends a real-time branded email via [Resend](https://resend.com) whenever it's submitted, via the `/api/contact` route handler. Resend is the only delivery mechanism — there's no separate Netlify Forms submission log, so `RESEND_API_KEY` being set correctly is what makes the form actually work.

**One-time setup:**
1. Sign up for a free Resend account at resend.com using **cosmichealthcares@gmail.com** as the account email (this matters — Resend's free sandbox sender `onboarding@resend.dev` can only deliver to the email address the account was created with, until you verify your own domain).
2. In Resend, go to **API Keys** → create a new key.
3. Add it as an environment variable:
   - Locally: create `.env.local` (gitignored) with `RESEND_API_KEY=re_...` — copy the shape from `.env.example`.
   - On Netlify: **Site settings → Environment variables → Add a variable** → `RESEND_API_KEY` = your key.
4. Redeploy (or restart `npm run dev` locally) — the contact form will now actually send email.

**Once the custom domain is live:** verify `cosmichealthcaresolutions.com` in Resend (Domains → Add Domain → add the DNS records it gives you), then set `CONTACT_FROM_EMAIL` to something like `Cosmic HealthCare Solutions <enquiries@cosmichealthcaresolutions.com>` — this removes the "only sends to the account owner" restriction and looks more professional in the recipient's inbox.

The email template lives in `src/lib/contact-email-template.ts` — edit the HTML there to restyle it.

## Deployment (Netlify)

1. Push this repo to GitHub.
2. In Netlify: "Add new site" → import from GitHub → select this repo. Netlify auto-detects Next.js via `@netlify/plugin-nextjs` (configured in `netlify.toml`).
3. Deploy, verify the `*.netlify.app` preview, then connect the custom domain — see Phase 8 in `PROJECT-PLAN.md` for the exact GoDaddy DNS steps for `cosmichealthcaresolutions.com`.

## Notes for whoever picks this up next

- Component primitives (`src/components/ui/*`) are shadcn/ui components generated on **Base UI**, not Radix. When composing a primitive with a custom-styled child, use the `render` prop (e.g. `<SheetTrigger render={<Button .../>}>`), not `asChild`.
- To style a `<Link>`/`<a>` as a button, use `className={buttonVariants({ variant, size })}` directly — don't wrap it in `<Button asChild>`; Base UI's Button explicitly doesn't support rendering as a link.
- The contact form posts to `/api/contact`, which sends email via Resend. It works locally too as long as `RESEND_API_KEY` is set in `.env.local` — unlike the earlier Netlify Forms approach, it doesn't need a Netlify deploy to be testable.

import { services } from "@/data/services";
import type { ContactFormValues } from "@/lib/contact-schema";
import { COSMIC_LOGO_CONTENT_ID } from "@/lib/email-logo";

// Email clients do not support CSS variables, so the template's colours live here.
const emailColors = {
  page: "#f1f5f9",
  card: "#ffffff",
  border: "#e2e8f0",
  accent: "#2b5ea0",
  onAccent: "#ffffff",
  muted: "#56657a",
  text: "#0f172a",
  chip: "#e1ebf7",
  chipText: "#244f88",
  divider: "#e2e8f0",
  footer: "#f8fafc",
  footerText: "#56657a",
} as const;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function serviceLabel(slug: string) {
  return services.find((service) => service.slug === slug)?.title ?? "Something else";
}

// Defense in depth for any value that ends up in a single-line context (the email
// subject): strips newlines/control characters so a field can never inject extra
// header-like lines, even if upstream validation ever changes.
function toSafeSingleLine(value: string) {
  return value.replace(/[\r\n\t\x00-\x1f\x7f]+/g, " ").trim();
}

export function buildContactEmail(values: Omit<ContactFormValues, "company">) {
  const serviceTitle = escapeHtml(serviceLabel(values.serviceInterest));
  const name = escapeHtml(values.name);
  const phone = escapeHtml(values.phone);
  const email = escapeHtml(values.email);
  const message = escapeHtml(values.message).replace(/\n/g, "<br />");

  const subject = `New website enquiry from ${toSafeSingleLine(values.name)} — ${toSafeSingleLine(
    serviceLabel(values.serviceInterest)
  )}`;

  const html = `
  <div style="background:${emailColors.page};padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:${emailColors.card};border-radius:16px;overflow:hidden;border:1px solid ${emailColors.border};">
      <tr>
        <td bgcolor="${emailColors.accent}" style="background:${emailColors.accent};padding:22px 28px;">
          <table role="presentation" width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="width:60px;vertical-align:middle;">
                <table role="presentation" width="60" style="width:60px;background:${emailColors.card};border-radius:14px;border-collapse:collapse;">
                  <tr>
                    <td align="center" valign="middle" style="width:60px;height:60px;padding:8px;">
                      <img
                        src="cid:${COSMIC_LOGO_CONTENT_ID}"
                        width="44"
                        alt="Cosmic HealthCare Solutions"
                        style="display:block;width:44px;height:auto;border:0;outline:none;"
                      />
                    </td>
                  </tr>
                </table>
              </td>
              <td style="padding-left:16px;vertical-align:middle;">
                <p style="margin:0;color:${emailColors.onAccent};font-size:12px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.85;">
                  Cosmic HealthCare Solutions
                </p>
                <h1 style="margin:4px 0 0;color:${emailColors.onAccent};font-size:19px;font-weight:700;line-height:1.3;">
                  New website enquiry
                </h1>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:28px;">
          <table role="presentation" width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:${emailColors.muted};font-size:13px;width:120px;vertical-align:top;">Name</td>
              <td style="padding:8px 0;color:${emailColors.text};font-size:14px;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:${emailColors.muted};font-size:13px;vertical-align:top;">Phone</td>
              <td style="padding:8px 0;color:${emailColors.text};font-size:14px;">
                <a href="tel:${phone}" style="color:${emailColors.accent};text-decoration:none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:${emailColors.muted};font-size:13px;vertical-align:top;">Email</td>
              <td style="padding:8px 0;color:${emailColors.text};font-size:14px;">
                <a href="mailto:${email}" style="color:${emailColors.accent};text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:${emailColors.muted};font-size:13px;vertical-align:top;">Service</td>
              <td style="padding:8px 0;">
                <span style="display:inline-block;background:${emailColors.chip};color:${emailColors.chipText};font-size:12px;font-weight:600;padding:4px 10px;border-radius:999px;">${serviceTitle}</span>
              </td>
            </tr>
          </table>

          <div style="margin-top:20px;padding-top:20px;border-top:1px solid ${emailColors.divider};">
            <p style="margin:0 0 6px;color:${emailColors.muted};font-size:13px;">Message</p>
            <p style="margin:0;color:${emailColors.text};font-size:14px;line-height:1.6;">${message}</p>
          </div>

          <div style="margin-top:24px;">
            <a
              href="mailto:${email}"
              style="display:inline-block;background:${emailColors.accent};color:${emailColors.onAccent};text-decoration:none;font-size:14px;font-weight:600;padding:10px 18px;border-radius:8px;"
            >
              Reply to ${name}
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 28px;background:${emailColors.footer};border-top:1px solid ${emailColors.divider};">
          <p style="margin:0;color:${emailColors.footerText};font-size:12px;">
            Sent automatically from the enquiry form on cosmichealthcaresolutions.com
          </p>
        </td>
      </tr>
    </table>
  </div>`;

  const text = [
    "New website enquiry — Cosmic HealthCare Solutions",
    "",
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Service: ${serviceLabel(values.serviceInterest)}`,
    "",
    "Message:",
    values.message,
  ].join("\n");

  return { subject, html, text };
}

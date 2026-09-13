import { services } from "@/data/services";
import type { ContactFormValues } from "@/lib/contact-schema";
import { COSMIC_LOGO_CONTENT_ID } from "@/lib/email-logo";

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
  <div style="background:#f4f6f8;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e9ee;">
      <tr>
        <td bgcolor="#2563eb" style="background:linear-gradient(135deg,#173d8f,#2563eb 55%,#22b573);padding:22px 28px;">
          <table role="presentation" width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="width:60px;vertical-align:middle;">
                <table role="presentation" width="60" style="width:60px;background:#ffffff;border-radius:14px;border-collapse:collapse;">
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
                <p style="margin:0;color:#ffffff;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.85;">
                  Cosmic HealthCare Solutions
                </p>
                <h1 style="margin:4px 0 0;color:#ffffff;font-size:19px;font-weight:700;line-height:1.3;">
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
              <td style="padding:8px 0;color:#6b7280;font-size:13px;width:120px;vertical-align:top;">Name</td>
              <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:13px;vertical-align:top;">Phone</td>
              <td style="padding:8px 0;color:#111827;font-size:14px;">
                <a href="tel:${phone}" style="color:#2563eb;text-decoration:none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:13px;vertical-align:top;">Email</td>
              <td style="padding:8px 0;color:#111827;font-size:14px;">
                <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:13px;vertical-align:top;">Service</td>
              <td style="padding:8px 0;">
                <span style="display:inline-block;background:#eaf2ff;color:#1d4ed8;font-size:12px;font-weight:600;padding:4px 10px;border-radius:999px;">${serviceTitle}</span>
              </td>
            </tr>
          </table>

          <div style="margin-top:20px;padding-top:20px;border-top:1px solid #eef1f4;">
            <p style="margin:0 0 6px;color:#6b7280;font-size:13px;">Message</p>
            <p style="margin:0;color:#111827;font-size:14px;line-height:1.6;">${message}</p>
          </div>

          <div style="margin-top:24px;">
            <a
              href="mailto:${email}"
              style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:10px 18px;border-radius:8px;"
            >
              Reply to ${name}
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 28px;background:#f9fafb;border-top:1px solid #eef1f4;">
          <p style="margin:0;color:#9ca3af;font-size:12px;">
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

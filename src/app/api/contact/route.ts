import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { buildContactEmail } from "@/lib/contact-email-template";
import { siteConfig } from "@/data/site";
import {
  COSMIC_LOGO_BASE64,
  COSMIC_LOGO_CONTENT_ID,
  COSMIC_LOGO_FILENAME,
} from "@/lib/email-logo";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form fields and try again." },
      { status: 400 }
    );
  }

  // Honeypot: a filled-in "company" field means this came from a bot, not a real visitor.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — skipping email send.");
    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 500 }
    );
  }

  const fromAddress = process.env.CONTACT_FROM_EMAIL || "Cosmic HealthCare Solutions <onboarding@resend.dev>";
  const toAddress = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;

  const { name, phone, email, serviceInterest, message } = parsed.data;
  const { subject, html, text } = buildContactEmail({ name, phone, email, serviceInterest, message });

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject,
      html,
      text,
      attachments: [
        {
          filename: COSMIC_LOGO_FILENAME,
          content: Buffer.from(COSMIC_LOGO_BASE64, "base64"),
          contentId: COSMIC_LOGO_CONTENT_ID,
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send email right now." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return NextResponse.json({ error: "Could not send email right now." }, { status: 500 });
  }
}

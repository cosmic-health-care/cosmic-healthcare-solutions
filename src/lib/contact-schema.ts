import { z } from "zod";
import { services } from "@/data/services";

// Only these values are ever rendered in the <Select> on the form — anything else
// submitted to the API is rejected outright rather than escaped-and-trusted.
const serviceSlugs = services.map((service) => service.slug);
const serviceInterestValues = [...serviceSlugs, "other"] as unknown as [string, ...string[]];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Phone number can only contain digits, spaces, +, -, and ()")
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 7 && digits.length <= 15;
    }, "Please enter a valid phone number"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .max(254, "Email address is too long")
    .email("Please enter a valid email address"),
  serviceInterest: z.enum(serviceInterestValues, "Please select a service"),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few details about your requirement")
    .max(3000, "Message is too long — please keep it under 3000 characters"),
  // Honeypot field: real users never fill this in; bots that auto-fill every field do.
  // Deliberately unconstrained here — a non-empty value is checked explicitly by the
  // API route (which pretends to succeed) rather than rejected as a validation error.
  company: z.string().max(500),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

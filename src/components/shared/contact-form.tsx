"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/data/services";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { serviceInterest: "", company: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      reset();
    } catch (err) {
      console.error("Contact email request failed:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-10 text-brand-green-dark" />
        <h3 className="mt-4 font-heading text-lg font-semibold">Thanks for reaching out</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          We&apos;ve received your enquiry and will get back to you shortly.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      {/* Honeypot: hidden from real users, checked server-side in /api/contact */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input {...register("company")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" placeholder="+91 XXXXXXXXXX" {...register("phone")} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@hospital.com" {...register("email")} />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="serviceInterest">Service you&apos;re interested in</Label>
        <Controller
          control={control}
          name="serviceInterest"
          render={({ field }) => (
            <Select name="serviceInterest" value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="serviceInterest" className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.slug} value={service.slug}>
                    {service.title}
                  </SelectItem>
                ))}
                <SelectItem value="other">Something else</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.serviceInterest && (
          <p className="text-xs text-destructive">{errors.serviceInterest.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Tell us what you need</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Equipment, quantity, timeline, or any other details"
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
        Send Enquiry
      </Button>
      {status === "error" && (
        <p className="text-center text-sm text-destructive">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}

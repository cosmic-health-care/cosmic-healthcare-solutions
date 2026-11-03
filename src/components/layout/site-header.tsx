"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "cn";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BrandLogo } from "@/components/shared/brand-logo";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { siteConfig, whatsappLink } from "@/data/site";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

const ENQUIRY_MESSAGE = "Hi, I'd like to enquire about your services.";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-2xl border border-border bg-card/95 pr-3 pl-4 shadow-lg shadow-shadow backdrop-blur">
        <BrandLogo priority />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={whatsappLink(ENQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={buttonVariants({ variant: "whatsapp", size: "icon" })}
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <Link href="/contact" className={buttonVariants()}>
            Get a Quote
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu" />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2 px-4">
              <Link href="/contact" onClick={() => setOpen(false)} className={buttonVariants()}>
                Get a Quote
              </Link>
              <a
                href={whatsappLink(ENQUIRY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "whatsapp" })}
              >
                <WhatsAppIcon className="size-4" />
                Chat on WhatsApp
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

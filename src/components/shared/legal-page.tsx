import type { ReactNode } from "react";
import { PageHero } from "@/components/shared/page-hero";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero title={title} eyebrow="Legal" description={`Last updated: ${updated}`} />
      <section className="page-section">
        <div className="page-container">
          <div className="max-w-3xl space-y-8 leading-relaxed text-muted-foreground">{children}</div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground">{heading}</h2>
      <p className="mt-2">{children}</p>
    </div>
  );
}

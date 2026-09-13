import { Reveal, RevealItem, StaggerGroup } from "@/components/shared/reveal";

const capabilities = [
  "Anesthesia & OT Equipment",
  "Modular Hospital Design (MGPS/AHU)",
  "Patient Monitoring Systems",
  "Surgical Instruments & Consumables",
  "ICU & Hospital Furniture",
  "Critical Care Rental Equipment",
];

export function PartnerNetwork() {
  return (
    <section className="border-y border-border bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Sourced through our vetted manufacturer &amp; distributor network
          </p>
        </Reveal>
        <StaggerGroup className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {capabilities.map((item) => (
            <RevealItem
              key={item}
              whileHover={{ y: -2 }}
              className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground"
            >
              {item}
            </RevealItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

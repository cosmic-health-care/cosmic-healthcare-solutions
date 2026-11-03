import { Chip } from "@/components/shared/chip";
import { Reveal } from "@/components/shared/reveal";

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
    <Reveal className="mt-4 rounded-2xl border border-border bg-card p-6 text-center">
      <p className="text-sm text-muted-foreground">
        Sourced through our vetted manufacturer and distributor network
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {capabilities.map((capability) => (
          <Chip key={capability}>{capability}</Chip>
        ))}
      </div>
    </Reveal>
  );
}

import type { LucideIcon } from "lucide-react";
import { HeartPulse, Syringe, Armchair, Pill } from "lucide-react";

export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "equipment",
    title: "Hospital & Diagnostic Equipment",
    description:
      "Anesthesia, operation theatre, and modular hospital infrastructure equipment sourced through our partner network.",
    icon: HeartPulse,
    items: [
      "Anesthesia machines & workstations",
      "Ventilators & rotameters",
      "Patient monitoring systems",
      "Medical gas pipeline systems — regulators, flowmeters, outlets & alarms",
      "Modular OT suites, surgical tables & OT LED lighting",
      "Modular hospital design elements (MGPS, AHU)",
    ],
  },
  {
    slug: "surgical-consumables",
    title: "Surgical & Consumables",
    description:
      "Instruments, accessories, and consumables for cardiology, critical care, anesthesiology, surgery, gynecology, and neurology departments.",
    icon: Syringe,
    items: [
      "Surgical instruments & accessories",
      "Laryngoscopes (fiber optic, flexible & pediatric variants)",
      "SpO2 monitor accessories & sensors",
      "ECG cables & EKG accessories",
      "NIBP cuffs & oxygen sensors",
      "Humidifier bottles, suction & disposable supplies",
    ],
  },
  {
    slug: "furniture",
    title: "Hospital Furniture",
    description:
      "High-performance hospital furniture built for ICU, ward, and operation theatre environments.",
    icon: Armchair,
    items: [
      "ICU beds (manual & electric)",
      "Hospital & ward beds and accessories",
      "OT & examination tables",
      "Stretchers & recovery trolleys",
      "OT & examination lights",
      "Autoclave, suction & fogger machines",
      "Ward chairs & stools",
    ],
  },
  {
    slug: "pharma",
    title: "Pharma Products",
    description: "Institutional pharma distribution for hospitals, clinics, and nursing homes.",
    icon: Pill,
    items: ["Bulk institutional supply", "Documented, compliant sourcing", "Coordinated delivery"],
  },
];

export function getProductCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

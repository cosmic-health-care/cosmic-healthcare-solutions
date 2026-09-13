import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Scissors,
  Pill,
  ClipboardList,
  FileCheck2,
  Gauge,
  Package,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  heroPoints: string[];
  body: {
    heading: string;
    paragraphs: string[];
  };
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "equipment-supply",
    title: "Hospital Equipment Supply",
    shortDescription:
      "End-to-end sourcing and supply of hospital and diagnostic equipment from our vetted vendor network.",
    icon: Stethoscope,
    heroPoints: ["Wide equipment catalog", "Vetted vendor network", "Competitive pricing"],
    body: {
      heading: "One partner for your entire equipment list",
      paragraphs: [
        "Cosmic HealthCare Solutions sources critical care, diagnostic, and general-ward equipment through a vetted network of certified manufacturers and distributors, so you get a single point of contact instead of chasing multiple vendors.",
        "We handle vendor evaluation, specification matching to NABH/JCI procurement norms, price negotiation, and delivery coordination — reducing procurement time and risk for your facility.",
      ],
    },
    deliverables: [
      "Anesthesia machines, workstations & rotameters",
      "Modular OT suites, surgical tables & OT lighting",
      "Medical gas pipeline systems (regulators, flowmeters, alarms)",
      "Patient monitoring & ICU/critical care equipment",
    ],
  },
  {
    slug: "surgical-supplies",
    title: "Surgical Supplies & Consumables",
    shortDescription:
      "Reliable supply of surgical instruments, accessories, and consumables for daily OT operations.",
    icon: Scissors,
    heroPoints: ["Consistent stock availability", "Quality-checked consumables", "Bulk order support"],
    body: {
      heading: "Keep your operation theatre stocked, always",
      paragraphs: [
        "We supply surgical instruments, disposables, and OT accessories sourced from quality-assured manufacturers, helping hospitals and clinics avoid stock-outs during critical procedures.",
        "Our supply list spans cardiology, critical care, anesthesiology, surgery, gynecology, minimally invasive surgery, and neurology departments — with recurring supply agreements available for high-turnover consumables at predictable pricing and delivery schedules.",
      ],
    },
    deliverables: [
      "Surgical instruments & accessories",
      "Laryngoscopes (fiber optic, flexible & pediatric)",
      "Monitoring accessories — SpO2, ECG cables, NIBP cuffs, oxygen sensors",
      "Suction, humidifier bottles & disposable supplies",
    ],
  },
  {
    slug: "pharma-products",
    title: "Pharma Products",
    shortDescription:
      "Distribution of pharmaceutical products to hospitals, clinics, and nursing homes.",
    icon: Pill,
    heroPoints: ["Verified sourcing", "Reliable delivery", "Compliance-first handling"],
    body: {
      heading: "Dependable pharma distribution for institutional buyers",
      paragraphs: [
        "We support hospitals, nursing homes, and clinics with dependable sourcing and distribution of pharmaceutical products, backed by proper documentation and compliance handling.",
        "Get in touch to discuss your facility's ongoing or bulk pharma requirements.",
      ],
    },
    deliverables: [
      "Institutional bulk supply",
      "Documentation & compliance support",
      "Coordinated delivery scheduling",
    ],
  },
  {
    slug: "asset-management",
    title: "Equipment Asset Management",
    shortDescription:
      "Full lifecycle tracking of your medical equipment inventory — from procurement to decommissioning.",
    icon: ClipboardList,
    heroPoints: ["Asset lifecycle tracking", "NABH/JCI audit-ready records", "Preventive maintenance scheduling"],
    body: {
      heading: "Know the health of every asset in your facility",
      paragraphs: [
        "As a Bio Medical Engineering-led practice, we help hospitals maintain organized, audit-ready equipment asset registers — covering procurement records, service history, warranty status, and preventive maintenance schedules.",
        "This is especially valuable ahead of NABH and JCI accreditation audits, where documented equipment management is a core requirement.",
      ],
    },
    deliverables: [
      "Equipment inventory & tagging",
      "Preventive maintenance schedules",
      "Warranty & service history tracking",
      "Accreditation-ready documentation",
    ],
  },
  {
    slug: "amc-cmc-contracts",
    title: "AMC / CMC Contracts",
    shortDescription:
      "Annual and comprehensive maintenance contracts that keep your equipment running with minimal downtime.",
    icon: FileCheck2,
    heroPoints: ["Reduced downtime", "Predictable maintenance costs", "Scheduled preventive visits"],
    body: {
      heading: "Predictable uptime, predictable cost",
      paragraphs: [
        "Our AMC (Annual Maintenance Contract) and CMC (Comprehensive Maintenance Contract) plans cover scheduled preventive maintenance, breakdown support, and spares coordination for your critical hospital equipment.",
        "Contracts are tailored to your equipment mix and criticality — from single-device AMCs to facility-wide CMC coverage.",
      ],
    },
    deliverables: [
      "Scheduled preventive maintenance",
      "Breakdown response support",
      "Spares & parts coordination",
      "Flexible AMC/CMC tiers",
    ],
  },
  {
    slug: "calibration",
    title: "Calibration Services",
    shortDescription:
      "NABH & JCI-norm calibration services to keep your diagnostic and monitoring equipment accurate and compliant.",
    icon: Gauge,
    heroPoints: ["NABH/JCI-norm calibration", "Certified calibration records", "Scheduled recall reminders"],
    body: {
      heading: "Accuracy your patients — and auditors — can trust",
      paragraphs: [
        "Regular calibration of diagnostic and monitoring equipment is essential for patient safety and accreditation compliance. We provide calibration services aligned with NABH and JCI norms, with proper documentation for every device.",
        "We can also help set up a recurring calibration schedule so due dates are never missed.",
      ],
    },
    deliverables: [
      "NABH/JCI-norm calibration",
      "Calibration certificates & records",
      "Recurring calibration scheduling",
    ],
  },
  {
    slug: "rental",
    title: "Equipment Rental",
    shortDescription:
      "Short and long-term rental of critical care and sleep study equipment for flexible capacity needs.",
    icon: Package,
    heroPoints: ["Short & long-term rental", "Critical care equipment", "Sleep study equipment"],
    body: {
      heading: "Scale up capacity without capital expense",
      paragraphs: [
        "Whether you need surge capacity, a temporary replacement unit, or equipment for a diagnostic sleep study, our rental service gives you flexible access to critical care equipment without a full purchase commitment.",
        "Sales, service, and rental are handled by the same team — so support doesn't stop once the equipment is on-site.",
      ],
    },
    deliverables: [
      "Critical care equipment rental",
      "Sleep study equipment rental",
      "Short-term & long-term terms",
      "On-site setup support",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

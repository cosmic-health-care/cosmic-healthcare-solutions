import type { LucideIcon } from "lucide-react";
import {
  HeartPulse,
  Syringe,
  Wind,
  Cable,
  Package,
  Activity,
  Armchair,
  Pill,
} from "lucide-react";

export type ProductGroup = {
  title: string;
  items: string[];
};

export type ProductPackage = {
  title: string;
  description: string;
  items: string[];
};

export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Short teaser list shown on the /products grid card. */
  items: string[];
  /** Optional catalogue-style tagline shown on the detail page hero. */
  tagline?: string;
  /** Optional condensed "quick glance" list of everything available, shown as chips on the detail page. */
  quickList?: string[];
  /** Optional grouped breakdown (rendered as an accordion) for categories with many items. */
  groups?: ProductGroup[];
  /** Optional bundled packages (e.g. home-care packages combining several items). */
  packages?: ProductPackage[];
  /** Optional row of service guarantees shown near the bottom of the detail page. */
  serviceHighlights?: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "equipment",
    title: "Hospital and Critical Care Equipments",
    description:
      "Anesthesia, operation theatre, and critical care equipment sourced through our partner network.",
    icon: HeartPulse,
    items: [
      "Anesthesia machines & workstations",
      "Ventilators & rotameters",
      "Patient monitoring systems",
      "ICU & critical care equipment",
    ],
  },
  {
    slug: "surgical-consumables",
    title: "Surgical & Consumables",
    description:
      "Orthopedic implants and trauma fixation systems for fracture repair, joint reconstruction, and spine procedures.",
    icon: Syringe,
    items: [
      "Trauma fixation implants — plates, screws & nails",
      "Joint replacement implants (hip, knee & shoulder)",
      "Spine implants & fixation systems",
      "External fixators & bone cement",
      "Titanium, stainless steel & cobalt-chrome implant systems",
    ],
  },
  {
    slug: "mgpl",
    title: "MGPL — Medical Gas Pipeline",
    description:
      "Medical gas pipeline systems and modular operation theatre infrastructure.",
    icon: Wind,
    items: [
      "Medical gas pipeline systems — regulators, flowmeters, outlets & alarms",
      "Modular OT suites, surgical tables & OT LED lighting",
      "Humidifier bottles, suction & disposable supplies",
    ],
  },
  {
    slug: "accessories-spare-parts",
    title: "Accessories & Spare Parts",
    description:
      "Monitoring accessories, sensors, and replacement spare parts to keep your equipment running.",
    icon: Cable,
    items: [
      "SpO2 monitor accessories & sensors",
      "ECG cables & EKG accessories",
      "NIBP cuffs & oxygen sensors",
      "Bulbs, batteries, components & consumables",
    ],
  },
  {
    slug: "rental-equipment",
    title: "Rental Equipment",
    description:
      "Medical equipment on rental for hospitals, clinics, nursing homes, home ICU care, post-operative recovery, and long-term patient care across Kalaburagi and North Karnataka.",
    icon: Package,
    items: [
      "Oxygen concentrators & ventilators",
      "BiPAP/CPAP machines",
      "Patient monitors & ECG machines",
      "Hospital & ICU beds",
      "Wheelchairs & mobility aids",
      "Infusion & syringe pumps",
    ],
    tagline: "Reliable Equipment · Professional Service · Technical Support",
    quickList: [
      "Oxygen Concentrators",
      "Ventilators",
      "BiPAP/CPAP",
      "Patient Monitors",
      "Suction Machines",
      "Hospital Beds",
      "ICU Beds",
      "Air Mattresses",
      "Wheelchairs",
      "Infusion Pumps",
      "Syringe Pumps",
      "DVT Pumps",
      "ECG Machines",
      "Defibrillators",
      "Baby Warmers",
      "Phototherapy Units",
      "Surgical Equipment & More",
    ],
    groups: [
      {
        title: "Respiratory & Oxygen Equipment",
        items: [
          "Oxygen Concentrator — 5 LPM",
          "Oxygen Concentrator — 10 LPM",
          "Portable Oxygen Concentrator",
          "Oxygen Cylinder — various capacities",
          "CPAP Machine",
          "Auto CPAP Machine",
          "BiPAP Machine",
          "HFNC Machine",
          "Portable Ventilator",
          "ICU Ventilator",
          "Nebulizer Machine",
          "Suction Machine — single jar",
          "Suction Machine — double jar",
          "Air/Oxygen Flowmeter",
          "Oxygen Regulator & Accessories",
        ],
      },
      {
        title: "Patient Monitoring Equipment",
        items: [
          "3-Parameter Patient Monitor",
          "5-Parameter Patient Monitor",
          "Multiparameter Monitor",
          "ECG Machine — 3/6/12 channel",
          "Pulse Oximeter",
          "NIBP Monitor",
          "Holter Monitor",
          "ABPM Machine",
          "Capnography Monitor",
        ],
      },
      {
        title: "ICU & Critical Care Equipment",
        items: [
          "ICU Ventilator",
          "Transport Ventilator",
          "Defibrillator",
          "AED",
          "HFNC",
          "Infusion Pump",
          "Syringe Pump",
          "Feeding Pump",
          "DVT Pump",
          "Air Compressor",
          "Medical Air/Oxygen Accessories",
        ],
      },
      {
        title: "Hospital Beds & Patient Care",
        items: [
          "Manual Hospital Bed",
          "Fowler Bed — 2 function",
          "Fowler Bed — 3 function",
          "Semi-Electric Hospital Bed",
          "Fully Electric ICU Bed",
          "Electric ICU Bed with 5 functions",
          "Pediatric Bed",
          "Examination Couch",
          "Bedside Locker",
          "Over-Bed Table",
          "Patient Transfer Trolley",
          "Stretcher Trolley",
        ],
      },
      {
        title: "Anti-Bedsore & Patient Support",
        items: [
          "Air Mattress — bubble type",
          "Air Mattress — alternating pressure",
          "ICU Air Mattress",
          "Pressure Relief Mattress",
          "Patient Positioning Supports",
        ],
      },
      {
        title: "Mobility & Rehabilitation",
        items: [
          "Standard Wheelchair",
          "Reclining Wheelchair",
          "Commode Wheelchair",
          "Motorized/Electric Wheelchair",
          "Walker",
          "Folding Walker",
          "Walking Stick",
          "Crutches",
          "Patient Transfer Chair",
          "CPM Machine",
          "Physiotherapy Equipment",
        ],
      },
      {
        title: "Infusion & Medication Delivery",
        items: [
          "Syringe Infusion Pump",
          "Volumetric Infusion Pump",
          "PCA Pump",
          "Feeding Pump",
          "Infusion Stand",
          "IV Fluid Warmer",
        ],
      },
      {
        title: "Neonatal & Pediatric Equipment",
        items: [
          "Baby Warmer",
          "Phototherapy Unit",
          "Neonatal Pulse Oximeter",
          "Pediatric/Neonatal Monitor",
          "Infant Incubator",
          "Bilirubin/Neonatal Accessories",
        ],
      },
      {
        title: "Surgical & Hospital Equipment",
        items: [
          "Electrosurgical Unit / Cautery",
          "Operating Table",
          "OT Light",
          "Surgical Suction",
          "Patient Warmer",
          "Tourniquet Machine",
          "Minor OT Equipment",
          "Surgical Instrument Sets",
        ],
      },
    ],
    packages: [
      {
        title: "Basic Home Care Package",
        description: "For general home recovery and long-term patient care.",
        items: ["Hospital Bed", "Air Mattress", "Wheelchair", "Oxygen Concentrator", "Suction Machine"],
      },
      {
        title: "Respiratory Care Package",
        description: "For patients needing ongoing respiratory support at home.",
        items: ["Oxygen Concentrator", "BiPAP/CPAP", "Suction Machine", "Pulse Oximeter", "Nebulizer"],
      },
      {
        title: "Home ICU Package",
        description: "Our most comprehensive setup — hospital-grade critical care at home.",
        items: [
          "Electric ICU Bed",
          "Air Mattress",
          "10 LPM Oxygen Concentrator",
          "BiPAP/CPAP",
          "Patient Monitor",
          "Suction Machine",
          "Infusion Pump",
          "Syringe Pump",
          "Ventilator (where clinically appropriate)",
        ],
      },
    ],
    serviceHighlights: [
      "Technical Installation",
      "Preventive Maintenance",
      "Breakdown Support",
      "Delivery & Pickup",
    ],
  },
  {
    slug: "diagnostic-equipment",
    title: "Diagnostic Equipment",
    description:
      "Imaging, cardiac, and laboratory diagnostic equipment for accurate, timely patient assessment.",
    icon: Activity,
    items: [
      "X-ray & imaging systems",
      "Ultrasound (USG) machines",
      "ECG & cardiac diagnostic equipment",
      "Endoscopy systems",
      "Laboratory & pathology diagnostic equipment",
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

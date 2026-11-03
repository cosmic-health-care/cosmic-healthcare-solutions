// Medical gas pipeline (MGPL), modular OT and anaesthesia catalogue, compiled from our
// authorised partner's published catalogue. Images live in /public/mgpl/<group-slug>/<code>.webp.
import type { CatalogGroup } from "@/data/catalog-types";

export const mgplGroups: CatalogGroup[] = [
  {
    title: "Source Equipment, Manifolds & Control Panels",
    products: [
      {
        code: "CHC-MSE-01",
        name: "Vacuum Pump & Receiver Tank",
        specs: "Medical vacuum plant with receiver tank for central suction supply",
        image: "/mgpl/source-equipment-control-panels/chc-mse-01.webp",
        description: "Medical vacuum source plant feeding the hospital-wide suction pipeline network, supplied as part of a complete MGPS installation.",
        details: [
          { label: "System", value: "Medical vacuum plant" },
          { label: "Application", value: "Central suction pipeline" },
          { label: "Standards", value: "HTM 02-01, NFPA 99, BS EN ISO 7396-1, EN 737-3, IS 12827" },
        ],
      },
      {
        code: "CHC-MSE-02",
        name: "Medical Compressed Air Plant & Dryer",
        specs: "Medical air compressor plant with desiccant dryer",
        image: "/mgpl/source-equipment-control-panels/chc-mse-02.webp",
        description: "Medical air compressor system with desiccant dryers providing clean, dry medical and instrument air to the pipeline distribution network.",
        details: [
          { label: "System", value: "Medical air compressor with desiccant dryer" },
          { label: "Application", value: "Medical & instrument air" },
          { label: "Standards", value: "HTM 02-01, NFPA 99, BS EN ISO 7396-1, EN 737-3, IS 12827" },
        ],
      },
      {
        code: "CHC-MSE-03",
        name: "Automatic O2 & O2/N2O Semi-Automatic Control Panels",
        specs: "Gas control panels with automatic / semi-automatic manifold changeover",
        image: "/mgpl/source-equipment-control-panels/chc-mse-03.webp",
        description: "Medical gas control panels for oxygen and nitrous oxide cylinder manifolds with automatic or semi-automatic changeover, for single- or double-stage systems.",
        details: [
          { label: "Gases", value: "O2, N2O" },
          { label: "Changeover", value: "Automatic / semi-automatic" },
          { label: "Configuration", value: "Single or double stage" },
        ],
      },
      {
        code: "CHC-MSE-04",
        name: "Copper Tail Pipe, SS Flexible Tail Pipe & Automatic Oxygen Digital Control Panel",
        specs: "Cylinder tail pipes with a digital automatic oxygen control panel",
        image: "/mgpl/source-equipment-control-panels/chc-mse-04.webp",
        description: "Copper and stainless-steel flexible tail pipes for connecting cylinders to the manifold, together with a digital automatic oxygen control panel.",
        details: [
          { label: "Tail pipes", value: "Copper / SS flexible" },
          { label: "Control panel", value: "Automatic oxygen, digital display" },
        ],
      },
      {
        code: "CHC-MSE-05",
        name: "Oxygen & N2O Detachable Middle Frame",
        specs: "Detachable manifold middle frames for oxygen and nitrous oxide",
        image: "/mgpl/source-equipment-control-panels/chc-mse-05.webp",
        description: "Detachable middle frames for oxygen and nitrous oxide cylinder manifolds.",
        details: [
          { label: "Gases", value: "O2, N2O" },
          { label: "Type", value: "Detachable manifold frame" },
        ],
      },
      {
        code: "CHC-MSE-06",
        name: "Cylinder Operating Wrenches",
        specs: "Keys and spanners for opening and closing medical gas cylinder valves",
        image: "/mgpl/source-equipment-control-panels/chc-mse-06.webp",
        description: "Cylinder operating wrenches and keys for medical gas cylinder valves at the manifold room.",
        details: [
          { label: "Use", value: "Medical gas cylinder valves" },
        ],
      },
    ],
  },
  {
    title: "Copper Pipeline, Fittings & Valves",
    products: [
      {
        code: "CHC-MPF-01",
        name: "Medical Copper Gas Pipeline Layout & Down Drop",
        specs: "Medical-grade copper pipework with ward down drops",
        image: "/mgpl/pipeline-fittings-valves/chc-mpf-01.webp",
        description: "Pipeline distribution network using medical-grade copper tube conforming to DIN EN 13348 / ASTM B 819, with down drops to terminal units.",
        details: [
          { label: "Material", value: "Medical-grade copper tube" },
          { label: "Tube standard", value: "DIN EN 13348, ASTM B 819" },
          { label: "Standards", value: "HTM 02-01, NFPA 99, BS EN ISO 7396-1, EN 737-3, IS 12827" },
        ],
      },
      {
        code: "CHC-MPF-02",
        name: "Copper Fittings, Zonal Valve Box & Isolation Ball Valve",
        specs: "Copper fittings, AVSU zonal valve boxes and quarter-turn isolation valves",
        image: "/mgpl/pipeline-fittings-valves/chc-mpf-02.webp",
        description: "Copper fittings plus zonal valve boxes (AVSU) and quarter-turn, full-ported ball-type isolation valves for controlling gas supply to each zone.",
        details: [
          { label: "Valve type", value: "Quarter-turn, full-ported ball valve" },
          { label: "Valve box", value: "Zonal (AVSU)" },
        ],
      },
      {
        code: "CHC-MPF-03",
        name: "Medical SS Gas Pipeline Layout, Digital Gas Alarm, BOC Outlet & Manifold",
        specs: "Stainless-steel pipeline layout with digital alarm, BOC-type outlet and manifold",
        image: "/mgpl/pipeline-fittings-valves/chc-mpf-03.webp",
        description: "Stainless-steel medical gas pipeline layout shown with a microprocessor digital medical gas alarm, BOC-type gas outlet and cylinder manifold.",
        details: [
          { label: "Pipeline", value: "Stainless steel" },
          { label: "Alarm", value: "Microprocessor digital" },
          { label: "Outlet", value: "BOC type" },
        ],
      },
      {
        code: "CHC-MPF-04",
        name: "O2/N2O/Air/Vacuum High Pressure Tube",
        specs: "Colour-coded high-pressure hoses for medical gases and vacuum",
        image: "/mgpl/pipeline-fittings-valves/chc-mpf-04.webp",
        description: "High-pressure hose assemblies for oxygen, nitrous oxide, medical air and vacuum services.",
        details: [
          { label: "Gases", value: "O2, N2O, Air, Vacuum" },
          { label: "Type", value: "High-pressure hose" },
        ],
      },
      {
        code: "CHC-MPF-05",
        name: "Ferrule Punch & Jubilee Clamp",
        specs: "Hose ferrule punch and jubilee (worm-drive) clamps",
        image: "/mgpl/pipeline-fittings-valves/chc-mpf-05.webp",
        description: "Ferrule punch and jubilee clamps for securing medical gas hose connections.",
        details: [
          { label: "Use", value: "Hose termination & clamping" },
        ],
      },
      {
        code: "CHC-MPF-06",
        name: "Plastic Saddle, Metal Saddle & Plastic Push-Type Saddle",
        specs: "Pipe saddles and supports for copper pipeline runs",
        image: "/mgpl/pipeline-fittings-valves/chc-mpf-06.webp",
        description: "Plastic, metal and push-type saddles for supporting and fixing copper pipeline runs.",
        details: [
          { label: "Types", value: "Plastic, metal, plastic push-type" },
        ],
      },
    ],
  },
  {
    title: "Gas Outlets, Alarms & Bed Head Panels",
    products: [
      {
        code: "CHC-MGO-01",
        name: "Medical Gas Outlets — ESAB M70, Penlon, MRI Compatible, BS & PB Amico Types",
        specs: "Terminal units in multiple international standards, including MRI-compatible",
        image: "/mgpl/gas-outlets-alarms-bed-head-panels/chc-mgo-01.webp",
        description: "Medical gas terminal units (outlets) — ESAB type M70, Penlon type, MRI-compatible Emerald, BS and PB Amico types — compliant with BS EN ISO 9170-1 and BS EN 737-1.",
        details: [
          { label: "Types", value: "ESAB M70, Penlon, MRI Emerald, BS, PB Amico" },
          { label: "Standards", value: "BS EN ISO 9170-1, BS EN 737-1" },
        ],
      },
      {
        code: "CHC-MGO-02",
        name: "Microprocessor Medical Gas Alarm & Digital Medical Gas Alarm",
        specs: "Area and plant warning systems for gas pressure monitoring",
        image: "/mgpl/gas-outlets-alarms-bed-head-panels/chc-mgo-02.webp",
        description: "Microprocessor-based medical gas alarms and digital area alarm systems that monitor pressure deviations across the gas and vacuum network.",
        details: [
          { label: "Type", value: "Microprocessor / digital" },
          { label: "Function", value: "Area & plant pressure alarm" },
        ],
      },
      {
        code: "CHC-MGO-03",
        name: "Mobile Pendant Trolley & Bed Head Panels (Plus, Control & Backup)",
        specs: "Mobile pendant trolley and bed head panels in three variants",
        image: "/mgpl/gas-outlets-alarms-bed-head-panels/chc-mgo-03.webp",
        description: "Mobile pendant trolley with bed head panels in Plus, Control and Backup variants, for gas, power and data at the bedside (ISO 11197).",
        details: [
          { label: "Variants", value: "Plus, Control, Backup" },
          { label: "Standard", value: "ISO 11197" },
        ],
      },
      {
        code: "CHC-MGO-04",
        name: "Modular Concealed Bed Head Panel with IT & Power Source",
        specs: "Concealed bed head panel integrating gas outlets, IT and power",
        image: "/mgpl/gas-outlets-alarms-bed-head-panels/chc-mgo-04.webp",
        description: "Modular concealed bed head panel integrating medical gas outlets with IT and power sockets.",
        details: [
          { label: "Integration", value: "Gas outlets, IT & power" },
          { label: "Standard", value: "ISO 11197" },
        ],
      },
      {
        code: "CHC-MGO-05",
        name: "Brass Forged 'S' Bracket & Oxygen Flowmeter",
        specs: "Forged brass wall bracket with oxygen flowmeter",
        image: "/mgpl/gas-outlets-alarms-bed-head-panels/chc-mgo-05.webp",
        description: "Brass forged 'S' bracket for mounting, supplied with an oxygen flowmeter.",
        details: [
          { label: "Material", value: "Forged brass" },
          { label: "Gas", value: "Oxygen" },
        ],
      },
    ],
  },
  {
    title: "Oxygen Therapy, Regulators & Suction",
    products: [
      {
        code: "CHC-MOS-01",
        name: "Ward Vacuum Regulator",
        specs: "Wall-mounted vacuum regulator for ward suction",
        image: "/mgpl/oxygen-therapy-suction/chc-mos-01.webp",
        description: "Ward vacuum regulator connected to the pipeline vacuum outlet for patient suction therapy.",
        details: [
          { label: "Use", value: "Ward suction" },
          { label: "Connection", value: "Pipeline vacuum outlet" },
        ],
      },
      {
        code: "CHC-MOS-02",
        name: "Oxygen BPC Flowmeter & Humidifier Bottle",
        specs: "Bubble-type oxygen flowmeter with humidifier bottle",
        image: "/mgpl/oxygen-therapy-suction/chc-mos-02.webp",
        description: "Oxygen BPC flowmeter with humidifier bottle for oxygen therapy from the pipeline outlet.",
        details: [
          { label: "Gas", value: "Oxygen" },
          { label: "Accessory", value: "Humidifier bottle" },
        ],
      },
      {
        code: "CHC-MOS-03",
        name: "Oxygen Double Stage Regulator, F.A Valve & MOX Regulator",
        specs: "Cylinder regulators and valves for oxygen supply",
        image: "/mgpl/oxygen-therapy-suction/chc-mos-03.webp",
        description: "Oxygen double-stage regulator, F.A valve and MOX regulator for cylinder-based oxygen supply.",
        details: [
          { label: "Gas", value: "Oxygen" },
          { label: "Regulator", value: "Double stage" },
        ],
      },
      {
        code: "CHC-MOS-04",
        name: "Theatre Suction Unit",
        specs: "Pipeline-connected suction unit for operation theatres",
        image: "/mgpl/oxygen-therapy-suction/chc-mos-04.webp",
        description: "Theatre suction unit connected to the medical vacuum pipeline for surgical suction.",
        details: [
          { label: "Use", value: "Operation theatre suction" },
        ],
      },
    ],
  },
  {
    title: "Modular OT & Hospital Equipment",
    products: [
      {
        code: "CHC-MOT-01",
        name: "LED Mobile Spot Light, C-Arm Compatible & Manual Hydraulic OT Tables",
        specs: "LED mobile spot light with C-arm compatible and manual hydraulic OT tables",
        image: "/mgpl/modular-ot-equipment/chc-mot-01.webp",
        description: "LED mobile spot light, C-arm compatible manually hydraulic OT table and manually hydraulic OT table for operation theatres.",
        details: [
          { label: "Lighting", value: "LED mobile spot light" },
          { label: "OT tables", value: "C-arm compatible / manual hydraulic" },
        ],
      },
      {
        code: "CHC-MOT-02",
        name: "S.S. Scrub Station",
        specs: "Stainless-steel surgical scrub station",
        image: "/mgpl/modular-ot-equipment/chc-mot-02.webp",
        description: "Stainless-steel scrub station for pre-operative surgical hand washing.",
        details: [
          { label: "Material", value: "Stainless steel" },
        ],
      },
      {
        code: "CHC-MOT-03",
        name: "Manual & Sensor Scrub Station (2+2)",
        specs: "Two-bay scrub stations with manual or sensor-operated taps",
        image: "/mgpl/modular-ot-equipment/chc-mot-03.webp",
        description: "Two-bay (2+2) surgical scrub stations available with manual or sensor-operated taps.",
        details: [
          { label: "Configuration", value: "2+2" },
          { label: "Operation", value: "Manual / sensor" },
        ],
      },
      {
        code: "CHC-MOT-04",
        name: "Ventilator Trolley",
        specs: "Mobile trolley for ventilators",
        image: "/mgpl/modular-ot-equipment/chc-mot-04.webp",
        description: "Mobile trolley for mounting and moving ventilators.",
        details: [
          { label: "Use", value: "Ventilator mounting & transport" },
        ],
      },
      {
        code: "CHC-MOT-05",
        name: "Vaporizer",
        specs: "Anaesthetic agent vaporizer",
        image: "/mgpl/modular-ot-equipment/chc-mot-05.webp",
        description: "Anaesthetic vaporizer for use with anaesthesia workstations.",
        details: [
          { label: "Use", value: "Anaesthesia workstations" },
        ],
      },
      {
        code: "CHC-MOT-06",
        name: "Medical Hand Dryer",
        specs: "Hand dryer for OT and clinical areas",
        image: "/mgpl/modular-ot-equipment/chc-mot-06.webp",
        description: "Medical hand dryer for operation theatres and clinical areas.",
        details: [
          { label: "Use", value: "OT & clinical areas" },
        ],
      },
      {
        code: "CHC-MOT-07",
        name: "Cabin Combo Project",
        specs: "Cabin combo installation",
        image: "/mgpl/modular-ot-equipment/chc-mot-07.webp",
        description: "Cabin combo installation delivered as part of modular hospital infrastructure projects.",
      },
    ],
  },
  {
    title: "Anaesthesia Workstations",
    products: [
      {
        code: "CHC-MAW-01",
        name: "JM 909 Anaesthesia System",
        specs: "Adult/paediatric anaesthesia workstation with 10.1\" LCD, VCV/SIMV/Manual modes",
        image: "/mgpl/anaesthesia-workstations/chc-maw-01.webp",
        description: "Anaesthesia workstation with integrated breathing circuit and APL valve, one high-precision Selectatec vaporizer, real-time loops, Paw, BPM, VT and compliance monitoring, and ACGO for T/Bain circuits (optional). Hypoxic guard with N2O cut-off keeps O2 above 25%.",
        details: [
          { label: "Display", value: "10.1\" LCD — P-T, F-T, V-T waveforms" },
          { label: "Ventilation modes", value: "VCV, SIMV, Manual, Standby" },
          { label: "Tidal volume", value: "20–1500 ml" },
          { label: "Respiration rate", value: "1–100 bpm (1–40 bpm under SIMV)" },
          { label: "Pressure range", value: "5–60 cmH2O" },
          { label: "I:E range", value: "4:1 – 1:8" },
          { label: "Gas supply", value: "O2, N2O, Air (optional); 280–600 kPa" },
          { label: "Flowmeter", value: "4 tubes, cascade 0–15 L/min" },
          { label: "CO2 absorber", value: "2 L" },
          { label: "Battery", value: "≥ 180 min" },
          { label: "Power", value: "AC 110–240 V, 50/60 Hz" },
          { label: "Dimensions / weight", value: "70 × 85 × 140 cm, 65 kg" },
        ],
      },
      {
        code: "CHC-MAW-02",
        name: "JM 910 Anaesthesia System",
        specs: "Adult/paediatric anaesthesia workstation with 10.1\" LCD, VCV/A-C/SIMV/PCV modes",
        image: "/mgpl/anaesthesia-workstations/chc-maw-02.webp",
        description: "Advanced anaesthesia workstation with integrated breathing circuit and APL valve, Selectatec vaporizer mount (1 or 2), P-V/V-F/F-P loops, automatic calibration, ACGO for T/Bain circuits and a yoke system for up to 3 backup cylinders.",
        details: [
          { label: "Display", value: "10.1\" LCD — waveforms & P-V, V-F, F-P loops" },
          { label: "Ventilation modes", value: "VCV, A/C, SIMV, PCV, Manual, Standby" },
          { label: "Tidal volume", value: "20–1500 ml" },
          { label: "Respiration rate", value: "1–100 bpm (1–40 bpm under SIMV)" },
          { label: "Pressure range", value: "5–60 cmH2O" },
          { label: "I:E range", value: "4:1 – 1:8" },
          { label: "Flowmeter", value: "4/5 tubes, cascade 0.1–15 L/min" },
          { label: "Monitoring", value: "VT, MV, BPM, Paw, compliance, plateau, FiO2" },
          { label: "Backup cylinders", value: "Up to 3 (A-type, 11 L)" },
          { label: "Battery", value: "≥ 180 min" },
          { label: "Power", value: "AC 110–240 V, 50 Hz ±2%" },
          { label: "Dimensions / weight", value: "70 × 85 × 140 cm, 65 kg" },
        ],
      },
    ],
  },
];

export const mgplProductCount = mgplGroups.reduce(
  (total, group) => total + group.products.length,
  0
);

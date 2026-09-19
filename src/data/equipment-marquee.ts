export type MarqueeItem = {
  image: string;
  name: string;
  category: string;
};

// Row 1 — one representative item from each Hospital Furniture subcategory.
export const marqueeRowFurniture: MarqueeItem[] = [
  { image: "/furniture/sc-1010.png", name: "Electric ICU Bed", category: "ICU & Hospital Beds" },
  { image: "/furniture/sc-2030.jpg", name: "Bed Side Locker", category: "Bedside Furniture" },
  { image: "/furniture/sc-2040.png", name: "Crash Cart", category: "Trolleys & Transport" },
  { image: "/furniture/sc-2073.jpg", name: "Examination Table", category: "Examination Tables" },
  { image: "/furniture/sc-2093.png", name: "Wheel Chair", category: "Seating & Mobility" },
  { image: "/furniture/sc-2091.jpg", name: "Bed Side Screen", category: "Ward & Utility" },
  { image: "/furniture/sc-3018.png", name: "OT Table Electric", category: "OT Tables" },
  { image: "/furniture/sc-3030.png", name: "LED OT Light", category: "OT Lighting" },
  { image: "/furniture/sc-3014.png", name: "Autoclave", category: "Sterilization" },
  { image: "/furniture/sc-3012.png", name: "OT Scrub Station", category: "Scrub Stations" },
  { image: "/furniture/sc-3054.png", name: "Anesthesia Machine", category: "Anesthesia" },
];

// Row 2 — the featured Surgical & Consumables / respiratory care items.
export const marqueeRowSurgical: MarqueeItem[] = [
  { image: "/surgical/chc-rc-101.jpg", name: "NIV Window Mask", category: "Respiratory Care" },
  { image: "/surgical/chc-rc-102.png", name: "NIV Window Mask (Vented)", category: "Respiratory Care" },
  { image: "/surgical/chc-rc-103.jpeg", name: "Ventilated Circuit", category: "Respiratory Care" },
  { image: "/surgical/chc-rc-104.jpg", name: "Disposable Circuit", category: "Respiratory Care" },
  { image: "/surgical/chc-rc-105.jpg", name: "Spirometer", category: "Respiratory Care" },
  { image: "/surgical/chc-rc-106.jpeg", name: "Nasal Cannula", category: "Oxygen Therapy" },
  { image: "/surgical/chc-rc-107.jpg", name: "Silicon Mask", category: "Anesthesia & Airway" },
  { image: "/surgical/chc-rc-108.png", name: "Blood Tubing Set", category: "Surgical Consumables" },
  { image: "/surgical/chc-rc-109.png", name: "Disposable Pencil", category: "Surgical Consumables" },
];

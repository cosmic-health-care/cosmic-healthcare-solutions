export const siteConfig = {
  name: "Cosmic HealthCare Solutions",
  shortName: "Cosmic HealthCare",
  tagline: "Sales · Service · Rental",
  description:
    "Cosmic HealthCare Solutions is a Kalaburagi-based medical equipment distributor supplying hospital equipment, surgical supplies, and pharma products, with asset management, AMC/CMC contracts, calibration, and rental services.",
  url: "https://cosmichealthcaresolutions.com",
  founder: {
    name: "Basavaraj Angadi",
    title: "Bio Medical Engineer & Founder",
  },
  contact: {
    phones: ["+91 8050404143", "+91 9538318834"],
    phoneLinks: ["+918050404143", "+919538318834"],
    whatsapp: "918050404143",
    email: "cosmichealthcares@gmail.com",
    gst: "29AOBPA5825J2ZY",
    address: {
      line1: "Plot No. 61, Siddhaganga Nilaya, Near VKG Nivas",
      line2: "Naganahalli PTC Road, Jamashetty Nagar",
      city: "Kalaburagi",
      state: "Karnataka",
      pincode: "585102",
      country: "India",
    },
  },
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.contact.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

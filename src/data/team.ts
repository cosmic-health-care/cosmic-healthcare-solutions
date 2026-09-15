export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string[];
  highlights: string[];
  quote?: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "basavaraj-angadi",
    name: "Basavaraj Angadi",
    role: "Founder & Biomedical Engineer",
    photo: "/team/basavaraj-angadi.jpg",
    bio: [
      "Basavaraj Angadi is a Biomedical Engineer and the founder of Cosmic HealthCare Solutions, bringing more than 12 years of professional experience in biomedical engineering, hospital medical equipment management, procurement, installation, commissioning, calibration, preventive maintenance, and hospital project support.",
      "His professional journey includes experience with Vaatsalya Group of Hospitals, Manipal Hospital, Narayana Hospital, and hospital project-based assignments — covering biomedical operations, procurement, installation, commissioning, facility support, and hospital equipment management.",
      "With hands-on hospital experience and exposure to international medical equipment developments, including participation in CMEF Shanghai 2025, he leads Cosmic HealthCare Solutions in connecting hospitals with reliable technology, professional biomedical engineering support, and responsive after-sales service.",
    ],
    highlights: ["12+ years experience", "Biomedical Engineer", "CMEF Shanghai 2025"],
    quote:
      "The right equipment, the right technical solution and the right service — for better healthcare.",
  },
  {
    slug: "anand-angadi",
    name: "Anand Angadi",
    role: "Project Coordinator & Procurement Manager",
    photo: "/team/anand-angadi.jpg",
    bio: [
      "Anand Angadi leads project coordination and procurement at Cosmic HealthCare Solutions, bringing over 6 years of experience in procurement and supply chain management across the healthcare, industrial, and aerospace sectors.",
      "His expertise spans end-to-end procure-to-pay processes, vendor management, cost negotiation, and SAP-based procurement — applied directly to hospital project procurement, vendor coordination, material planning, budgeting, and documentation at Cosmic.",
      "He holds a B.E. in Industrial & Production Engineering from VTU Belagavi and a Diploma in Industrial Safety.",
    ],
    highlights: ["6+ years experience", "Procurement & Supply Chain", "SAP-based processes"],
  },
];

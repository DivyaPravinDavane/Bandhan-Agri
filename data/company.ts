export interface CompanyInfo {
  name: string;
  legalName: string;
  foundedYear: number;
  headquarters: string;
  address: {
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  contact: {
    tollFree: string;
    phone: string;
    email: string;
    hours: string;
  };
  socials: {
    linkedin: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
  vision: string;
  mission: string;
  values: {
    title: string;
    description: string;
  }[];
  pillars: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    icon: string;
    image: string;
    link: string;
  }[];
  valueChain: {
    step: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }[];
  stats: {
    label: string;
    value: string;
    suffix?: string;
    description: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "Bandhan Agritech",
  legalName: "Bandhan Agritech Private Limited",
  foundedYear: 2015,
  headquarters: "Pune, Maharashtra, India",
  address: {
    street: "Office No. 301, Teerth Exchange, Pune Bangalore Highway",
    landmark: "Near Audi Showroom, Baner",
    area: "Baner",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411045",
    country: "India",
    full: "Office No. 301, Teerth Exchange, Pune Bangalore Highway near Audi Showroom, Baner, Pune, Maharashtra 411045, India",
  },
  contact: {
    tollFree: "18002671950",
    phone: "+91 878 872 2910",
    email: "contact@bandhanagri.com",
    hours: "Monday – Saturday: 9:30 AM to 6:30 PM IST",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/bandhanagritech/",
    instagram: "https://www.instagram.com/bandhanagritech/",
    facebook: "https://www.facebook.com/bandhanagritech/",
    youtube: "https://www.youtube.com/@bandhanagritech",
  },
  vision: "Strengthen the sustainable food system and rural livelihoods nationwide.",
  mission:
    "To provide complete, end-to-end services to farmers from planting to harvesting, connecting Indian agricultural excellence to the world.",
  values: [
    {
      title: "Genuine Venture Base",
      description:
        "Building authentic partnerships with farmers, suppliers, and global buyers rooted in long-term agricultural sustainability.",
    },
    {
      title: "Integrity & Transparency",
      description:
        "Maintaining open grading, fair farmer remuneration, timely payments, and honest quality inspection at every step.",
    },
    {
      title: "Sustainability",
      description:
        "Promoting eco-friendly bio-inputs, responsible harvest practices, and soil conservation to safeguard food security for the next generation.",
    },
    {
      title: "Food Quality Monitoring & Safety",
      description:
        "Rigorous fruit caliper verification, hygienic handling, zero harmful chemical residues, and strict cold-chain compliance.",
    },
    {
      title: "Highest Level of Client Satisfaction",
      description:
        "Reliable dispatch schedules, custom packaging weights, and unbroken transit cooling that keep our produce fresh worldwide.",
    },
  ],
  pillars: [
    {
      id: "banana-export",
      title: "Banana Export",
      tagline: "Global Standards, Naturally Ripened",
      description:
        "We specialize in exporting premium-quality bananas to international markets. Known for their impeccable appearance and exceptional taste, our bananas have become the preferred choice of consumers worldwide across 10+ countries.",
      icon: "Ship",
      image: "/images/gallery/banana-harvest.jpg",
      link: "/banana",
    },
    {
      id: "agri-input",
      title: "Agri Input Solutions",
      tagline: "Science-Driven Crop Health",
      description:
        "We support farmers with essential inputs like Bio-pesticides, Bio-fungicides, Micro Nutrients, Fertilizers, Biostimulants, and Adjuvants, ensuring timely, quality resources for sustainable farming success.",
      icon: "Sprout",
      image: "/images/gallery/field-inspection.jpg",
      link: "/agri-input",
    },
    {
      id: "agri-consultancy",
      title: "Agricultural Consultancy",
      tagline: "Empowering Rural Productivity",
      description:
        "Our expert agronomy guidance and innovative solutions enhance farm efficiency and profitability, training farmers on export grading, post-harvest care, and sustainable techniques to protect our planet.",
      icon: "Users",
      image: "/images/gallery/farmer-training.jpg",
      link: "/about",
    },
  ],
  valueChain: [
    {
      step: "01",
      title: "Fresh Banana Sourcing",
      subtitle: "From Our Soil to Your Soul",
      description:
        "Partnering closely with 100,000+ farmers across Maharashtra, Gujarat, and Andhra Pradesh, harvesting tissue-culture Cavendish bunches at optimum physiological maturity.",
      image: "/images/gallery/banana-harvest.jpg",
    },
    {
      step: "02",
      title: "Precision Packaging",
      subtitle: "Carefully Selected & Handled",
      description:
        "We strive to keep the fresh fruits picked daily. Sorted in hygienic pack-houses with de-handing, alum treatment, sponge wiping, and specialized corrugated 5-ply cartons.",
      image: "/images/gallery/packaging-unit.jpg",
    },
    {
      step: "03",
      title: "Food Safety & Quality",
      subtitle: "Highest Level of Assessment",
      description:
        "We have a specialized quality control department focused on food safety, measuring finger length, diameter, cluster count, and maintaining strict zero-scarring standards.",
      image: "/images/gallery/quality-check.jpg",
    },
    {
      step: "04",
      title: "Cold Chain & Export",
      subtitle: "Pan-India to Global Destinations",
      description:
        "In-house cold storage and pre-cooling facilities with continuous 13.5°C reefer transport, delivering pristine fresh fruit to Middle East, Gulf, and Central Asian ports.",
      image: "/images/gallery/cold-storage.jpg",
    },
  ],
  stats: [
    {
      value: "2015",
      label: "Founded In Pune",
      description: "Over a decade of trusted agricultural excellence and innovation.",
    },
    {
      value: "100,000+",
      label: "Farmers Connected",
      description: "Direct farmer relationships delivering fair pricing and training.",
    },
    {
      value: "10+",
      label: "Export Countries",
      description: "Established distribution footprint spanning Middle East and Asia.",
    },
    {
      value: "500+",
      label: "Dealers & Distributors",
      description: "Nationwide agricultural input and produce distribution network.",
    },
    {
      value: "7",
      label: "Premium Banana Brands",
      description: "Specialized packaging tailored to diverse international markets.",
    },
  ],
};

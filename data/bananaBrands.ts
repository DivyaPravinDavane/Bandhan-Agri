import { imageAssets } from "@/lib/imageAssets";

export interface BananaBrand {
  id: string;
  slug: string;
  name: string;
  packagingWeight: string;
  packagingTypes: string[];
  tagline: string;
  description: string;
  image: string;
  logo: string;
  exportHighlights: string[];
  specs: {
    variety: string;
    grade: string;
    packaging: string;
    targetMarkets: string;
    temperature: string;
    shelfLife: string;
  };
}

export const bananaBrands: BananaBrand[] = [
  {
    id: "bandhan-banana",
    slug: "bandhan-banana",
    name: "Bandhan Banana",
    packagingWeight: "13 Kg",
    packagingTypes: ["13 Kg Export Box"],
    tagline: "Our Flagship Export Standard",
    description:
      "A premium choice for fresh, naturally ripened bananas, carefully sourced to ensure superior quality, rich taste, and maximum nutrition in every bite.",
    image: imageAssets.bananas.bandhan.product.src,
    logo: imageAssets.bananas.bandhan.logo.src,
    exportHighlights: [
      "Rigorous caliper measurement & finger length sorting",
      "Vacuum-sealed poly bag preservation",
      "Selected from certified GlobalGAP-aligned farms",
      "Consistent calibration throughout the cluster",
    ],
    specs: {
      variety: "Grand Naine (G9 Cavendish)",
      grade: "Export Grade A",
      packaging: "13 kg Net Weight Top & Bottom Carton",
      targetMarkets: "Middle East, Gulf Cooperation Council (GCC), Central Asia",
      temperature: "13.2°C to 13.8°C Controlled Reefer",
      shelfLife: "28 to 35 Days in Reefer Transit",
    },
  },
  {
    id: "shadab-banana",
    slug: "shadab-banana",
    name: "Shadab Banana",
    packagingWeight: "14 Kg",
    packagingTypes: ["14 Kg Premium Carton"],
    tagline: "Wholesome Freshness & Superior Appearance",
    description:
      "Premium-quality bananas, naturally ripened and thoughtfully sourced to deliver excellent freshness, great taste, and wholesome nutrition in every bite.",
    image: imageAssets.bananas.shadab.product.src,
    logo: imageAssets.bananas.shadab.logo.src,
    exportHighlights: [
      "Heavy cluster selection for high-yield market retailers",
      "Optimized 14 kg corrugated export carton",
      "Zero bruising through anti-friction foam separators",
      "Exceptional sugar-to-acid balance upon ripening",
    ],
    specs: {
      variety: "Grand Naine (G9 Cavendish)",
      grade: "Export Grade A+",
      packaging: "14 kg Heavy-Duty Export Carton",
      targetMarkets: "Iran, Iraq, UAE, Oman",
      temperature: "13.5°C Controlled Atmosphere",
      shelfLife: "30+ Days Under Refrigerated Shipping",
    },
  },
  {
    id: "alaa-banana",
    slug: "alaa-banana",
    name: "Alaa Banana",
    packagingWeight: "13 / 13.5 / 14 Kg",
    packagingTypes: ["13 Kg", "13.5 Kg", "14 Kg"],
    tagline: "Dependability, Uniformity & Versatile Sizing",
    description:
      "Known for its dependability and versatility, Alaa offers the perfect balance of quality and value for a wide range of international market needs.",
    image: imageAssets.bananas.alaa.product.src,
    logo: imageAssets.bananas.alaa.logo.src,
    exportHighlights: [
      "Flexible packaging weights tailored to importer specifications",
      "Triple-washed and fungicide-free organic sanitary treatment",
      "Sturdy 5-ply kraft paper construction with high burst strength",
      "Trusted across wholesale distribution channels",
    ],
    specs: {
      variety: "Cavendish G9",
      grade: "Export Grade A",
      packaging: "13 kg / 13.5 kg / 14 kg Multi-size Options",
      targetMarkets: "Saudi Arabia, Bahrain, Qatar, Kuwait",
      temperature: "13.3°C Constant Reefer Monitoring",
      shelfLife: "28 to 32 Days Transit",
    },
  },
  {
    id: "king-banana",
    slug: "king-banana",
    name: "King Banana",
    packagingWeight: "13 / 13.5 / 14 Kg",
    packagingTypes: ["13 Kg", "13.5 Kg", "14 Kg"],
    tagline: "Supreme Consistency in Every Shipment",
    description:
      "A premium brand that blends superior quality with unmatched consistency, ensuring excellence in every container dispatched across the globe.",
    image: imageAssets.bananas.king.product.src,
    logo: imageAssets.bananas.king.logo.src,
    exportHighlights: [
      "Handpicked prime hands from mature bunches",
      "Strict zero-scarring and crown-rot prevention",
      "High visual appeal designed for hypermarket display counters",
      "Batch-tracked from harvest block to vessel loading",
    ],
    specs: {
      variety: "Grand Naine Cavendish",
      grade: "Premium Royal Grade",
      packaging: "13 kg, 13.5 kg, 14 kg Reinforced Telescopic Box",
      targetMarkets: "International Wholesale & Retail Supermarkets",
      temperature: "13.4°C Temperature Logged",
      shelfLife: "30 to 35 Days",
    },
  },
  {
    id: "roshana-banana",
    slug: "roshana-banana",
    name: "Roshana Banana",
    packagingWeight: "13 / 13.5 / 14 Kg",
    packagingTypes: ["13 Kg", "13.5 Kg", "14 Kg"],
    tagline: "Hand-Graded for International Market Demand",
    description:
      "Premium quality bananas, carefully selected for freshness and taste, making them a top choice in competitive international fruit markets.",
    image: imageAssets.bananas.roshana.product.src,
    logo: imageAssets.bananas.roshana.logo.src,
    exportHighlights: [
      "High pulp density ensuring prolonged green life",
      "Careful crown cut with protective food-grade alum sponge",
      "Smooth golden peel ripening profile",
      "Consistent carton weights verified by digital scales",
    ],
    specs: {
      variety: "Grand Naine (G9)",
      grade: "Export Grade A",
      packaging: "13 kg / 13.5 kg / 14 kg Corrugated Master Carton",
      targetMarkets: "Middle East & Central Asian Ports",
      temperature: "13.2°C – 13.8°C",
      shelfLife: "28 to 35 Days",
    },
  },
  {
    id: "laaibah-banana",
    slug: "laaibah-banana",
    name: "Laaibah Banana",
    packagingWeight: "7 Kg",
    packagingTypes: ["7 Kg Compact Pack"],
    tagline: "Compact Packaging for Specialized Retail",
    description:
      "A trusted choice for delivering fresh, wholesome bananas with a focus on meeting varied customer preferences and convenient retail portion sizes.",
    image: imageAssets.bananas.laaibah.product.src,
    logo: imageAssets.bananas.laaibah.logo.src,
    exportHighlights: [
      "Convenient 7 kg portion-friendly retail box",
      "Reduces in-store repacking labor for supermarkets",
      "Perfect for quick-turnover urban markets and express transit",
      "Maintains cold-chain stability in high ambient temperature zones",
    ],
    specs: {
      variety: "Grand Naine Cavendish",
      grade: "Export Grade A",
      packaging: "7 kg Compact Telescopic Box",
      targetMarkets: "Boutique Retailers, Specialized Fruit Markets",
      temperature: "13.5°C Controlled Reefer",
      shelfLife: "25 to 30 Days",
    },
  },
  {
    id: "haniya-banana",
    slug: "haniya-banana",
    name: "Haniya Banana",
    packagingWeight: "5 Kg",
    packagingTypes: ["5 Kg Consumer Pack"],
    tagline: "Handy Premium Box for High-Speed Distribution",
    description:
      "Designed to cater to diverse markets, Haniya delivers consistent quality, reliability, and a taste that appeals to everyone in a convenient 5 kg format.",
    image: imageAssets.bananas.haniya.product.src,
    logo: imageAssets.bananas.haniya.logo.src,
    exportHighlights: [
      "Ultra-compact 5 kg packaging designed for direct-to-consumer outlets",
      "Premium cluster sizing with immaculate skin quality",
      "Minimizes transport weight and maximizes box rigidity",
      "Ideal for premium gift packaging and high-end grocers",
    ],
    specs: {
      variety: "Grand Naine Cavendish",
      grade: "Export Grade A+",
      packaging: "5 kg Rigid Retail Master Carton",
      targetMarkets: "Consumer Grocers, Modern Trade Outlets",
      temperature: "13.2°C Controlled Cold Chain",
      shelfLife: "25 to 30 Days",
    },
  },
];

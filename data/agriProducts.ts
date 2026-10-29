import { imageAssets } from "@/lib/imageAssets";

export interface AgriProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  packagingSizes: string[];
  applicationMode: string;
  targetCrops: string;
  isFeatured?: boolean;
}

export const agriCategories = [
  "All",
  "Biostimulants",
  "Nutrition",
  "Crop Protection",
  "Adjuvants",
  "Bio-pesticides",
] as const;

export const agriProducts: AgriProduct[] = [
  {
    id: "b-vita",
    slug: "b-vita",
    name: "B-Vita",
    category: "Biostimulants",
    subcategory: "Bio-Nutritional Stimulant",
    tagline: "Vigorous Vegetative Growth & Plant Vitality",
    description:
      "B-Vita is a scientifically formulated bio-nutritional stimulant developed to accelerate root development, enhance chlorophyll synthesis, and boost plant vigor across varied agricultural and horticultural crops.",
    image: imageAssets.agriInputs.bVita.src,
    tags: ["Biostimulant", "Vigor", "Root Development", "Yield Booster"],
    features: [
      "Promotes robust root elongation and fibrous root system",
      "Increases nutrient uptake efficiency from the root rhizosphere",
      "Enhances metabolic enzymes responsible for stress resistance",
      "Compatible with conventional fertigation and foliar spray mixes",
    ],
    packagingSizes: ["250 ml", "500 ml", "1000 ml", "5 Litres"],
    applicationMode: "Foliar Spray & Drip Irrigation",
    targetCrops: "Bananas, Grapes, Apples, Cotton, Vegetables, and Pulses",
    isFeatured: true,
  },
  {
    id: "oro-gold",
    slug: "oro-gold",
    name: "ORO GOLD",
    category: "Nutrition",
    subcategory: "Advanced Plant Nutrition Formulation",
    tagline: "Golden Standard in Crop Nutrition & Foliar Absorption",
    description:
      "ORO GOLD delivers a bio-active nutritional blend enriched with vital micro and macro complexes. It promotes vegetative balance, prevents nutritional chlorosis, and enhances fruit weight and luster.",
    image: imageAssets.agriInputs.oroGold.src,
    tags: ["Plant Nutrition", "Micronutrients", "Luster", "Fruit Sizing"],
    features: [
      "Optimizes cellular tissue density and fruit firmness",
      "Corrects hidden trace element deficiencies swiftly",
      "Improves photosynthetic activity during peak fruit formation",
      "Safe and gentle on delicate bloom and young fruit stages",
    ],
    packagingSizes: ["250 ml", "500 ml", "1000 ml"],
    applicationMode: "Foliar Spray",
    targetCrops: "Horticultural Orchards, Pome Fruits, Bananas, Melons",
    isFeatured: true,
  },
  {
    id: "advance-bloomer",
    slug: "advance-bloomer",
    name: "ADVANCE BLOOMER",
    category: "Biostimulants",
    subcategory: "Flower Induction & Retention Complex",
    tagline: "Maximizes Profuse Flowering & Fruit Setting",
    description:
      "ADVANCE BLOOMER is an elite flowering formulation engineered to stimulate flower initiation, minimize premature flower and fruit drop, and ensure uniform fruit setting under adverse climatic stresses.",
    image: imageAssets.agriInputs.advanceBloomer.src,
    tags: ["Flowering", "Fruit Setting", "Anti-Drop", "Bloom Booster"],
    features: [
      "Significantly reduces abiotic stress during crucial pollination windows",
      "Enhances pollen fertility and flower longevity",
      "Prevents physiological flower drop caused by sudden thermal fluctuations",
      "Ensures symmetrical fruit setting with minimal culling",
    ],
    packagingSizes: ["250 ml", "500 ml", "1 Litre"],
    applicationMode: "Foliar Application at Pre-Bloom & Active Bloom",
    targetCrops: "Cotton, Chili, Tomato, Banana, Mango, Pomegranate, Apple",
    isFeatured: true,
  },
  {
    id: "spreadonix",
    slug: "spreadonix",
    name: "SPREADONIX",
    category: "Adjuvants",
    subcategory: "Super-Spreading & Wetting Penetrant",
    tagline: "Unmatched Spray Coverage & Rain-Fast Penetration",
    description:
      "SPREADONIX is a high-performance organosilicone non-ionic adjuvant engineered to break water surface tension, providing instant 360-degree stomatal coverage and dramatically boosting agrochemical spray efficacy.",
    image: imageAssets.agriInputs.spreadonix.src,
    tags: ["Adjuvant", "Spreader", "Penetrant", "Rain-Fastness"],
    features: [
      "Extreme surface tension reduction for instant leaf film spreading",
      "Improves rain-fastness within minutes of application",
      "Assists systemic pesticide and fertilizer uptake across waxy cuticles",
      "Economical low-dose application with zero phytotoxicity",
    ],
    packagingSizes: ["100 ml", "250 ml", "500 ml", "1000 ml"],
    applicationMode: "Tank-Mix Additive (0.3ml to 0.5ml per litre)",
    targetCrops: "Universal for all crops and agrochemical spray mixes",
    isFeatured: true,
  },
  {
    id: "pure-neem-1500",
    slug: "pure-neem-1500",
    name: "PURE NEEM 1500 PPM",
    category: "Bio-pesticides",
    subcategory: "Botanical Bio-Pesticide (Azadirachtin)",
    tagline: "Broad-Spectrum Eco-Friendly Pest Repellent",
    description:
      "PURE NEEM 1500 PPM is a pure cold-pressed botanical insecticide formulated from superior neem seed kernels. It acts as an anti-feedant, repellent, and insect growth disruptor without leaving chemical residues.",
    image: imageAssets.agriInputs.pureNeem1500.src,
    tags: ["Bio-pesticide", "Organic", "Azadirachtin", "Residue-Free"],
    features: [
      "Multiple modes of action: Anti-feedant, ovicidal, and growth regulator",
      "Controls aphids, whiteflies, thrips, and caterpillar larvae safely",
      "Non-toxic to honeybees, ladybird beetles, and beneficial parasitoids",
      "Ideal for export-oriented residue-free crop production protocols",
    ],
    packagingSizes: ["250 ml", "500 ml", "1000 ml", "5 Litres"],
    applicationMode: "Foliar Spray",
    targetCrops: "Vegetables, Tea, Coffee, Bananas, Grapes, Floriculture",
    isFeatured: true,
  },
  {
    id: "pure-neem-3000",
    slug: "pure-neem-3000",
    name: "PURE NEEM 3000 PPM",
    category: "Bio-pesticides",
    subcategory: "Concentrated Botanical Bio-Insecticide",
    tagline: "Targeted Botanical Protection for Intensive Infestations",
    description:
      "PURE NEEM 3000 PPM provides higher azadirachtin concentration for proactive pest resistance management and rapid suppression of chewing and sucking insect populations in commercial agricultural fields.",
    image: imageAssets.agriInputs.pureNeem3000.src,
    tags: ["Bio-pesticide", "High-Potency", "IPM Approved", "Eco-Friendly"],
    features: [
      "Strong repellent vapor phase inside dense crop canopies",
      "Disrupts ecdysone hormone cycles preventing insect molting",
      "Completely biodegradable with zero soil toxicity",
      "Certified suitable for Integrated Pest Management (IPM) regimens",
    ],
    packagingSizes: ["250 ml", "500 ml", "1000 ml", "5 Litres"],
    applicationMode: "Foliar Spray",
    targetCrops: "Fruit Orchards, Cotton, Spices, Cereals, Plantation Crops",
    isFeatured: false,
  },
  {
    id: "pure-neem-10000",
    slug: "pure-neem-10000",
    name: "PURE NEEM 10000 PPM",
    category: "Bio-pesticides",
    subcategory: "Ultra-High Potency Azadirachtin Concentrate",
    tagline: "Industrial-Grade Botanical Strength for Export Quality Assurance",
    description:
      "PURE NEEM 10000 PPM represents the apex of natural botanical crop protection. Its concentrated formulation offers extended residual protection against persistent pest complexes while meeting rigorous export zero-MRL criteria.",
    image: imageAssets.agriInputs.pureNeem10000.src,
    tags: ["Bio-pesticide", "Ultra-Potent", "Zero-MRL", "Export Standard"],
    features: [
      "Supreme concentration requiring minimal volumetric application rates",
      "Suppresses mites, leafminers, bollworms, and borer insect larvae",
      "Does not induce resistance mutations in target pest populations",
      "Complies with international residue standards for global exports",
    ],
    packagingSizes: ["100 ml", "250 ml", "500 ml", "1 Litre"],
    applicationMode: "Foliar Spray",
    targetCrops: "Export Bananas, Grapes, Pomegranates, Citrus, Exotic Veggies",
    isFeatured: true,
  },
  {
    id: "balesto",
    slug: "balesto",
    name: "Balesto",
    category: "Crop Protection",
    subcategory: "Advanced Crop Protection Formulation",
    tagline: "Robust Defense Against Critical Pest & Disease Vectors",
    description:
      "Balesto provides comprehensive crop defense against debilitating insect pests and pathogen vectors. Engineered with precision carriers to ensure sustained residual surface activity and uniform canopy defense.",
    image: imageAssets.agriInputs.balesto.src,
    tags: ["Crop Protection", "Pest Defense", "Canopy Shield", "Fast Action"],
    features: [
      "Rapid knockdown of troublesome sucking and foliar pest complexes",
      "Translaminar movement protecting unexposed underside foliage",
      "Stabilized suspension chemistry for smooth clog-free nozzle delivery",
      "Supports vigorous vegetative recovery following infestation relief",
    ],
    packagingSizes: ["250 ml", "500 ml", "1000 ml"],
    applicationMode: "Foliar Spray",
    targetCrops: "Bananas, Cereals, Oilseeds, Solanaceous Crops, Legumes",
    isFeatured: true,
  },
];

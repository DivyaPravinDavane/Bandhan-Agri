export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    badge?: string;
    image?: string;
  }[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      {
        label: "Our Company",
        href: "/about",
        description: "Founded in 2015, connecting Indian agriculture to global markets.",
      },
      {
        label: "Our Team",
        href: "/our-team",
        description: "Meet our directors, growth alchemists, and agronomy experts.",
      },
      {
        label: "Our Journey",
        href: "/our-journey",
        description: "Our historic timeline from 2015 to 2025 across 10+ countries.",
      },
      {
        label: "Our Certificates",
        href: "/certificates",
        description: "Our adherence to global food safety and quality standards.",
      },
    ],
  },
  {
    label: "Our Banana",
    href: "/banana",
    children: [
      {
        label: "All Banana Brands",
        href: "/banana",
        description: "Explore all 7 specialized export-grade banana brands.",
      },
      {
        label: "Bandhan Banana",
        href: "/banana/bandhan-banana",
        description: "Flagship 13 kg premium export carton.",
        badge: "13 Kg",
      },
      {
        label: "Shadab Banana",
        href: "/banana/shadab-banana",
        description: "Naturally ripened 14 kg heavy cluster selection.",
        badge: "14 Kg",
      },
      {
        label: "Alaa Banana",
        href: "/banana/alaa-banana",
        description: "Versatile 13, 13.5, and 14 kg multi-pack cartons.",
        badge: "Multi-Pack",
      },
      {
        label: "King Banana",
        href: "/banana/king-banana",
        description: "Supreme consistency and handpicked export hands.",
        badge: "Royal Grade",
      },
      {
        label: "Roshana Banana",
        href: "/banana/roshana-banana",
        description: "High pulp density and smooth ripening profile.",
        badge: "Export A",
      },
      {
        label: "Laaibah Banana",
        href: "/banana/laaibah-banana",
        description: "Compact 7 kg retail portion packaging.",
        badge: "7 Kg",
      },
      {
        label: "Haniya Banana",
        href: "/banana/haniya-banana",
        description: "Handy 5 kg consumer gift box format.",
        badge: "5 Kg",
      },
      {
        label: "Export Supply",
        href: "/export-supply",
        description: "Cold-chain infrastructure, packaging, and vessel logistics.",
        badge: "Global",
      },
    ],
  },
  {
    label: "Agri Input",
    href: "/agri-input",
    children: [
      {
        label: "All Input Products",
        href: "/agri-input",
        description: "Comprehensive catalogue of bio-stimulants, nutrition & protection.",
      },
      {
        label: "Biostimulants",
        href: "/agri-input?category=Biostimulants",
        description: "B-Vita, Advance Bloomer, and root-elongation complexes.",
      },
      {
        label: "Crop Nutrition",
        href: "/agri-input?category=Nutrition",
        description: "ORO Gold and specialized micronutrient formulations.",
      },
      {
        label: "Crop Protection",
        href: "/agri-input?category=Crop+Protection",
        description: "Balesto and canopy defense formulations.",
      },
      {
        label: "Bio-pesticides",
        href: "/agri-input?category=Bio-pesticides",
        description: "Pure Neem (1500, 3000, 10000 ppm) botanical extracts.",
      },
      {
        label: "Adjuvants",
        href: "/agri-input?category=Adjuvants",
        description: "Spreadonix organosilicone penetrant and spreader.",
      },
    ],
  },
  {
    label: "Export Supply",
    href: "/export-supply",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

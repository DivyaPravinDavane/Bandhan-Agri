export interface JourneyMilestone {
  year: string;
  headline: string;
  description: string;
  highlights: string[];
  image?: string;
  badge?: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2015",
    headline: "The Foundation & Farmer Roots",
    description:
      "Strong farmer connections and strategic partnerships marked the beginning of the journey. Built early momentum, creating a solid foundation for sustainable growth in Pune, Maharashtra.",
    highlights: [
      "Inception of Bandhan Agritech Pvt. Ltd.",
      "Established foundational farmer partnerships in Maharashtra",
      "Launched pilot agricultural consultation services",
    ],
    image: "/images/gallery/plantation-1.jpg",
    badge: "Genesis",
  },
  {
    year: "2016",
    headline: "First Global Export from Jalgaon",
    description:
      "Dispatched the first export container from Jalgaon, successfully entering international markets. Extended operations to apple orchards in Himachal Pradesh.",
    highlights: [
      "First international banana container dispatched from Jalgaon hub",
      "Operational expansion to Himachal Pradesh horticultural belt",
      "Initiated high-standard grading protocols",
    ],
    image: "/images/gallery/banana-harvest.jpg",
    badge: "First Export",
  },
  {
    year: "2017 – 2018",
    headline: "Network Expansion & Input Launch",
    description:
      "Strengthened sourcing across key states. Built an agile distribution network with 200+ distributors & dealers and connected 10,000+ farmers in the agricultural input segment.",
    highlights: [
      "200+ active distributor and dealer partnerships established",
      "10,000+ farmers supported with bio-nutritional inputs",
      "Expanded multi-state procurement footprint",
    ],
    image: "/images/gallery/organic-nutrition.jpg",
  },
  {
    year: "2019",
    headline: "Logistical Modernization & Global Alignment",
    description:
      "Modernised packaging, storage, and logistics infrastructure. Fully aligned handling processes with international food safety and export standards.",
    highlights: [
      "Implemented automated carton weighing and sorting",
      "Upgraded to 5-ply export-certified corrugated packaging",
      "Aligned cold-chain practices with APEDA and Codex guidelines",
    ],
    image: "/images/gallery/packaging-unit.jpg",
  },
  {
    year: "2020",
    headline: "Resilience & 5-Country Expansion",
    description:
      "Ensured uninterrupted operations and vital food chain delivery during COVID-19. Expanded exports across 5 countries with a robust supply network and coordinated logistics.",
    highlights: [
      "Unbroken export supply chain maintained throughout lockdowns",
      "Presence expanded to 5 international destinations",
      "Specialized hygiene and food safety monitoring instituted",
    ],
    image: "/images/gallery/cargo-loading.jpg",
  },
  {
    year: "2021",
    headline: "Advanced Crop Solutions Acceleration",
    description:
      "Advanced crop solutions and dealer network witnessed accelerated growth. Scaled export operations to meet surging overseas fruit demand.",
    highlights: [
      "Enhanced bio-stimulant and adjuvant product line",
      "Accelerated vessel dispatches through western ports",
      "Deepened agronomic training for partnered growers",
    ],
    image: "/images/gallery/field-inspection.jpg",
  },
  {
    year: "2022",
    headline: "30,000 Farmers & 8 Nations",
    description:
      "Deepened sourcing and farmer partnerships across key regions. Reached 30,000+ farmers, 150+ authorized dealers, and established active presence in 8 countries.",
    highlights: [
      "Direct engagement with 30,000+ farmers",
      "Active shipments to 8 nations",
      "Dealer network surpassed 150+ regional retail partners",
    ],
    image: "/images/gallery/farmer-training.jpg",
    badge: "Scale",
  },
  {
    year: "2023",
    headline: "10+ Countries & Brand Diversification",
    description:
      "Elevated export volumes and global presence. Expanded footprint to 10+ countries, connecting more farmers and introducing specialized packaging brands.",
    highlights: [
      "Global presence across 10+ countries",
      "Introduction of specialized banana brand portfolios",
      "Significant increase in metric tonnage export throughput",
    ],
    image: "/images/export/logistics.jpeg",
  },
  {
    year: "2024",
    headline: "In-House Cold Storage & 150+ Team",
    description:
      "Enhanced infrastructure with in-house cold storage facilities and a dedicated team of 150+, ensuring export-grade handling and uncompromising quality standards.",
    highlights: [
      "Commissioned state-of-the-art in-house cold storage facility",
      "Team grew to 150+ professionals in agronomy, SCM, and finance",
      "Advanced post-harvest shelf-life extension protocols",
    ],
    image: "/images/gallery/cold-storage.jpg",
    badge: "Infrastructure",
  },
  {
    year: "2025",
    headline: "Pan-India Presence & 100,000+ Farmers",
    description:
      "Achieved comprehensive pan-India presence with a strong global footprint. Connected 500+ distributors & dealers and 100,000+ farmers, entering the next phase of sustainable agricultural expansion.",
    highlights: [
      "100,000+ verified connected farming families",
      "500+ distributors & dealers nationwide",
      "Setting new benchmarks in Indian agricultural exports",
    ],
    image: "/images/export/warehouse-facility.png",
    badge: "Milestone",
  },
];

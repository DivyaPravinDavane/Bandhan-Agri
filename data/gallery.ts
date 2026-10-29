import { imageAssets } from "@/lib/imageAssets";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Banana Export" | "Packaging" | "Agriculture" | "Quality Control" | "Cold Storage" | "Farmer Engagement";
  src: string;
  alt: string;
  caption: string;
}

export const galleryCategories = [
  "All",
  "Banana Export",
  "Packaging",
  "Agriculture",
  "Quality Control",
  "Cold Storage",
  "Farmer Engagement",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "banana-harvest",
    title: "Fresh Banana Bunch Harvesting",
    category: "Banana Export",
    src: imageAssets.gallery.bananaHarvest.src,
    alt: imageAssets.gallery.bananaHarvest.alt,
    caption: "Careful manual harvesting of mature Grand Naine bunches with protective shoulder pads to prevent peel bruising.",
  },
  {
    id: "packaging-unit",
    title: "Modern Packing & De-handing Facility",
    category: "Packaging",
    src: imageAssets.gallery.packagingUnit.src,
    alt: imageAssets.gallery.packagingUnit.alt,
    caption: "Sanitary packing line where banana hands are washed, treated, weighed, and packed into branded export cartons.",
  },
  {
    id: "field-inspection",
    title: "Agronomic Field Inspection",
    category: "Agriculture",
    src: imageAssets.gallery.fieldInspection.src,
    alt: imageAssets.gallery.fieldInspection.alt,
    caption: "Agronomists inspecting soil structure and canopy vigor in high-density tissue culture plantations.",
  },
  {
    id: "quality-check",
    title: "Rigorous Caliper & Length Grading",
    category: "Quality Control",
    src: imageAssets.gallery.qualityCheck.src,
    alt: imageAssets.gallery.qualityCheck.alt,
    caption: "Digital caliper verification ensuring each banana meets precise export grade specifications.",
  },
  {
    id: "cold-storage",
    title: "In-House Climate Controlled Cold Storage",
    category: "Cold Storage",
    src: imageAssets.gallery.coldStorage.src,
    alt: imageAssets.gallery.coldStorage.alt,
    caption: "In-house pre-cooling chambers maintained at 13.5°C to arrest ethylene production and preserve green-life.",
  },
  {
    id: "export-crate",
    title: "Export Palletization & Carton Inspection",
    category: "Packaging",
    src: imageAssets.gallery.exportCrate.src,
    alt: imageAssets.gallery.exportCrate.alt,
    caption: "High burst-strength 5-ply cartons strapped and corner-boarded for unbroken ocean transit.",
  },
  {
    id: "cargo-loading",
    title: "Reefer Container Stuffing for Overseas Ports",
    category: "Banana Export",
    src: imageAssets.gallery.cargoLoading.src,
    alt: imageAssets.gallery.cargoLoading.alt,
    caption: "Direct stuffing into 40ft High Cube refrigerated containers with dataloggers for continuous temperature verification.",
  },
  {
    id: "farmer-training",
    title: "Farmer Agronomy & Quality Workshop",
    category: "Farmer Engagement",
    src: imageAssets.gallery.farmerTraining.src,
    alt: imageAssets.gallery.farmerTraining.alt,
    caption: "Conducting hands-on grower training on post-harvest handling, integrated pest management, and clean irrigation.",
  },
  {
    id: "plantation",
    title: "High-Yield Cavendish Plantation",
    category: "Agriculture",
    src: imageAssets.gallery.plantation.src,
    alt: imageAssets.gallery.plantation.alt,
    caption: "Tissue-culture Cavendish farm under micro-irrigation and balanced nutrition schedules.",
  },
  {
    id: "organic-nutrition",
    title: "Sustainable Crop Nutrition Trials",
    category: "Agriculture",
    src: imageAssets.gallery.organicNutrition.src,
    alt: imageAssets.gallery.organicNutrition.alt,
    caption: "Field evaluation of botanical bio-stimulants demonstrating enhanced vegetative health and residue-free produce.",
  },
];

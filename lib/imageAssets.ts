/**
 * Bandhan Agritech - Centralized Image Asset Registry
 * All verified product packaging, brand logos, corporate photos, and field assets.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const imageAssets = {
  brand: {
    logo: {
      src: "/images/brand/logo.png",
      alt: "Bandhan Agritech Official Logo",
      width: 2000,
      height: 966,
    },
    logoSmall: {
      src: "/images/brand/logo-small.png",
      alt: "Bandhan Agritech Mark",
      width: 300,
      height: 145,
    },
    heroBg: {
      src: "/images/brand/hero-bg.jpg",
      alt: "Lush Agricultural Banana Plantation",
      width: 1920,
      height: 767,
    },
    heroLeaf: {
      src: "/images/brand/hero-leaf.png",
      alt: "Botanical Leaf Accent",
      width: 93,
      height: 184,
    },
    valueChain: {
      src: "/images/brand/value-chain.png",
      alt: "Bandhan Agritech Value Chain Infographic",
      width: 2560,
      height: 789,
    },
  },

  bananas: {
    allLogos: {
      src: "/images/bananas/all-banana-logos.png",
      alt: "Bandhan Agritech Banana Brands Portfolio",
      width: 1350,
      height: 1350,
    },
    bandhan: {
      product: {
        src: "/images/bananas/bandhan-banana.png",
        alt: "Bandhan Banana 13kg Export Grade Packaging Box",
        width: 1024,
        height: 1024,
      },
      logo: {
        src: "/images/brand/logo-small.png",
        alt: "Bandhan Banana Brand Logo",
        width: 300,
        height: 145,
      },
    },
    shadab: {
      product: {
        src: "/images/bananas/shadab-banana.png",
        alt: "Shadab Banana 14kg Export Grade Packaging Box",
        width: 1024,
        height: 1024,
      },
      logo: {
        src: "/images/bananas/logo-shadab.png",
        alt: "Shadab Banana Brand Logo",
        width: 689,
        height: 698,
      },
    },
    alaa: {
      product: {
        src: "/images/bananas/alaa-banana.png",
        alt: "Alaa Banana 13/13.5/14kg Export Grade Packaging Box",
        width: 1024,
        height: 1024,
      },
      logo: {
        src: "/images/bananas/logo-alaa.png",
        alt: "Alaa Banana Brand Logo",
        width: 889,
        height: 820,
      },
    },
    king: {
      product: {
        src: "/images/bananas/king-banana.png",
        alt: "King Banana 13/13.5/14kg Export Grade Packaging Box",
        width: 1024,
        height: 1024,
      },
      logo: {
        src: "/images/bananas/logo-king.png",
        alt: "King Banana Brand Logo",
        width: 565,
        height: 565,
      },
    },
    roshana: {
      product: {
        src: "/images/bananas/roshana-banana.png",
        alt: "Roshana Banana 13/13.5/14kg Export Grade Packaging Box",
        width: 1024,
        height: 1024,
      },
      logo: {
        src: "/images/bananas/logo-roshana.png",
        alt: "Roshana Banana Brand Logo",
        width: 500,
        height: 500,
      },
    },
    laaibah: {
      product: {
        src: "/images/bananas/laaibah-banana.png",
        alt: "Laaibah Banana 7kg Packaging Box",
        width: 1024,
        height: 1024,
      },
      logo: {
        src: "/images/bananas/logo-laaibah.png",
        alt: "Laaibah Banana Brand Logo",
        width: 316,
        height: 305,
      },
    },
    haniya: {
      product: {
        src: "/images/bananas/haniya-banana.png",
        alt: "Haniya Banana 5kg Packaging Box",
        width: 1024,
        height: 1024,
      },
      logo: {
        src: "/images/bananas/logo-haniya.png",
        alt: "Haniya Banana Brand Logo",
        width: 305,
        height: 270,
      },
    },
  },

  agriInputs: {
    bVita: {
      src: "/images/agri-inputs/b-vita.png",
      alt: "B-Vita Bio-Nutritional Input",
      width: 227,
      height: 300,
    },
    oroGold: {
      src: "/images/agri-inputs/oro-gold.png",
      alt: "ORO Gold Plant Nutrition Formulation",
      width: 227,
      height: 300,
    },
    advanceBloomer: {
      src: "/images/agri-inputs/advance-bloomer.png",
      alt: "Advance Bloomer Flowering Stimulant",
      width: 227,
      height: 300,
    },
    spreadonix: {
      src: "/images/agri-inputs/spreadonix.png",
      alt: "Spreadonix High-Performance Adjuvant",
      width: 227,
      height: 300,
    },
    pureNeem1500: {
      src: "/images/agri-inputs/pure-neem-1500.png",
      alt: "Pure Neem 1500 ppm Bio-Pesticide",
      width: 227,
      height: 300,
    },
    pureNeem3000: {
      src: "/images/agri-inputs/pure-neem-3000.png",
      alt: "Pure Neem 3000 ppm Bio-Pesticide",
      width: 227,
      height: 300,
    },
    pureNeem10000: {
      src: "/images/agri-inputs/pure-neem-10000.png",
      alt: "Pure Neem 10000 ppm Bio-Pesticide",
      width: 227,
      height: 300,
    },
    balesto: {
      src: "/images/agri-inputs/balesto.png",
      alt: "Balesto Premium Crop Protection Formulation",
      width: 2961,
      height: 3912,
    },
  },

  gallery: {
    bananaHarvest: {
      src: "/images/gallery/banana-harvest.jpg",
      alt: "Harvesting fresh export-quality bananas in Jalgaon plantations",
      category: "Banana Export",
    },
    fieldInspection: {
      src: "/images/gallery/field-inspection.jpg",
      alt: "Agronomist performing soil and crop health inspection",
      category: "Agriculture",
    },
    packagingUnit: {
      src: "/images/gallery/packaging-unit.jpg",
      alt: "Sanitary banana packing and sorting facility",
      category: "Packaging",
    },
    qualityCheck: {
      src: "/images/gallery/quality-check.jpg",
      alt: "Rigorous quality grading and fruit caliper measurements",
      category: "Quality Control",
    },
    coldStorage: {
      src: "/images/gallery/cold-storage.jpg",
      alt: "In-house climate-controlled cold storage preservation",
      category: "Cold Storage",
    },
    exportCrate: {
      src: "/images/gallery/export-crate.jpg",
      alt: "Standardized palletized export crates ready for transit",
      category: "Packaging",
    },
    cargoLoading: {
      src: "/images/gallery/cargo-loading.jpg",
      alt: "Reefer container stuffing and port dispatch",
      category: "Banana Export",
    },
    farmerTraining: {
      src: "/images/gallery/farmer-training.jpg",
      alt: "Bandhan Agritech agricultural consultation session with farmers",
      category: "Farmer Engagement",
    },
    plantation: {
      src: "/images/gallery/plantation-1.jpg",
      alt: "Sprawling tissue-culture banana plantation",
      category: "Agriculture",
    },
    organicNutrition: {
      src: "/images/gallery/organic-nutrition.jpg",
      alt: "Sustainable organic crop nutrition field trial",
      category: "Agriculture",
    },
  },

  team: {
    prashantDharpure: {
      src: "/images/team/prashant-sir.jpeg",
      alt: "Prashant Dharpure - Managing Director (MD, CEO)",
    },
    dhnyaneshPise: {
      src: "/images/team/dh-sir.jpeg",
      alt: "Dhnyanesh Pise - Director",
    },
    team3: {
      src: "/images/team/team-3.png",
      alt: "Bandhan Agritech Executive Team Member",
    },
    team4: {
      src: "/images/team/team-4.png",
      alt: "Bandhan Agritech Executive Team Member",
    },
    team5: {
      src: "/images/team/team-5.png",
      alt: "Bandhan Agritech Executive Team Member",
    },
    team6: {
      src: "/images/team/team-6.png",
      alt: "Bandhan Agritech Executive Team Member",
    },
    team7: {
      src: "/images/team/team-7.png",
      alt: "Bandhan Agritech Executive Team Member",
    },
    team8: {
      src: "/images/team/team-8.png",
      alt: "Bandhan Agritech Executive Team Member",
    },
  },

  farming: {
    blogAgritech: {
      src: "/images/farming/blog-agritech.webp",
      alt: "Agritech Innovation and Modern Sustainable Farming",
    },
    farmField: {
      src: "/images/farming/farm-field.jpg",
      alt: "Agricultural farmland landscape",
    },
  },

  export: {
    warehouse: {
      src: "/images/export/warehouse-facility.png",
      alt: "Modern Bandhan Agritech Warehousing & Distribution Facility",
    },
    logistics: {
      src: "/images/export/logistics.jpeg",
      alt: "Cold-chain Reefer Logistics and Freight Transport",
    },
  },
};

import { imageAssets } from "@/lib/imageAssets";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Board of Directors" | "Growth Alchemists" | "Strategic Management" | "Agri Export" | "Agri Input" | "Workplace";
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "prashant-dharpure",
    name: "Prashant Dharpure",
    role: "Managing Director (MD, CEO)",
    department: "Board of Directors",
    bio: "A visionary leader and seasoned entrepreneur, he brings a wealth of experience and innovative strategies to the company, steering its growth with a strong focus on excellence and sustainability.",
    image: imageAssets.team.prashantDharpure.src,
  },
  {
    id: "dhnyanesh-pise",
    name: "Dhnyanesh Pise",
    role: "Director",
    department: "Board of Directors",
    bio: "A dynamic director with a passion for innovation, he combines strategic acumen with operational expertise to propel the company forward. His commitment to excellence and transformative leadership continues to inspire teams and elevate the company's market presence.",
    image: imageAssets.team.dhnyaneshPise.src,
  },
  {
    id: "saurabh-meher",
    name: "Saurabh Meher",
    role: "Business Partner",
    department: "Growth Alchemists",
    bio: "He is a forward-thinking entrepreneur who thrives on innovation and disruptive strategies. His leadership style focuses on long-term growth and transforming challenges into business opportunities.",
    image: imageAssets.team.team3.src,
  },
  {
    id: "pankaj-patil",
    name: "Pankaj Patil",
    role: "Business Partner",
    department: "Growth Alchemists",
    bio: "He is an operations expert with deep knowledge in streamlining processes and optimizing business systems. His strong analytical skills and pragmatic approach ensure that every project runs smoothly, from conception to execution.",
    image: imageAssets.team.team4.src,
  },
  {
    id: "rajesh-somi",
    name: "Rajesh Somi",
    role: "Business Partner",
    department: "Growth Alchemists",
    bio: "With a keen understanding of market dynamics and an ability to foresee future trends, he ensures that our partnerships are both sustainable and scalable. His guidance helps position our company at the forefront of the industry.",
    image: imageAssets.team.team5.src,
  },
  {
    id: "dattatray-pilane",
    name: "Dattatray Pilane",
    role: "General Manager - Finance",
    department: "Strategic Management",
    bio: "A seasoned finance leader with a proven track record of success in fiscal stewardship, financial transparency, capital management, and driving sustainable business growth.",
    image: imageAssets.team.team6.src,
  },
  {
    id: "sudhir-patle",
    name: "Sudhir Patle",
    role: "Audit Manager",
    department: "Strategic Management",
    bio: "He brings a meticulous approach to ensuring financial accuracy and compliance with industry standards. With a wealth of experience in audit processes, he plays a crucial role in maintaining the company's financial health and operational transparency.",
    image: imageAssets.team.team7.src,
  },
  {
    id: "pratiksha-patil",
    name: "Pratiksha Patil",
    role: "General Manager - Business Operations",
    department: "Strategic Management",
    bio: "She is an accomplished international business strategist who excels in navigating global markets and crafting systems for cross-border trade. Her expertise drives businesses toward sustainable success on the global stage.",
    image: imageAssets.team.team8.src,
  },
  {
    id: "rushikesh-mundhe",
    name: "Rushikesh Mundhe",
    role: "Sr. Manager - Operations",
    department: "Agri Export",
    bio: "A dynamic Operations Manager, excels in optimizing pack-house processes, cold-chain maintenance, and driving efficiency to ensure seamless organizational performance and on-time international vessel dispatches.",
    image: imageAssets.team.team3.src,
  },
  {
    id: "pratik-gadge",
    name: "Pratik Gadge",
    role: "Sr. Manager - Marketing & SCM",
    department: "Agri Export",
    bio: "He skillfully navigates the complexities of supply chain management, ensuring smooth and timely delivery of fresh produce while simultaneously expanding market presence across international retail networks.",
    image: imageAssets.team.team4.src,
  },
  {
    id: "baburam-sharma",
    name: "Baburam Sharma",
    role: "Regional Sales Manager",
    department: "Agri Input",
    bio: "A dedicated sales leader with a proven ability to drive market penetration, foster dealer relationships, and deliver exceptional sales growth for our specialized crop nutrition portfolio in competitive agrarian environments.",
    image: imageAssets.team.team5.src,
  },
  {
    id: "yogesh-thakur",
    name: "Yogesh Thakur",
    role: "Regional Sales Manager",
    department: "Agri Input",
    bio: "An accomplished sales strategist known for his customer-centric mindset and knack for turning agronomic challenges into sustainable yield improvements for farming communities.",
    image: imageAssets.team.team6.src,
  },
  {
    id: "swapnil-thopte",
    name: "Swapnil Thopte",
    role: "Manager - Administration",
    department: "Workplace",
    bio: "An integral part of Bandhan Agritech, he serves as Manager - Administration, where his organizational acumen and strategic coordination enhance workplace operational efficiency across headquarters and regional hubs.",
    image: imageAssets.team.team7.src,
  },
];

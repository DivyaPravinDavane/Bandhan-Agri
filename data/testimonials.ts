export interface Testimonial {
  id: string;
  author: string;
  location: string;
  role: string;
  quote: string;
  productMentioned?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "rohit-kapadnis",
    author: "Rohit Kapadnis",
    location: "Nashik, Maharashtra",
    role: "Banana Cultivator & Export Partner",
    quote:
      "Partnering with Bandhan Agritech Pvt Ltd has been life-changing for my family and me. Their fair pricing and timely payments have given us the financial stability to expand our farm and invest in better equipment. They value our hard work and ensure our bananas reach international markets in perfect condition.",
    rating: 5,
  },
  {
    id: "pankaj-sharma",
    author: "Pankaj Sharma",
    location: "Jalgaon, Maharashtra",
    role: "Cavendish Grower",
    quote:
      "I didn't know much about global market standards until Bandhan Agritech stepped in. Their training sessions taught me about quality grading, post-harvest handling, and packaging requirements. Now, our bananas consistently meet export standards, and we've seen a significant rise in demand.",
    rating: 5,
  },
  {
    id: "suraj-kalta",
    author: "Suraj Kalta",
    location: "Shimla, Himachal Pradesh",
    role: "Apple Orchardist",
    quote:
      "I used the agricultural input product Builder Plus on some of my apple trees in the orchard, and the results were amazing. It boosts overall growth of the tree from roots to the fruits.",
    productMentioned: "Builder Plus",
    rating: 5,
  },
  {
    id: "madan-singh",
    author: "Madan Singh",
    location: "Chamba, Himachal Pradesh",
    role: "Horticulture Farmer",
    quote:
      "I used Top Bloom for the first time, and I noticed my orchards produced fruit 40% faster compared to others, despite the unfavorable climate. Although I didn't use it correctly from the start, I'm confident that I will use it properly next time for even better results.",
    productMentioned: "Top Bloom",
    rating: 5,
  },
];

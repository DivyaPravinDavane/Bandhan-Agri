import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bandhanagri.com"),
  title: "Bandhan Agritech | Premium Banana Exporter Globally & Agri-Input Solutions",
  description:
    "Bandhan Agritech Private Limited is a leading Indian agricultural export enterprise and input manufacturer, connecting high-standard Cavendish bananas to global markets and empowering farmers with science-backed nutrition and protection.",
  keywords: [
    "Bandhan Agritech",
    "Banana Exporter India",
    "Jalgaon Banana Export",
    "Cavendish Banana",
    "Bandhan Banana",
    "Shadab Banana",
    "Alaa Banana",
    "King Banana",
    "Agri Inputs",
    "Bio-stimulants",
    "Pure Neem",
    "B-Vita",
  ],
  authors: [{ name: "Bandhan Agritech Pvt. Ltd." }],
  openGraph: {
    title: "Bandhan Agritech | Banana Exporter Globally from India",
    description:
      "Connecting Indian agricultural excellence to international markets with 7 premium banana brands and advanced crop inputs.",
    url: "https://bandhanagri.com",
    siteName: "Bandhan Agritech",
    images: [
      {
        url: "/images/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Bandhan Agritech Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#faf9f7] text-[#19201d] antialiased selection:bg-[#107634] selection:text-white">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

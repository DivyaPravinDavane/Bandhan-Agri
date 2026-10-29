import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { imageAssets } from "@/lib/imageAssets";

const articles = [
  {
    id: "banana-export-standards",
    slug: "banana-export-standards",
    title: "International Banana Export Standards: From Caliper Grading to Reefer Transit",
    category: "Export Standards",
    excerpt:
      "A technical look into how Grand Naine Cavendish bananas are harvested at 39-46 mm calibration, pre-cooled to 13.5°C, and shipped across Middle Eastern sea lanes without premature ripening.",
    date: "October 2025",
    readTime: "5 min read",
    image: imageAssets.gallery.cargoLoading.src,
  },
  {
    id: "sustainable-crop-nutrition",
    slug: "sustainable-crop-nutrition",
    title: "Advancements in Bio-Stimulants: Enhancing Root Architecture & Abiotic Stress Resistance",
    category: "Crop Nutrition",
    excerpt:
      "How botanical extracts and seaweed humic complexes in formulations like B-Vita and Advance Bloomer optimize nutrient uptake and reduce flower drop in orchard crops.",
    date: "September 2025",
    readTime: "4 min read",
    image: imageAssets.gallery.organicNutrition.src,
  },
  {
    id: "residue-free-neem",
    slug: "residue-free-neem",
    title: "The Role of Azadirachtin Bio-Pesticides in Meeting European & Gulf MRL Criteria",
    category: "Bio-Protection",
    excerpt:
      "Cold-pressed botanical neem formulations offering multi-target anti-feedant action against sucking insect pests while preserving pollinator safety and clean harvest compliance.",
    date: "August 2025",
    readTime: "6 min read",
    image: imageAssets.farming.blogAgritech.src,
  },
];

export default function InsightsPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-24 bg-[#051815] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageAssets.farming.farmField.src}
            alt="Agricultural Farmland"
            fill
            sizes="100vw"
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051815] via-[#051815]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Insights & News" }]}
            className="mb-6 text-gray-300"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <BookOpen className="w-3.5 h-3.5 text-[#eecd15]" />
              <span>Agronomy & Export Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Agricultural <span className="text-emerald-400">Insights</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Explore informative articles, cold-chain export best practices, crop protection guidelines, and company updates from the Bandhan Agritech technical desk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Insights Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Featured Article */}
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#107634] text-white text-xs font-bold">
              Featured Insight
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="font-bold text-[#107634] uppercase tracking-wider">
                  {featured.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#051815] leading-tight">
                {featured.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {featured.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
              <span className="text-xs font-bold text-[#107634] flex items-center gap-1">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className="text-xs text-gray-400">Bandhan Technical Agronomy</span>
            </div>
          </div>
        </div>

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rest.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#051815]/80 backdrop-blur-md text-emerald-300 text-xs font-bold">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#051815]">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between text-xs text-[#107634] font-bold">
                <span className="flex items-center gap-1">
                  <span>Explore Agronomy Guidance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

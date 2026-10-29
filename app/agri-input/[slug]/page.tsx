import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sprout, Package, HelpCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { agriProducts } from "@/data/agriProducts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return agriProducts.map((p) => ({
    slug: p.slug,
  }));
}

export default async function AgriProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = agriProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = agriProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(agriProducts.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, 3);

  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-[#051815] text-white py-12 border-b border-[#107634]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Agri Input", href: "/agri-input" },
              { label: product.name },
            ]}
            className="mb-4 text-gray-300"
          />

          <Link
            href="/agri-input"
            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-white font-semibold transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Agri Inputs</span>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#eecd15]">
                {product.subcategory}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white mt-1">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-[#107634]/20 text-emerald-300 border border-[#107634]/30 text-sm font-bold">
                {product.category}
              </span>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-[#107634] text-white text-xs sm:text-sm font-bold hover:bg-[#0a4d22] transition-colors"
              >
                Inquire for Supply
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Product Bottle presentation */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col items-center justify-center sticky top-28">
            <div className="relative w-full aspect-square max-w-sm">
              <Image
                src={product.image}
                alt={`${product.name} Packaging Bottle`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain drop-shadow-xl"
              />
            </div>

            <div className="mt-6 w-full pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#107634]" />
                Laboratory Formulated
              </span>
              <span className="flex items-center gap-1.5">
                <Sprout className="w-4 h-4 text-[#107634]" />
                Eco-Friendly Standard
              </span>
            </div>
          </div>

          {/* Right Column: Information & Technical Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
              <div className="text-xs font-bold text-[#107634] uppercase tracking-wider">
                Product Formulation Overview
              </div>
              <h2 className="text-2xl font-bold text-[#051815]">
                {product.tagline}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {product.description}
              </p>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Agronomic Benefits & Mode of Action
                </h3>
                <ul className="space-y-2.5">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#107634] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application & Packaging Specifications Table */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#051815]">
                Application Details & Pack Sizes
              </h2>

              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500 font-medium">Category Group</span>
                  <span className="text-gray-900 font-bold">{product.category}</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500 font-medium">Available Pack Sizes</span>
                  <span className="text-gray-900 font-bold">{product.packagingSizes.join(", ")}</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500 font-medium">Application Method</span>
                  <span className="text-gray-900 font-bold">{product.applicationMode}</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500 font-medium">Recommended Crops</span>
                  <span className="text-gray-900 font-bold text-right max-w-xs">{product.targetCrops}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-full bg-[#107634] text-white text-xs font-bold hover:bg-[#0a4d22] transition-colors"
                >
                  Contact Agronomy Support
                </Link>

                <span className="text-xs text-gray-400">
                  Residue-safe compliance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-[#107634] uppercase tracking-wider">
                Related Solutions
              </span>
              <h3 className="text-2xl font-black text-[#051815]">
                Complementary Crop Inputs
              </h3>
            </div>

            <Link
              href="/agri-input"
              className="text-xs font-bold text-[#107634] hover:underline flex items-center gap-1"
            >
              <span>View All Inputs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/agri-input/${p.slug}`}
                className="group bg-white p-6 rounded-3xl border border-gray-200/80 hover:border-[#107634]/50 shadow-sm hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="relative w-20 h-20 bg-[#faf9f7] rounded-2xl p-2 shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#107634]/10 text-[#107634]">
                    {p.category}
                  </span>
                  <h4 className="text-base font-bold text-[#051815] group-hover:text-[#107634] transition-colors mt-1">
                    {p.name}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                    {p.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Package, Thermometer, Clock, Globe, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { bananaBrands } from "@/data/bananaBrands";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return bananaBrands.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BananaBrandDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const brand = bananaBrands.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  const otherBrands = bananaBrands.filter((b) => b.id !== brand.id).slice(0, 3);

  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Top Header */}
      <div className="bg-[#051815] text-white py-12 border-b border-[#107634]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Our Banana", href: "/banana" },
              { label: brand.name },
            ]}
            className="mb-4 text-gray-300"
          />

          <Link
            href="/banana"
            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-white font-semibold transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Banana Brands</span>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#eecd15]">
                {brand.tagline}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white mt-1">
                {brand.name}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-[#eecd15]/20 text-[#eecd15] border border-[#eecd15]/30 text-sm font-bold">
                Packaging: {brand.packagingWeight}
              </span>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-[#107634] text-white text-xs sm:text-sm font-bold hover:bg-[#0a4d22] transition-colors"
              >
                Inquire for Shipment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Packaging Presentation */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col items-center justify-center sticky top-28">
            <div className="relative w-full aspect-square max-w-md">
              <Image
                src={brand.image}
                alt={`${brand.name} Packaging Box`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain drop-shadow-xl"
              />
            </div>

            <div className="mt-6 w-full pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#107634]" />
                Export Quality Inspected
              </span>
              <span className="flex items-center gap-1.5">
                <Package className="w-4 h-4 text-[#107634]" />
                Corrugated 5-Ply
              </span>
            </div>
          </div>

          {/* Right Column: Specifications & Highlights */}
          <div className="lg:col-span-7 space-y-8">
            {/* Description Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#051815]">
                Brand Overview & Characteristics
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {brand.description}
              </p>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-xs font-bold text-[#107634] uppercase tracking-wider mb-3">
                  Export Handling & Quality Standards
                </h3>
                <ul className="space-y-2.5">
                  {brand.exportHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#107634] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#051815]">
                Technical Export Specifications
              </h2>

              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500 font-medium">Cultivar / Variety</span>
                  <span className="text-gray-900 font-bold">{brand.specs.variety}</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500 font-medium">Export Grade</span>
                  <span className="text-gray-900 font-bold">{brand.specs.grade}</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500 font-medium">Packaging Type</span>
                  <span className="text-gray-900 font-bold">{brand.specs.packaging}</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500 font-medium">Controlled Reefer Temp</span>
                  <span className="text-gray-900 font-bold flex items-center gap-1 text-[#107634]">
                    <Thermometer className="w-4 h-4" />
                    {brand.specs.temperature}
                  </span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500 font-medium">Reefer Shelf Life</span>
                  <span className="text-gray-900 font-bold flex items-center gap-1">
                    <Clock className="w-4 h-4 text-amber-500" />
                    {brand.specs.shelfLife}
                  </span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500 font-medium">Primary Markets</span>
                  <span className="text-gray-900 font-bold flex items-center gap-1 text-right">
                    <Globe className="w-4 h-4 text-blue-500 shrink-0" />
                    {brand.specs.targetMarkets}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <Link
                  href="/export-supply"
                  className="text-xs font-bold text-[#107634] hover:underline flex items-center gap-1"
                >
                  <span>Explore Shipping & Port Logistics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  className="px-5 py-2 rounded-full bg-[#051815] text-white text-xs font-bold hover:bg-[#107634] transition-colors"
                >
                  Request Quotation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Brands Carousel/List */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-[#107634] uppercase tracking-wider">
                Explore More
              </span>
              <h3 className="text-2xl font-black text-[#051815]">
                Other Export Banana Brands
              </h3>
            </div>

            <Link
              href="/banana"
              className="text-xs font-bold text-[#107634] hover:underline flex items-center gap-1"
            >
              <span>View All 7 Brands</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherBrands.map((b) => (
              <Link
                key={b.id}
                href={`/banana/${b.slug}`}
                className="group bg-white p-6 rounded-3xl border border-gray-200/80 hover:border-[#107634]/50 shadow-sm hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="relative w-20 h-20 bg-[#faf9f7] rounded-2xl p-2 shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#eecd15]/20 text-[#854d0e]">
                    {b.packagingWeight}
                  </span>
                  <h4 className="text-base font-bold text-[#051815] group-hover:text-[#107634] transition-colors mt-1">
                    {b.name}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                    {b.tagline}
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

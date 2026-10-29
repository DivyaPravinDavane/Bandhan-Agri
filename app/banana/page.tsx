"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package, CheckCircle2, ShieldCheck, Thermometer, Globe } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bananaBrands } from "@/data/bananaBrands";
import { imageAssets } from "@/lib/imageAssets";

export default function BananaBrandsPage() {
  const [selectedWeight, setSelectedWeight] = useState<string>("All");

  const weights = ["All", "14 Kg", "13 Kg", "7 Kg", "5 Kg"];

  const filteredBrands =
    selectedWeight === "All"
      ? bananaBrands
      : bananaBrands.filter((b) => b.packagingWeight.includes(selectedWeight.replace(" Kg", "")));

  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-24 bg-[#051815] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageAssets.gallery.bananaHarvest.src}
            alt="Banana Plantation Harvest"
            fill
            sizes="100vw"
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051815] via-[#051815]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Our Banana" }]}
            className="mb-6 text-gray-300"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <Package className="w-3.5 h-3.5 text-[#eecd15]" />
              <span>Export Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Our Banana <span className="text-emerald-400">Brands</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              We cultivate, carefully grade, and package premium Cavendish bananas across 7 specialized brand identities, engineered to satisfy diverse international market preferences, supermarket specifications, and regional retail requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-gray-200 gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <span className="text-xs font-bold text-gray-500 uppercase mr-1">
              Filter By Box Weight:
            </span>
            {weights.map((w) => (
              <button
                key={w}
                onClick={() => setSelectedWeight(w)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedWeight === w
                    ? "bg-[#107634] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {w}
              </button>
            ))}
          </div>

          <div className="text-xs text-gray-500 font-medium">
            Showing <strong>{filteredBrands.length}</strong> of {bananaBrands.length} Brands
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="group bg-white rounded-3xl p-7 border border-gray-200/80 hover:border-[#107634]/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#eecd15]/20 text-[#854d0e] border border-[#eecd15]/30">
                    <Package className="w-3.5 h-3.5" />
                    <span>{brand.packagingWeight} Box</span>
                  </span>

                  <span className="text-xs font-semibold text-gray-400">
                    Cavendish G9
                  </span>
                </div>

                {/* Packaging Image */}
                <Link
                  href={`/banana/${brand.slug}`}
                  className="relative w-full aspect-square rounded-2xl bg-[#faf9f7] p-6 flex items-center justify-center overflow-hidden group-hover:bg-emerald-50/30 transition-colors block"
                >
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="mt-6">
                  <div className="text-xs font-bold text-[#107634] uppercase tracking-wider">
                    {brand.tagline}
                  </div>
                  <h2 className="text-2xl font-black text-[#051815] group-hover:text-[#107634] transition-colors mt-1">
                    {brand.name}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
                  {brand.exportHighlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#107634] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={`/banana/${brand.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#107634] hover:text-[#0a4d22] transition-colors group/btn"
                >
                  <span>View Packaging Specifications</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="text-xs font-medium text-gray-500 hover:text-gray-900"
                >
                  Order Sample
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cold Chain & Handling Specifications Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#051815] to-[#0a241f] text-white border border-white/10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#eecd15]">
              Export Assurance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Strict Post-Harvest & Cold Chain Protocols
            </h2>
            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              Every shipment leaving our Maharashtra packing facilities adheres to standardized cold-chain monitoring, ensuring zero temperature abuse during transit to Middle East and Central Asian ports.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="flex items-start gap-3">
              <Thermometer className="w-6 h-6 text-[#eecd15] shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-white">13.5°C Controlled Reefer</h4>
                <p className="text-xs text-gray-300 mt-1">Continuous electronic datalogger tracking from dispatch to discharge port.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-white">Hygienic De-Handing</h4>
                <p className="text-xs text-gray-300 mt-1">Alum sponge crown treatment preventing fungal entry and crown-rot.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-white">Custom Cartons</h4>
                <p className="text-xs text-gray-300 mt-1">Reinforced 5-ply kraft boxes built for high humidity ocean voyages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

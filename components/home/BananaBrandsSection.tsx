"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Package, Eye } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bananaBrands, BananaBrand } from "@/data/bananaBrands";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";

export function BananaBrandsSection() {
  const [selectedBrand, setSelectedBrand] = useState<BananaBrand | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? bananaBrands.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === bananaBrands.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#faf9f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Export Portfolio • 7 Dedicated Brands"
            title="Premium Banana"
            highlightText="Brands"
            subtitle="Carefully cultivated Cavendish bananas naturally ripened and sorted for high-demand international markets."
            align="left"
          />

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous banana brand"
              className="p-3 rounded-full border border-gray-200 hover:border-[#107634] hover:bg-[#107634] hover:text-white transition-all text-gray-700 bg-white shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next banana brand"
              className="p-3 rounded-full border border-gray-200 hover:border-[#107634] hover:bg-[#107634] hover:text-white transition-all text-gray-700 bg-white shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              href="/banana"
              className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#107634] text-white text-xs font-bold hover:bg-[#0a4d22] transition-colors"
            >
              <span>All Brands</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Brand Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bananaBrands.map((brand) => (
            <div
              key={brand.id}
              className="group bg-white rounded-3xl p-6 border border-gray-200/80 hover:border-[#107634]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top info */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#eecd15]/20 text-[#854d0e] border border-[#eecd15]/30">
                    <Package className="w-3 h-3" />
                    <span>{brand.packagingWeight}</span>
                  </span>

                  <button
                    onClick={() => setSelectedBrand(brand)}
                    aria-label={`Quick preview for ${brand.name}`}
                    className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#107634] transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Packaging Image */}
                <div
                  onClick={() => setSelectedBrand(brand)}
                  className="relative w-full aspect-square rounded-2xl bg-[#faf9f7] p-4 flex items-center justify-center cursor-pointer overflow-hidden group-hover:bg-emerald-50/40 transition-colors"
                >
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Brand Name & Tagline */}
                <h3 className="mt-5 text-lg font-bold text-[#051815] group-hover:text-[#107634] transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={`/banana/${brand.slug}`}
                  className="text-xs font-bold text-[#107634] hover:underline flex items-center gap-1 group/link"
                >
                  <span>Explore Brand</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>

                <button
                  onClick={() => setSelectedBrand(brand)}
                  className="text-[11px] font-medium text-gray-500 hover:text-gray-900"
                >
                  Quick Specs
                </button>
              </div>
            </div>
          ))}

          {/* 8th Card: Cold Chain Banner */}
          <div className="group rounded-3xl p-6 bg-gradient-to-br from-[#051815] to-[#0a241f] text-white flex flex-col justify-between border border-white/10 shadow-lg">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-[#eecd15] border border-white/10 mb-4">
                <span>Global Transit</span>
              </div>
              <h3 className="text-xl font-extrabold leading-tight text-white">
                Unbroken Cold Chain Infrastructure
              </h3>
              <p className="mt-3 text-xs text-gray-300 leading-relaxed">
                Continuous 13.5°C reefer transit, pre-cooling, and datalogging ensure our fruit retains peak firmness upon port arrival.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href="/export-supply"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#107634] hover:bg-[#0a4d22] text-white text-xs font-bold transition-colors"
              >
                <span>Export Supply Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProductDetailModal
        product={selectedBrand}
        type="banana"
        onClose={() => setSelectedBrand(null)}
      />
    </section>
  );
}

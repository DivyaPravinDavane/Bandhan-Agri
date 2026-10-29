"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { agriProducts, agriCategories, AgriProduct } from "@/data/agriProducts";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";

export function AgriInputSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<AgriProduct | null>(null);

  const filteredProducts =
    activeCategory === "All"
      ? agriProducts
      : agriProducts.filter(
          (p) =>
            p.category.toLowerCase() === activeCategory.toLowerCase() ||
            p.subcategory.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeading
            eyebrow="Agri Input Solutions • Science-Backed"
            title="Advanced Crop Nutrition &"
            highlightText="Protection"
            subtitle="Supporting farmers with bio-stimulants, plant nutrition, organic formulations, and residue-free bio-pesticides."
            align="left"
          />

          <Link
            href="/agri-input"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#107634] text-white text-xs sm:text-sm font-bold hover:bg-[#0a4d22] transition-colors shrink-0 shadow-sm"
          >
            <span>Explore All Agri Inputs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {agriCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#107634] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#faf9f7] rounded-3xl p-6 border border-gray-200/80 hover:border-[#107634]/50 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#107634]/10 text-[#107634] border border-[#107634]/20 uppercase tracking-wide">
                    {product.category}
                  </span>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`Quick preview for ${product.name}`}
                    className="p-1.5 rounded-full hover:bg-gray-200 text-gray-400 hover:text-[#107634] transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Packaging Bottle Container */}
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="relative w-full aspect-square rounded-2xl bg-white p-4 flex items-center justify-center cursor-pointer overflow-hidden border border-gray-100 group-hover:border-[#107634]/20 transition-all"
                >
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Details */}
                <h3 className="mt-4 text-base font-extrabold text-[#051815] group-hover:text-[#107634] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-emerald-800 font-semibold line-clamp-1 mt-0.5">
                  {product.tagline}
                </p>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="mt-5 pt-4 border-t border-gray-200/70 flex items-center justify-between">
                <Link
                  href={`/agri-input/${product.slug}`}
                  className="text-xs font-bold text-[#107634] hover:underline flex items-center gap-1 group/btn"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="text-[11px] font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        type="agri-input"
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

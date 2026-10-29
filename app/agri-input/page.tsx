"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, RotateCcw, Eye, ArrowRight, CheckCircle2, Sprout, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { agriProducts, agriCategories, AgriProduct } from "@/data/agriProducts";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";
import { imageAssets } from "@/lib/imageAssets";

export default function AgriInputCataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"name" | "category">("name");
  const [selectedProduct, setSelectedProduct] = useState<AgriProduct | null>(null);

  const filteredProducts = useMemo(() => {
    return agriProducts
      .filter((product) => {
        const matchesCategory =
          selectedCategory === "All" ||
          product.category.toLowerCase() === selectedCategory.toLowerCase() ||
          product.subcategory.toLowerCase().includes(selectedCategory.toLowerCase());

        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return a.category.localeCompare(b.category);
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSortBy("name");
  };

  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-24 bg-[#051815] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageAssets.gallery.fieldInspection.src}
            alt="Agri Input Field Research"
            fill
            sizes="100vw"
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051815] via-[#051815]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Agri Input" }]}
            className="mb-6 text-gray-300"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <Sprout className="w-3.5 h-3.5 text-[#eecd15]" />
              <span>Bio-Nutrition & Crop Defense</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Agri Input <span className="text-emerald-400">Catalogue</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Explore Bandhan Agritech&apos;s science-driven agricultural inputs: organic biostimulants, specialized crop nutrition, residue-free pure neem formulations, and super-spreading adjuvants designed to maximize grower profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalogue Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Search & Sort Controls Bar */}
        <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products, ingredients, or benefits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white transition-all"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-gray-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "name" | "category")}
                className="text-xs font-bold px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#107634]"
              >
                <option value="name">Product Name (A-Z)</option>
                <option value="category">Category</option>
              </select>

              {(searchQuery || selectedCategory !== "All") && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-gray-600 hover:text-[#107634] hover:bg-gray-100 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-gray-100 no-scrollbar">
            {agriCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
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
        </div>

        {/* Product Count & Active Indicators */}
        <div className="flex items-center justify-between mt-8 mb-6">
          <p className="text-xs text-gray-500 font-medium">
            Showing <strong>{filteredProducts.length}</strong> products matching your criteria
          </p>
        </div>

        {/* Products Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl p-6 border border-gray-200/80 hover:border-[#107634]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Pill & Quick View */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#107634]/10 text-[#107634] border border-[#107634]/20 uppercase tracking-wide">
                      {product.category}
                    </span>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      aria-label={`Quick view for ${product.name}`}
                      className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#107634] transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product Packaging Image */}
                  <Link
                    href={`/agri-input/${product.slug}`}
                    className="relative w-full aspect-square rounded-2xl bg-[#faf9f7] p-5 flex items-center justify-center overflow-hidden border border-gray-100 group-hover:bg-emerald-50/20 transition-all block"
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
                  </Link>

                  {/* Title & Tagline */}
                  <div className="mt-5">
                    <h2 className="text-base font-extrabold text-[#051815] group-hover:text-[#107634] transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-xs font-semibold text-emerald-800 line-clamp-1 mt-0.5">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1.5 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Pack sizes */}
                  <div className="mt-3 text-[11px] text-gray-400">
                    <strong>Packs:</strong> {product.packagingSizes.join(", ")}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/agri-input/${product.slug}`}
                    className="text-xs font-bold text-[#107634] hover:underline flex items-center gap-1 group/btn"
                  >
                    <span>Full Specs</span>
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
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200/80 shadow-sm max-w-md mx-auto my-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              No matching products found
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We couldn&apos;t find any agricultural inputs matching &ldquo;{searchQuery}&rdquo;. Try adjusting your search term or category filter.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#107634] text-white text-xs font-bold hover:bg-[#0a4d22] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <ProductDetailModal
        product={selectedProduct}
        type="agri-input"
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye, Camera, HeartHandshake } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems, galleryCategories, GalleryItem } from "@/data/gallery";
import { imageAssets } from "@/lib/imageAssets";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === "Escape") setActiveItem(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeItem, filteredItems]);

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setActiveItem(filteredItems[prevIndex]);
  };

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setActiveItem(filteredItems[nextIndex]);
  };

  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-24 bg-[#051815] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageAssets.gallery.packagingUnit.src}
            alt="Bandhan Agritech Facility"
            fill
            sizes="100vw"
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051815] via-[#051815]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Gallery & CSR" }]}
            className="mb-6 text-gray-300"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <Camera className="w-3.5 h-3.5 text-[#eecd15]" />
              <span>Visual Journey</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Photo Gallery & <span className="text-emerald-400">CSR</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Authentic glimpses into our banana plantations, state-of-the-art packaging facilities, in-house cold chain storage, and community farmer engagement workshops.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#107634] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-emerald-300 text-[10px] font-bold border border-white/10">
                  {item.category}
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base font-bold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 bg-white">
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CSR / Farmer Community Commitment Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-[#107634]/10 text-[#107634] flex items-center justify-center shrink-0">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#107634] uppercase tracking-wider">
              Corporate Social Responsibility
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#051815]">
              Empowering Rural Farming Communities
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
              Bandhan Agritech regularly conducts free soil test interpretation workshops, drip irrigation efficiency clinics, and safe agri-input handling seminars across rural Maharashtra and Himachal Pradesh.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          {/* Close button */}
          <button
            onClick={() => setActiveItem(null)}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {activeItem.category}
              </span>
              <h3 className="text-xl font-bold mt-1">{activeItem.title}</h3>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

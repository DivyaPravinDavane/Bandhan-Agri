"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIdx((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Farmer & Partner Voices"
            title="Hear What Our Growers &"
            highlightText="Partners Say"
            subtitle="Real feedback from agricultural producers, orchardists, and export growers across India."
            align="left"
          />

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-gray-200 hover:border-[#107634] hover:bg-[#107634] hover:text-white transition-all text-gray-700 bg-white shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-gray-200 hover:border-[#107634] hover:bg-[#107634] hover:text-white transition-all text-gray-700 bg-white shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                idx === activeIdx
                  ? "bg-[#faf9f7] border-[#107634] shadow-lg ring-1 ring-[#107634]/20"
                  : "bg-white border-gray-200/80 hover:border-gray-300 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#eecd15]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#107634]/20" />
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {item.productMentioned && (
                  <div className="mt-4 inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#107634]/10 text-[#107634]">
                    Product Used: {item.productMentioned}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#051815]">
                    {item.author}
                  </h4>
                  <div className="text-xs text-gray-500">{item.role}</div>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#107634] font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Flag } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journeyMilestones } from "@/data/journey";

export function JourneySection() {
  // Show key preview milestones on homepage (2015, 2016, 2020, 2022, 2024, 2025)
  const previewMilestones = journeyMilestones.filter((m) =>
    ["2015", "2016", "2020", "2024", "2025"].includes(m.year)
  );

  return (
    <section className="py-20 lg:py-28 bg-[#faf9f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Milestones • 2015 to 2025"
            title="A Decade of Agricultural"
            highlightText="Excellence"
            subtitle="From our first export container dispatched from Jalgaon to a 10-country international footprint."
            align="left"
          />

          <Link
            href="/our-journey"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#107634] text-white text-xs sm:text-sm font-bold hover:bg-[#0a4d22] transition-colors shrink-0 shadow-sm"
          >
            <span>Explore Full 10-Year Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {previewMilestones.map((milestone, idx) => (
            <div
              key={milestone.year}
              className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#107634]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-black text-[#107634]">
                    {milestone.year}
                  </span>
                  {milestone.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#eecd15]/20 text-[#854d0e]">
                      {milestone.badge}
                    </span>
                  )}
                </div>

                {milestone.image && (
                  <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3">
                    <Image
                      src={milestone.image}
                      alt={milestone.headline}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                )}

                <h4 className="text-sm font-bold text-[#051815] leading-snug">
                  {milestone.headline}
                </h4>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-3">
                  {milestone.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 text-[10px] text-gray-400 flex items-center gap-1">
                <Flag className="w-3 h-3 text-[#107634]" />
                <span>Verified Official Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

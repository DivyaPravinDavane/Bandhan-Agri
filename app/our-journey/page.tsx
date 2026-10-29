"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Flag, CheckCircle2, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journeyMilestones, JourneyMilestone } from "@/data/journey";
import { imageAssets } from "@/lib/imageAssets";

export default function OurJourneyPage() {
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const years = ["All", "2015", "2016", "2017 – 2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];

  const filteredMilestones =
    selectedYear === "All"
      ? journeyMilestones
      : journeyMilestones.filter((m) => m.year === selectedYear);

  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-24 bg-[#051815] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageAssets.gallery.cargoLoading.src}
            alt="Bandhan Agritech Milestones"
            fill
            sizes="100vw"
            className="object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051815] via-[#051815]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "About Us", href: "/about" },
              { label: "Our Journey" },
            ]}
            className="mb-6 text-gray-300"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-[#eecd15]" />
              <span>Decade of Growth • 2015 to 2025</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Our <span className="text-emerald-400">Journey</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Explore the key historical milestones of Bandhan Agritech Pvt. Ltd., from our initial grassroots farmer connections in Pune to our first Jalgaon export dispatch and a pan-India network touching 100,000+ growers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Timeline Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Year jump selector */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-2 overflow-x-auto no-scrollbar mb-12">
          <span className="text-xs font-bold text-gray-400 uppercase shrink-0 px-2">
            Jump to:
          </span>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedYear === y
                  ? "bg-[#107634] text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#107634]/30 ml-4 sm:ml-32 space-y-12">
          {filteredMilestones.map((m, idx) => (
            <div key={m.year} className="relative pl-6 sm:pl-10">
              {/* Year Marker Badge on the left */}
              <div className="sm:absolute sm:-left-32 sm:top-1 text-left sm:text-right sm:w-24 mb-2 sm:mb-0">
                <span className="text-2xl font-black text-[#107634]">
                  {m.year}
                </span>
                {m.badge && (
                  <span className="block text-[10px] font-bold text-[#854d0e] bg-[#eecd15]/20 px-2 py-0.5 rounded-full mt-1 sm:ml-auto w-fit">
                    {m.badge}
                  </span>
                )}
              </div>

              {/* Dot on the timeline line */}
              <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-[#107634] border-4 border-white shadow-sm ring-2 ring-[#107634]/20" />

              {/* Milestone Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#107634]/50 transition-all duration-300">
                <h2 className="text-xl sm:text-2xl font-black text-[#051815]">
                  {m.headline}
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {m.description}
                </p>

                {m.image && (
                  <div className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden my-5">
                    <Image
                      src={m.image}
                      alt={m.headline}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                    Key Achievements:
                  </div>
                  <ul className="space-y-1.5">
                    {m.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#107634] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Banner */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-[#051815] to-[#0a241f] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold text-[#eecd15] uppercase tracking-wider">
              2025 and Beyond
            </span>
            <h3 className="text-xl font-bold mt-1">
              Building the Future of Indian Agriculture
            </h3>
            <p className="text-xs text-gray-300 mt-1 max-w-md">
              Expanding tissue-culture sourcing, modern cold-chain hubs, and bio-nutritional science to empower the next generation of farmers.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#107634] hover:bg-[#0a4d22] text-white text-xs font-bold transition-colors shrink-0 shadow-md"
          >
            Connect With Us
          </Link>
        </div>
      </div>
    </div>
  );
}

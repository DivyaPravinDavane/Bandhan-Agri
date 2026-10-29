"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyData } from "@/data/company";
import { imageAssets } from "@/lib/imageAssets";

export function CompanyIntro() {
  return (
    <section className="py-20 lg:py-28 bg-[#faf9f7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-[4/3]">
              <Image
                src={imageAssets.gallery.plantation.src}
                alt="Bandhan Agritech Banana Plantation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-[#eecd15]">
                  Farm to World
                </span>
                <p className="text-sm font-semibold mt-1">
                  Connecting Maharashtra, Gujarat & Andhra Pradesh growers directly to international buyers.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#107634]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#107634]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase">
                    Food Safety & Purity
                  </div>
                  <div className="text-sm font-extrabold text-[#051815]">
                    Highest Level of Assessment
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="Our Company • Founded 2015"
              title="Connecting Indian Produce to Global"
              highlightText="Markets."
              align="left"
            />

            <p className="text-base text-gray-700 leading-relaxed">
              Founded in 2015 and headquartered in Pune, Bandhan Agritech Pvt. Ltd. is a leading name in Indian agriculture. Renowned for exporting premium bananas, the company connects Indian produce to both domestic and international markets.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Bandhan Agritech also provides farmers with high-quality agricultural inputs, including Organic and Chemical Fertilizers, Pesticides, Fungicides, and Insecticides, ensuring they have the tools needed for successful farming. Additionally, the company offers expert consultancy services, empowering farmers with modern, sustainable practices to boost productivity and profitability.
            </p>

            {/* Vision & Mission Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <div className="text-xs font-bold text-[#107634] uppercase tracking-wider mb-1">
                  Our Vision
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {companyData.vision}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <div className="text-xs font-bold text-[#107634] uppercase tracking-wider mb-1">
                  Our Mission
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {companyData.mission}
                </p>
              </div>
            </div>

            {/* Core Values Bullet Row */}
            <div className="pt-2 flex flex-wrap gap-2">
              {companyData.values.map((val, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#107634]/10 text-[#107634] border border-[#107634]/20"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#107634]" />
                  <span>{val.title}</span>
                </span>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#107634] hover:bg-[#0a4d22] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
              >
                <span>Discover Our Complete Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

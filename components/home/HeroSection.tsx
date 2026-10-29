"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Users, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { imageAssets } from "@/lib/imageAssets";
import { companyData } from "@/data/company";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#051815]">
      {/* Sleek Dark Corporate Gradient & Glow (No background image) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#107634]/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#107634]/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,118,52,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(5,24,21,0.9),transparent_70%)]" />
      </div>

      {/* Floating Botanical Leaf Accent */}
      <motion.div
        initial={{ opacity: 0, x: 40, rotate: -10 }}
        animate={{ opacity: 0.7, x: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute top-16 right-4 sm:right-16 w-16 sm:w-24 h-auto pointer-events-none hidden md:block"
      >
        <Image
          src={imageAssets.brand.heroLeaf.src}
          alt="Botanical Leaf Accent"
          width={93}
          height={184}
          className="object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide uppercase"
            >
              <span>Agriculture • Quality • Global Reach</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]"
            >
              Growing Quality. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-[#eecd15]">
                Connecting Markets.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-xl text-gray-200 max-w-2xl leading-relaxed font-normal"
            >
              From premium banana exports across 10+ countries to advanced agricultural input solutions, Bandhan Agritech supports the complete journey from the farm to the wider world.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/banana"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#107634] hover:bg-[#0a4d22] text-white font-bold text-base shadow-xl shadow-[#107634]/30 hover:shadow-[#107634]/50 transition-all duration-200 group active:scale-95"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all duration-200 active:scale-95"
              >
                <span>Discover Our Company</span>
              </Link>
            </motion.div>

            {/* Verified highlights list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-300 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100,000+ Farmers Connected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Cold-Chain Export Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero-Residue Bio-Inputs</span>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Showcase Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl text-white"
            >
              {/* Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                    Official Enterprise
                  </div>
                  <div className="text-xl font-extrabold text-white">
                    Bandhan Agritech
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#eecd15]/20 text-[#eecd15] border border-[#eecd15]/30 text-xs font-bold">
                  Est. 2015
                </div>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-black/25 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-[#eecd15]">
                    10+
                  </div>
                  <div className="text-xs text-gray-300 mt-1 font-medium">
                    Global Export Nations
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/25 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                    7
                  </div>
                  <div className="text-xs text-gray-300 mt-1 font-medium">
                    Export Banana Brands
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/25 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                    500+
                  </div>
                  <div className="text-xs text-gray-300 mt-1 font-medium">
                    Dealers & Distributors
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/25 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-[#eecd15]">
                    100K+
                  </div>
                  <div className="text-xs text-gray-300 mt-1 font-medium">
                    Partnered Farmers
                  </div>
                </div>
              </div>

              {/* Call to action card bottom */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs text-gray-300">
                  Direct Reefer Export Shipments
                </span>
                <Link
                  href="/export-supply"
                  className="text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-1 group"
                >
                  <span>Export Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

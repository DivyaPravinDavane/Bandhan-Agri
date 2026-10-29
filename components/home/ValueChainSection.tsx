import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyData } from "@/data/company";

export function ValueChainSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#051815] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#107634]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="From Soil to Soul • Quality Assured"
          title="The Bandhan"
          highlightText="Value Chain"
          subtitle="A meticulous four-stage farm-to-port journey ensuring freshness, safety, and international export grading."
          theme="dark"
          align="center"
          className="mb-16"
        />

        {/* Four Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {companyData.valueChain.map((item, index) => (
            <div
              key={item.step}
              className="group relative rounded-3xl p-6 bg-white/5 border border-white/10 hover:border-[#107634] hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step badge & Image */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#107634] text-white text-xs font-black shadow-md">
                    Step {item.step}
                  </div>
                </div>

                <div className="text-xs font-bold text-[#eecd15] uppercase tracking-wider mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress connector indicator */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                <span>Phase {item.step} of 04</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Need custom packaging sizes or specific destination calibrations?
            </h4>
            <p className="text-xs text-gray-300">
              We pack in 13kg, 13.5kg, 14kg, 7kg, and 5kg export-certified corrugated cartons.
            </p>
          </div>

          <Link
            href="/export-supply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#107634] hover:bg-[#0a4d22] text-white text-xs font-bold transition-colors shrink-0 shadow-md"
          >
            <span>View Export Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

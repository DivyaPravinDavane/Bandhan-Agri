import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, FileCheck, CheckCircle2, Award, ArrowRight, AlertCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { imageAssets } from "@/lib/imageAssets";

export default function CertificatesPage() {
  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-24 bg-[#051815] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageAssets.gallery.qualityCheck.src}
            alt="Quality Control Assessment"
            fill
            sizes="100vw"
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051815] via-[#051815]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "About Us", href: "/about" },
              { label: "Our Certificates & Quality" },
            ]}
            className="mb-6 text-gray-300"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#eecd15]" />
              <span>Verified Food Safety & Compliance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Quality & <span className="text-emerald-400">Certificates</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed italic">
              &ldquo;Our certifications reflect our commitment to delivering premium bananas, grown with the highest standards of quality and sustainability to customers worldwide.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Main Quality Framework */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <SectionHeading
            eyebrow="Compliance Framework"
            title="Rigorous Quality &"
            highlightText="Food Safety"
            subtitle="How Bandhan Agritech guarantees zero-bruise packaging, consistent calibration, and international export food hygiene."
            align="center"
          />
        </div>

        {/* 3 Quality Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#107634]/10 text-[#107634] flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#051815]">
              Pre-Harvest Grading & GAP Compliance
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Bunch tagging at inflorescence emergence ensures harvesting at precise physiological maturity (39-46 mm caliper) without over-maturation in the field.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#107634]" />
                <span>Bunch sleeve protection</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#107634]" />
                <span>Uniform finger length calibration</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#107634]/10 text-[#107634] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#051815]">
              Post-Harvest Sanitary Pack-House
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Multi-stage de-handing, clear water flotation, food-grade alum sponge application to protect crowns, and sponge wiping for impeccable clean peel appearance.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#107634]" />
                <span>Zero crown rot guarantees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#107634]" />
                <span>Residue-free washing tanks</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#107634]/10 text-[#107634] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#051815]">
              APEDA & Export Clearance
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Every container dispatched is inspected for phytosanitary compliance, temperature pulldown verification, and export documentation adherence.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#107634]" />
                <span>Phytosanitary inspection certificate</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#107634]" />
                <span>Export consignment traceability</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certificate Documentation Status Card */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#107634]/10 text-[#107634]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Compliance Inquiries</span>
            </div>
            <h3 className="text-xl font-bold text-[#051815]">
              Request Phytosanitary & Export Documentation Copies
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
              Importers and partners requiring consignment-specific certificate copies, lab residue reports, or APEDA registration documentation can contact our compliance desk directly.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#107634] hover:bg-[#0a4d22] text-white text-xs font-bold transition-colors shrink-0 shadow-md"
          >
            <span>Contact Compliance Team</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

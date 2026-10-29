"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ship, Thermometer, ShieldCheck, Package, CheckCircle2, Globe, Clock, ArrowRight, Send } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bananaBrands } from "@/data/bananaBrands";
import { imageAssets } from "@/lib/imageAssets";

export default function ExportSupplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    containerVolume: "1 Container (Trial)",
    bananaBrand: "Bandhan Banana (13 Kg)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.country) {
      setError("Please fill in your name, email, and target destination country.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-24 bg-[#051815] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageAssets.gallery.cargoLoading.src}
            alt="Reefer Container Loading for Export"
            fill
            sizes="100vw"
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051815] via-[#051815]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Export Supply" }]}
            className="mb-6 text-gray-300"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <Ship className="w-3.5 h-3.5 text-[#eecd15]" />
              <span>International Trade & Logistics</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Export <span className="text-emerald-400">Supply</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Dispatched directly from Maharashtra’s premier banana belts to Middle East and Central Asian ports. We operate precision cold chain infrastructure to preserve freshness from pack-house to destination discharge.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Four Core Export Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#107634]/10 text-[#107634] flex items-center justify-center">
              <Thermometer className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#051815]">
              13.5°C Controlled Reefer
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Unbroken refrigerated transit with continuous digital datalogging and atmospheric control to arrest premature ripening during ocean transit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#107634]/10 text-[#107634] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#051815]">
              Export Sanitary Protocols
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Alum sponge crown cut treatment, chlorine clean wash, vacuum poly bags, and zero harmful chemical residues complying with destination MRLs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#107634]/10 text-[#107634] flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#051815]">
              5-Ply Reinforced Cartons
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              High burst-strength kraft paper construction with bottom ventilation and anti-friction foam separators preventing peel scarring.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#107634]/10 text-[#107634] flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#051815]">
              10+ Country Destinations
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Established shipping corridor partnerships delivering consistent weekly containers to major Arabian Gulf and regional transit terminals.
            </p>
          </div>
        </div>

        {/* Packaging Matrix Table & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-[#107634] uppercase tracking-wider">
                Box Specifications
              </span>
              <h2 className="text-2xl font-black text-[#051815] mt-1">
                Standard Export Carton Options
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Our cartons are engineered according to destination retailer turnover, container pallet density, and supermarket shelf display needs.
              </p>
            </div>

            <div className="divide-y divide-gray-100 text-xs sm:text-sm">
              <div className="py-3.5 flex items-center justify-between">
                <div>
                  <strong className="text-gray-900">14.0 Kg Net Weight</strong>
                  <div className="text-xs text-gray-500">Shadab Banana, Alaa, King, Roshana</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#107634]/10 text-[#107634] font-bold text-xs">
                  Wholesale & High-Yield
                </span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <div>
                  <strong className="text-gray-900">13.0 / 13.5 Kg Net Weight</strong>
                  <div className="text-xs text-gray-500">Bandhan Banana, King Banana, Alaa</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#107634]/10 text-[#107634] font-bold text-xs">
                  International Standard
                </span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <div>
                  <strong className="text-gray-900">7.0 Kg Compact Carton</strong>
                  <div className="text-xs text-gray-500">Laaibah Banana</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#eecd15]/20 text-[#854d0e] font-bold text-xs">
                  Boutique Retail
                </span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <div>
                  <strong className="text-gray-900">5.0 Kg Consumer Pack</strong>
                  <div className="text-xs text-gray-500">Haniya Banana</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#eecd15]/20 text-[#854d0e] font-bold text-xs">
                  Direct Retail / Gift
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3 text-xs text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-[#107634] shrink-0 mt-0.5" />
              <span>
                All cartons are pre-cooled to pull field heat within 6 to 8 hours of bunch harvest, arresting senescence and preserving shelf life.
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg h-96 border border-gray-100">
            <Image
              src={imageAssets.gallery.coldStorage.src}
              alt="Cold storage preservation"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs font-bold text-[#eecd15] uppercase">
                Facility Infrastructure
              </div>
              <h4 className="text-base font-bold mt-1">In-House Cold Storage Facilities</h4>
              <p className="text-xs text-gray-200 mt-1">
                Ensuring export-grade temperature stabilization before port dispatch.
              </p>
            </div>
          </div>
        </div>

        {/* Export Enquiry Form (Frontend-only) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-xl max-w-3xl mx-auto">
          <div className="text-center max-w-lg mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold text-[#107634] uppercase tracking-wider">
              Direct Trade Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#051815]">
              Request an Export Quotation
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Submit your container requirements. This frontend demonstration records your inquiry locally.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#107634] text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#051815]">
                Export Enquiry Received (Frontend Demo)
              </h3>
              <p className="text-xs sm:text-sm text-emerald-900 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in Bandhan Agritech produce. This frontend demo has recorded your submission locally for demonstration purposes only.
              </p>
              <div className="pt-2 text-xs text-gray-500">
                Summary: {formData.bananaBrand} • {formData.containerVolume} for {formData.country}
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full bg-[#107634] text-white text-xs font-bold hover:bg-[#0a4d22] transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tariq@importers.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Global Fruits Trading LLC"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Destination Country / Port *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Jebel Ali, UAE / Dammam, KSA"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Target Banana Brand
                  </label>
                  <select
                    value={formData.bananaBrand}
                    onChange={(e) => setFormData({ ...formData, bananaBrand: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                  >
                    {bananaBrands.map((b) => (
                      <option key={b.id} value={`${b.name} (${b.packagingWeight})`}>
                        {b.name} ({b.packagingWeight})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Estimated Shipment Volume
                  </label>
                  <select
                    value={formData.containerVolume}
                    onChange={(e) => setFormData({ ...formData, containerVolume: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                  >
                    <option value="1 Container (Trial)">1 Container (Trial)</option>
                    <option value="2 – 5 Containers / Month">2 – 5 Containers / Month</option>
                    <option value="6 – 10 Containers / Month">6 – 10 Containers / Month</option>
                    <option value="Contract Program (10+ Containers)">Contract Program (10+ Containers)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Specific Requirements or Message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention finger calibration, palletization preferences, or discharge timeline..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#107634] hover:bg-[#0a4d22] text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Export Enquiry (Demo)</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { imageAssets } from "@/lib/imageAssets";
import { companyData } from "@/data/company";

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#051815]">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageAssets.gallery.cargoLoading.src}
          alt="Bandhan Agritech Export Cargo Logistics"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051815] via-[#051815]/90 to-[#051815]/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/10">
            <span>Partner with Bandhan Agritech</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Let&apos;s Grow Better <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#eecd15]">
              Together.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
            Whether you are an international produce importer seeking reliable Cavendish reefer shipments, or an agricultural producer looking for premium bio-inputs and agronomic support, our team is ready to assist.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 justify-center sm:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#107634] hover:bg-[#0a4d22] text-white font-bold text-sm shadow-xl shadow-[#107634]/30 transition-all active:scale-95 group"
            >
              <span>Get in Touch With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/banana"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all active:scale-95"
            >
              <span>Explore Banana Brands</span>
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-6 justify-center sm:justify-start text-xs text-gray-300 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#eecd15]" />
              <span>Toll Free: {companyData.contact.tollFree}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#eecd15]" />
              <span>{companyData.contact.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

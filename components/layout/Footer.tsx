import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { companyData } from "@/data/company";
import { bananaBrands } from "@/data/bananaBrands";
import { imageAssets } from "@/lib/imageAssets";

export function Footer() {
  return (
    <footer className="bg-[#051815] text-[#e8eae5] pt-16 pb-12 border-t border-[#107634]/30 relative overflow-hidden">
      {/* Decorative leaf background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#107634]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Overview (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block bg-white/95 p-2 rounded-xl">
              <div className="relative h-12 w-48">
                <Image
                  src={imageAssets.brand.logo.src}
                  alt={imageAssets.brand.logo.alt}
                  fill
                  sizes="192px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Founded in 2015 and headquartered in Pune, Bandhan Agritech Pvt. Ltd. connects Indian agricultural excellence to both domestic and international markets through premium banana exports, scientifically backed crop inputs, and farmer consultancy.
            </p>

            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#eecd15] shrink-0 mt-0.5" />
                <span>{companyData.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#eecd15] shrink-0" />
                <span>Toll Free: <strong className="text-white">{companyData.contact.tollFree}</strong> | Direct: {companyData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#eecd15] shrink-0" />
                <span>{companyData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#eecd15] shrink-0" />
                <span>{companyData.contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Banana Brands */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-emerald-400">
              Our Banana Brands
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {bananaBrands.map((brand) => (
                <li key={brand.id}>
                  <Link
                    href={`/banana/${brand.slug}`}
                    className="hover:text-emerald-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{brand.name}</span>
                    <span className="text-[10px] text-gray-400 group-hover:text-emerald-400">
                      {brand.packagingWeight}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/export-supply"
                  className="text-xs font-semibold text-[#eecd15] hover:underline flex items-center gap-1"
                >
                  Export & Logistics <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Agri Inputs */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-emerald-400">
              Agri Input Solutions
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/agri-input?category=Biostimulants" className="hover:text-emerald-300 transition-colors">
                  Biostimulants (B-Vita, Advance Bloomer)
                </Link>
              </li>
              <li>
                <Link href="/agri-input?category=Nutrition" className="hover:text-emerald-300 transition-colors">
                  Crop Nutrition (ORO GOLD)
                </Link>
              </li>
              <li>
                <Link href="/agri-input?category=Crop+Protection" className="hover:text-emerald-300 transition-colors">
                  Crop Protection (Balesto)
                </Link>
              </li>
              <li>
                <Link href="/agri-input?category=Bio-pesticides" className="hover:text-emerald-300 transition-colors">
                  Bio-pesticides (Pure Neem 1500, 3000, 10000)
                </Link>
              </li>
              <li>
                <Link href="/agri-input?category=Adjuvants" className="hover:text-emerald-300 transition-colors">
                  Adjuvants (Spreadonix)
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/agri-input"
                  className="text-xs font-semibold text-[#eecd15] hover:underline flex items-center gap-1"
                >
                  View Product Catalogue <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Corporate */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-emerald-400">
              Company
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-emerald-300 transition-colors">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-emerald-300 transition-colors">
                  Leadership & Team
                </Link>
              </li>
              <li>
                <Link href="/our-journey" className="hover:text-emerald-300 transition-colors">
                  Our Journey (2015 – 2025)
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:text-emerald-300 transition-colors">
                  Quality & Certificates
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-emerald-300 transition-colors">
                  Photo Gallery & CSR
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-emerald-300 transition-colors">
                  Insights & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-300 transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © 2026 Bandhan Agritech Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-[#eecd15]" />
              <span>Certified Food Safety & APEDA Compliant</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <HeartHandshake className="w-4 h-4 text-[#eecd15]" />
              <span>Farmer First Transparency</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Trade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

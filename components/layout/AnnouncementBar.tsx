import React from "react";
import Link from "next/link";
import { Phone, MapPin, Globe } from "lucide-react";
import { companyData } from "@/data/company";

export function AnnouncementBar() {
  return (
    <div className="bg-[#051815] text-[#e8eae5] text-xs py-2 px-4 border-b border-[#107634]/20 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
            <span>Premium Agricultural Export & Crop Input Solutions</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-[#107634]" />
            <span>Headquartered in Baner, Pune</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`tel:${companyData.contact.tollFree}`}
            className="flex items-center gap-1.5 hover:text-[#eecd15] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#eecd15]" />
            <span>Toll Free: <strong>{companyData.contact.tollFree}</strong></span>
          </a>
          <span className="text-gray-600">|</span>
          <Link
            href="/export-supply"
            className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>10+ Global Destinations</span>
          </Link>
          <span className="text-gray-600">|</span>
          <Link
            href="/contact"
            className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
          >
            Export Enquiry &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

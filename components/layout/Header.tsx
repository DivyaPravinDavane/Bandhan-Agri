"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { AnnouncementBar } from "./AnnouncementBar";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { imageAssets } from "@/lib/imageAssets";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnnouncementBar />
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2.5"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100/80 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <div className="relative h-12 w-48 sm:w-56 sm:h-14 transition-transform group-hover:scale-[1.01]">
              <Image
                src={imageAssets.brand.logo.src}
                alt={imageAssets.brand.logo.alt}
                fill
                priority
                sizes="(max-width: 640px) 190px, 224px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs xl:text-sm font-bold bg-[#107634] text-white hover:bg-[#0a4d22] shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Export Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#107634] text-white hover:bg-[#0a4d22] transition-colors"
            >
              Enquire
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

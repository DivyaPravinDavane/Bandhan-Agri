"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { companyData } from "@/data/company";
import { imageAssets } from "@/lib/imageAssets";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-hidden">
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-100 bg-gray-50/50">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src={imageAssets.brand.logo.src}
              alt={imageAssets.brand.logo.alt}
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {mainNavigation.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedSection === item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-base font-semibold text-[#19201d] hover:bg-[#107634]/5 hover:text-[#107634] rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="border-b border-gray-50 pb-1">
                <button
                  onClick={() => toggleSection(item.label)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-[#19201d] hover:bg-[#107634]/5 hover:text-[#107634] rounded-xl transition-colors text-left"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-[#107634]" : "text-gray-400"
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50/60 rounded-xl mb-2">
                    {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={onClose}
                        className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#107634] hover:bg-white rounded-lg transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span>{child.label}</span>
                          {child.badge && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#107634]/10 text-[#107634]">
                              {child.badge}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact info bottom */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-3">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Phone className="w-4 h-4 text-[#107634]" />
            <span>Toll Free: <strong>{companyData.contact.tollFree}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Mail className="w-4 h-4 text-[#107634]" />
            <span>{companyData.contact.email}</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <MapPin className="w-4 h-4 text-[#107634] shrink-0 mt-0.5" />
            <span className="line-clamp-2">Baner, Pune, Maharashtra 411045</span>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[#107634] text-white font-semibold text-sm hover:bg-[#0a4d22] transition-colors"
          >
            Export & Product Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
}

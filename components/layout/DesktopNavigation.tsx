"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Package } from "lucide-react";
import { mainNavigation, NavItem } from "@/data/navigation";
import { bananaBrands } from "@/data/bananaBrands";

export function DesktopNavigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
      {mainNavigation.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = activeDropdown === item.label;

        if (!hasChildren) {
          return (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-[#19201d] hover:text-[#107634] rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          );
        }

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={item.href}
              className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isOpen
                  ? "text-[#107634] bg-[#107634]/5"
                  : "text-[#19201d] hover:text-[#107634]"
              }`}
            >
              <span>{item.label}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#107634]" : "text-gray-400"
                }`}
              />
            </Link>

            {/* Mega Menu Dropdowns */}
            {isOpen && item.label === "Our Banana" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px] z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                    <div>
                      <div className="text-xs font-bold text-[#107634] uppercase tracking-wider">
                        Export Banana Portfolio
                      </div>
                      <div className="text-sm font-semibold text-[#051815]">
                        7 Dedicated International Brands
                      </div>
                    </div>
                    <Link
                      href="/banana"
                      className="text-xs font-semibold text-[#107634] hover:underline flex items-center gap-1"
                    >
                      View All Brands <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {bananaBrands.map((brand) => (
                      <Link
                        key={brand.id}
                        href={`/banana/${brand.slug}`}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#107634]/5 transition-all"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center p-1 shrink-0 relative overflow-hidden border border-gray-100 group-hover:border-[#107634]/30">
                          <Image
                            src={brand.image}
                            alt={brand.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-gray-900 group-hover:text-[#107634] truncate">
                              {brand.name}
                            </span>
                          </div>
                          <span className="inline-block mt-0.5 px-1.5 py-0.2 rounded text-[10px] font-semibold bg-[#eecd15]/20 text-[#854d0e]">
                            {brand.packagingWeight}
                          </span>
                          <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                            {brand.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}

                    <Link
                      href="/export-supply"
                      className="group flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-[#107634] to-[#0a4d22] text-white col-span-2 hover:shadow-md transition-all"
                    >
                      <Package className="w-6 h-6 text-[#eecd15] shrink-0" />
                      <div>
                        <div className="text-xs font-bold">Cold Chain & Export Supply</div>
                        <p className="text-[11px] text-emerald-100 line-clamp-1">
                          Reefer logistics, pre-cooling, and port delivery systems
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {isOpen && item.label === "Agri Input" && (
              <div className="absolute top-full left-0 pt-2 w-96 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 overflow-hidden">
                  <div className="text-xs font-bold text-[#107634] uppercase tracking-wider mb-2">
                    Agricultural Input Categories
                  </div>
                  <div className="space-y-1">
                    {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#107634]/5 transition-all"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#107634] mt-2 group-hover:scale-125 transition-transform shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-gray-900 group-hover:text-[#107634] transition-colors">
                            {child.label}
                          </div>
                          {child.description && (
                            <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
                              {child.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <Link
                      href="/agri-input"
                      className="text-xs font-bold text-[#107634] hover:underline flex items-center justify-between"
                    >
                      <span>Explore All Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {isOpen && item.label === "About Us" && (
              <div className="absolute top-full left-0 pt-2 w-80 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 space-y-1">
                  {item.children?.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#107634]/5 transition-all"
                    >
                      <div>
                        <div className="text-xs font-bold text-gray-900 group-hover:text-[#107634] transition-colors">
                          {child.label}
                        </div>
                        {child.description && (
                          <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
                            {child.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

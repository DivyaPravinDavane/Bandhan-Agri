"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle2, Package, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BananaBrand } from "@/data/bananaBrands";
import { AgriProduct } from "@/data/agriProducts";

interface ProductDetailModalProps {
  product: BananaBrand | AgriProduct | null;
  type: "banana" | "agri-input";
  onClose: () => void;
}

export function ProductDetailModal({
  product,
  type,
  onClose,
}: ProductDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const isBanana = type === "banana";
  const banana = isBanana ? (product as BananaBrand) : null;
  const agri = !isBanana ? (product as AgriProduct) : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-gray-100/80 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Left Column: Product Image */}
            <div className="bg-gradient-to-br from-[#faf9f7] to-[#f4f5f3] p-8 flex flex-col items-center justify-center relative border-b sm:border-b-0 sm:border-r border-gray-100">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 192px, 224px"
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {isBanana && banana && (
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#eecd15]/20 text-[#854d0e] border border-[#eecd15]/30">
                  <Package className="w-3.5 h-3.5" />
                  <span>Packaging: {banana.packagingWeight}</span>
                </div>
              )}

              {!isBanana && agri && (
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#107634]/10 text-[#107634] border border-[#107634]/20">
                  <span>{agri.category}</span>
                </div>
              )}
            </div>

            {/* Right Column: Information */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#107634] uppercase tracking-wider mb-1">
                  {isBanana ? "Export Grade Produce" : agri?.subcategory}
                </div>
                <h3 className="text-2xl font-black text-[#051815] leading-tight">
                  {product.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Highlights / Features */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs font-bold text-gray-900 mb-2">
                    {isBanana ? "Export Standards:" : "Key Benefits:"}
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    {isBanana &&
                      banana?.exportHighlights.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#107634] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}

                    {!isBanana &&
                      agri?.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#107634] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                {!isBanana && agri && (
                  <div className="mt-3 text-xs text-gray-500">
                    <strong>Packs:</strong> {agri.packagingSizes.join(", ")}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                <Link
                  href={isBanana ? `/banana/${banana?.slug}` : `/agri-input/${agri?.slug}`}
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#107634] text-white text-xs font-bold hover:bg-[#0a4d22] transition-colors"
                >
                  <span>Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-gray-200 text-gray-700 text-xs font-bold hover:bg-gray-50 transition-colors"
                >
                  Enquire
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

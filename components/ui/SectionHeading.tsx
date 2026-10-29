import React from "react";
import Image from "next/image";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  showLeaf?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlightText,
  subtitle,
  align = "center",
  theme = "light",
  showLeaf = true,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 transition-all bg-[#107634]/10 text-[#107634] border border-[#107634]/20">
          {showLeaf && (
            <span className="relative w-3.5 h-3.5 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 text-[#107634]"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </span>
          )}
          {eyebrow}
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
          isDark ? "text-white" : "text-[#051815]"
        }`}
      >
        {title}{" "}
        {highlightText && (
          <span className="text-[#107634] relative inline-block">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${
            isDark ? "text-emerald-100/70" : "text-[#585c59]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

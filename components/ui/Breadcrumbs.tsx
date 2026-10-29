import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-xs sm:text-sm text-[#585c59] ${className}`}
    >
      <Link
        href="/"
        className="flex items-center gap-1 text-[#585c59] hover:text-[#107634] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            {isLast || !item.href ? (
              <span className="font-semibold text-[#107634] truncate max-w-[200px] sm:max-w-xs">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-[#107634] transition-colors truncate max-w-[150px]"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

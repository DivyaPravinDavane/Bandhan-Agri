import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-semibold gap-1.5",
    md: "px-6 py-2.5 text-sm font-semibold gap-2",
    lg: "px-7 py-3.5 text-base font-semibold gap-2.5",
  }[size];

  const variantClasses = {
    primary:
      "bg-[#107634] hover:bg-[#0a4d22] text-white shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]",
    secondary:
      "bg-[#051815] hover:bg-[#0a241f] text-white shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]",
    gold: "bg-[#eecd15] hover:bg-[#d8b80b] text-[#051815] font-bold shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]",
    outline:
      "bg-transparent border border-[#107634] text-[#107634] hover:bg-[#107634] hover:text-white transition-all duration-200 active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#051815] hover:bg-[#107634]/10 hover:text-[#107634] transition-all duration-200",
  }[variant];

  const baseClasses = `inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#107634] focus:ring-offset-2 ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        )}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
}

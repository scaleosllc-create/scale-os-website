"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  arrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-white hover:bg-black shadow-btn",
  secondary: "bg-transparent text-ink ring-1 ring-ink/20 hover:ring-ink/40 hover:bg-ink/[0.03]",
  accent: "bg-forest text-white hover:bg-[#245A42] shadow-btn",
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className = "",
  arrow = false,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]";
  const styles = `${base} ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight size={14} weight="bold" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
        <Link href={href} className={styles}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={styles}
      disabled={disabled}
      onClick={onClick}
      whileTap={disabled ? undefined : { scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}

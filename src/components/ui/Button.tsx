"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-white hover:bg-black shadow-btn",
  secondary: "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white",
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
}: ButtonProps) {
  const base =
    "inline-block rounded-[3px] px-7 py-3.5 text-[13px] font-medium uppercase tracking-wider transition-colors duration-200";
  const styles = `${base} ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
        <Link href={href} className={styles}>
          {children}
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
      {children}
    </motion.button>
  );
}

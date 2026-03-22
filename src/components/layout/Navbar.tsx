"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-0 flex items-center justify-between h-16">
        <Link href="/" className="text-ink font-bold tracking-[2px] text-[15px]">
          SCALE OS
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] transition-colors ${
                pathname === link.href
                  ? "text-forest font-semibold"
                  : "text-gray-500 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/apply" variant="accent" className="!py-2 !px-4 !text-[12px]">
            Apply
          </Button>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-5 h-0.5 bg-ink" />
          <span className="w-5 h-0.5 bg-ink" />
          <span className="w-5 h-0.5 bg-ink" />
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 p-6 flex flex-col"
            >
              <button
                className="self-end text-ink text-2xl mb-8"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base ${
                      pathname === link.href
                        ? "text-forest font-semibold"
                        : "text-gray-500"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto">
                <Button href="/apply" variant="accent" className="w-full text-center">
                  Apply
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

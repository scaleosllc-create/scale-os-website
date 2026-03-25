"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? "py-2" : "py-4"}`}>
        <div className={`mx-auto w-max flex items-center gap-8 rounded-full px-6 py-2.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-float ring-1 ring-ink/[0.05]"
            : "bg-white/60 backdrop-blur-lg ring-1 ring-ink/[0.03]"
        }`}>
          <Link href="/" className="text-ink font-bold tracking-[0.15em] text-sm">
            SCALE OS
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-forest font-medium"
                    : "text-gray-500 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/apply" variant="accent" className="!py-2 !px-4 !text-[11px]">
              Apply
            </Button>
          </div>

          <button
            className="md:hidden flex flex-col gap-1 p-1.5"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-4 h-px bg-ink" />
            <span className="w-4 h-px bg-ink" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 backdrop-blur-3xl bg-white/80 flex flex-col items-center justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-ink text-2xl"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <div className="flex flex-col items-center gap-8" onClick={(e) => e.stopPropagation()}>
              {[{ href: "/", label: "Home" }, ...navLinks].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-serif font-light ${
                      pathname === link.href ? "text-forest" : "text-ink"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              >
                <Button href="/apply" variant="accent" arrow>
                  Apply for Partnership
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

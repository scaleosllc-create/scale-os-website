"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0.6, 0.9]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.3]);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const hash = href.split("#")[1];
      if (!hash) return;

      if (pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          const offset = 80; // navbar height
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
      setMobileOpen(false);
    },
    [pathname]
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4">
        <motion.div
          className="flex items-center gap-8 rounded-full px-6 py-3 backdrop-blur-xl"
          style={{
            backgroundColor: useTransform(bgOpacity, (v) => `rgba(10, 10, 10, ${v})`),
            boxShadow: useTransform(shadowOpacity, (v) => `0 4px 16px rgba(0, 0, 0, ${v})`),
          }}
        >
          <Link href="/" className="font-display font-bold text-white tracking-wider text-sm">
            SCALE OS
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm transition-colors duration-300 text-white/50 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/apply"
              className="bg-primary text-white rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-primary-container"
            >
              Apply
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1 p-1.5"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-4 h-px bg-white" />
            <span className="w-4 h-px bg-white" />
          </button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 backdrop-blur-3xl bg-background/98 flex flex-col items-center justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-white text-2xl"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <div className="flex flex-col items-center gap-8" onClick={(e) => e.stopPropagation()}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-2xl font-display font-light text-white"
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
                <Button href="/apply" variant="primary" arrow>
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

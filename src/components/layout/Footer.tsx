import Link from "next/link";

const pageLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/apply", label: "Apply" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-low border-t border-white/[0.06]">
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="font-display text-display-sm tracking-wider text-white mb-8">
          SCALE OS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="text-label-sm uppercase text-white/30 mb-4">Pages</p>
            <div className="flex flex-col gap-3">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white/70 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-label-sm uppercase text-white/30 mb-4">Contact</p>
            <p className="text-xs text-white/40 leading-relaxed">
              1309 Coffeen Avenue STE 1200
              <br />
              Sheridan, Wyoming 82801
            </p>
          </div>

          <div>
            <p className="text-label-sm uppercase text-white/30 mb-4">Legal</p>
            <p className="text-xs text-white/40 leading-relaxed">
              All rights reserved. Scale OS LLC.
            </p>
          </div>
        </div>

        <div className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} Scale OS LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

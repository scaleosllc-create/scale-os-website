import Link from "next/link";

const pageLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/apply", label: "Apply" },
];

export default function Footer() {
  return (
    <footer className="bg-off-white">
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-0 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="font-bold tracking-[2px] text-ink text-sm mb-2">
              SCALE OS
            </div>
            <p className="text-small text-gray-400 mb-1">
              Human strategy. AI infrastructure.
            </p>
            <p className="text-[11px] text-gray-300">Scale OS LLC</p>
          </div>
          <div className="flex gap-12 md:gap-16 text-small">
            <div>
              <div className="flex flex-col gap-1.5">
                {pageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-500 hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                1309 Coffeen Avenue STE 1200
                <br />
                Sheridan, Wyoming 82801
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-5 text-[11px] text-gray-300">
          &copy; {new Date().getFullYear()} Scale OS LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

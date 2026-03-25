import Link from "next/link";

const pageLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/apply", label: "Apply" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="font-bold tracking-[0.15em] text-ink text-sm mb-3">
              SCALE OS
            </div>
            <p className="text-sm text-gray-400">
              Human strategy. AI infrastructure.
            </p>
          </div>
          <div className="flex gap-16 md:gap-20">
            <div className="flex flex-col gap-3">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-ink transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-xs text-gray-400 leading-relaxed">
                1309 Coffeen Avenue STE 1200
                <br />
                Sheridan, Wyoming 82801
              </p>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-300 mt-12">
          &copy; {new Date().getFullYear()} Scale OS LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

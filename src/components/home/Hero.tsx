import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";

export default function Hero() {
  return (
    <Section>
      <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_40%_40%,rgba(45,106,79,0.06),transparent)]" />

        {/* Left: Copy */}
        <FadeIn direction="left" className="flex-1">
          <Eyebrow>FOR SHOPIFY BRANDS DOING $50K&ndash;$5M/MONTH</Eyebrow>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05] font-serif font-light text-ink mb-6">
            Cut your CAC by 30%.
            <br />
            Scale with AI systems that actually work.
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-[50ch] mb-8">
            We combine senior media buying with custom AI automation to grow
            Shopify brands faster — with less overhead and more profit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button href="/apply" arrow>Book a Strategy Audit</Button>
            <Button href="#results" variant="secondary">
              See Results
            </Button>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              { number: "$2.4M+", label: "Revenue Driven" },
              { number: "30%+", label: "Avg CAC Reduction" },
              { number: "3.2x", label: "Avg ROAS" },
              { number: "40hrs", label: "Saved / wk with AI" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold tabular-nums text-ink">
                  {stat.number}
                </span>
                <span className="text-[11px] uppercase tracking-[1.5px] text-gray-400 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Right: Meta Ads Dashboard Mockup */}
        <FadeIn direction="right" delay={0.2} className="flex-1 w-full">
          <div className="bg-white border border-border rounded-2xl shadow-float p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-[13px] font-semibold text-ink">
                Meta Ads Dashboard
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-forest font-medium">
                <span className="w-2 h-2 rounded-full bg-forest inline-block" />
                Live
              </span>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="bg-forest-light rounded-xl ring-1 ring-ink/5 p-3">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                  ROAS
                </p>
                <p className="text-xl font-semibold text-forest">4.2x</p>
              </div>
              <div className="bg-off-white rounded-xl ring-1 ring-ink/5 p-3">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                  CAC
                </p>
                <p className="text-xl font-semibold text-ink">$18.40</p>
              </div>
              <div className="bg-off-white rounded-xl ring-1 ring-ink/5 p-3">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                  Spend
                </p>
                <p className="text-xl font-semibold text-ink">$12.4K</p>
              </div>
            </div>

            {/* SVG Line Chart */}
            <div className="bg-off-white rounded-xl ring-1 ring-ink/5 p-4">
              <svg
                viewBox="0 0 400 120"
                className="w-full h-auto"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#2D6A4F" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#2D6A4F" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  points="0,100 30,90 70,85 110,75 150,70 190,55 230,50 270,40 310,30 350,22 400,10 400,120 0,120"
                  fill="url(#chartGradient)"
                />
                <polyline
                  points="0,100 30,90 70,85 110,75 150,70 190,55 230,50 270,40 310,30 350,22 400,10"
                  fill="none"
                  stroke="#2D6A4F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Footer */}
            <p className="text-[11px] text-gray-400 mt-3 text-right">
              Last 30 days &middot; Revenue &uarr; 32%
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

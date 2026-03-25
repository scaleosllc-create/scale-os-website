import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

const revenueServices = [
  "Meta Ads Management",
  "Google Ads Management",
  "Creative Strategy & Production",
  "Brand Strategy & Positioning",
  "Advertorial & Listicle Landing Pages",
];

const aiServices = [
  "AI-Powered Ad & Content Generation",
  "E-Commerce Workflow Automation",
  "Shopify Store Optimization with AI",
  "Advertorial & Listicle Creation at Scale",
  "Operational AI Integration",
];

export default function TwoPillars() {
  return (
    <>
      {/* Section intro */}
      <Section>
        <FadeIn>
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-none font-serif font-light text-ink mb-4">
            Two systems. One growth engine.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-[65ch] mb-0">
            We don&apos;t do one without the other. The combination is what
            creates unfair advantage.
          </p>
        </FadeIn>
      </Section>

      {/* Block 1: Revenue Engineering — white bg */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <FadeIn direction="left">
            <Eyebrow>PILLAR ONE</Eyebrow>
            <h3 className="text-xl md:text-2xl font-semibold text-ink mb-4">
              Revenue Engineering
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-[65ch]">
              Meta Ads. Google Ads. Brand strategy. Creative strategy. We
              don&apos;t just manage campaigns — we engineer profitable growth
              systems built on real unit economics.
            </p>
            <ul className="space-y-3">
              {revenueServices.map((s) => (
                <li
                  key={s}
                  className="text-sm text-gray-700 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            {/* Google Ads Dashboard Mockup */}
            <div className="bg-white border border-border rounded-2xl shadow-float p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[13px] font-semibold text-ink">
                  Google Ads Dashboard
                </span>
                <span className="text-[11px] text-gray-400">Last 30 days</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-off-white rounded-xl ring-1 ring-ink/5 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                    CPC
                  </p>
                  <p className="text-xl font-semibold text-ink">$0.82</p>
                </div>
                <div className="bg-off-white rounded-xl ring-1 ring-ink/5 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                    CTR
                  </p>
                  <p className="text-xl font-semibold text-ink">4.6%</p>
                </div>
                <div className="bg-forest-light rounded-xl ring-1 ring-ink/5 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                    Conv Rate
                  </p>
                  <p className="text-xl font-semibold text-forest">6.2%</p>
                </div>
              </div>
              {/* Bar chart SVG */}
              <div className="bg-off-white rounded-xl ring-1 ring-ink/5 p-4">
                <svg viewBox="0 0 400 100" className="w-full h-auto">
                  {[
                    { x: 20, h: 40 },
                    { x: 65, h: 55 },
                    { x: 110, h: 48 },
                    { x: 155, h: 62 },
                    { x: 200, h: 58 },
                    { x: 245, h: 70 },
                    { x: 290, h: 75 },
                    { x: 335, h: 88 },
                  ].map((bar) => (
                    <rect
                      key={bar.x}
                      x={bar.x}
                      y={100 - bar.h}
                      width="30"
                      height={bar.h}
                      rx="3"
                      fill="#2D6A4F"
                      opacity="0.7"
                    />
                  ))}
                </svg>
              </div>
              <p className="text-[11px] text-gray-400 mt-3 text-right">
                Conversions &uarr; 28% MoM
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Block 2: AI Commerce Operations — cream bg */}
      <Section variant="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <FadeIn direction="left">
            {/* AI Workflow Diagram Mockup */}
            <div className="bg-white border border-border rounded-2xl shadow-float p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[13px] font-semibold text-ink">
                  AI Workflow Engine
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-forest font-medium">
                  <span className="w-2 h-2 rounded-full bg-forest inline-block" />
                  Active
                </span>
              </div>
              {/* Workflow boxes */}
              <div className="flex flex-col gap-3">
                {/* Row 1: Inputs */}
                <div className="grid grid-cols-3 gap-2">
                  {["Product Data", "Ad Accounts", "Store Analytics"].map(
                    (label) => (
                      <div
                        key={label}
                        className="bg-off-white border border-border rounded-xl p-2.5 text-center"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-0.5">
                          Input
                        </p>
                        <p className="text-[11px] font-medium text-ink">
                          {label}
                        </p>
                      </div>
                    )
                  )}
                </div>
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-forest" />
                </div>
                {/* Processing */}
                <div className="bg-forest/5 border border-forest/20 rounded-xl p-3 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-forest mb-0.5">
                    AI Processing
                  </p>
                  <p className="text-[12px] font-medium text-ink">
                    Custom AI Models &middot; Automated Workflows &middot;
                    Real-time Optimization
                  </p>
                </div>
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-forest" />
                </div>
                {/* Row 3: Outputs */}
                <div className="grid grid-cols-3 gap-2">
                  {["Ad Creatives", "Reports", "Optimizations"].map(
                    (label) => (
                      <div
                        key={label}
                        className="bg-forest-light border border-forest/10 rounded-xl p-2.5 text-center"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-0.5">
                          Output
                        </p>
                        <p className="text-[11px] font-medium text-ink">
                          {label}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <Eyebrow>PILLAR TWO</Eyebrow>
            <h3 className="text-xl md:text-2xl font-semibold text-ink mb-4">
              AI Commerce Operations
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-[65ch]">
              Custom AI workflows that automate your operations — from ad
              creation to store optimization. This is your unfair competitive
              advantage.
            </p>
            <ul className="space-y-3">
              {aiServices.map((s) => (
                <li
                  key={s}
                  className="text-sm text-gray-700 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

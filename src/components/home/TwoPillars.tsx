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
          <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-on-surface mb-4">
            Two systems. One growth engine.
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-[65ch] mb-0">
            We don&apos;t do one without the other. The combination is what
            creates unfair advantage.
          </p>
        </FadeIn>
      </Section>

      {/* Block 1: Revenue Engineering — background */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <FadeIn direction="left">
            <Eyebrow>PILLAR ONE</Eyebrow>
            <h3 className="text-xl md:text-2xl font-semibold text-on-surface mb-4">
              Revenue Engineering
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 max-w-[65ch]">
              Meta Ads. Google Ads. Brand strategy. Creative strategy. We
              don&apos;t just manage campaigns — we engineer profitable growth
              systems built on real unit economics.
            </p>
            <ul className="space-y-3">
              {revenueServices.map((s) => (
                <li
                  key={s}
                  className="text-sm text-on-surface-variant flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            {/* Google Ads Dashboard Mockup */}
            <div className="bg-surface-card rounded-2xl shadow-ambient p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[13px] font-semibold text-on-surface">
                  Google Ads Dashboard
                </span>
                <span className="text-[11px] text-on-surface-variant">Last 30 days</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-surface-low rounded-xl p-3">
                  <p className="text-[10px] uppercase tracking-wider text-on-surface-variant mb-1">
                    CPC
                  </p>
                  <p className="text-xl font-semibold text-on-surface">$0.82</p>
                </div>
                <div className="bg-surface-low rounded-xl p-3">
                  <p className="text-[10px] uppercase tracking-wider text-on-surface-variant mb-1">
                    CTR
                  </p>
                  <p className="text-xl font-semibold text-on-surface">4.6%</p>
                </div>
                <div className="bg-primary/[0.06] rounded-xl p-3">
                  <p className="text-[10px] uppercase tracking-wider text-on-surface-variant mb-1">
                    Conv Rate
                  </p>
                  <p className="text-xl font-semibold text-primary">6.2%</p>
                </div>
              </div>
              {/* Bar chart SVG */}
              <div className="bg-surface-low rounded-xl p-4">
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
                      fill="#0058bc"
                      opacity="0.7"
                    />
                  ))}
                </svg>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-3 text-right">
                Conversions &uarr; 28% MoM
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Block 2: AI Commerce Operations — surface-low */}
      <Section variant="surface-low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <FadeIn direction="left">
            {/* AI Workflow Diagram Mockup */}
            <div className="bg-surface-card rounded-2xl shadow-ambient p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[13px] font-semibold text-on-surface">
                  AI Workflow Engine
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-primary font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
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
                        className="bg-surface-low rounded-xl p-2.5 text-center"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-on-surface-variant mb-0.5">
                          Input
                        </p>
                        <p className="text-[11px] font-medium text-on-surface">
                          {label}
                        </p>
                      </div>
                    )
                  )}
                </div>
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-primary" />
                </div>
                {/* Processing */}
                <div className="bg-primary/[0.05] rounded-xl p-3 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-primary mb-0.5">
                    AI Processing
                  </p>
                  <p className="text-[12px] font-medium text-on-surface">
                    Custom AI Models &middot; Automated Workflows &middot;
                    Real-time Optimization
                  </p>
                </div>
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-primary" />
                </div>
                {/* Row 3: Outputs */}
                <div className="grid grid-cols-3 gap-2">
                  {["Ad Creatives", "Reports", "Optimizations"].map(
                    (label) => (
                      <div
                        key={label}
                        className="bg-primary/[0.06] rounded-xl p-2.5 text-center"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-on-surface-variant mb-0.5">
                          Output
                        </p>
                        <p className="text-[11px] font-medium text-on-surface">
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
            <h3 className="text-xl md:text-2xl font-semibold text-on-surface mb-4">
              AI Commerce Operations
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 max-w-[65ch]">
              Custom AI workflows that automate your operations — from ad
              creation to store optimization. This is your unfair competitive
              advantage.
            </p>
            <ul className="space-y-3">
              {aiServices.map((s) => (
                <li
                  key={s}
                  className="text-sm text-on-surface-variant flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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

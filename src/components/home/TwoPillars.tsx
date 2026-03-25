import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import { Check } from "@phosphor-icons/react/dist/ssr";

const revenueServices = [
  "Meta Ads Management",
  "Google Ads Management",
  "Creative Strategy & Production",
  "Brand Strategy & Positioning",
  "Advertorial & Listicle Landing Pages",
];

const aiServices = [
  "AI Ad & Content Generation",
  "Workflow Automation",
  "Shopify Store Optimization",
  "Advertorial Creation at Scale",
  "Operational AI Integration",
];

export default function TwoPillars() {
  return (
    <>
      {/* Block 1: Revenue Engineering */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <FadeIn direction="left">
            <Eyebrow>PILLAR ONE</Eyebrow>
            <h3 className="font-display text-display-sm md:text-display-md tracking-tighter text-white mb-4">
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
            <div className="bg-surface-card rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[10px] uppercase tracking-wider text-on-surface-muted">Revenue Engine Active</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-low rounded-xl p-4">
                  <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">ROAS</p>
                  <p className="text-2xl font-bold text-primary tabular-nums">4.2x</p>
                </div>
                <div className="bg-surface-low rounded-xl p-4">
                  <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">CAC</p>
                  <p className="text-2xl font-bold text-white tabular-nums">$18.40</p>
                </div>
                <div className="bg-surface-low rounded-xl p-4">
                  <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">Revenue</p>
                  <p className="text-2xl font-bold text-white tabular-nums">$142K</p>
                </div>
                <div className="bg-surface-low rounded-xl p-4">
                  <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">Conv Rate</p>
                  <p className="text-2xl font-bold text-white tabular-nums">3.8%</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Block 2: AI Commerce Operations */}
      <Section variant="surface-low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <FadeIn direction="left">
            <div className="bg-white/[0.04] rounded-2xl p-6">
              <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mb-4">Live Workflow</p>
              <div className="space-y-3">
                {[
                  { step: "1", text: "New order received \u2192 Shopify webhook", status: "Active" },
                  { step: "2", text: "AI generates post-purchase email sequence", status: "Active" },
                  { step: "3", text: "Customer tagged \u2192 Klaviyo segment updated", status: "Active" },
                  { step: "4", text: "AI creates retargeting ad from purchase data", status: "Processing" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold">{item.step}</div>
                    <div className="flex-1 bg-white/[0.04] rounded-lg px-3 py-2">
                      <p className="text-[11px] text-white/70">{item.text}</p>
                    </div>
                    <span className={`text-[9px] ${item.status === "Active" ? "text-green-400" : "text-yellow-400"}`}>{item.status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] text-white/30">Last run: 2 min ago</span>
                <span className="text-[10px] text-primary">847 automations this week</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <Eyebrow>PILLAR TWO</Eyebrow>
            <h3 className="font-display text-display-sm md:text-display-md tracking-tighter text-white mb-4">
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
                  <Check size={16} weight="bold" className="text-primary flex-shrink-0" />
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

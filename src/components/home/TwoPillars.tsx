import Image from "next/image";
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
      {/* Block 1: Revenue Engineering — background */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <FadeIn direction="left">
            <Eyebrow>PILLAR ONE</Eyebrow>
            <h3 className="font-display text-display-sm tracking-tighter text-on-surface mb-4">
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
                  <Check size={16} weight="bold" className="text-primary flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <Image
              src="/images/ecom-products.png"
              alt="E-commerce product photoshoot in progress"
              width={1376}
              height={768}
              className="rounded-2xl mb-6 w-full"
            />
            {/* Mock Facebook Ad */}
            <div className="bg-surface-card rounded-2xl overflow-hidden shadow-ambient">
              <div className="px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold">SC</div>
                <div>
                  <p className="text-[11px] font-medium text-on-surface">Scale OS Client</p>
                  <p className="text-[9px] text-on-surface-variant">Sponsored</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/[0.08] to-primary/[0.02] px-4 py-8 text-center">
                <p className="font-display text-lg text-on-surface tracking-tight mb-2">Still paying $40+ per customer?</p>
                <p className="text-sm text-on-surface-variant">Our clients cut their CAC by 34% in 60 days.</p>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-on-surface-variant">scaleos-client.com</p>
                  <p className="text-[11px] font-medium text-on-surface">See How We Did It</p>
                </div>
                <div className="bg-primary text-white text-[10px] font-medium px-3 py-1.5 rounded">Shop Now</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Block 2: AI Commerce Operations — dark */}
      <Section variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <FadeIn direction="left">
            {/* Mock Automation Workflow */}
            <div className="bg-white/[0.06] rounded-2xl p-5">
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-4">Live Workflow</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold">1</div>
                  <div className="flex-1 bg-white/[0.04] rounded-lg px-3 py-2">
                    <p className="text-[11px] text-white/70">New order received &rarr; Shopify webhook</p>
                  </div>
                  <span className="text-[9px] text-green-400">Active</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold">2</div>
                  <div className="flex-1 bg-white/[0.04] rounded-lg px-3 py-2">
                    <p className="text-[11px] text-white/70">AI generates post-purchase email sequence</p>
                  </div>
                  <span className="text-[9px] text-green-400">Active</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold">3</div>
                  <div className="flex-1 bg-white/[0.04] rounded-lg px-3 py-2">
                    <p className="text-[11px] text-white/70">Customer tagged &rarr; Klaviyo segment updated</p>
                  </div>
                  <span className="text-[9px] text-green-400">Active</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold">4</div>
                  <div className="flex-1 bg-white/[0.04] rounded-lg px-3 py-2">
                    <p className="text-[11px] text-white/70">AI creates retargeting ad from purchase data</p>
                  </div>
                  <span className="text-[9px] text-yellow-400">Processing</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] text-white/30">Last run: 2 min ago</span>
                <span className="text-[10px] text-primary">847 automations this week</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <Eyebrow className="!text-primary">PILLAR TWO</Eyebrow>
            <h3 className="font-display text-display-sm tracking-tighter text-white mb-4">
              AI Commerce Operations
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-[65ch]">
              Custom AI workflows that automate your operations — from ad
              creation to store optimization. This is your unfair competitive
              advantage.
            </p>
            <ul className="space-y-3">
              {aiServices.map((s) => (
                <li
                  key={s}
                  className="text-sm text-white/60 flex items-center gap-3"
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

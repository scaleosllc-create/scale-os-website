import Image from "next/image";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function ServicesHero() {
  return (
    <Section className="!pt-32 !pb-16 lg:!pt-40 lg:!pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn direction="left">
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h1 className="font-display text-display-lg md:text-[4.5rem] tracking-tighter leading-[1.02] text-white mb-6">
            Two systems.<br />One growth engine.
          </h1>
          <p className="text-on-surface-variant text-xl leading-relaxed max-w-[50ch]">
            We don&apos;t run ads and hope for the best. We build integrated growth
            systems — pairing elite paid media strategy with custom AI automation
            that gives your brand an unfair operational advantage.
          </p>
        </FadeIn>
        <FadeIn direction="right" delay={0.15}>
          <Image
            src="/images/shopify-screen.png"
            alt="Shopify store displayed on monitor with analytics dashboard"
            width={1376}
            height={768}
            className="rounded-2xl w-full mb-6"
          />
          {/* Services dashboard mockup */}
          <div className="bg-surface-card rounded-2xl overflow-hidden">
            <div className="bg-surface-low px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#E54D42]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C941]" />
              </div>
              <span className="text-[11px] text-on-surface-muted">scaleos.com/overview</span>
              <div />
            </div>
            <div className="px-6 py-5">
              <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mb-1">System Overview</p>
              <p className="font-display text-lg text-white mb-4">Growth Engine Status</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary/[0.08] rounded-xl p-3">
                  <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">Paid Media</p>
                  <p className="text-lg font-bold text-primary tabular-nums">4.2x ROAS</p>
                </div>
                <div className="bg-surface-low rounded-xl p-3">
                  <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">AI Automations</p>
                  <p className="text-lg font-bold text-white tabular-nums">847/wk</p>
                </div>
                <div className="bg-surface-low rounded-xl p-3">
                  <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">Time Saved</p>
                  <p className="text-lg font-bold text-white tabular-nums">40hrs</p>
                </div>
                <div className="bg-surface-low rounded-xl p-3">
                  <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">Revenue Lift</p>
                  <p className="text-lg font-bold text-green-400 tabular-nums">+28%</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

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
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/workspace.png"
                alt="Professional workspace with dashboard on laptop"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Block 2: AI Commerce Operations — dark */}
      <Section variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <FadeIn direction="left">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/ai-workflow.png"
                alt="AI workflow with glass nodes and energy streams"
                width={800}
                height={600}
                className="w-full h-auto"
              />
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

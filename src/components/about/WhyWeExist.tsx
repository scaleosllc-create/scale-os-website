import Image from "next/image";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

export default function WhyWeExist() {
  return (
    <Section variant="surface-low">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn direction="left">
          <Image
            src="/images/creative-process.png"
            alt="Agency workspace with printed ad mockups and creative planning"
            width={1376}
            height={768}
            className="rounded-2xl mb-6 w-full"
          />
          {/* Code-built agency workspace mockup */}
          <div className="bg-surface-card rounded-2xl overflow-hidden">
            <div className="bg-surface-high px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#E54D42]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C941]" />
              </div>
              <span className="text-[11px] text-on-surface-muted">scaleos.com/about</span>
              <div />
            </div>
            <div className="px-6 py-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.1] flex items-center justify-center text-primary font-bold text-sm">3</div>
                <div>
                  <p className="text-[11px] font-medium text-white">Core Team Members</p>
                  <p className="text-[9px] text-on-surface-muted">Senior strategists only</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.1] flex items-center justify-center text-primary font-bold text-sm">12</div>
                <div>
                  <p className="text-[11px] font-medium text-white">AI Workflows Running</p>
                  <p className="text-[9px] text-on-surface-muted">Replacing 20+ manual roles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.1] flex items-center justify-center text-primary font-bold text-sm">0</div>
                <div>
                  <p className="text-[11px] font-medium text-white">Layers of Management</p>
                  <p className="text-[9px] text-on-surface-muted">Direct access to decision-makers</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.15}>
          <h2 className="font-display text-display-sm md:text-display-md tracking-tighter text-white mb-6">
            The agency model is broken. We decided to fix it.
          </h2>
          <div className="space-y-4 text-on-surface-variant text-base leading-relaxed">
            <p>
              We spent years inside the traditional agency world. The pattern was
              always the same: brand hires agency, agency hires more people, costs
              balloon, margins evaporate. The bigger the team, the slower the
              execution. The more layers of management, the further the strategy
              gets from the person actually running your ads.
            </p>
            <p>
              The worst part? Brands were paying premium retainers for junior
              account managers to execute playbooks written by someone who left
              the agency two years ago. The senior strategist who sold you in the
              pitch? You never see them again after week one.
            </p>
            <p>
              So we asked a different question: what if you could get the
              strategic depth of a 20-person agency with the speed and overhead
              of a 3-person team? What if every person you work with is senior,
              and AI handles everything else?
            </p>
            <p className="text-white font-medium">
              Scale OS is what happens when you stop hiring for headcount and
              start building for leverage. Three senior operators, 12 AI workflows,
              zero layers of management between you and your strategy.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

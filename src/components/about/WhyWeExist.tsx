import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

export default function WhyWeExist() {
  return (
    <Section variant="surface-low">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn direction="left">
          {/* Code-built agency workspace mockup */}
          <div className="bg-surface-card rounded-2xl overflow-hidden shadow-ambient">
            <div className="bg-surface-low px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#E54D42]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C941]" />
              </div>
              <span className="text-[11px] text-on-surface-variant">scaleos.com/about</span>
              <div />
            </div>
            <div className="px-6 py-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center text-primary font-bold text-sm">3</div>
                <div>
                  <p className="text-[11px] font-medium text-on-surface">Core Team Members</p>
                  <p className="text-[9px] text-on-surface-variant">Senior strategists only</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center text-primary font-bold text-sm">12</div>
                <div>
                  <p className="text-[11px] font-medium text-on-surface">AI Workflows Running</p>
                  <p className="text-[9px] text-on-surface-variant">Replacing 20+ manual roles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center text-primary font-bold text-sm">0</div>
                <div>
                  <p className="text-[11px] font-medium text-on-surface">Layers of Management</p>
                  <p className="text-[9px] text-on-surface-variant">Direct access to decision-makers</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.15}>
          <h2 className="font-display text-display-sm md:text-display-md tracking-tighter text-on-surface mb-6">
            The agency model is broken. We decided to fix it.
          </h2>
          <div className="space-y-4 text-on-surface-variant text-base leading-relaxed">
            <p>
              We watched it happen for years. Brands hire an agency, the agency
              hires more people, costs balloon, and margins evaporate. The bigger
              the team, the slower the execution. The more layers of management,
              the further the strategy gets from the person actually running your
              ads.
            </p>
            <p>
              So we asked a different question: what if you could get the
              strategic depth of a 20-person agency with the speed and overhead
              of a 3-person team?
            </p>
            <p>
              The answer was AI — not as a buzzword, but as genuine operational
              infrastructure. Custom workflows that handle the repetitive work.
              Trained models that generate and test creative at 10x the speed.
              Systems that turn data into decisions without a human bottleneck.
            </p>
            <p className="text-on-surface font-medium">
              Scale OS is what happens when you stop hiring for headcount and
              start building for leverage.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

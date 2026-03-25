import Image from "next/image";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

export default function WhyWeExist() {
  return (
    <Section variant="surface-low">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn direction="left">
          <Image
            src="/images/workspace.png"
            alt="Scale OS agency office at golden hour"
            width={1376}
            height={768}
            className="rounded-2xl w-full"
          />
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

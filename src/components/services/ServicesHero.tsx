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
          <h1 className="font-display text-display-lg md:text-[4.5rem] tracking-tighter leading-[1.02] text-on-surface mb-6">
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
            src="/images/workspace.png"
            alt="Scale OS agency workspace"
            width={1376}
            height={768}
            className="rounded-2xl w-full"
          />
        </FadeIn>
      </div>
    </Section>
  );
}

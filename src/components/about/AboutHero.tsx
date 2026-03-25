import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function AboutHero() {
  return (
    <Section className="!pt-32 !pb-16 lg:!pt-40 lg:!pb-20">
      <FadeIn>
        <Eyebrow>ABOUT SCALE OS</Eyebrow>
        <h1 className="font-display text-display-lg md:text-[4.5rem] lg:text-[5.5rem] tracking-tighter leading-[1.02] text-white max-w-4xl mb-6">
          Human strategy. Machine speed. Real results.
        </h1>
        <p className="text-on-surface-variant text-xl leading-relaxed max-w-[55ch]">
          Scale OS is not a traditional agency. We are a small team of senior operators
          who use AI to deliver what used to require 20-person teams. No juniors, no
          middlemen, no bloated retainers.
        </p>
      </FadeIn>
    </Section>
  );
}

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function AboutHero() {
  return (
    <Section className="!pt-32 !pb-16 lg:!pt-40 lg:!pb-20">
      <FadeIn>
        <Eyebrow>ABOUT SCALE OS</Eyebrow>
        <h1 className="font-display text-display-lg md:text-[4.5rem] tracking-tighter leading-[1.02] text-on-surface max-w-4xl mb-6">
          We built the agency we always wished existed.
        </h1>
        <p className="text-on-surface-variant text-xl leading-relaxed max-w-[55ch]">
          Most agencies sell you a team of juniors running playbooks. We built
          something different — a system where senior strategists and AI work
          together to deliver results that used to require entire departments.
        </p>
      </FadeIn>
    </Section>
  );
}

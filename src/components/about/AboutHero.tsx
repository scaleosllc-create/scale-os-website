import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function AboutHero() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>About Scale OS</Eyebrow>
        <h1 className="font-display text-display-md md:text-display-lg tracking-tighter leading-none text-on-surface mb-6">
          Human-led. AI-executed.
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-[55ch]">
          We started Scale OS because we saw the same problem everywhere:
          agencies were either great at marketing or great at technology — never
          both.
        </p>
      </FadeIn>
    </Section>
  );
}

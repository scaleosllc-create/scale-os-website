import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function AboutHero() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>About Scale OS</Eyebrow>
        <h1 className="font-serif font-light text-[28px] md:text-[36px] text-ink leading-tight mb-4">
          Human-led. AI-executed.
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg">
          We started Scale OS because we saw the same problem everywhere:
          agencies were either great at marketing or great at technology — never
          both.
        </p>
      </FadeIn>
    </Section>
  );
}

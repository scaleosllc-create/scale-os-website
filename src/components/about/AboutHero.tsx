import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function AboutHero() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>About Scale OS</Eyebrow>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-none font-serif font-light text-ink mb-6">
          Human-led. AI-executed.
        </h1>
        <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-[55ch]">
          We started Scale OS because we saw the same problem everywhere:
          agencies were either great at marketing or great at technology — never
          both.
        </p>
      </FadeIn>
    </Section>
  );
}

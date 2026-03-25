import Image from "next/image";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function ServicesHero() {
  return (
    <Section variant="background">
      <FadeIn>
        <Eyebrow>What We Do</Eyebrow>
        <h1 className="font-display text-display-md md:text-display-lg tracking-tighter leading-none text-on-surface mb-6">
          Two systems. One growth engine.
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-[50ch] mb-12">
          Meta Ads. Google Ads. Brand strategy. Advertorial landing pages. AI
          automation. We pair elite media buying with custom AI systems — so your
          Shopify brand grows faster with less overhead.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/images/workspace.png"
            alt="Scale OS workspace showing collaborative strategy and AI tools in action"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      </FadeIn>
    </Section>
  );
}

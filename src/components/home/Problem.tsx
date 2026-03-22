import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

export default function Problem() {
  return (
    <Section variant="dark">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <FadeIn className="flex-1">
          <Eyebrow>The Old Model Is Broken</Eyebrow>
          <h2 className="font-serif font-light text-[22px] md:text-[28px] text-white leading-snug mb-4">
            Ad costs keep climbing. Your agency keeps hiring. Meanwhile, your
            margins keep shrinking.
          </h2>
          <p className="text-dark-body text-sm leading-relaxed">
            Most agencies throw more people at the problem. We built a different
            model — one where AI handles the repetitive work and senior
            strategists focus on what actually moves your margins. The result:
            better performance, faster execution, lower overhead.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex-shrink-0 w-full lg:w-[200px]">
          <ImagePlaceholder
            label="VISUAL"
            sublabel="Rising cost graph or old vs new model"
            dark
            className="h-[180px]"
          />
        </FadeIn>
      </div>
    </Section>
  );
}

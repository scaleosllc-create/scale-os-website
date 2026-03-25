import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

export default function WhyWeExist() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <FadeIn className="flex-1">
          <h2 className="font-display text-display-sm md:text-display-md tracking-tighter leading-none text-on-surface mb-6">
            Why we exist
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed mb-4 max-w-[65ch]">
            The e-commerce agency model hasn&apos;t changed in a decade. Brands
            hire an agency, the agency hires more people, costs go up, and
            margins go down. Meanwhile, AI is transforming every other industry.
          </p>
          <p className="text-base text-on-surface-variant leading-relaxed max-w-[65ch]">
            We built Scale OS to be the agency we always wished existed — one
            that combines the strategic depth of a top-tier growth team with the
            operational leverage of custom AI systems. The result is better
            performance at a fraction of the traditional overhead.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex-shrink-0 w-full lg:w-[280px]">
          <ImagePlaceholder
            label="Founder photo or team working visual"
            className="h-[280px]"
            rounded="2xl"
          />
        </FadeIn>
      </div>
    </Section>
  );
}

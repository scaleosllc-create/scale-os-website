import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

export default function WhyWeExist() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <FadeIn className="flex-1">
          <h2 className="font-serif font-light text-[22px] md:text-[28px] text-ink mb-4">
            Why we exist
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            The e-commerce agency model hasn&apos;t changed in a decade. Brands
            hire an agency, the agency hires more people, costs go up, and
            margins go down. Meanwhile, AI is transforming every other industry.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            We built Scale OS to be the agency we always wished existed — one
            that combines the strategic depth of a top-tier growth team with the
            operational leverage of custom AI systems. The result is better
            performance at a fraction of the traditional overhead.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex-shrink-0 w-full lg:w-[220px]">
          <ImagePlaceholder
            label="Founder photo or team working visual"
            className="h-[240px]"
          />
        </FadeIn>
      </div>
    </Section>
  );
}

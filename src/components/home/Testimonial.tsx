import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

export default function Testimonial() {
  return (
    <Section>
      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <ImagePlaceholder
              label="Photo"
              className="w-20 h-20"
              rounded="full"
            />
          </div>
          <div>
            <p className="font-serif italic text-[16px] text-gray-700 leading-relaxed mb-3">
              &ldquo;Scale OS completely transformed how we run our Shopify store.
              Our CAC dropped 38% in the first 60 days, and the AI workflows
              save our team 30+ hours a week.&rdquo;
            </p>
            <p className="text-[13px] text-gray-400">
              <strong className="text-ink">Client Name</strong> &middot;
              Founder, Brand Name
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

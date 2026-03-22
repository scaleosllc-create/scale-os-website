import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";

interface CTASectionProps {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref?: string;
}

export default function CTASection({
  heading,
  subtext,
  buttonText,
  buttonHref = "/apply",
}: CTASectionProps) {
  return (
    <Section variant="dark" className="text-center">
      <FadeIn>
        <h2 className="font-serif font-light text-[22px] md:text-[28px] text-white mb-3">
          {heading}
        </h2>
        <p className="text-dark-body text-sm mb-7 max-w-md mx-auto">
          {subtext}
        </p>
        <Button href={buttonHref} variant="accent">
          {buttonText}
        </Button>
      </FadeIn>
    </Section>
  );
}

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
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-none font-serif font-light text-white mb-4">
          {heading}
        </h2>
        <p className="text-dark-body text-base mb-8 max-w-md mx-auto">
          {subtext}
        </p>
        <Button href={buttonHref} variant="accent" arrow>
          {buttonText}
        </Button>
      </FadeIn>
    </Section>
  );
}

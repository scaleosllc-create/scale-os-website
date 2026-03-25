import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";

interface CTASectionProps {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref?: string;
  variant?: "background" | "surface-low" | "dark" | "primary" | "light";
}

export default function CTASection({
  heading,
  subtext,
  buttonText,
  buttonHref = "/apply",
  variant = "dark",
}: CTASectionProps) {
  return (
    <Section variant={variant} className="text-center">
      <FadeIn>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter mb-4 text-white">
          {heading}
        </h2>
        <p className="text-base mb-8 max-w-md mx-auto text-white/60">
          {subtext}
        </p>
        <Button href={buttonHref} variant={variant === "primary" ? "secondary" : "primary"} arrow>
          {buttonText}
        </Button>
      </FadeIn>
    </Section>
  );
}

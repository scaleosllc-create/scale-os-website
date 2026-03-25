import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="text-center min-h-[60vh] flex items-center justify-center">
      <div>
        <h1 className="font-display text-display-md md:text-display-lg tracking-tighter leading-none text-on-surface mb-4">
          Page not found
        </h1>
        <p className="text-on-surface-variant text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button href="/" variant="primary" arrow>
          Back to Home
        </Button>
      </div>
    </Section>
  );
}

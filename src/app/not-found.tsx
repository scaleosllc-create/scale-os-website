import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="text-center min-h-[60vh] flex items-center justify-center">
      <div>
        <h1 className="font-display font-bold text-[36px] text-on-surface mb-3">
          Page not found
        </h1>
        <p className="text-on-surface-variant text-[15px] mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </Section>
  );
}

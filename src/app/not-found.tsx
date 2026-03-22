import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="text-center min-h-[60vh] flex items-center justify-center">
      <div>
        <h1 className="font-serif font-light text-[36px] text-ink mb-3">
          Page not found
        </h1>
        <p className="text-gray-500 text-[15px] mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </Section>
  );
}

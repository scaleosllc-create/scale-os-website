import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";
import { LogoMark } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Application Received — Scale OS",
  description: "Thank you for applying. We'll review your application and be in touch within 48 hours.",
};

export default function ThankYouPage() {
  return (
    <Section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <FadeIn>
        <LogoMark size={48} className="mx-auto mb-8" />
        <h1 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-4">
          Application received.
        </h1>
        <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-md mx-auto mb-4">
          Thank you for your interest in working with Scale OS. Our team will
          review your application and get back to you within 48 hours.
        </p>
        <p className="text-on-surface-muted text-sm max-w-sm mx-auto mb-10">
          In the meantime, feel free to explore our blog for insights on
          e-commerce growth and AI automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" arrow>
            Back to Home
          </Button>
          <Button href="/#blog" variant="secondary">
            Read Our Blog
          </Button>
        </div>

        <Link
          href="/apply"
          className="inline-flex items-center gap-2 text-sm text-on-surface-muted mt-12 transition-colors duration-300 hover:text-white"
        >
          <ArrowLeft size={14} weight="bold" />
          Submit another application
        </Link>
      </FadeIn>
    </Section>
  );
}

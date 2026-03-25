import Image from "next/image";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

export default function Founder() {
  return (
    <Section variant="surface-low">
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative quotation mark */}
          <div className="text-primary/10 text-[120px] leading-none font-display select-none -mb-10">
            &ldquo;
          </div>

          <blockquote className="font-display text-display-sm tracking-tight text-on-surface italic mb-8 leading-relaxed">
            I built Scale OS because I was tired of watching e-commerce
            brands get burned by agencies that don&rsquo;t understand unit
            economics. We combine the strategic depth of a top-tier growth team
            with AI systems that give you an unfair operational advantage — and
            we only win when you win.
          </blockquote>

          {/* Photo + attribution */}
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/founder-headshot.png"
              alt="Founder of Scale OS"
              width={96}
              height={96}
              className="rounded-full object-cover w-24 h-24"
            />
            <div className="text-left">
              <p className="text-base font-medium text-on-surface">Founder Name</p>
              <p className="text-sm text-on-surface-variant">
                Founder &amp; CEO, Scale OS
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

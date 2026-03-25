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

          <blockquote className="text-xl md:text-2xl font-display font-light leading-relaxed text-on-surface mb-8">
            I built Scale OS because I was tired of watching e-commerce
            brands get burned by agencies that don&rsquo;t understand unit
            economics. We combine the strategic depth of a top-tier growth team
            with AI systems that give you an unfair operational advantage — and
            we only win when you win.
          </blockquote>

          {/* Photo + attribution */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full bg-surface-high flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] uppercase tracking-wider text-on-surface-variant">
                Photo
              </span>
            </div>
            <div className="text-left">
              <p className="text-base font-semibold text-on-surface">Founder Name</p>
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

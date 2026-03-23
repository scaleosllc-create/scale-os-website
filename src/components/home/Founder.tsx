import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

export default function Founder() {
  return (
    <Section variant="off-white">
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          {/* Circular placeholder */}
          <div className="w-24 h-24 rounded-full bg-surface border border-border mx-auto mb-6 flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-wider text-gray-400">
              Photo
            </span>
          </div>

          <blockquote className="font-serif italic text-[16px] md:text-[18px] text-ink leading-relaxed mb-6">
            &ldquo;I built Scale OS because I was tired of watching e-commerce
            brands get burned by agencies that don&rsquo;t understand unit
            economics. We combine the strategic depth of a top-tier growth team
            with AI systems that give you an unfair operational advantage — and
            we only win when you win.&rdquo;
          </blockquote>

          <p className="text-[13px] text-gray-500">
            <span className="font-semibold text-ink">Founder Name</span>{" "}
            &middot; Founder &amp; CEO, Scale OS
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}

import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

const advantages = [
  { value: "50-100", label: "AI-generated creatives per month" },
  { value: "40hrs", label: "Saved weekly with automation" },
  { value: "90 days", label: "From audit to full scale" },
];

export default function WhyBoth() {
  return (
    <Section variant="surface-low">
      <FadeIn>
        <h2 className="font-display text-display-sm md:text-display-md tracking-tighter leading-none text-on-surface mb-4">
          Why this combination wins
        </h2>
        <p className="text-base text-on-surface-variant leading-relaxed mb-12 max-w-[65ch]">
          Most agencies do one or the other. Great creative with no operational
          leverage. Or AI tools with no marketing fundamentals. We do both —
          because that&apos;s what actually scales.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          {advantages.map((a, i) => (
            <div key={a.label} className="flex items-center gap-8">
              {i > 0 && <div className="hidden md:block w-px h-14 bg-surface-high" />}
              <div className="text-center py-4 px-6">
                <div className="text-3xl md:text-4xl font-bold text-primary tabular-nums mb-2">
                  {a.value}
                </div>
                <div className="text-sm text-on-surface-variant">{a.label}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}

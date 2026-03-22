import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

const advantages = [
  { value: "10x", label: "Faster creative iteration" },
  { value: "60%", label: "Less operational overhead" },
  { value: "1", label: "Unified growth partner" },
];

export default function WhyBoth() {
  return (
    <Section variant="off-white">
      <FadeIn>
        <h2 className="font-serif font-light text-[22px] md:text-[28px] text-ink mb-3">
          Why this combination wins
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-lg">
          Most agencies do one or the other. Great creative with no operational
          leverage. Or AI tools with no marketing fundamentals. We do both —
          because that&apos;s what actually scales.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          {advantages.map((a, i) => (
            <div key={a.label} className="flex items-center gap-6">
              {i > 0 && <div className="hidden md:block w-px h-12 bg-border" />}
              <div className="text-center py-4 px-6">
                <div className="text-[32px] font-bold text-forest mb-1">
                  {a.value}
                </div>
                <div className="text-small text-gray-500">{a.label}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}

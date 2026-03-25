import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

const principles = [
  {
    number: "01",
    title: "Margins over metrics",
    description:
      "We optimize for contribution margin and real profit — not vanity ROAS or impressions that don't pay your bills.",
  },
  {
    number: "02",
    title: "AI as leverage, not gimmick",
    description:
      "We deploy AI where it creates real operational advantage — not to check a trend box. If AI doesn't help, we don't use it.",
  },
  {
    number: "03",
    title: "Fewer clients, deeper work",
    description:
      "We limit the number of brands we work with so every partnership gets senior-level attention. No junior account managers.",
  },
];

export default function Principles() {
  return (
    <Section variant="dark">
      <FadeIn>
        <h2 className="font-display text-display-sm md:text-display-md tracking-tighter leading-none text-white mb-12">
          How we think
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((p, i) => (
          <FadeIn key={p.number} delay={i * 0.1}>
            <div className="bg-white/[0.04] rounded-2xl p-8">
              <div className="font-display text-display-sm text-primary mb-4">
                {p.number}
              </div>
              <h3 className="text-[16px] font-semibold text-white mb-3">
                {p.title}
              </h3>
              <p className="text-[13px] text-white/60 leading-relaxed">
                {p.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

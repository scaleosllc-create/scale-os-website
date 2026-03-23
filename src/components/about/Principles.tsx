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
    <Section variant="dark" className="noise-overlay">
      <FadeIn>
        <h2 className="font-serif font-light text-[22px] md:text-[28px] text-white mb-8">
          How we think
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {principles.map((p, i) => (
          <FadeIn key={p.number} delay={i * 0.1}>
            <div className="bg-white/5 rounded-lg p-5">
              <div
                className="text-[28px] font-bold text-forest mb-3"
                style={{ textShadow: "0 0 20px rgba(45, 106, 79, 0.3)" }}
              >
                {p.number}
              </div>
              <h3 className="text-[16px] font-semibold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-[13px] text-dark-body leading-relaxed">
                {p.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

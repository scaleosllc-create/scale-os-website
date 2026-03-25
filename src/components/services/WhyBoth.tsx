import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function WhyBoth() {
  return (
    <Section variant="surface-low">
      <FadeIn>
        <Eyebrow>THE ADVANTAGE</Eyebrow>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-on-surface mb-6 max-w-3xl">
          Why the combination wins
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-[60ch] mb-16">
          Great creative with no operational leverage. Or AI tools with no marketing
          fundamentals. Most agencies give you one or the other. The combination is
          what creates escape velocity.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            stat: "10x",
            label: "Creative velocity",
            description:
              "AI generates and tests ad creative at 10x the speed of traditional teams. More tests, faster learning, lower CAC.",
          },
          {
            stat: "40+",
            label: "Hours saved weekly",
            description:
              "Custom automation workflows eliminate repetitive manual tasks across your operations — freeing your team to focus on growth.",
          },
          {
            stat: "1",
            label: "Unified partner",
            description:
              "One team that owns both your paid media strategy and your AI infrastructure. No finger-pointing between vendors.",
          },
        ].map((item) => (
          <FadeIn key={item.label}>
            <div className="text-center md:text-left">
              <span className="font-display text-display-lg text-primary">
                {item.stat}
              </span>
              <h3 className="font-display text-lg text-on-surface tracking-tight mt-2 mb-3">
                {item.label}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

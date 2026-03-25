import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import { X, Check } from "@phosphor-icons/react/dist/ssr";

const rows = [
  {
    label: "Creative Output",
    traditional: "5-10 ad creatives per month",
    scaleOs: "50-100 AI-generated creatives per month",
  },
  {
    label: "Team Level",
    traditional: "Junior account managers",
    scaleOs: "Senior strategists only",
  },
  {
    label: "Reporting",
    traditional: "Manual reporting",
    scaleOs: "AI-automated reporting & insights",
  },
  {
    label: "Time to Results",
    traditional: "3-6 month ramp up",
    scaleOs: "Results in 30 days",
  },
  {
    label: "Approach",
    traditional: "One-size-fits-all playbook",
    scaleOs: "Custom AI workflows for your business",
  },
  {
    label: "Investment",
    traditional: "$8K-15K/mo for a mid-tier team",
    scaleOs: "Premium results at a fraction of the overhead",
  },
];

export default function Comparison() {
  return (
    <Section variant="surface-low">
      <FadeIn>
        <Eyebrow>WHY US</Eyebrow>
        <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-on-surface mb-12">
          Traditional agency vs. Scale OS
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="overflow-x-auto">
          <div className="min-w-[540px]">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr] gap-8 pb-4 mb-0">
              <div className="text-[13px] font-semibold text-on-surface-variant uppercase tracking-wider">
                Traditional Agency
              </div>
              <div className="text-[13px] font-semibold text-primary uppercase tracking-wider">
                Scale OS
              </div>
            </div>

            {/* Rows */}
            <div>
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1fr_1fr] gap-8 py-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-surface-high flex-shrink-0 mt-0.5">
                      <X
                        size={12}
                        weight="bold"
                        className="text-on-surface-variant"
                      />
                    </span>
                    <span className="text-sm text-on-surface-variant leading-relaxed">
                      {row.traditional}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <Check
                        size={12}
                        weight="bold"
                        className="text-primary"
                      />
                    </span>
                    <span className="text-sm text-primary font-medium leading-relaxed">
                      {row.scaleOs}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

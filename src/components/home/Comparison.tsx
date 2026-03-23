import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import { X, Check } from "@phosphor-icons/react/dist/ssr";

const rows = [
  {
    traditional: "5-10 ad creatives per month",
    scaleOs: "50-100 AI-generated creatives per month",
  },
  {
    traditional: "Junior account managers",
    scaleOs: "Senior strategists only",
  },
  {
    traditional: "Manual reporting",
    scaleOs: "AI-automated reporting & insights",
  },
  {
    traditional: "3-6 month ramp up",
    scaleOs: "Results in 30 days",
  },
  {
    traditional: "One-size-fits-all playbook",
    scaleOs: "Custom AI workflows for your business",
  },
  {
    traditional: "$8K-15K/mo for a mid-tier team",
    scaleOs: "Premium results at a fraction of the overhead",
  },
];

export default function Comparison() {
  return (
    <Section variant="off-white">
      <FadeIn>
        <Eyebrow>WHY US</Eyebrow>
        <h2 className="font-serif font-light text-[22px] md:text-[30px] text-ink tracking-tighter mb-10">
          Traditional agency vs. Scale OS
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="overflow-x-auto">
          <div className="min-w-[540px]">
            {/* Header */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider">
                Traditional Agency
              </div>
              <div className="text-[13px] font-semibold text-forest uppercase tracking-wider">
                Scale OS
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-3">
              {rows.map((row) => (
                <div
                  key={row.traditional}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-start gap-2.5 bg-white border border-border rounded-lg p-4">
                    <X
                      size={18}
                      weight="bold"
                      className="text-gray-300 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-[13px] text-gray-500 leading-relaxed">
                      {row.traditional}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white border border-forest/20 rounded-lg p-4">
                    <Check
                      size={18}
                      weight="bold"
                      className="text-forest flex-shrink-0 mt-0.5"
                    />
                    <span className="text-[13px] text-ink leading-relaxed font-medium">
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

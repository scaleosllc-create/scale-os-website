import Section from "@/components/ui/Section";
import CountUp from "@/components/ui/CountUp";
import FadeIn from "@/components/shared/FadeIn";
import { stats } from "@/lib/constants";

export default function Stats() {
  return (
    <Section variant="off-white" id="stats">
      <FadeIn>
        <p className="text-eyebrow text-gray-400 text-center mb-8 tracking-[2px]">
          THE NUMBERS THAT MATTER
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r border-border last:border-r-0">
              <div>
                <div className="text-[36px] font-bold text-ink">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-[11px] text-gray-400 tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}

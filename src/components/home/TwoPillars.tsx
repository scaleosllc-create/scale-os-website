import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";
import { pillarOneServices, pillarTwoServices } from "@/lib/constants";

export default function TwoPillars() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FadeIn>
          <Card className="h-full">
            <ImagePlaceholder
              label="Ad dashboard / campaign visual"
              className="h-[120px] mb-4"
            />
            <Eyebrow>Pillar One</Eyebrow>
            <h3 className="text-lg font-semibold text-ink mb-2">Revenue Engineering</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
              Meta Ads. Google Ads. Brand strategy. Creative strategy. We don&apos;t
              just manage campaigns — we engineer profitable growth systems.
            </p>
            <ul className="text-small text-gray-700 space-y-1.5 list-disc pl-4">
              {pillarOneServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>
        </FadeIn>
        <FadeIn delay={0.15}>
          <Card className="h-full">
            <ImagePlaceholder
              label="AI workflow / automation visual"
              className="h-[120px] mb-4"
            />
            <Eyebrow>Pillar Two</Eyebrow>
            <h3 className="text-lg font-semibold text-ink mb-2">
              AI Commerce Operations
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
              Custom AI workflows that automate your operations — from ad
              creation to store optimization. Your unfair competitive advantage.
            </p>
            <ul className="text-small text-gray-700 space-y-1.5 list-disc pl-4">
              {pillarTwoServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}

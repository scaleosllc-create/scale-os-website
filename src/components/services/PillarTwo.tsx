import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

const services = [
  {
    title: "AI Ad & Content Generation",
    description:
      "Generate ads, advertorials, and listicles at scale using trained AI workflows. Test more angles in a week than most teams test in a quarter.",
  },
  {
    title: "E-Commerce Workflow Automation",
    description:
      "Custom automation workflows that eliminate repetitive tasks across your operations — from inventory to customer communication to reporting.",
  },
  {
    title: "AI-Built Store Optimization",
    description:
      "We use AI tools to build, optimize, and iterate on your Shopify storefront — faster development cycles, better conversion rates.",
  },
  {
    title: "Operational AI Integration",
    description:
      "End-to-end AI integration into your daily business processes. We don't just hand you a chatbot — we embed intelligence into how your business runs.",
  },
];

export default function PillarTwo() {
  return (
    <>
      <Section variant="dark">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <FadeIn className="flex-1">
            <Eyebrow>Pillar Two</Eyebrow>
            <h2 className="font-serif font-light text-[22px] md:text-[28px] text-white mb-3">
              AI Commerce Operations
            </h2>
            <p className="text-sm text-dark-body leading-relaxed">
              This is where most agencies can&apos;t follow. We build custom AI
              workflows that plug directly into your Shopify operations —
              automating the work that used to require entire teams.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="flex-shrink-0 w-full lg:w-[240px]">
            <ImagePlaceholder
              label="AI workflow diagram"
              dark
              className="h-[160px]"
            />
          </FadeIn>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <Card hover>
                <ImagePlaceholder label="icon" className="w-10 h-10 mb-3" rounded="lg" />
                <h3 className="text-[16px] font-semibold text-ink mb-2">
                  {service.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}

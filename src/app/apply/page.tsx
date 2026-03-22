import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import ApplyForm from "@/components/apply/ApplyForm";
import FadeIn from "@/components/shared/FadeIn";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to partner with Scale OS. We work with a limited number of Shopify brands each quarter.",
};

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="text-center">
        <FadeIn>
          <Eyebrow className="mx-auto">Apply for Partnership</Eyebrow>
          <h1 className="font-serif font-light text-[28px] md:text-[36px] text-ink leading-tight mb-4">
            Tell us about your brand.
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-md mx-auto">
            We work with a limited number of Shopify brands each quarter. Fill
            out the form below and we&apos;ll be in touch within 48 hours if
            there&apos;s a fit.
          </p>
        </FadeIn>
      </Section>

      {/* Form */}
      <Section className="!pt-0">
        <FadeIn>
          <div className="max-w-2xl mx-auto bg-white border border-border rounded-lg p-6 md:p-10">
            <ApplyForm />
          </div>
        </FadeIn>
      </Section>

      {/* What Happens Next */}
      <Section variant="off-white">
        <FadeIn>
          <h3 className="font-serif font-light text-[18px] text-ink mb-6">
            After you apply
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "We review",
                desc: "Our team reviews your application within 48 hours.",
              },
              {
                num: "2",
                title: "Strategy call",
                desc: "If there's a fit, we schedule a 30-minute strategy call to dig into your brand.",
              },
              {
                num: "3",
                title: "Custom proposal",
                desc: "You receive a tailored growth plan with clear scope, pricing, and timeline.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-3">
                <div className="text-xl font-bold text-forest flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink mb-1">
                    {step.title}
                  </h4>
                  <p className="text-small text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

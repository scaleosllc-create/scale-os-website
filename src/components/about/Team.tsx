import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";
import { teamMembers } from "@/lib/constants";

export default function Team() {
  return (
    <Section>
      <FadeIn>
        <h2 className="font-serif font-light text-[22px] md:text-[28px] text-ink mb-2">
          The team
        </h2>
        <p className="text-sm text-gray-400 mb-8">
          Senior operators, not junior executors.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => (
          <FadeIn key={member.role} delay={i * 0.1}>
            <div className="text-center">
              <ImagePlaceholder
                label="Photo"
                className="w-24 h-24 mx-auto mb-3"
                rounded="full"
              />
              <h4 className="text-[15px] font-semibold text-ink mb-1">
                {member.name}
              </h4>
              <p className="text-small text-forest font-medium mb-2">
                {member.role}
              </p>
              <p className="text-small text-gray-400 leading-relaxed">
                {member.bio}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

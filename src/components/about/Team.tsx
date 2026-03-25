import Image from "next/image";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

const team = [
  {
    name: "Alex Mercer",
    role: "Creative Strategist",
    image: "/images/founder-headshot.png",
    bio: "Started writing direct response copy for DTC brands doing $500K-$5M/month. Moved into creative direction because he kept noticing the same thing: great products with terrible ad angles. His frameworks for advertorial and listicle creation have driven over $8M in attributable revenue. Thinks in hooks, not headlines.",
  },
  {
    name: "Maya Johnson",
    role: "Head of Growth",
    image: "/images/team-head-of-growth.png",
    bio: "Spent four years as performance lead at a top DTC agency managing $2M+ in monthly ad spend across Meta and Google. Left because she got tired of the 'more people, more problems' model. Believes the best media buying is part math, part creative instinct — and that most agencies over-index on the math.",
  },
  {
    name: "Daniel Park",
    role: "AI Operations Lead",
    image: "/images/team-ai-ops-lead.png",
    bio: "Full-stack engineer turned AI systems architect. Built automation pipelines for two YC-backed startups before joining Scale OS. His obsession: eliminating manual work. If a human does something more than twice, he builds a system to do it instead. Has automated over 200 workflows across client operations.",
  },
];

export default function Team() {
  return (
    <Section>
      <FadeIn>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-4">
          The team
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-[55ch] mb-16">
          Three senior operators who have been in the trenches. No junior account
          managers, no offshore teams, no middlemen. You work directly with the
          people making the decisions.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
        {team.map((member, index) => (
          <FadeIn key={member.name} delay={index * 0.1}>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Scale OS`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display text-xl text-white tracking-tight mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Team culture image */}
      <FadeIn>
        <Image
          src="/images/hero-lifestyle.png"
          alt="Scale OS team workspace and collaborative environment"
          width={1376}
          height={600}
          className="rounded-2xl w-full"
        />
      </FadeIn>
    </Section>
  );
}

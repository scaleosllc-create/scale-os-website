import Image from "next/image";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

const team = [
  {
    name: "Alex Mercer",
    role: "Creative Strategist",
    image: "/images/founder-headshot.png",
    bio: "Started in direct response copywriting, then moved into creative direction for DTC brands doing $500K-$5M/month. Has a sixth sense for ad angles that convert — his frameworks for advertorial and listicle creation have driven over $8M in attributable revenue across client accounts.",
  },
  {
    name: "Maya Johnson",
    role: "Head of Growth",
    image: "/images/team-head-of-growth.png",
    bio: "Former performance lead at a top DTC agency where she managed $2M+ in monthly ad spend across Meta and Google. Left because she was tired of the 'more people, more problems' model. Believes the best media buying is part math, part creative instinct.",
  },
  {
    name: "Daniel Park",
    role: "AI Operations Lead",
    image: "/images/team-ai-ops-lead.png",
    bio: "Full-stack engineer turned AI systems architect. Built automation pipelines for two YC-backed startups before joining Scale OS. Obsessed with eliminating manual work — if a human does it more than twice, he builds a system to do it instead.",
  },
];

export default function Team() {
  return (
    <Section>
      <FadeIn>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-on-surface mb-4">
          The team
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-[55ch] mb-16">
          Senior operators who&apos;ve been in the trenches. No junior account
          managers, no offshore teams, no middlemen.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {team.map((member, index) => (
          <FadeIn key={member.name} delay={index * 0.1}>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display text-xl text-on-surface tracking-tight mb-1">
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
    </Section>
  );
}

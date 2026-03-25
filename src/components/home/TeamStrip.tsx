import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const team = [
  {
    name: "Alex Mercer",
    role: "Creative Strategist",
    image: "/images/founder-headshot.png",
  },
  {
    name: "Maya Johnson",
    role: "Head of Growth",
    image: "/images/team-head-of-growth.png",
  },
  {
    name: "Daniel Park",
    role: "AI Operations Lead",
    image: "/images/team-ai-ops-lead.png",
  },
];

export default function TeamStrip() {
  return (
    <Section variant="dark">
      <FadeIn>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <h2 className="font-display text-display-sm md:text-display-md tracking-tighter text-white">
            The team behind Scale OS.
          </h2>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-primary shrink-0 transition-colors duration-300 hover:text-primary-container"
          >
            About us
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <FadeIn key={member.name} delay={index * 0.1}>
            <div className="aspect-square rounded-2xl overflow-hidden mb-4">
              <Image
                src={member.image}
                alt={`${member.name}, ${member.role} at Scale OS`}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-lg text-white tracking-tight">
              {member.name}
            </h3>
            <p className="text-sm text-on-surface-variant">{member.role}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

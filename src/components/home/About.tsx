"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Mercer",
    role: "Creative Strategist",
    image: "/images/founder-headshot.png",
    bio: "Direct response copywriter turned creative director. His frameworks for advertorial and listicle creation have driven over $8M in attributable revenue.",
  },
  {
    name: "Maya Johnson",
    role: "Head of Growth",
    image: "/images/team-head-of-growth.png",
    bio: "Former performance lead managing $2M+ in monthly ad spend across Meta and Google. Part math, part creative instinct.",
  },
  {
    name: "Daniel Park",
    role: "AI Operations Lead",
    image: "/images/team-ai-ops-lead.png",
    bio: "Full-stack engineer turned AI systems architect. Built automation pipelines for two YC-backed startups. Has automated 200+ workflows.",
  },
];

const principles = [
  {
    number: "01",
    title: "Margins over metrics",
    description:
      "We optimize for contribution margin and real profit — not vanity ROAS or impressions that look good in a report.",
  },
  {
    number: "02",
    title: "AI as leverage, not gimmick",
    description:
      "We deploy AI where it creates genuine operational advantage. If it doesn't measurably improve an outcome, we don't use it.",
  },
  {
    number: "03",
    title: "Fewer clients, deeper work",
    description:
      "We cap our client roster. Every brand gets direct access to senior strategists — not a junior account manager.",
  },
  {
    number: "04",
    title: "Speed is a strategy",
    description:
      "We test 50 ad angles in a day. AI handles the production volume. Humans make the strategic calls.",
  },
  {
    number: "05",
    title: "Radical transparency",
    description:
      "No vanity dashboards. You see what we see — real numbers, real performance, real trade-offs.",
  },
];

export default function About() {
  return (
    <>
      {/* Team */}
      <Section id="about">
        <FadeIn>
          <Eyebrow>About</Eyebrow>
          <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-4">
            Human strategy. Machine speed.
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl mb-16">
            Three senior operators. No junior account managers, no offshore
            teams, no middlemen. You work directly with the people making the
            decisions.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
      </Section>

      {/* Principles */}
      <Section variant="dark">
        <FadeIn>
          <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-4">
            How we think
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-[55ch] mb-16">
            The operating principles that shape every decision we make for your
            brand.
          </p>
        </FadeIn>
        <StaggerContainer className="space-y-0">
          {principles.map((principle, index) => (
            <motion.div key={principle.number} variants={staggerItemVariants}>
              {index > 0 && <div className="h-px bg-white/[0.04]" />}
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-8">
                <span className="font-display text-display-sm text-primary">
                  {principle.number}
                </span>
                <div>
                  <h3 className="font-display text-xl text-white mb-2 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-[50ch]">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}

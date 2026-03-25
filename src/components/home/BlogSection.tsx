"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/shared/StaggerContainer";
import { blogArticles } from "@/lib/blog";

export default function BlogSection() {
  return (
    <Section id="blog" variant="surface-low">
      <FadeIn>
        <Eyebrow>From the Blog</Eyebrow>
        <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg tracking-tighter text-white mb-12">
          Insights for e-commerce operators.
        </h2>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogArticles.map((article) => (
          <motion.div key={article.slug} variants={staggerItemVariants}>
            <Link
              href={`/blog/${article.slug}`}
              className="block bg-surface-card rounded-2xl p-8 transition-colors duration-300 hover:bg-surface-high h-full"
            >
              <span className="text-primary text-[10px] uppercase tracking-wider font-medium">
                {article.category}
              </span>
              <h3 className="font-display text-lg text-white tracking-tight mt-3 mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 text-on-surface-muted text-[11px] uppercase tracking-wider">
                <span>{article.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-on-surface-muted" />
                <span>{article.date}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import { blogArticles, getArticleBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const paragraphs = article.content.split("\n\n");

  return (
    <Section narrow>
      <FadeIn>
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm text-on-surface-variant transition-colors duration-300 hover:text-white mb-12"
        >
          <ArrowLeft size={14} weight="bold" />
          Back to articles
        </Link>

        <div className="mb-10">
          <Eyebrow>{article.category}</Eyebrow>
          <h1 className="font-display text-display-sm md:text-display-md tracking-tighter text-white mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-on-surface-muted text-[11px] uppercase tracking-wider">
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-on-surface-muted" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <article className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-on-surface-variant text-base leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </article>
      </FadeIn>
    </Section>
  );
}

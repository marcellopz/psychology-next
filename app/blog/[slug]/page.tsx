import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { posts, getPostBySlug } from "../posts";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.psiwelligtonqueiroz.com.br";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artigo não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content.trim().split(/\n\n+/);

  function renderWithBold(text: string) {
    const parts = text.split("**");
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold text-neutral-900">
          {part}
        </strong>
      ) : (
        part
      )
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 overflow-hidden rounded-2xl border border-neutral-200 shadow-lg">
            <div className="relative aspect-video w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-4 text-sm text-neutral-600">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-semibold ${
                post.category === "Ansiedade"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-primary-100 text-primary-700"
              }`}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </span>
          </div>

          <div className="prose prose-neutral prose-lg max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-neutral-700">
                {renderWithBold(paragraph)}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-neutral-200 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              ← Voltar ao blog
            </Link>
          </div>
        </div>
      </article>

      <footer className="bg-neutral-900 py-12 text-center text-neutral-400">
        <p>
          &copy; {new Date().getFullYear()} Welligton Queiroz. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { posts, getPostBySlug } from "../posts";
import { ArrowRight, Calendar, User } from "lucide-react";
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

  const otherPosts = posts.filter((p) => p.slug !== slug);
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

          <h1 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
            {post.title}
          </h1>

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

      {otherPosts.length > 0 && (
        <section className="border-t border-neutral-200 bg-neutral-50 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-neutral-900">
              Leia também
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-5">
                    <span
                      className={`mb-2 inline-block w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        other.category === "Ansiedade"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-primary-100 text-primary-700"
                      }`}
                    >
                      {other.category}
                    </span>
                    <h3 className="mb-2 line-clamp-2 text-base font-bold text-neutral-900">
                      {other.title}
                    </h3>
                    <p className="mb-3 line-clamp-2 text-sm text-neutral-600">
                      {other.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                      Ler mais
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />

      <footer className="bg-neutral-900 py-12 text-center text-neutral-400">
        <p>
          &copy; {new Date().getFullYear()} Welligton Queiroz. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}

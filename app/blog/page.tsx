import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";
import { getMessages, getT } from "@/lib/server-i18n";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.psiwelligtonqueiroz.com.br";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const t = getT(messages, "blog");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaOgTitle"),
      description: t("metaOgDescription"),
      url: `${siteUrl}/blog`,
    },
    alternates: {
      canonical: `${siteUrl}/blog`,
    },
  };
}

export default async function BlogPage() {
  const messages = await getMessages();
  const t = getT(messages, "blog");

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={t("heroTitle")}
        description={t("heroDescription")}
        breadcrumbs={[
          { label: t("breadcrumbHome"), href: "/" },
          { label: t("breadcrumbBlog"), href: "/blog" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
            {posts.map((post) =>
              post.cardType === "grande" ? (
                <article
                  key={post.id}
                  className="md:col-span-3 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-72 w-full md:h-full min-h-[280px]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8">
                      <div
                        className={`mb-4 inline-block w-fit rounded-full px-3 py-1 text-sm font-semibold ${
                          post.category === "Ansiedade"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-primary-100 text-primary-700"
                        }`}
                      >
                        {post.category}
                      </div>
                      <h2 className="mb-4 text-3xl font-bold text-neutral-900">
                        {post.title}
                      </h2>
                      <p className="mb-6 text-neutral-700">{post.excerpt}</p>
                      <div className="mb-6 flex gap-4 text-sm text-neutral-600">
                        <span className="flex items-center gap-2">
                          <Calendar size={16} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <User size={16} />
                          {post.author}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex w-fit items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
                        data-i18n="blog.readMore"
                      >
                        {t("readMore")}
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </article>
              ) : (
                <article
                  key={post.id}
                  className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex grow flex-col p-6">
                    <div
                      className={`mb-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                        post.category === "Ansiedade"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-primary-100 text-primary-700"
                      }`}
                    >
                      {post.category}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-neutral-900">
                      {post.title}
                    </h3>
                    <p className="mb-4 grow text-sm text-neutral-600">
                      {post.excerpt}
                    </p>
                    <div className="mb-4 flex gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                      data-i18n="blog.readMore"
                    >
                      {t("readMore")}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <ContactSection variant="blog" />
    </div>
  );
}

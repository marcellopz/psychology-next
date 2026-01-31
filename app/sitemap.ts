import { MetadataRoute } from "next";
import { posts } from "@/app/blog/posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.psiwelligtonqueiroz.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 as const, changeFrequency: "weekly" as const },
    { path: "/sobre", priority: 0.8 as const, changeFrequency: "monthly" as const },
    { path: "/servicos", priority: 0.8 as const, changeFrequency: "monthly" as const },
    { path: "/perguntas", priority: 0.8 as const, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8 as const, changeFrequency: "weekly" as const },
  ];

  const staticUrls = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const blogUrls = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7 as number,
  }));

  return [...staticUrls, ...blogUrls];
}

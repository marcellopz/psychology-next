import Link from "next/link";
import { ChevronRight } from "lucide-react";
import StructuredData from "./StructuredData";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
};

export default function Breadcrumbs({ items, variant = "dark" }: BreadcrumbsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.psiwelligtonqueiroz.com.br";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };

  const isLight = variant === "light";
  const textColor = isLight ? "text-white/80" : "text-neutral-600";
  const textColorHover = isLight ? "hover:text-white" : "hover:text-primary-600";
  const textColorCurrent = isLight ? "text-white font-medium" : "font-medium text-neutral-900";
  const iconColor = isLight ? "text-white/60" : "text-neutral-400";

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className={`flex flex-wrap items-center gap-2 text-sm ${textColor}`}>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <ChevronRight size={16} className={iconColor} />}
              {index === items.length - 1 ? (
                <span className={textColorCurrent} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors ${textColorHover}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

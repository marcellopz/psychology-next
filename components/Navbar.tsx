"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavbarProps = {
  messages: Record<string, string>;
};

export default function Navbar({ messages }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const t = (key: string) => messages[key] ?? key;

  const NAV_LINKS = [
    { href: "/", label: t("home"), i18n: "nav.home" },
    { href: "/sobre", label: t("about"), i18n: "nav.about" },
    { href: "/servicos", label: t("services"), i18n: "nav.services" },
    { href: "/perguntas", label: t("faq"), i18n: "nav.faq" },
    { href: "/blog", label: t("blog"), i18n: "nav.blog" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo%20horizontal_01.png"
            alt={t("logoAlt")}
            data-i18n="nav.logoAlt"
            width={505}
            height={98}
            priority
            className="h-12 w-auto"
          />
          <span className="sr-only" data-i18n="nav.srName">{t("srName")}</span>
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-i18n={link.i18n}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "border-b-2 border-primary-600 text-primary-600"
                  : "text-neutral-700 hover:text-primary-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="p-2 text-neutral-700 hover:text-primary-600 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={t("menuLabel")}
          data-i18n="nav.menuLabel"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-2 px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              data-i18n={link.i18n}
              className={`block rounded px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-primary-50 text-primary-600"
                  : "text-neutral-700 hover:bg-neutral-50 hover:text-primary-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

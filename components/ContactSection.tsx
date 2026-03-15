import Image from "next/image";
import { getMessages, getT } from "@/lib/server-i18n";

type ContactSectionProps = {
  variant?: "default" | "blog";
};

export default async function ContactSection({ variant = "default" }: ContactSectionProps) {
  const messages = await getMessages();
  const t = getT(messages, "contact");

  const isBlog = variant === "blog";
  const title = isBlog ? t("blogTitle") : t("title");
  const description = isBlog ? t("blogDescription") : t("description");
  const titleKey = isBlog ? "contact.blogTitle" : "contact.title";
  const descKey = isBlog ? "contact.blogDescription" : "contact.description";

  return (
    <section id="contato" className="bg-secondary-600 py-16 text-white md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl" data-i18n={titleKey}>
          {title}
        </h2>
        <p className="mb-8 text-lg text-secondary-100" data-i18n={descKey}>
          {description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:welligton.queiroz@hotmail.com"
            className="rounded-lg bg-white px-8 py-3 font-semibold text-secondary-600 transition-colors hover:bg-neutral-100"
            data-i18n="contact.email"
          >
            {t("email")}
          </a>
          <a
            href="https://wa.me/5527995140965"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#128C7E] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0D7A6F]"
            data-i18n="contact.whatsapp"
          >
            <Image
              src="/whatsapp.svg"
              alt="WhatsApp"
              width={20}
              height={20}
              className="brightness-0 invert"
            />
            {t("whatsapp")}
          </a>
        </div>
      </div>
    </section>
  );
}

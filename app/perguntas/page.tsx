import PageHero from "@/components/PageHero";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import { getMessages, getT } from "@/lib/server-i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.psiwelligtonqueiroz.com.br";
const EMAIL = "welligton.queiroz@hotmail.com";
const TELEFONE = "(27) 99514-0965";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const t = getT(messages, "faq");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaOgTitle"),
      description: t("metaOgDescription"),
      url: `${siteUrl}/perguntas`,
    },
    alternates: {
      canonical: `${siteUrl}/perguntas`,
    },
  };
}

export default async function PerguntasPage() {
  const messages = await getMessages();
  const t = getT(messages, "faq");

  const faqs: FaqItem[] = [
    {
      question: t("q1"),
      answer: (
        <>
          {t("a1").split(EMAIL)[0]}
          <a
            href={`mailto:${EMAIL}`}
            className="font-semibold text-primary-600 underline decoration-primary-600/30 underline-offset-2 hover:decoration-primary-600"
          >
            {EMAIL}
          </a>
          {" "}ou telefone{" "}
          <a
            href="tel:+5527995140965"
            className="whitespace-nowrap font-semibold text-primary-600 underline decoration-primary-600/30 underline-offset-2 hover:decoration-primary-600"
          >
            {TELEFONE}
          </a>
          . Farei o possível para agendar sua consulta em um horário conveniente.
        </>
      ),
      answerForSchema: t("a1"),
    },
    { question: t("q2"), answer: t("a2") },
    { question: t("q3"), answer: t("a3") },
    { question: t("q4"), answer: t("a4") },
    { question: t("q5"), answer: t("a5") },
    { question: t("q6"), answer: t("a6") },
    { question: t("q7"), answer: t("a7") },
    { question: t("q8"), answer: t("a8") },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text:
          typeof faq.answer === "string"
            ? faq.answer
            : faq.answerForSchema ?? "",
      },
    })),
  };

  const resources = [
    {
      title: t("resource1Title"),
      description: t("resource1Description"),
      cta: t("resource1Cta"),
      href: "#",
      i18n: "1",
    },
    {
      title: t("resource2Title"),
      description: t("resource2Description"),
      cta: t("resource2Cta"),
      href: "/blog",
      i18n: "2",
    },
    {
      title: t("resource3Title"),
      description: t("resource3Description"),
      cta: t("resource3Cta"),
      href: "#",
      i18n: "3",
    },
  ];

  return (
    <>
      <StructuredData data={faqSchema} />
      <div className="min-h-screen bg-white">
        <PageHero
          title={t("heroTitle")}
          description={t("heroDescription")}
          breadcrumbs={[
            { label: t("breadcrumbHome"), href: "/" },
            { label: t("breadcrumbFaq"), href: "/perguntas" },
          ]}
        />

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        <section className="bg-primary-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900" data-i18n="faq.resourcesTitle">
              {t("resourcesTitle")}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {resources.map((resource) => (
                <div
                  key={resource.i18n}
                  className="rounded-xl border border-primary-200 bg-white p-8"
                >
                  <h3 className="mb-4 text-xl font-bold text-neutral-900" data-i18n={`faq.resource${resource.i18n}Title`}>
                    {resource.title}
                  </h3>
                  <p className="mb-4 text-neutral-700" data-i18n={`faq.resource${resource.i18n}Description`}>
                    {resource.description}
                  </p>
                  <Link
                    href={resource.href}
                    className="font-semibold text-primary-600 transition-colors hover:text-primary-700"
                    data-i18n={`faq.resource${resource.i18n}Cta`}
                  >
                    {resource.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

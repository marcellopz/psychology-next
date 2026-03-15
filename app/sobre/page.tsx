import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { Award, BookOpen, Briefcase, Heart } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { getMessages, getT } from "@/lib/server-i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.psiwelligtonqueiroz.com.br";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Welligton Ribeiro Queiroz Júnior",
  jobTitle: "Psicólogo Clínico",
  description:
    "Psicólogo formado pela UFES, especialista em Psicoterapia Baseada em Evidências. Mais de 400 atendimentos realizados.",
  image: `${siteUrl}/xib2.jpeg`,
  url: `${siteUrl}/sobre`,
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Universidade Federal do Espírito Santo",
    abbreviation: "UFES",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Bacharelado em Psicologia",
      recognizedBy: {
        "@type": "Organization",
        name: "Universidade Federal do Espírito Santo",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Especialização em Psicoterapia Baseada em Evidências",
      recognizedBy: {
        "@type": "Organization",
        name: "InPBE - Instituto de Psicologia Baseada em Evidências",
      },
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Consultório Particular",
  },
  knowsAbout: [
    "Psicoterapia",
    "Psicologia Clínica",
    "Avaliação Psicológica",
    "Saúde Mental",
    "Psicoterapia Baseada em Evidências",
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const t = getT(messages, "about");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaOgTitle"),
      description: t("metaOgDescription"),
      url: `${siteUrl}/sobre`,
      images: [`${siteUrl}/xib2.jpeg`],
    },
    alternates: {
      canonical: `${siteUrl}/sobre`,
    },
  };
}

export default async function SobrePage() {
  const messages = await getMessages();
  const t = getT(messages, "about");

  const formation = [
    { title: t("formation1Title"), subtitle: t("formation1Subtitle"), i18nTitle: "about.formation1Title", i18nSub: "about.formation1Subtitle" },
    { title: t("formation2Title"), subtitle: t("formation2Subtitle"), i18nTitle: "about.formation2Title", i18nSub: "about.formation2Subtitle" },
  ];

  const experience = [
    { title: t("experience1Title"), subtitle: t("experience1Subtitle"), i18nTitle: "about.experience1Title", i18nSub: "about.experience1Subtitle" },
    { title: t("experience2Title"), subtitle: t("experience2Subtitle"), i18nTitle: "about.experience2Title", i18nSub: "about.experience2Subtitle" },
    { title: t("experience3Title"), subtitle: t("experience3Subtitle"), i18nTitle: "about.experience3Title", i18nSub: "about.experience3Subtitle" },
  ];

  return (
    <>
      <StructuredData data={personSchema} />
      <div className="min-h-screen bg-white">
        <PageHero
          title={t("heroTitle")}
          description={t("heroDescription")}
          breadcrumbs={[
            { label: t("breadcrumbHome"), href: "/" },
            { label: t("breadcrumbAbout"), href: "/sobre" },
          ]}
        />

        <section className="py-8 md:py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-5">
              <div className="md:col-span-2 rounded-2xl bg-primary-50 overflow-hidden">
                <div className="relative h-[400px] w-full md:h-[600px]">
                  <Image
                    src="/xib2.jpeg"
                    alt={t("imageAlt")}
                    title={t("imageTitle")}
                    data-i18n="about.imageAlt"
                    fill
                    className="rounded-2xl object-cover image-sobre-mim"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="mb-6 text-3xl font-bold text-neutral-900" data-i18n="about.fullName">
                  {t("fullName")}
                </h2>
                <div className="space-y-6 text-neutral-700 leading-relaxed">
                  <p data-i18n="about.bio1" dangerouslySetInnerHTML={{ __html: t("bio1") }} />
                  <p data-i18n="about.bio2" dangerouslySetInnerHTML={{ __html: t("bio2") }} />
                </div>
              </div>
            </div>

            <div className="mb-16 rounded-xl border border-primary-200 bg-primary-50 p-8">
              <div className="mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary-600" />
                <h3 className="text-2xl font-bold text-neutral-900" data-i18n="about.podeFalarTitle">
                  {t("podeFalarTitle")}
                </h3>
              </div>
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600" data-i18n="about.podeFalarStat1Value">
                    {t("podeFalarStat1Value")}
                  </div>
                  <div className="text-sm text-neutral-600" data-i18n="about.podeFalarStat1Label">
                    {t("podeFalarStat1Label")}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600" data-i18n="about.podeFalarStat2Value">
                    {t("podeFalarStat2Value")}
                  </div>
                  <div className="text-sm text-neutral-600" data-i18n="about.podeFalarStat2Label">
                    {t("podeFalarStat2Label")}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600" data-i18n="about.podeFalarStat3Value">
                    {t("podeFalarStat3Value")}
                  </div>
                  <div className="text-sm text-neutral-600" data-i18n="about.podeFalarStat3Label">
                    {t("podeFalarStat3Label")}
                  </div>
                </div>
              </div>
              <p className="mb-4 text-neutral-700 leading-relaxed" data-i18n="about.podeFalarText1" dangerouslySetInnerHTML={{ __html: t("podeFalarText1") }} />
              <p className="text-neutral-700 leading-relaxed" data-i18n="about.podeFalarText2">
                {t("podeFalarText2")}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-neutral-900">
                <BookOpen className="h-8 w-8 text-primary-600" />
                <span data-i18n="about.academicTitle">{t("academicTitle")}</span>
              </h3>
              <p className="mb-4 text-neutral-700 leading-relaxed" data-i18n="about.academicText1" dangerouslySetInnerHTML={{ __html: t("academicText1") }} />
              <p className="text-neutral-700 leading-relaxed" data-i18n="about.academicText2">
                {t("academicText2")}
              </p>
            </div>

            <div className="mb-16">
              <p className="text-lg text-neutral-700 leading-relaxed" data-i18n="about.commitment">
                {t("commitment")}
              </p>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-primary-200 bg-primary-50 p-8">
                <Award className="mb-4 h-10 w-10 text-primary-600" />
                <h3 className="mb-4 text-xl font-semibold text-neutral-900" data-i18n="about.formationTitle">
                  {t("formationTitle")}
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  {formation.map((item) => (
                    <li key={item.i18nTitle} className="flex gap-3">
                      <span className="font-semibold text-primary-600">•</span>
                      <div>
                        <div className="font-semibold" data-i18n={item.i18nTitle}>{item.title}</div>
                        <div className="text-sm text-neutral-600" data-i18n={item.i18nSub}>{item.subtitle}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-secondary-200 bg-secondary-50 p-8">
                <Briefcase className="mb-4 h-10 w-10 text-secondary-600" />
                <h3 className="mb-4 text-xl font-semibold text-neutral-900" data-i18n="about.experienceTitle">
                  {t("experienceTitle")}
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  {experience.map((item) => (
                    <li key={item.i18nTitle} className="flex gap-3">
                      <span className="font-semibold text-secondary-600">•</span>
                      <div>
                        <div className="font-semibold" data-i18n={item.i18nTitle}>{item.title}</div>
                        <div className="text-sm text-neutral-600" data-i18n={item.i18nSub}>{item.subtitle}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

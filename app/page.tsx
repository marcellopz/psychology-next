import ContactSection from "@/components/ContactSection";
import { posts } from "@/app/blog/posts";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { getMessages, getT } from "@/lib/server-i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.psiwelligtonqueiroz.com.br";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#business`,
  name: "Welligton Queiroz - Psicólogo Clínico",
  image: `${siteUrl}/logo%20horizontal_01.png`,
  url: siteUrl,
  telephone: "+5527995140965",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vitória",
    addressRegion: "ES",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-20.3155",
    longitude: "-40.3128",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Welligton Queiroz - Psicólogo Clínico",
  description:
    "Psicólogo clínico especializado em psicoterapia individual, avaliação psicológica e saúde mental. Atendimento online e presencial em Vitória-ES.",
  provider: {
    "@type": "Person",
    name: "Welligton Ribeiro Queiroz Júnior",
    jobTitle: "Psicólogo Clínico",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universidade Federal do Espírito Santo",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Licenciatura em Psicologia",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Vitória",
  },
  serviceType: [
    "Psicoterapia Individual",
    "Avaliação Psicológica",
    "Gestão Comportamental de Empresas",
    "Gerenciamento de Riscos Psicossociais para Empresas (NR1)",
  ],
  url: siteUrl,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Welligton Queiroz - Psicólogo Clínico",
  description:
    "Consultório de psicologia clínica especializado em psicoterapia individual baseada em evidências, avaliação psicológica e saúde mental em Vitória-ES.",
  url: siteUrl,
  logo: `${siteUrl}/logo%20horizontal_01.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vitória",
    addressRegion: "ES",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5527995140965",
    email: "welligton.queiroz@hotmail.com",
    contactType: "Atendimento",
    areaServed: "BR",
    availableLanguage: "pt-BR",
  },
  sameAs: [],
};

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const t = getT(messages, "home");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaOgTitle"),
      description: t("metaOgDescription"),
      url: siteUrl,
      images: [`${siteUrl}/xib4.jpeg`],
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

export default async function Home() {
  const messages = await getMessages();
  const t = getT(messages, "home");

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={professionalServiceSchema} />
      <StructuredData data={organizationSchema} />
      <div className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-linear-to-br from-primary-500 to-primary-600 py-16 text-white md:py-24">
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative z-10">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl" data-i18n="home.welcome">
                {t("welcome")}
              </h1>
              <p className="mb-8 text-lg text-primary-100" data-i18n="home.heroText">
                {t("heroText")}{" "}
                <strong data-i18n="home.heroHighlight">{t("heroHighlight")}</strong>{" "}
                <span data-i18n="home.heroTextEnd">{t("heroTextEnd")}</span>
              </p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/5527995140965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 cursor-pointer inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 transition-colors hover:bg-neutral-100"
                >
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={22} height={22} />
                  <span style={{ lineHeight: "22px" }} data-i18n="home.heroCta">
                    {t("heroCta")}
                  </span>
                </a>
              </div>
            </div>

            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-96 w-full">
                <Image
                  src="/xib4.jpeg"
                  alt={t("heroImageAlt")}
                  title={t("heroImageTitle")}
                  data-i18n="home.heroImageAlt"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 pointer-events-none z-0 overflow-visible">
            <Image
              src="/elemento%20gráfico_01.png"
              alt=""
              aria-hidden="true"
              width={800}
              height={700}
              className="translate-x-1/6 -translate-y-1/5 object-contain"
              priority
            />
          </div>
        </section>

        <section className="bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl" data-i18n="home.aboutTitle">
                {t("aboutTitle")}
              </h2>
            </div>

            <div className="mb-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border shadow-xl">
                <div className="relative h-[450px] w-full">
                  <Image
                    src="/xib3.jpeg"
                    alt={t("aboutImageAlt")}
                    title={t("aboutImageTitle")}
                    data-i18n="home.aboutImageAlt"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover image-custom-position-sobre-mim"
                  />
                </div>
              </div>
              <div>
                <p
                  className="text-lg text-neutral-600"
                  data-i18n="home.aboutText"
                  dangerouslySetInnerHTML={{ __html: t("aboutText") }}
                />
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
                data-i18n="home.aboutCta"
              >
                {t("aboutCta")}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl" data-i18n="home.therapyTitle">
                {t("therapyTitle")}
              </h2>
            </div>

            <div className="mb-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-lg text-neutral-600 mb-4" data-i18n="home.therapyText1">
                  {t("therapyText1")}
                </p>
                <p
                  className="text-lg text-neutral-600"
                  data-i18n="home.therapyText2"
                  dangerouslySetInnerHTML={{ __html: t("therapyText2") }}
                />
              </div>

              <div className="overflow-hidden rounded-2xl border shadow-xl">
                <div className="relative h-[450px] w-full">
                  <Image
                    src="/xib6.png"
                    alt={t("therapyImageAlt")}
                    title={t("therapyImageTitle")}
                    data-i18n="home.therapyImageAlt"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover image-custom-position-terapia"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
                data-i18n="home.therapyCta"
              >
                {t("therapyCta")}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl" data-i18n="home.blogTitle">
                {t("blogTitle")}
              </h2>
              <p className="mx-auto max-w-4xl text-lg text-neutral-600" data-i18n="home.blogIntro">
                {t("blogIntro")}
              </p>
            </div>
            <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-5">
                    <span
                      className={`mb-2 inline-block w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        post.category === "Ansiedade"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-primary-100 text-primary-700"
                      }`}
                    >
                      {post.category}
                    </span>
                    <h3 title={post.title} className="mb-2 line-clamp-2 text-base font-bold text-neutral-900">
                      {post.title}
                    </h3>
                    <p className="mb-3 line-clamp-3 text-sm text-neutral-600">
                      {post.excerpt}
                    </p>
                    <span className="mb-2 flex items-center gap-1.5 text-xs text-neutral-500">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600" data-i18n="home.blogReadMore">
                      {t("blogReadMore")}
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
                data-i18n="home.blogCta"
              >
                {t("blogCta")}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

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
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    // Adicione links de redes sociais quando disponíveis
  ],
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
  sameAs: [
    // Adicione links de redes sociais quando disponíveis
  ],
};

export const metadata: Metadata = {
  title: "Psicólogo Clínico em Vitória-ES | Psicoterapia Online e Presencial",
  description:
    "Psicólogo clínico especializado em psicoterapia individual baseada em evidências. Atendimento online e presencial em Vitória-ES. Mais de 400 atendimentos realizados. Agende sua consulta.",
  openGraph: {
    title: "Welligton Queiroz | Psicólogo Clínico em Vitória-ES",
    description:
      "Psicólogo clínico especializado em psicoterapia individual, avaliação psicológica e saúde mental. Atendimento online e presencial.",
    url: siteUrl,
    images: [`${siteUrl}/xib4.jpeg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={professionalServiceSchema} />
      <StructuredData data={organizationSchema} />
      <div className="min-h-screen bg-white">
        <Navbar />

      <section className="relative overflow-hidden bg-linear-to-br from-primary-500 to-primary-600 py-16 text-white md:py-24">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Bem vindo!</h1>
            <p className="mb-8 text-lg text-primary-100">
              Fico contente pela sua decisão de procurar psicoterapia e investir
              em si mesmo(a). Essa decisão não é fácil mas é o{" "}
              <strong>primeiro passo</strong> para construir um jeito mais leve
              de viver!
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5527995140965"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 cursor-pointer inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 transition-colors hover:bg-neutral-100"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={22}
                  height={22}
                />
                <span style={{ lineHeight: "22px" }}>Vamos lá?</span>
              </a>
            </div>
          </div>

          <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-96 w-full">
              <Image
                src="/xib4.jpeg"
                alt="Consultório psicológico acolhedor e profissional para sessões de terapia em Vitória-ES, com ambiente tranquilo e confortável"
                title="Espaço terapêutico do consultório de Welligton Queiroz em Vitória"
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
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              Sobre mim
            </h2>
          </div>

          <div className="mb-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border shadow-xl">
              <div className="relative h-[450px] w-full">
                <Image
                  src="/xib3.jpeg"
                  alt="Welligton Queiroz - Psicólogo Clínico formado pela UFES, especialista em psicoterapia baseada em evidências em Vitória-ES"
                  title="Welligton Queiroz - Psicólogo Clínico"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover image-custom-position-sobre-mim"
                />
              </div>
            </div>
            <div>
              <p className="text-lg text-neutral-600">
                Meu nome é <strong>Welligton Queiroz</strong>, sou psicólogo
                formado pela Universidade Federal do Espírito Santo, possuo
                vasta experiência de atendimento pelo Núcleo de Psicologia
                Ampliada da UFES e pelo Projeto Pode Falar da UNICEF através do
                Instituto Acalanto. Atualmente me especializo em{" "}
                <strong>psicoterapia baseada em evidências</strong> pelo InPBE e
                atendo online e presencialmente em Vitória-ES.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              Saber mais sobre minha formação
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
              Um pouco sobre a terapia
            </h2>
          </div>

          <div className="mb-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg text-neutral-600 mb-4">
                A psicoterapia, segundo o conselho federal de psicologia, é um
                processo científico, estruturado em métodos e técnicas
                reconhecidas pela ciência para o tratar de diferentes quadros.
                Esse serviço pode ser útil tanto para psicopatologias como
                Transtornos depressivos, Transtornos de Ansiedade ou ou
                dificuldades emocionais persistentes - quanto em questões do
                desenvolvimento humano, como autoconhecimento, processos de
                tomada de decisão e desenvolvimento de habilidades
                socioemocionais.
              </p>
              <p className="text-lg text-neutral-600">
                Minha proposta na terapia é oferecer um{" "}
                <strong>espaço seguro e acolhedor</strong> para que possamos
                construir juntos um espaço para compreender padrões de
                comportamento, emoções e formas de enfrentamento que existem
                atualmente na sua vida. E, a partir disso, construiremos
                alternativas mais alinhadas com o que você deseja pra sua vida.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border shadow-xl">
              <div className="relative h-[450px] w-full">
                <Image
                  src="/xib6.png"
                  alt="Espaço terapêutico profissional para psicoterapia individual em Vitória-ES, ambiente seguro e acolhedor para sessões de terapia"
                  title="Espaço terapêutico para psicoterapia"
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
            >
              Explorar todos os serviços
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Pronto para começar seu caminho?
          </h2>
          <p className="mb-8 text-lg text-primary-100">
            Entre em contato comigo para agendar sua primeira sessão. Estarei
            feliz em ajudar você na sua jornada de autoconhecimento e bem-estar.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:welligton.queiroz@hotmail.com"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-colors hover:bg-neutral-100"
            >
              Enviar email
            </a>
            <a
              href="https://wa.me/5527995140965"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-secondary-700"
            >
              <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                className="brightness-0 invert"
              />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { Award, BookOpen, Briefcase, Heart } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://welligtonqueiroz.com.br";

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

export const metadata: Metadata = {
  title: "Sobre Mim | Formação e Experiência Profissional",
  description:
    "Welligton Queiroz - Psicólogo formado pela UFES, especialista em Psicoterapia Baseada em Evidências. Mais de 400 atendimentos no Projeto Pode Falar da UNICEF. Conheça minha trajetória profissional.",
  openGraph: {
    title: "Sobre Welligton Queiroz | Psicólogo Clínico",
    description:
      "Psicólogo formado pela UFES, especialista em Psicoterapia Baseada em Evidências. Experiência em atendimento clínico e projetos sociais.",
    url: `${siteUrl}/sobre`,
    images: [`${siteUrl}/xib2.jpeg`],
  },
  alternates: {
    canonical: `${siteUrl}/sobre`,
  },
};

export default function SobrePage() {
  return (
    <>
      <StructuredData data={personSchema} />
      <div className="min-h-screen bg-white">
        <Navbar />
      <PageHero
        title="Sobre Mim"
        description="Conheça minha trajetória profissional e meu compromisso com um atendimento psicológico sério, ético e baseado nas melhores evidências científicas."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sobre", href: "/sobre" },
        ]}
      />

      <section className="py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-5">
            <div className="md:col-span-2 rounded-2xl bg-primary-50 overflow-hidden">
              <div className="relative h-[400px] w-full md:h-[600px]">
                <Image
                  src="/xib2.jpeg"
                  alt="Welligton Queiroz - Psicólogo Clínico formado pela UFES, especialista em psicoterapia baseada em evidências atendendo em Vitória-ES"
                  title="Welligton Queiroz - Psicólogo Clínico"
                  fill
                  className="rounded-2xl object-cover image-sobre-mim"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <h2 className="mb-6 text-3xl font-bold text-neutral-900">
                Welligton Ribeiro Queiroz Júnior
              </h2>
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                  Meu nome é <strong>Welligton Ribeiro Queiroz Júnior</strong>,
                  sou psicólogo formado pela Universidade Federal do Espírito
                  Santo (UFES) e desenvolvi minha prática clínica a partir de
                  experiências diversas, sempre orientadas pelo cuidado
                  qualificado e pelo rigor técnico. Durante minha graduação,
                  atuei no{" "}
                  <strong>Núcleo de Psicologia Ampliada da UFES</strong>, onde
                  tive contato com uma ampla variedade de demandas emocionais e
                  sociais, consolidando minha base de atendimento individual.
                </p>
                <p>
                  Atualmente, estou me especializando em{" "}
                  <strong>Psicoterapia Baseada em Evidências</strong> pelo
                  InPBE, buscando aprofundar meu domínio de intervenções que
                  realmente funcionam e que respeitam tanto a ciência quanto a
                  singularidade de cada pessoa. Hoje atendo{" "}
                  <strong>online e presencialmente</strong> em Vitória-ES.
                </p>
              </div>
            </div>
          </div>

          {/* Card de Destaque: Projeto Pode Falar */}
          <div className="mb-16 rounded-xl border border-primary-200 bg-primary-50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <Heart className="h-8 w-8 text-primary-600" />
              <h3 className="text-2xl font-bold text-neutral-900">
                Projeto Pode Falar
              </h3>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 text-center">
                <div className="text-3xl font-bold text-primary-600">400+</div>
                <div className="text-sm text-neutral-600">
                  Atendimentos realizados
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 text-center">
                <div className="text-3xl font-bold text-primary-600">13-24</div>
                <div className="text-sm text-neutral-600">Anos de idade</div>
              </div>
              <div className="rounded-lg bg-white p-4 text-center">
                <div className="text-3xl font-bold text-primary-600">
                  UNICEF
                </div>
                <div className="text-sm text-neutral-600">Iniciativa</div>
              </div>
            </div>
            <p className="mb-4 text-neutral-700 leading-relaxed">
              Integrei o <strong>Projeto Pode Falar</strong>, iniciativa da
              UNICEF em parceria com o Instituto Acalanto, voltada ao
              acolhimento de jovens entre 13 e 24 anos em sofrimento psíquico.
              Nesse contexto, realizei mais de <strong>400 atendimentos</strong>
              , lidando com demandas complexas como ansiedade, depressão,
              vivências de violência, conflitos familiares, autolesão,
              dificuldades escolares e impactos das redes sociais na saúde
              mental.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              O Pode Falar me ensinou a importância da escuta sensível, da
              comunicação clara e da capacidade de acolher crises emocionais com
              seriedade, responsabilidade e técnica.
            </p>
          </div>

          {/* Bloco: Trabalho Acadêmico */}
          <div className="mb-12">
            <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-neutral-900">
              <BookOpen className="h-8 w-8 text-primary-600" />
              Trabalho Acadêmico
            </h3>
            <p className="mb-4 text-neutral-700 leading-relaxed">
              No campo acadêmico, fui monitor de disciplinas na UFES como
              História da Psicologia e Processos Psicológicos Básicos. Também
              tive a oportunidade de participar ativamente da produção
              científica na psicologia, participando na criação e validação de
              instrumentos psicológicos relevantes na área, e apresentei
              trabalhos em congressos nacionais como a <strong>ABRAOPC</strong>{" "}
              (Associação Brasileira de Orientação Profissional e de Carreira) e
              o <strong>IBAP</strong> (Instituto Brasileiro de Avaliação
              Psicológica).
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Essas experiências reforçam meu compromisso com uma prática
              fundamentada em pesquisa, ética e constante atualização.
            </p>
          </div>

          {/* Bloco: Compromisso */}
          <div className="mb-16">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Meu compromisso é continuar me atualizando, estudando e ampliando
              minhas habilidades para oferecer um atendimento psicológico cada
              vez mais qualificado, humano e responsável.
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-primary-200 bg-primary-50 p-8">
              <Award className="mb-4 h-10 w-10 text-primary-600" />
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                Formação Acadêmica
              </h3>
              <ul className="space-y-3 text-neutral-700">
                {[
                  {
                    title: "Bacharelado em Psicologia",
                    subtitle: "Universidade Federal do Espírito Santo (UFES)",
                  },
                  {
                    title:
                      "Especialização em Psicoterapia Baseada em Evidências",
                    subtitle:
                      "InPBE - Instituto de Psicologia Baseada em Evidências",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="font-semibold text-primary-600">•</span>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-neutral-600">
                        {item.subtitle}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-secondary-200 bg-secondary-50 p-8">
              <Briefcase className="mb-4 h-10 w-10 text-secondary-600" />
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                Experiência Profissional
              </h3>
              <ul className="space-y-3 text-neutral-700">
                {[
                  {
                    title: "Núcleo de Psicologia Ampliada da UFES",
                    subtitle: "Atendimento individual durante graduação",
                  },
                  {
                    title: "Projeto Pode Falar - UNICEF",
                    subtitle: "400+ atendimentos a jovens (13-24 anos)",
                  },
                  {
                    title: "Psicólogo Clínico",
                    subtitle: "Atendimento online e presencial em Vitória-ES",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="font-semibold text-secondary-600">•</span>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-neutral-600">
                        {item.subtitle}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

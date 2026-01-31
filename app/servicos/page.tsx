import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { Building2, Microscope, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.psiwelligtonqueiroz.com.br";

export const metadata: Metadata = {
  title:
    "Serviços | Psicoterapia Individual, Avaliação e Consultoria Empresarial",
  description:
    "Psicoterapia individual, avaliação psicológica, gestão comportamental de empresas e gerenciamento de riscos psicossociais (NR1). Atendimento online e presencial em Vitória-ES.",
  openGraph: {
    title: "Serviços de Psicoterapia e Consultoria | Welligton Queiroz",
    description:
      "Psicoterapia individual, avaliação psicológica, gestão comportamental e riscos psicossociais para empresas. Atendimento personalizado e baseado em evidências científicas.",
    url: `${siteUrl}/servicos`,
  },
  alternates: {
    canonical: `${siteUrl}/servicos`,
  },
};

const services = [
  {
    icon: Users,
    title: "Psicoterapia Individual",
    description:
      "Sessões personalizadas de terapia focadas em seus objetivos e desafios pessoais.",
    features: [
      "Sessões de 50 minutos",
      "Frequência semanal ou quinzenal",
      "Abordagem personalizada",
      "Flexibilidade de horários",
    ],
  },
  {
    icon: Microscope,
    title: "Avaliação Psicológica",
    description:
      "Diagnóstico preciso através de testes e entrevistas clínicas para compreender suas dificuldades.",
    features: [
      "Testes padronizados",
      "Avaliação estruturada",
      "Relatório detalhado",
      "Recomendações claras",
    ],
  },
  {
    icon: Building2,
    title: "Gestão Comportamental de Empresas",
    description:
      "Aplicação da ciência do comportamento no contexto organizacional para alinhar objetivos da empresa ao bem-estar do colaborador.",
    features: [
      "Aplicação da ciência do comportamento no contexto organizacional",
      "Uso de dados para orientar decisões",
      "Alinhamento entre objetivos da empresa e bem-estar do colaborador",
      "Foco em comportamentos observáveis e mensuráveis",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Gerenciamento de Riscos Psicossociais para Empresas (NR1)",
    description:
      "Mapeamento e implementação de gestão de riscos psicossociais no ambiente de trabalho, com medidas contra assédio, burnout e ansiedade.",
    features: [
      "Mapeamento e Implementação de Gestão de Riscos Psicossociais",
      "Medidas eficazes contra assédio moral e psicológico no ambiente de trabalho",
      "Gestão do Estresse e Prevenção da Síndrome de Burnout",
      "Prevenção e Manejo da Ansiedade no Trabalho",
    ],
  },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Meus Serviços"
        description="Oferecemos uma variedade de serviços psicológicos adaptados às suas necessidades específicas."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
        ]}
      />

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-lg"
                >
                  <Icon className="mb-4 h-12 w-12 text-primary-600" />
                  <h3 className="mb-3 text-2xl font-bold text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-neutral-700">{service.description}</p>
                  <ul className="space-y-2 text-neutral-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="font-bold text-primary-600">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary-600 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Pronto para começar?
          </h2>
          <p className="mb-8 text-lg text-secondary-100">
            Entre em contato comigo para agendar sua primeira sessão.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:welligton.queiroz@hotmail.com"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-secondary-600 transition-colors hover:bg-neutral-100"
            >
              Enviar email
            </a>
            <a
              href="https://wa.me/5527995140965"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#128C7E] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0D7A6F]"
            >
              <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                className="brightness-0 invert"
              />
              Mandar mensagem
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-900 py-12 text-center text-neutral-400">
        <p>
          &copy; {new Date().getFullYear()} Welligton Queiroz. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}

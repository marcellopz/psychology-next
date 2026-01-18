import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { Microscope, Target, Users, Zap } from "lucide-react";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://welligtonqueiroz.com.br";

export const metadata: Metadata = {
  title: "Serviços | Psicoterapia Individual e Avaliação Psicológica",
  description:
    "Oferecemos psicoterapia individual, terapia focada em problemas, avaliação psicológica e acompanhamento de crise. Atendimento online e presencial em Vitória-ES.",
  openGraph: {
    title: "Serviços de Psicoterapia | Welligton Queiroz",
    description:
      "Psicoterapia individual, avaliação psicológica e acompanhamento de crise. Atendimento personalizado e baseado em evidências científicas.",
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
    icon: Target,
    title: "Terapia Focada em Problemas",
    description:
      "Abordagem breve e estruturada para problemas específicos com foco em resultados práticos.",
    features: [
      "Duração definida",
      "Foco em objetivos claros",
      "Técnicas comprovadas",
      "Acompanhamento do progresso",
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
    icon: Zap,
    title: "Acompanhamento de Crise",
    description:
      "Suporte imediato em momentos de crise com flexibilidade para atendimentos emergenciais.",
    features: [
      "Disponibilidade de agendar rápido",
      "Suporte em momentos críticos",
      "Estratégias de coping",
      "Continuidade do tratamento",
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

      <section className="py-16 md:py-24">
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

          {/* <div className="mb-16 rounded-2xl bg-neutral-50 p-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-neutral-900">
              Investimento em sua Saúde Mental
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center">
                <h3 className="mb-2 text-xl font-bold text-neutral-900">
                  Primeira Consulta
                </h3>
                <div className="mb-4 text-3xl font-bold text-primary-600">
                  R$ 150
                </div>
                <p className="text-sm text-neutral-600">
                  Avaliação inicial e discussão de objetivos terapêuticos.
                </p>
              </div>
              <div className="rounded-xl border border-primary-200 bg-primary-50 p-8 text-center md:scale-105">
                <h3 className="mb-2 text-xl font-bold text-neutral-900">
                  Sessão Regular
                </h3>
                <div className="mb-4 text-3xl font-bold text-primary-600">
                  R$ 120
                </div>
                <p className="mb-6 text-sm text-neutral-600">
                  Sessões contínuas de 50 minutos.
                </p>
                <div className="rounded bg-primary-600 py-2 text-sm font-semibold text-white">
                  Mais Popular
                </div>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center">
                <h3 className="mb-2 text-xl font-bold text-neutral-900">
                  Avaliação Psicológica
                </h3>
                <div className="mb-4 text-3xl font-bold text-secondary-600">
                  R$ 400
                </div>
                <p className="text-sm text-neutral-600">
                  Avaliação completa com relatório detalhado.
                </p>
              </div>
            </div>
          </div> */}

          <div>
            <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
              Como Funciona
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Contato",
                  description: "Entre em contato via email ou telefone.",
                },
                {
                  step: 2,
                  title: "Agendamento",
                  description: "Defina a data e hora da primeira consulta.",
                },
                {
                  step: 3,
                  title: "Avaliação",
                  description: "Discutimos seus objetivos e necessidades.",
                },
                {
                  step: 4,
                  title: "Tratamento",
                  description: "Iniciamos o acompanhamento terapêutico.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-bold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>
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
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:welligton@example.com"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-secondary-600 transition-colors hover:bg-neutral-100"
            >
              Enviar email
            </a>
            <a
              href="tel:+5511999999999"
              className="rounded-lg bg-white/20 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/30"
            >
              Ligar agora
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

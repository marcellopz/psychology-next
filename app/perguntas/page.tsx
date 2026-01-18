import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://welligtonqueiroz.com.br";

export const metadata: Metadata = {
  title: "Perguntas Frequentes | Dúvidas sobre Psicoterapia",
  description:
    "Tire suas dúvidas sobre psicoterapia, agendamento, valores, confidencialidade e como funciona o atendimento psicológico. Respostas para perguntas frequentes.",
  openGraph: {
    title: "Perguntas Frequentes sobre Psicoterapia",
    description:
      "Respostas para dúvidas comuns sobre psicoterapia, agendamento, valores e confidencialidade.",
    url: `${siteUrl}/perguntas`,
  },
  alternates: {
    canonical: `${siteUrl}/perguntas`,
  },
};

const faqs: FaqItem[] = [
  {
    question: "Como posso agendar minha primeira consulta?",
    answer:
      "Você pode entrar em contato por email (welligton@example.com) ou telefone ((11) 9999-9999). Farei o possível para agendar sua consulta em um horário conveniente.",
  },
  {
    question: "Qual é a duração de uma sessão?",
    answer:
      "As sessões têm duração de 50 minutos, tempo ideal para um trabalho profundo sem ser excessivamente longo.",
  },
  {
    question: "Quanto custa uma sessão?",
    answer:
      "A primeira consulta custa R$ 150, sessões regulares R$ 120 e avaliações psicológicas completas R$ 400. Podemos conversar sobre flexibilidade de pagamento.",
  },
  {
    question: "Como é mantida a confidencialidade na psicoterapia?",
    answer:
      "Seu sigilo é garantido por lei. As informações só são compartilhadas com sua autorização ou em casos de risco iminente.",
  },
  {
    question: "Quantas sessões serão necessárias?",
    answer:
      "O número varia de acordo com seus objetivos. Podemos trabalhar em curto, médio ou longo prazo, e revisamos o plano com frequência.",
  },
  {
    question: "Posso fazer terapia se estou tomando medicação?",
    answer:
      "Sim. A psicoterapia pode ser combinada com medicação psiquiátrica e, quando necessário, trabalho em conjunto com médicos de confiança.",
  },
  {
    question: "O que esperar na primeira sessão?",
    answer:
      "Na primeira sessão fazemos uma avaliação inicial, explorando histórico, preocupações atuais e objetivos terapêuticos sem julgamentos.",
  },
  {
    question: "Vocês oferecem atendimento online ou apenas presencial?",
    answer:
      "Atualmente realizo atendimentos presenciais em São Paulo. Podemos avaliar casos específicos para atendimento remoto.",
  },
  {
    question: "Como saber se a psicoterapia está funcionando?",
    answer:
      "Revisamos o progresso com frequência e você perceberá mudanças em como pensa, sente e age diante dos desafios.",
  },
  {
    question: "E se não sentir conexão com o terapeuta?",
    answer:
      "A relação terapêutica é fundamental. Se achar que não estamos conectando, conversaremos sobre o tema ou indicarei outro profissional.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PerguntasPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <div className="min-h-screen bg-white">
        <Navbar />
      <PageHero
        title="Perguntas Frequentes"
        description="Respostas para dúvidas comuns sobre psicoterapia e meu atendimento."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Perguntas Frequentes", href: "/perguntas" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="bg-primary-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
            Recursos Adicionais
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Sobre Psicoterapia",
                description:
                  "Aprenda mais sobre como funciona a psicoterapia e seus benefícios comprovados.",
                cta: "Ler mais →",
                href: "#",
              },
              {
                title: "Saúde Mental",
                description:
                  "Dicas e recursos para manter sua saúde mental em dia no cotidiano.",
                cta: "Ir para Blog →",
                href: "/blog",
              },
              {
                title: "Emergências Psicológicas",
                description:
                  "Se você está em crise, existem recursos disponíveis. Saiba como acessá-los.",
                cta: "Saber mais →",
                href: "#",
              },
            ].map((resource) => (
              <div
                key={resource.title}
                className="rounded-xl border border-primary-200 bg-white p-8"
              >
                <h3 className="mb-4 text-xl font-bold text-neutral-900">
                  {resource.title}
                </h3>
                <p className="mb-4 text-neutral-700">{resource.description}</p>
                <a
                  href={resource.href}
                  className="font-semibold text-primary-600 transition-colors hover:text-primary-700"
                >
                  {resource.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary-600 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ainda tem dúvidas?
          </h2>
          <p className="mb-8 text-lg text-secondary-100">
            Entre em contato diretamente. Ficarei feliz em responder suas
            perguntas.
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
    </>
  );
}

import Navbar from "@/components/Navbar";
import { ArrowRight, Heart, Lightbulb, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Empatia",
    description:
      "Escuto com compaixão e sem julgamentos, criando um ambiente de confiança e respeito.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Utilizo técnicas terapêuticas comprovadas e atualizadas para oferecer o melhor cuidado.",
  },
  {
    icon: Shield,
    title: "Confidencialidade",
    description:
      "Seu sigilo é absoluto e protegido por lei. Você pode falar livremente.",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative bg-linear-to-br from-primary-500 to-primary-600 py-16 text-white md:py-24">
        <div className="z-1 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Bem-vindo ao meu consultório
            </h1>
            <p className="mb-8 text-lg text-primary-100">
              Sou Welligton Queiroz, psicólogo clínico especializado em
              psicoterapia individual. Aqui você encontrará um espaço seguro e
              acolhedor para explorar seus pensamentos, emoções e
              comportamentos.
            </p>
            <div className="flex gap-4">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 transition-colors hover:bg-neutral-100"
              >
                Conhecer mais
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="z-1 overflow-hidden rounded-2xl border shadow-xl">
            <div className="relative h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=800&h=960&fit=crop"
                alt="Consultório psicológico - espaço acolhedor"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-full overflow-hidden">
          <Image
            src="/elemento%20gráfico_01.png"
            alt=""
            aria-hidden="true"
            width={505}
            height={98}
            className="h-full w-full translate-x-1/3 object-contain"
            priority
          />
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              Sobre minha prática
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Com mais de 10 anos de experiência em psicologia clínica, trabalho
              para ajudar meus pacientes a alcançar bem-estar emocional e
              crescimento pessoal.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-neutral-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon className="mb-4 h-12 w-12 text-secondary-600" />
                <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                  {title}
                </h3>
                <p className="text-neutral-600">{description}</p>
              </div>
            ))}
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
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              Meus Serviços
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Ofereço atendimento psicológico personalizado para diferentes
              necessidades e desafios emocionais.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-primary-200 bg-primary-50 p-8">
              <h3 className="mb-3 text-2xl font-semibold text-primary-600">
                Terapia Individual
              </h3>
              <p className="mb-4 text-neutral-700">
                Sessões de psicoterapia individual focadas em seus objetivos e
                desafios pessoais.
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li>✓ Ansiedade e estresse</li>
                <li>✓ Depressão</li>
                <li>✓ Relacionamentos</li>
                <li>✓ Autoestima e identidade</li>
              </ul>
            </div>

            <div className="rounded-xl border border-secondary-200 bg-secondary-50 p-8">
              <h3 className="mb-3 text-2xl font-semibold text-secondary-600">
                Avaliação Psicológica
              </h3>
              <p className="mb-4 text-neutral-700">
                Diagnóstico preciso para melhor compreensão de suas
                dificuldades.
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li>✓ Avaliação de traumas</li>
                <li>✓ Análise de transtornos</li>
                <li>✓ Avaliação de capacidades</li>
                <li>✓ Relatórios psicológicos</li>
              </ul>
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
              href="mailto:welligton@example.com"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-colors hover:bg-neutral-100"
            >
              Enviar email
            </a>
            <a
              href="tel:+5511999999999"
              className="rounded-lg bg-secondary-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-secondary-700"
            >
              Ligar agora
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-900 py-12 text-neutral-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mb-2 text-xl font-bold text-white">
              Welligton Queiroz
            </div>
            <div className="text-sm text-neutral-500">
              PSICÓLOGO CLÍNICO | CRPX XXXXX
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-8 text-center text-sm md:grid-cols-3 md:justify-items-center md:text-left">
            <div>
              <h4 className="mb-4 font-semibold text-white">Navegação</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Página inicial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    className="transition-colors hover:text-white"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="transition-colors hover:text-white"
                  >
                    Serviços
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/perguntas"
                    className="transition-colors hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="transition-colors hover:text-white"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Contato</h4>
              <ul className="space-y-2">
                <li>Email: welligton@example.com</li>
                <li>Telefone: (11) 9999-9999</li>
                <li>Vitória, ES</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 text-center text-sm">
            <p>
              &copy; {currentYear} Welligton Queiroz. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-linear-to-br from-primary-500 to-primary-600 py-16 text-white md:py-24">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Bem vindo!</h1>
            <p className="mb-8 text-lg text-primary-100">
              Fico contente pela sua decisão de procurar psicoterapia e investir
              em si mesmo(a). Essa decisão não é fácil mas é o{" "}
              <strong>primeiro passo</strong>
              para construir um jeito mais leve de viver!
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
                alt="Consultório psicológico - espaço acolhedor"
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
                  alt="Welligton Queiroz - Psicólogo"
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
                  alt="Espaço terapêutico"
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
              href="mailto:welligton@example.com"
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
  );
}

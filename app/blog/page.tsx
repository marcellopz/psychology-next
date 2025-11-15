import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Entendendo Ansiedade: Causas e Estratégias de Controle",
    excerpt:
      "A ansiedade é uma resposta natural do corpo, mas quando se torna excessiva pode afetar sua qualidade de vida. Conheça as causas comuns e técnicas comprovadas para controlá-la.",
    date: "15 de Março de 2024",
    author: "Welligton Queiroz",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop",
    category: "Ansiedade",
  },
  {
    id: 2,
    title: "O Impacto da Comunicação Não-Violenta nos Relacionamentos",
    excerpt:
      "Como a comunicação não-violenta pode transformar seus relacionamentos. Veja técnicas práticas para expressar seus sentimentos de forma assertiva.",
    date: "10 de Março de 2024",
    author: "Welligton Queiroz",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    category: "Relacionamentos",
  },
  {
    id: 3,
    title: "Mindfulness e Meditação: Práticas para Bem-Estar Mental",
    excerpt:
      "Descubra como mindfulness e meditação reduzem o estresse, melhoram a concentração e aumentam o bem-estar geral.",
    date: "5 de Março de 2024",
    author: "Welligton Queiroz",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
    category: "Bem-estar",
  },
  // {
  //   id: 4,
  //   title: "Superando Traumas: Um Caminho para a Cura",
  //   excerpt:
  //     "Os traumas podem deixar marcas profundas. Conheça diferentes caminhos terapêuticos para processá-los e reconstruir sua vida.",
  //   date: "28 de Fevereiro de 2024",
  //   author: "Welligton Queiroz",
  //   image:
  //     "https://images.unsplash.com/photo-1499728603263-7706e5379842?w=600&h=400&fit=crop",
  //   category: "Traumas",
  // },
  // {
  //   id: 5,
  //   title: "Autoestima e Autoaceitação: Aprender a Amar a Si Mesmo",
  //   excerpt:
  //     "A autoestima é fundamental para uma vida plena. Explore técnicas para aumentar sua autoaceitação e desenvolver uma relação saudável consigo.",
  //   date: "20 de Fevereiro de 2024",
  //   author: "Welligton Queiroz",
  //   image:
  //     "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&h=400&fit=crop",
  //   category: "Autoestima",
  // },
  // {
  //   id: 6,
  //   title: "Gestão de Estresse: Técnicas Práticas para o Dia a Dia",
  //   excerpt:
  //     "Aprenda técnicas práticas e eficazes para reduzir o estresse e melhorar sua qualidade de vida.",
  //   date: "15 de Fevereiro de 2024",
  //   author: "Welligton Queiroz",
  //   image:
  //     "https://images.unsplash.com/photo-1493119508027-538ebb3f57ad?w=600&h=400&fit=crop",
  //   category: "Estresse",
  // },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Blog"
        description="Artigos, reflexões e insights sobre psicologia, bem-estar mental e desenvolvimento pessoal."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 && (
            <div className="mb-16 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-shadow hover:shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-72 w-full">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="mb-4 inline-block w-fit rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">
                    {posts[0].category}
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-neutral-900">
                    {posts[0].title}
                  </h2>
                  <p className="mb-6 text-neutral-700">{posts[0].excerpt}</p>
                  <div className="mb-6 flex gap-4 text-sm text-neutral-600">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {posts[0].date}
                    </span>
                    <span className="flex items-center gap-2">
                      <User size={16} />
                      {posts[0].author}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex w-fit items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
                  >
                    Ler mais
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex grow flex-col p-6">
                  <div className="mb-3 inline-block w-fit rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                    {post.category}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900">
                    {post.title}
                  </h3>
                  <p className="mb-4 grow text-sm text-neutral-600">
                    {post.excerpt}
                  </p>
                  <div className="mb-4 flex gap-4 text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                  >
                    Ler mais
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary-600 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Quer discutir algum tema?
          </h2>
          <p className="mb-8 text-lg text-secondary-100">
            Entre em contato para sugerir tópicos de artigos ou agendar uma
            consulta.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:welligton@example.com"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-secondary-600 transition-colors hover:bg-neutral-100"
            >
              Enviar mensagem
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

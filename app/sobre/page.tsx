import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { Award, BookOpen, Briefcase, Users } from "lucide-react";
import Image from "next/image";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Sobre Mim"
        description="Conheça minha trajetória profissional e meu compromisso com a excelência no atendimento psicológico."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-primary-50">
              <div className="relative h-[500px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1560807707-38cc192649c1?w=600&h=750&fit=crop"
                  alt="Welligton Queiroz - Psicólogo Clínico"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-6 text-3xl font-bold text-neutral-900">
                Welligton Queiroz
              </h2>
              <p className="mb-4 text-neutral-700 leading-relaxed">
                Sou psicólogo clínico com mais de 10 anos de experiência em
                atendimento individual. Minha paixão é ajudar pessoas a
                compreender suas emoções e transformar suas vidas através da
                psicoterapia.
              </p>
              <p className="mb-4 text-neutral-700 leading-relaxed">
                Trabalho com abordagens terapêuticas comprovadas,
                particularmente Terapia Cognitivo-Comportamental (TCC) e
                Psicodrama, adaptando os métodos às necessidades únicas de cada
                paciente.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Meu objetivo é criar um espaço seguro, acolhedor e livre de
                julgamentos onde você possa explorar seus pensamentos,
                sentimentos e comportamentos de forma autêntica.
              </p>
            </div>
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
                    subtitle: "Universidade Federal de São Paulo",
                  },
                  {
                    title: "Especialização em Psicoterapia",
                    subtitle: "Instituto Brasileiro de Psicodrama",
                  },
                  {
                    title: "Certificação em TCC Avançada",
                    subtitle: "Academia de Terapia Cognitiva",
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
                    title: "Psicólogo Clínico Autônomo",
                    subtitle: "2014 - Presente (10 anos)",
                  },
                  {
                    title: "Psicólogo Hospitalar - Hospital São Paulo",
                    subtitle: "2010 - 2014",
                  },
                  {
                    title: "Psicólogo em Centro de Saúde Mental",
                    subtitle: "2008 - 2010",
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-neutral-900">
                <BookOpen className="h-8 w-8 text-primary-600" />
                Abordagens Terapêuticas
              </h3>
              <ul className="space-y-3 text-neutral-700">
                {[
                  "Terapia Cognitivo-Comportamental (TCC)",
                  "Psicodrama",
                  "Terapia Gestáltica",
                  "Psicoterapia Humanista",
                  "Terapia Breve Focada",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-neutral-900">
                <Users className="h-8 w-8 text-secondary-600" />
                Áreas de Especialidade
              </h3>
              <ul className="space-y-3 text-neutral-700">
                {[
                  "Transtornos de Ansiedade",
                  "Depressão e Transtorno do Humor",
                  "Relacionamentos e Comunicação",
                  "Traumas e TEPT",
                  "Desenvolvimento Pessoal",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-secondary-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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

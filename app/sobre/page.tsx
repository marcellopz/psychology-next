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
        description="Conheça minha trajetória profissional e meu compromisso com um atendimento psicológico sério, ético e baseado nas melhores evidências científicas."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-primary-50 overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src="/xib2.jpeg"
                  alt="Welligton Queiroz - Psicólogo Clínico"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-6 text-3xl font-bold text-neutral-900">
                Welligton Ribeiro Queiroz Júnior
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Meu nome é <strong>Welligton Ribeiro Queiroz Júnior</strong>,
                  sou psicólogo formado pela Universidade Federal do Espírito
                  Santo (UFES) e desenvolvi minha prática clínica a partir de
                  experiências diversas, sempre orientadas pelo cuidado
                  qualificado e pelo rigor técnico. Durante minha graduação,
                  atuei no Núcleo de Psicologia Ampliada da UFES, onde tive
                  contato com uma ampla variedade de demandas emocionais e
                  sociais, consolidando minha base de atendimento individual.
                </p>
                <p>
                  Também integrei o <strong>Projeto Pode Falar</strong>,
                  iniciativa da UNICEF em parceria com o Instituto Acalanto,
                  voltada ao acolhimento de jovens entre 13 e 24 anos em
                  sofrimento psíquico. Nesse contexto, realizei mais de{" "}
                  <strong>400 atendimentos</strong>, lidando com demandas
                  complexas como ansiedade, depressão, vivências de violência,
                  conflitos familiares, autolesão, dificuldades escolares e
                  impactos das redes sociais na saúde mental. O Pode Falar me
                  ensinou a importância da escuta sensível, da comunicação clara
                  e da capacidade de acolher crises emocionais com seriedade,
                  responsabilidade e técnica.
                </p>
                <p>
                  No campo acadêmico, fui monitor de disciplinas na UFES como
                  História da Psicologia e Processos Psicológicos Básicos.
                  Também tive a oportunidade de participar ativamente da
                  produção científica na psicologia, tive a oportunidade de
                  participar na criação e validação de instrumentos psicológicos
                  relevantes na área, e apresentei trabalhos em congressos
                  nacionais como a <strong>ABRAOPC</strong> (Associação
                  Brasileira de Orientação Profissional e de Carreira) e o{" "}
                  <strong>IBAP</strong> (Instituto Brasileiro de Avaliação
                  Psicológica). Essas experiências reforçam meu compromisso com
                  uma prática fundamentada em pesquisa, ética e constante
                  atualização.
                </p>
                <p>
                  Atualmente, estou me especializando em{" "}
                  <strong>Psicoterapia Baseada em Evidências</strong> pelo
                  InPBE, buscando aprofundar meu domínio de intervenções que
                  realmente funcionam e que respeitam tanto a ciência quanto a
                  singularidade de cada pessoa. Hoje atendo{" "}
                  <strong>online e presencialmente</strong> em Vitória-ES.
                </p>
                <p>
                  Meu compromisso é continuar me atualizando, estudando e
                  ampliando minhas habilidades para oferecer um atendimento
                  psicológico cada vez mais qualificado, humano e responsável.
                </p>
              </div>
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
    </div>
  );
}

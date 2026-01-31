export type CardType = "grande" | "pequeno";

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  slug: string;
  content: string;
  cardType: CardType;
};

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Quando viver começa a pesar: um olhar cuidadoso sobre a depressão",
    excerpt:
      "Sentir tristeza faz parte da vida. A depressão começa a se desenhar quando esse estado deixa de ser passageiro e passa a ocupar quase todos os espaços da vida. Um olhar cuidadoso sobre o tema, com base nas evidências científicas.",
    date: "31 de Janeiro de 2026",
    author: "Welligton Queiroz",
    image: "/blog_depressao.jpg",
    category: "Depressão",
    slug: "quando-viver-comeca-a-pesar-depressao",
    cardType: "grande",
    content: `Sentir tristeza faz parte da vida. Ela aparece diante de perdas, frustrações, decepções, despedidas. Às vezes dura dias, às vezes semanas. E isso é humano. **Tristeza, por si só, não é depressão** — e não precisa ser combatida como se fosse um erro.

A depressão começa a se desenhar quando esse estado deixa de ser passageiro e passa a ocupar quase todos os espaços da vida. Quando o desânimo persiste, quando o corpo não responde, quando o prazer desaparece, quando até as tarefas mais simples parecem exigir um esforço desproporcional. Não se trata apenas de "estar triste", mas de sentir que viver ficou pesado demais.

Nem sempre a depressão chega fazendo barulho. Às vezes ela se instala devagar: um cansaço constante, um interesse que some, uma dificuldade crescente de sair da cama. O mundo continua girando, mas algo dentro parece ter desacelerado. E, junto com isso, costuma surgir a culpa — a ideia de que a pessoa deveria dar conta, de que é só uma fase, de que falta força. Esse é um dos aspectos mais cruéis da depressão: além de fazer sofrer, ela faz a pessoa duvidar da legitimidade do próprio sofrimento.

Do ponto de vista psicológico, a depressão é um transtorno mental multifatorial. Ela envolve alterações persistentes no humor, no pensamento, no comportamento e no funcionamento do corpo. Fatores biológicos, experiências de vida, estresse crônico, relações difíceis, condições sociais e de trabalho adoecedoras se entrelaçam. **Não existe uma causa única.**

Há muitos relatos de pessoas que descrevem a depressão não como tristeza intensa, mas como esvaziamento. As coisas perdem o sentido, o tempo parece arrastado, o futuro fica opaco. O corpo está presente, mas a vida parece distante. Quando esse estado se mantém por semanas ou meses e começa a afetar o trabalho, os estudos, os relacionamentos e o cuidado consigo, estamos diante de algo que precisa de atenção profissional.

A boa notícia, sustentada pelas melhores evidências científicas, é que **a depressão tem tratamento eficaz.** Psicoterapias como a Ativação Comportamental e as Terapias Cognitivo-Comportamentais ajudam a reorganizar a relação com pensamentos, emoções e rotinas. Em alguns casos, o tratamento medicamentoso, acompanhado por um médico, também é indicado. O cuidado não é padronizado: ele precisa respeitar a singularidade de cada história.

A melhora raramente é imediata ou linear. Às vezes ela começa de forma silenciosa: conseguir levantar um pouco antes, responder uma mensagem, voltar a sentir algo — mesmo que pequeno. **Isso não é pouco. Isso é processo.**

Reconhecer que sentir tristeza é humano, mas que sofrer de forma persistente não precisa ser suportado sozinho, abre espaço para menos culpa e mais acolhimento. **Procurar ajuda psicológica não é desistir da vida — é uma forma de insistir nela.**`,
  },
  {
    id: 2,
    title:
      "Quando a mente não desacelera: um olhar cuidadoso sobre a ansiedade",
    excerpt:
      "Sentir ansiedade faz parte da experiência humana. O problema começa quando ela deixa de ser pontual e passa a ser constante — quando a mente não desacelera e preocupar-se vira um modo de existir.",
    date: "7 de Dezembro de 2025",
    author: "Welligton Queiroz",
    image: "/blog_ansiedade.jpg",
    category: "Ansiedade",
    slug: "quando-a-mente-nao-desacelera-ansiedade",
    cardType: "grande",
    content: `Sentir ansiedade faz parte da experiência humana. Ela aparece antes de uma prova, de uma entrevista, de uma conversa difícil. É o corpo se preparando para algo importante. Estar ansioso, em muitos momentos da vida, é normal — e até esperado.

O problema começa quando essa ansiedade deixa de ser pontual e passa a ser constante. Quando a mente não desacelera, quando o corpo permanece em estado de alerta mesmo sem perigo real, quando preocupar-se vira um modo de existir. **A ansiedade deixa de ser resposta e passa a ser condição.**

No cotidiano, isso aparece de formas conhecidas: dificuldade para relaxar, pensamentos que antecipam o pior, tensão muscular, aperto no peito, insônia. Às vezes surge como irritação ou necessidade de controle; outras vezes, como evitação, procrastinação ou medo de errar. Nem sempre quem vive com ansiedade parece "ansioso" para quem olha de fora.

Do ponto de vista psicológico, os transtornos de ansiedade envolvem uma hiperativação persistente dos sistemas de alerta do organismo. Fatores biológicos, padrões de pensamento, experiências passadas e condições atuais de vida se combinam. Pressões constantes, excesso de estímulos, insegurança financeira, cobranças por desempenho e dificuldade de descanso real fazem parte do cenário em que a ansiedade se mantém. **Ela não surge no vazio** — ela dialoga com a forma como vivemos.

Muitas pessoas tentam lidar com isso sozinhas: evitando situações, se cobrando ainda mais, tentando controlar os pensamentos ou se distraindo o tempo todo. O alívio costuma ser momentâneo. A ciência mostra que, quando a ansiedade é persistente e começa a afetar o trabalho, os relacionamentos, o sono e a qualidade de vida, **é importante buscar ajuda profissional.**

O tratamento psicológico tem alta eficácia para os transtornos de ansiedade. Psicoterapias como a Terapia Cognitivo-Comportamental e abordagens comportamentais ajudam a pessoa a compreender o funcionamento da ansiedade, desenvolver novas formas de lidar com o medo e reduzir os sintomas físicos e cognitivos. Em alguns casos, o acompanhamento médico e o uso de medicação também podem ser indicados, sempre de forma individualizada.

Melhorar não significa nunca mais sentir ansiedade. Significa que ela deixa de comandar decisões, escolhas e rotinas. Significa viver sem estar o tempo todo em modo de emergência, sem antecipar catástrofes a cada passo.

Falar sobre ansiedade com humanidade é fundamental. Sentir-se ansioso é normal. Viver constantemente ansioso, não. Quando o sofrimento se prolonga e começa a limitar a vida, procurar ajuda psicológica é um gesto legítimo de cuidado com a saúde mental. **Viver não precisa ser sinônimo de estar sempre em alerta.**`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

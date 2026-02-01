import Image from "next/image";

type ContactSectionProps = {
  variant?: "default" | "blog";
};

const DEFAULT_TITLE = "Pronto para começar?";
const DEFAULT_DESCRIPTION =
  "Entre em contato comigo para agendar sua primeira sessão. Estarei feliz em ajudar você na sua jornada de autoconhecimento e bem-estar.";

const BLOG_TITLE = "Quer discutir algum tema?";
const BLOG_DESCRIPTION =
  "Entre em contato para sugerir tópicos de artigos ou agendar uma consulta. Você pode mandar uma mensagem pelo WhatsApp ou enviar um e-mail.";

export default function ContactSection({ variant = "default" }: ContactSectionProps) {
  const isBlog = variant === "blog";
  const title = isBlog ? BLOG_TITLE : DEFAULT_TITLE;
  const description = isBlog ? BLOG_DESCRIPTION : DEFAULT_DESCRIPTION;

  return (
    <section id="contato" className="bg-secondary-600 py-16 text-white md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mb-8 text-lg text-secondary-100">{description}</p>
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
  );
}

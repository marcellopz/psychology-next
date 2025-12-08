import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 py-12 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="mb-2 text-xl font-bold text-white">
            Welligton Queiroz
          </div>
          <div className="text-sm text-neutral-500">
            PSICÓLOGO CLÍNICO | CRP16/12189
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
              <li>Telefone: (27) 99514-0965</li>
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
  );
}

import Link from "next/link";
import Image from "next/image";
import { getMessages, getT } from "@/lib/server-i18n";

export default async function Footer() {
  const messages = await getMessages();
  const t = getT(messages, "footer");
  const tn = getT(messages, "nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 pt-6 pb-10 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center flex flex-col items-center">
          <Image
            src="/logo_vertical_completa_02.png"
            alt="Welligton Queiroz"
            width={180}
            height={200}
            className="mb-0.5 opacity-80"
          />
          <div className="text-sm text-neutral-500" data-i18n="footer.crp">
            {t("crp")}
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 text-center text-sm md:grid-cols-3 md:justify-items-center md:text-left">
          <div>
            <h4 className="mb-4 font-semibold text-white" data-i18n="footer.navTitle">
              {t("navTitle")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="transition-colors hover:text-white" data-i18n="nav.home">
                  {tn("home")}
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="transition-colors hover:text-white" data-i18n="nav.about">
                  {tn("about")}
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="transition-colors hover:text-white" data-i18n="nav.services">
                  {tn("services")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white" data-i18n="footer.resourcesTitle">
              {t("resourcesTitle")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/perguntas" className="transition-colors hover:text-white" data-i18n="footer.faq">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-white" data-i18n="nav.blog">
                  {tn("blog")}
                </Link>
              </li>
              <li>
                <a href="#contato" className="transition-colors hover:text-white" data-i18n="footer.contactLabel">
                  {t("contactLabel")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white" data-i18n="footer.contactTitle">
              {t("contactTitle")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:welligton.queiroz@hotmail.com"
                  className="transition-colors hover:text-white"
                >
                  welligton.queiroz@hotmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5527995140965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-white"
                  aria-label="WhatsApp (27) 99514-0965"
                >
                  <Image
                    src="/whatsapp.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0 filter-[brightness(0)_invert(0.65)] group-hover:filter-[brightness(0)_invert(1)]"
                  />
                  (27) 99514-0965
                </a>
              </li>
              <li data-i18n="footer.location">{t("location")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm">
          <p data-i18n="footer.copyright">
            &copy; {currentYear} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

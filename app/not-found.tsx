import Link from "next/link";
import { getMessages, getT } from "@/lib/server-i18n";

export default async function NotFound() {
  const messages = await getMessages();
  const t = getT(messages, "notFound");

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-primary-600" data-i18n="notFound.code">
            {t("code")}
          </h1>
          <p className="mb-4 text-2xl text-neutral-900" data-i18n="notFound.title">
            {t("title")}
          </p>
          <p className="mx-auto mb-8 max-w-md text-neutral-600" data-i18n="notFound.description">
            {t("description")}
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
            data-i18n="notFound.cta"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </div>
  );
}

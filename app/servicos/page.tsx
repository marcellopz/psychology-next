import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { Building2, Microscope, ShieldCheck, Users } from "lucide-react";
import type { Metadata } from "next";
import { getMessages, getT } from "@/lib/server-i18n";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.psiwelligtonqueiroz.com.br";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const t = getT(messages, "services");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaOgTitle"),
      description: t("metaOgDescription"),
      url: `${siteUrl}/servicos`,
    },
    alternates: {
      canonical: `${siteUrl}/servicos`,
    },
  };
}

const SERVICE_ICONS = [Users, Microscope, Building2, ShieldCheck];

export default async function ServicosPage() {
  const messages = await getMessages();
  const t = getT(messages, "services");

  const services = [1, 2, 3, 4].map((n) => ({
    icon: SERVICE_ICONS[n - 1],
    title: t(`service${n}Title`),
    description: t(`service${n}Description`),
    features: [
      t(`service${n}Feature1`),
      t(`service${n}Feature2`),
      t(`service${n}Feature3`),
      t(`service${n}Feature4`),
    ],
    i18nPrefix: `services.service${n}`,
  }));

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={t("heroTitle")}
        description={t("heroDescription")}
        breadcrumbs={[
          { label: t("breadcrumbHome"), href: "/" },
          { label: t("breadcrumbServices"), href: "/servicos" },
        ]}
      />

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.i18nPrefix}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-lg"
                >
                  <Icon className="mb-4 h-12 w-12 text-primary-600" />
                  <h3
                    className="mb-3 text-2xl font-bold text-neutral-900"
                    data-i18n={`${service.i18nPrefix}Title`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mb-6 text-neutral-700"
                    data-i18n={`${service.i18nPrefix}Description`}
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-neutral-600">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex gap-3">
                        <span className="font-bold text-primary-600">✓</span>
                        <span data-i18n={`${service.i18nPrefix}Feature${fi + 1}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

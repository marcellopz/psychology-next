import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getMessages, getT } from "@/lib/server-i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.psiwelligtonqueiroz.com.br";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const t = getT(messages, "metadata");
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: [
      "psicólogo",
      "psicólogo Vitória",
      "psicólogo Espírito Santo",
      "psicoterapia",
      "terapia online",
      "terapia presencial",
      "avaliação psicológica",
      "saúde mental",
      "psicoterapia baseada em evidências",
      "ansiedade",
      "depressão",
      "psicólogo clínico",
    ],
    authors: [{ name: "Welligton Queiroz" }],
    creator: "Welligton Queiroz",
    publisher: "Welligton Queiroz",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: siteUrl,
      siteName: t("ogSiteName"),
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: `${siteUrl}/logo%20horizontal_01.png`,
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: [`${siteUrl}/logo%20horizontal_01.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "GQye5ZqaoEwMgL3LHXlNLcawtGwce7wNAaeWtRW-LBM",
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const nav = (messages.nav ?? {}) as Record<string, string>;

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${robotoSlab.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar messages={nav} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import Footer from "@/components/Footer";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Welligton Queiroz | Psicólogo Clínico em Vitória-ES",
    template: "%s | Welligton Queiroz - Psicólogo Clínico",
  },
  description:
    "Psicólogo clínico especializado em psicoterapia individual, avaliação psicológica e saúde mental. Atendimento online e presencial em Vitória-ES. Psicoterapia baseada em evidências.",
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
    siteName: "Welligton Queiroz - Psicólogo Clínico",
    title: "Welligton Queiroz | Psicólogo Clínico em Vitória-ES",
    description:
      "Psicólogo clínico especializado em psicoterapia individual, avaliação psicológica e saúde mental. Atendimento online e presencial em Vitória-ES.",
    images: [
      {
        url: `${siteUrl}/logo%20horizontal_01.png`,
        width: 1200,
        height: 630,
        alt: "Welligton Queiroz - Psicólogo Clínico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welligton Queiroz | Psicólogo Clínico em Vitória-ES",
    description:
      "Psicólogo clínico especializado em psicoterapia individual, avaliação psicológica e saúde mental.",
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
    // yandex: "seu-codigo-yandex",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${robotoSlab.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

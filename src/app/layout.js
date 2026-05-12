import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "CPA — Consultoria e Planejamento em Agronegócio",
  description:
    "Desde 2007 desenvolvendo as melhores soluções para custeio agrícola e aumento da produtividade do seu plantio. Consultoria estratégica para produtores rurais, cooperativas e investidores.",
  keywords:
    "consultoria agronegócio, planejamento agrícola, custeio agrícola, produtividade, gestão de produção rural",
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon.ico?v=2",
  },
  openGraph: {
    title: "CPA — Consultoria e Planejamento em Agronegócio",
    description:
      "Desde 2007 desenvolvendo as melhores soluções para custeio agrícola e aumento da produtividade do seu plantio.",
    url: "https://cpa-agro.com.br",
    siteName: "CPA Agronegócio",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`h-full antialiased ${inter.className}`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}

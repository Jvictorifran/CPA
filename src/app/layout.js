import "./globals.css";

export const metadata = {
  title: "CPA — Consultoria e Planejamento em Agronegócio",
  description:
    "Desde 2007 desenvolvendo as melhores soluções para custeio agrícola e aumento da produtividade do seu plantio. Consultoria estratégica para produtores rurais, cooperativas e investidores.",
  keywords:
    "consultoria agronegócio, planejamento agrícola, custeio agrícola, produtividade, gestão de produção rural",
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
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

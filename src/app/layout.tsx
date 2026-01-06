import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Victor Tavares Esteves | Engenheiro de Computação",
  description: "Portfólio profissional de João Victor Tavares Esteves - Engenheiro de Computação especializado em desenvolvimento de software, análise de dados e Machine Learning.",
  keywords: ["João Victor", "Engenharia de Computação", "Desenvolvedor", "Machine Learning", "Python", "JavaScript", "AWS"],
  authors: [{ name: "João Victor Tavares Esteves" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://github.com/jvtesteves",
    siteName: "Portfólio João Victor",
    title: "João Victor Tavares Esteves | Engenheiro de Computação",
    description: "Portfólio profissional - Engenharia de Computação, ML e Desenvolvimento de Software",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

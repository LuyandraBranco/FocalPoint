import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.scss";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FocalPoint",
  description:
    "FocalPoint é uma aplicação de lista de tarefas que ajuda você a organizar suas atividades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter_tight.className}>{children}</body>
    </html>
  );
}

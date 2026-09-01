import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import MetaSync from "@/lib/i18n/MetaSync";

const inter = localFont({
  variable: "--font-inter",
  src: [
    { path: "../public/fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/inter-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VEKTO | Transformação Digital",
  description:
    "A VEKTO transforma processos empresariais por meio de WebApps, automação, integrações e inteligência artificial, com foco em velocidade e resultado.",
  icons: {
    icon: "/logo/vekto-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0a0a0a]">
        <I18nProvider>
          <MetaSync />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

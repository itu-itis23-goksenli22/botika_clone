import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";

export const metadata: Metadata = {
  title: "fashnai.co - Moda Markalar\u0131 i\u00e7in AI Modeller",
  description:
    "fashnai.co, online moda ma\u011fazalar\u0131n\u0131 yapay zeka ile geli\u015ftirerek AI modeller ve s\u0131n\u0131rs\u0131z profesyonel moda foto\u011fraflar\u0131 sunar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

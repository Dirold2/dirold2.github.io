import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Header, Footer } from "@/components/Layout";

import { name } from "@/config";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${name} web site`,
  description: `${name}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang="ру">
      <body className="center">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

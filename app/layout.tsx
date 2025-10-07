import type { Metadata } from "next";
// FIX: Import ReactNode to make the type available and resolve 'Cannot find namespace React'.
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Mi Blog Moderno",
  description: "Un blog moderno construido con Next.js y TailwindCSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow container mx-auto px-6 py-8">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
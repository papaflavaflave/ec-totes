import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { brand } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${brand.name} — Plastic moving bin rental`,
  description: brand.tagline,
  openGraph: {
    title: `${brand.name} — Moving tote rental`,
    description: brand.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-zinc-900">{children}</body>
    </html>
  );
}

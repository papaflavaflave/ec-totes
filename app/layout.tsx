import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-zinc-900">
        {children}
        {isProduction ? (
          <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-MFEDKH19PK" />
            <Script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-MFEDKH19PK');
                `,
              }}
            />
          </>
        ) : null}
      </body>
    </html>
  );
}

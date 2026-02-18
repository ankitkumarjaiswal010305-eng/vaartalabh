import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { anaheim } from "@/src/app/fonts";
import "@/src/app/[locale]/globals.css";

export const metadata: Metadata = {
  title: "Vartalaabh | Conversations. Clarity. Community.",
  description:
    "Vartalaabh is an open community built on meaningful conversations and shared learning. A space where people connect, exchange ideas, and grow together across careers, technology, and life.",
  openGraph: {
    type: "website",
    title: "Vartalaabh | Conversations. Clarity. Community.",
    description:
      "An open discussion community where people meet, talk, listen, and grow together — across careers, technology, ideas, and life.",
    url: "https://vartalaabh.com", // replace with your actual domain
    siteName: "Vartalaabh",
    images: [
      {
        url: "/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Vartalaabh - Community Built on Conversations",
      },
    ],
  },
};


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${anaheim.className} antialiased mx-auto`}>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

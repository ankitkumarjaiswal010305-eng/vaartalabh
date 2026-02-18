import type { Metadata } from "next";
import "./globals.css";
import { anaheim } from "../fonts";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/src/i18n/routing";

// import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://vartalaabh.com"), // 👈 REQUIRED

  title: "Vartalaabh | Conversations. Clarity. Community.",
  description:
    "Vartalaabh is an open community built on meaningful conversations and shared learning. A space where people connect, exchange ideas, and grow together across careers, technology, and life.",

  openGraph: {
    type: "website",
    title: "Vartalaabh | Conversations. Clarity. Community.",
    description:
      "An open discussion community where people meet, talk, listen, and grow together — across careers, technology, ideas, and life.",
    url: "/", // 👈 now use relative URL
    siteName: "Vartalaabh",
    images: [
      {
        url: "/assets/og-image.webp", // now resolves correctly
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
      <head>
        <Script>{`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '230367');`}</Script>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "qbbyycgn89");
            `,
          }}
        />
      </head>
      <body
        className={`${anaheim.className} antialiased max-w-screen-2xl mx-auto`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-3J7SS1KFX2" />
    </html>
  );
}

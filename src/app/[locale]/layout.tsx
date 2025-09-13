import type { Metadata, Viewport } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import clsx from "clsx";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "~/lib/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PropsWithParamsLocale } from "~/types";

export const experimental_ppr = true;

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin", 'cyrillic'],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
};

export async function generateMetadata({ params }: PropsWithParamsLocale): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return {
    title: t('title'),
    description: t('description'),
    manifest: '/site.webmanifest',
    icons: {
      icon: "/favicon-32x32.png",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
  } satisfies Metadata;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<PropsWithChildren<PropsWithParamsLocale>>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} dir="ltr" className={clsx(geologica.variable, 'antialiased')}>
      <body>
        <main className="container mx-auto py-6 min-h-full flex flex-col">
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}

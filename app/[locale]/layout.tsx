import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";

export const metadata: Metadata = {
  title: "BirthdayHub - あなたの誕生日の、すべてがここに",
  description: "誕生石・誕生花・誕生色・和暦・厄年など、誕生日に関する情報を網羅したポータルサイト",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
            <header className="bg-white shadow-sm">
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    🎂 BirthdayHub
                  </h1>
                  <div className="flex gap-4">
                    <a href={`/${locale}`} className="text-gray-600 hover:text-pink-600">ホーム</a>
                    <a href={`/${locale}/birthstones`} className="text-gray-600 hover:text-pink-600">誕生石</a>
                    <a href={`/${locale}/birthflowers`} className="text-gray-600 hover:text-pink-600">誕生花</a>
                    <a href={`/${locale}/birthcolors`} className="text-gray-600 hover:text-pink-600">誕生色</a>
                  </div>
                </div>
              </nav>
            </header>
            <main>{children}</main>
            <footer className="bg-white mt-20 border-t">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p className="text-center text-gray-500 text-sm">
                  © 2026 BirthdayHub. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";

export const metadata: Metadata = {
  title: "BirthdayHub - あなたの誕生日の、すべてがここに",
  description: "誕生石・誕生花・誕生色など、誕生日に関する情報を網羅。あなたの特別な日を彩りましょう。",
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

  const navItems = locale === 'ja' 
    ? [
        { href: `/${locale}`, label: 'ホーム' },
        { href: `/${locale}/birthstones`, label: '誕生石' },
        { href: `/${locale}/birthflowers`, label: '誕生花' },
        { href: `/${locale}/birthcolors`, label: '誕生色' }
      ]
    : [
        { href: `/${locale}`, label: 'Home' },
        { href: `/${locale}/birthstones`, label: 'Birthstones' },
        { href: `/${locale}/birthflowers`, label: 'Birth Flowers' },
        { href: `/${locale}/birthcolors`, label: 'Birth Colors' }
      ];

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
              <nav className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <a href={`/${locale}`} className="flex items-center gap-2 group">
                    <span className="text-2xl group-hover:scale-110 transition-transform">🎂</span>
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      BirthdayHub
                    </span>
                  </a>
                  <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-1">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                    <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                      <a
                        href="/ja"
                        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                          locale === 'ja'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        日本語
                      </a>
                      <a
                        href="/en"
                        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                          locale === 'en'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        EN
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="bg-gray-900 text-white py-16">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-3xl">🎂</span>
                      <span className="text-xl font-bold">BirthdayHub</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed max-w-md">
                      {locale === 'ja' 
                        ? '誕生石・誕生花・誕生色で、あなたの特別な日を彩りましょう。日本文化の暦情報も充実。' 
                        : 'Discover the meaning and magic behind your special day with birthstones, flowers, and colors.'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-4 text-gray-300">{locale === 'ja' ? 'メニュー' : 'Menu'}</p>
                    <div className="space-y-3">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block text-gray-400 hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-4 text-gray-300">{locale === 'ja' ? '言語' : 'Language'}</p>
                    <div className="space-y-3">
                      <a href="/ja" className="block text-gray-400 hover:text-white transition-colors">
                        🇯🇵 日本語
                      </a>
                      <a href="/en" className="block text-gray-400 hover:text-white transition-colors">
                        🇺🇸 English
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} BirthdayHub. All rights reserved.
                  </p>
                  <div className="flex gap-6 text-sm text-gray-500">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

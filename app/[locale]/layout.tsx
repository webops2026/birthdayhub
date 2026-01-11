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
        { href: `/${locale}/birthflowers`, label: 'Birthflowers' },
        { href: `/${locale}/birthcolors`, label: 'Birthcolors' }
      ];

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-rose-50">
            <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-pink-100">
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                  <a href={`/${locale}`} className="flex items-center gap-2 group">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🎂</span>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      BirthdayHub
                    </h1>
                  </a>
                  <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-6">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="text-gray-700 hover:text-pink-600 font-medium transition-colors relative group"
                        >
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                        </a>
                      ))}
                    </div>
                    <div className="flex gap-2 items-center border-l border-gray-200 pl-6">
                      <a
                        href="/ja"
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                          locale === 'ja'
                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        🇯🇵 日本語
                      </a>
                      <a
                        href="/en"
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                          locale === 'en'
                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        🇬🇧 English
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
            <main>{children}</main>
            <footer className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">🎂 BirthdayHub</h3>
                    <p className="text-white/80">
                      Discover the meaning and magic behind your special day.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <div className="space-y-2">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block text-white/80 hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Language</h4>
                    <div className="space-y-2">
                      <a href="/ja" className="block text-white/80 hover:text-white transition-colors">
                        🇯🇵 日本語
                      </a>
                      <a href="/en" className="block text-white/80 hover:text-white transition-colors">
                        🇬🇧 English
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-8 text-center">
                  <p className="text-white/60 text-sm">
                    © {new Date().getFullYear()} BirthdayHub. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

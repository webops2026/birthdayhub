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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-stone-50 text-stone-900">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200">
              <nav className="max-w-7xl mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                  {/* Logo */}
                  <a href={`/${locale}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center group-hover:bg-stone-200 transition-colors">
                      <span className="text-2xl">🎂</span>
                    </div>
                    <span className="text-xl font-bold text-stone-900 tracking-tight">
                      BirthdayHub
                    </span>
                  </a>

                  {/* Navigation */}
                  <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-2">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="px-4 py-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-50 text-sm font-medium transition-all"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>

                    {/* Language Switcher */}
                    <div className="flex items-center border-l border-stone-200 pl-6">
                      <a
                        href="/ja"
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          locale === 'ja'
                            ? 'bg-stone-200 text-stone-900'
                            : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                        }`}
                      >
                        JA
                      </a>
                      <a
                        href="/en"
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          locale === 'en'
                            ? 'bg-stone-200 text-stone-900'
                            : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                        }`}
                      >
                        EN
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="bg-stone-50 text-stone-900 mt-20 py-16 border-t border-stone-200">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                  {/* Brand */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center">
                        <span className="text-lg">🎂</span>
                      </div>
                      <span className="text-lg font-bold text-stone-900 tracking-tight">BirthdayHub</span>
                    </div>
                    <p className="text-stone-600 text-sm max-w-md leading-relaxed">
                      {locale === 'ja' 
                        ? 'あなたの誕生日の、すべてがここに。'
                        : 'Everything about your birthday, all in one place.'
                      }
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 mb-4 tracking-wide">
                      {locale === 'ja' ? 'メニュー' : 'Menu'}
                    </h4>
                    <div className="space-y-3">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block text-sm text-stone-600 hover:text-stone-900 transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 mb-4 tracking-wide">
                      {locale === 'ja' ? '言語' : 'Language'}
                    </h4>
                    <div className="space-y-3">
                      <a href="/ja" className="block text-sm text-stone-600 hover:text-stone-900 transition-colors">
                        日本語
                      </a>
                      <a href="/en" className="block text-sm text-stone-600 hover:text-stone-900 transition-colors">
                        English
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-stone-200 text-center">
                  <p className="text-sm text-stone-500">
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

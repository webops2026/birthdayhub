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
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col bg-white">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
              <nav className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <a href={`/${locale}`} className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    BirthdayHub
                  </a>
                  <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-6">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative group"
                        >
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                        </a>
                      ))}
                    </div>
                    <div className="flex gap-2 text-sm">
                      <a
                        href="/ja"
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                          locale === 'ja'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        日本語
                      </a>
                      <a
                        href="/en"
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                          locale === 'en'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
            <footer className="bg-slate-900 text-white mt-20 py-16">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                  <div>
                    <p className="text-lg font-bold mb-4">BirthdayHub</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {locale === 'ja' ? '誕生石・誕生花・誕生色で、あなたの特別な日を彩りましょう。' : 'Discover the meaning and magic behind your special day.'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-4">{locale === 'ja' ? 'メニュー' : 'Menu'}</p>
                    <div className="space-y-2">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-4">{locale === 'ja' ? '言語' : 'Language'}</p>
                    <div className="space-y-2">
                      <a href="/ja" className="block text-sm text-slate-400 hover:text-white transition-colors">
                        日本語
                      </a>
                      <a href="/en" className="block text-sm text-slate-400 hover:text-white transition-colors">
                        English
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-800 pt-8">
                  <p className="text-xs text-slate-500 text-center">
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

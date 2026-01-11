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
      <body className="antialiased bg-white text-neutral-900">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <header className="border-b border-neutral-100">
              <nav className="max-w-4xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <a href={`/${locale}`} className="text-lg font-semibold text-neutral-900 hover:text-neutral-600 transition-colors">
                    BirthdayHub
                  </a>
                  <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-1">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                    <div className="flex gap-2 text-sm text-neutral-500">
                      <a
                        href="/ja"
                        className={locale === 'ja' ? 'text-neutral-900 font-medium' : 'hover:text-neutral-900 transition-colors'}
                      >
                        JP
                      </a>
                      <span>/</span>
                      <a
                        href="/en"
                        className={locale === 'en' ? 'text-neutral-900 font-medium' : 'hover:text-neutral-900 transition-colors'}
                      >
                        EN
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="border-t border-neutral-100 mt-20">
              <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">BirthdayHub</p>
                    <p className="text-sm text-neutral-500 max-w-xs">
                      {locale === 'ja' 
                        ? '誕生日に関する情報を網羅したポータルサイト' 
                        : 'A comprehensive portal for birthday information'}
                    </p>
                  </div>
                  <div className="flex gap-12">
                    <div>
                      <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
                        {locale === 'ja' ? 'メニュー' : 'Menu'}
                      </p>
                      <div className="space-y-2">
                        {navItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
                        {locale === 'ja' ? '言語' : 'Language'}
                      </p>
                      <div className="space-y-2">
                        <a href="/ja" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                          日本語
                        </a>
                        <a href="/en" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                          English
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-neutral-100">
                  <p className="text-xs text-neutral-400">
                    © {new Date().getFullYear()} BirthdayHub
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

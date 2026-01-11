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
        { href: `/${locale}/birthstones`, label: '誕生石' },
        { href: `/${locale}/birthflowers`, label: '誕生花' },
        { href: `/${locale}/birthcolors`, label: '誕生色' }
      ]
    : [
        { href: `/${locale}/birthstones`, label: 'Stones' },
        { href: `/${locale}/birthflowers`, label: 'Flowers' },
        { href: `/${locale}/birthcolors`, label: 'Colors' }
      ];

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            
            {/* Header - Minimal like Apple/Stripe */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
              <nav className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <a href={`/${locale}`} className="text-lg font-semibold text-gray-900 tracking-tight">
                    BirthdayHub
                  </a>

                  {/* Navigation */}
                  <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-8">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>

                    {/* Language */}
                    <div className="flex items-center gap-1 text-sm">
                      <a
                        href="/ja"
                        className={`px-2 py-1 rounded transition-colors ${
                          locale === 'ja' ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        JP
                      </a>
                      <span className="text-gray-300">/</span>
                      <a
                        href="/en"
                        className={`px-2 py-1 rounded transition-colors ${
                          locale === 'en' ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-600'
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
            <main className="flex-1 pt-16">{children}</main>

            {/* Footer - Minimal like MUJI/Kinfolk */}
            <footer className="border-t border-gray-100">
              <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  {/* Brand */}
                  <div>
                    <p className="text-lg font-semibold text-gray-900 mb-2">BirthdayHub</p>
                    <p className="text-sm text-gray-400">
                      {locale === 'ja' 
                        ? 'あなたの誕生日の、すべてがここに。'
                        : 'Everything about your birthday.'}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-8 text-sm">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-gray-400 hover:text-gray-900 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} BirthdayHub
                  </p>
                  <div className="flex gap-6 text-xs text-gray-400">
                    <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
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

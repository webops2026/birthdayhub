import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";

export const metadata: Metadata = {
  title: "BirthdayHub - Discover Your Birthday's Hidden Meaning",
  description: "Explore birthstones, birth flowers, and birthday colors. Discover the unique meaning behind your special day.",
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
    <html lang={locale} className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-outfit antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen bg-[#0a0a0f] text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
              <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  {/* Logo */}
                  <a href={`/${locale}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-xl">💎</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                      BirthdayHub
                    </span>
                  </a>

                  {/* Navigation */}
                  <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-1">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="px-4 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 font-medium transition-all"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
                      <a
                        href="/ja"
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                          locale === 'ja'
                            ? 'bg-white/10 text-white'
                            : 'text-white/50 hover:text-white'
                        }`}
                      >
                        JA
                      </a>
                      <a
                        href="/en"
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                          locale === 'en'
                            ? 'bg-white/10 text-white'
                            : 'text-white/50 hover:text-white'
                        }`}
                      >
                        EN
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>

            {/* Main Content - with padding for fixed header */}
            <main className="pt-16">{children}</main>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-[#050508]">
              <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                  {/* Brand */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-xl">💎</span>
                      </div>
                      <span className="text-xl font-bold">BirthdayHub</span>
                    </div>
                    <p className="text-white/40 max-w-md leading-relaxed">
                      {locale === 'ja' 
                        ? '誕生石・誕生花・誕生色であなたの特別な日の意味を発見しましょう。'
                        : 'Discover the unique meaning behind your special day through birthstones, flowers, and colors.'
                      }
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="text-white/80 font-semibold mb-4 uppercase tracking-wider text-sm">
                      {locale === 'ja' ? 'リンク' : 'Links'}
                    </h4>
                    <div className="space-y-3">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block text-white/40 hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <h4 className="text-white/80 font-semibold mb-4 uppercase tracking-wider text-sm">
                      {locale === 'ja' ? '言語' : 'Language'}
                    </h4>
                    <div className="space-y-3">
                      <a href="/ja" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                        <span>🇯🇵</span> 日本語
                      </a>
                      <a href="/en" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                        <span>🇬🇧</span> English
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-white/30 text-sm">
                    © {new Date().getFullYear()} BirthdayHub. All rights reserved.
                  </p>
                  <div className="flex items-center gap-6 text-white/30 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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

import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";

export const metadata: Metadata = {
  title: "BirthdayHub",
  description: "Your personal birthday database.",
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

  // Notion-like navigation items
  const navItems = locale === 'ja'
    ? [
        { href: `/${locale}/birthstones`, label: 'Birthstones', icon: '💎' },
        { href: `/${locale}/birthflowers`, label: 'Flowers', icon: '🌸' },
        { href: `/${locale}/birthcolors`, label: 'Colors', icon: '🎨' }
      ]
    : [
        { href: `/${locale}/birthstones`, label: 'Birthstones', icon: '💎' },
        { href: `/${locale}/birthflowers`, label: 'Flowers', icon: '🌸' },
        { href: `/${locale}/birthcolors`, label: 'Colors', icon: '🎨' }
      ];

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased text-[#37352f] bg-white">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            {/* Notion-like Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#e9e9e7] h-11 flex items-center px-3">
              <nav className="w-full flex items-center justify-between max-w-[1200px] mx-auto">
                <div className="flex items-center gap-2 text-sm">
                  <a href={`/${locale}`} className="flex items-center gap-2 hover:bg-[#efefef] px-2 py-1 rounded transition-colors text-[#37352f] font-medium">
                    <span className="text-base">🎂</span>
                    <span>BirthdayHub</span>
                  </a>
                  <span className="text-[#9b9a97]">/</span>
                  <div className="hidden sm:flex items-center gap-1">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-[#efefef] text-[#37352f] transition-colors"
                      >
                        <span className="text-xs">{item.icon}</span>
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <div className="flex bg-[#f7f7f5] rounded p-0.5">
                    <a
                      href="/ja"
                      className={`px-2 py-0.5 rounded text-xs font-medium transition-all ${
                        locale === 'ja'
                          ? 'bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#37352f]'
                          : 'text-[#9b9a97] hover:text-[#37352f]'
                      }`}
                    >
                      JP
                    </a>
                    <a
                      href="/en"
                      className={`px-2 py-0.5 rounded text-xs font-medium transition-all ${
                        locale === 'en'
                          ? 'bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#37352f]'
                          : 'text-[#9b9a97] hover:text-[#37352f]'
                      }`}
                    >
                      EN
                    </a>
                  </div>
                </div>
              </nav>
            </header>

            <main className="flex-grow w-full max-w-[960px] mx-auto px-4 sm:px-24 py-12 md:py-20">
              {children}
            </main>

            <footer className="border-t border-[#e9e9e7] mt-auto">
              <div className="max-w-[960px] mx-auto px-4 sm:px-24 py-8 flex justify-between items-center text-xs text-[#9b9a97]">
                <p>© 2026 BirthdayHub</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:underline">Privacy</a>
                  <a href="#" className="hover:underline">Terms</a>
                </div>
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

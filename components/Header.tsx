'use client';

import { useBirthday } from '@/lib/birthday-context';
import MobileMenu from './MobileMenu';

interface NavItem {
  href: string;
  label: string;
}

interface HeaderProps {
  locale: string;
  navItems: NavItem[];
}

export default function Header({ locale, navItems }: HeaderProps) {
  const { year, month, day, isSet } = useBirthday();

  const formattedDate = `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;

  return (
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

          {/* Date Display - Center */}
          {isSet && (
            <a
              href={`/${locale}/birthday/${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`}
              className="hidden lg:block"
            >
              <time className="text-2xl font-bold tracking-tighter text-stone-900 hover:text-stone-600 transition-colors">
                {formattedDate}
              </time>
            </a>
          )}

          {/* Navigation */}
          <div className="flex items-center gap-8">
            {/* Desktop Menu */}
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

            {/* Language Switcher - Desktop */}
            <div className="hidden md:flex items-center border-l border-stone-200 pl-6">
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

            {/* Mobile Menu */}
            <MobileMenu locale={locale} navItems={navItems} />
          </div>
        </div>
      </nav>
    </header>
  );
}

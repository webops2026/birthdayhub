'use client';

import { useState } from 'react';

interface MobileMenuProps {
  locale: string;
  navItems: { href: string; label: string }[];
}

export default function MobileMenu({ locale, navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
        aria-label="メニュー"
      >
        <svg
          className="w-6 h-6 text-stone-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="閉じる"
            >
              <svg
                className="w-6 h-6 text-stone-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-50 text-lg font-medium transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="mt-8 pt-8 border-t border-stone-100">
            <p className="text-xs tracking-[0.2em] text-stone-400 uppercase mb-4 px-4">
              Language
            </p>
            <div className="space-y-2">
              <a
                href="/ja"
                className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                  locale === 'ja'
                    ? 'bg-stone-100 text-stone-900'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                🇯🇵 日本語
              </a>
              <a
                href="/en"
                className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                  locale === 'en'
                    ? 'bg-stone-100 text-stone-900'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                🇺🇸 English
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

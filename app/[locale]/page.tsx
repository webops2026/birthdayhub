'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const router = useRouter();

  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear - 30);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/birthday/${year}/${month}/${day}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t('subtitle')}
        </p>
      </div>

      {/* Birthday Input Form */}
      <div className="max-w-2xl mx-auto mb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            {t('enterBirthday')}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4 justify-center">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tCommon('year')}
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tCommon('month')}
                </label>
                <select
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tCommon('day')}
                </label>
                <select
                  value={day}
                  onChange={(e) => setDay(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {tCommon('calculate')}
            </button>
          </form>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <a
          href="/birthstones"
          className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-2 border-transparent hover:border-pink-300"
        >
          <div className="text-4xl mb-4">💎</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {t('exploreBirthstones')}
          </h3>
          <p className="text-gray-600">{t('exploreBirthstonesDesc')}</p>
        </a>

        <a
          href="/birthflowers"
          className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-2 border-transparent hover:border-pink-300"
        >
          <div className="text-4xl mb-4">🌸</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {t('exploreBirthflowers')}
          </h3>
          <p className="text-gray-600">{t('exploreBirthflowersDesc')}</p>
        </a>

        <a
          href="/birthcolors"
          className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-2 border-transparent hover:border-pink-300"
        >
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {t('exploreBirthcolors')}
          </h3>
          <p className="text-gray-600">{t('exploreBirthcolorsDesc')}</p>
        </a>
      </div>
    </div>
  );
}

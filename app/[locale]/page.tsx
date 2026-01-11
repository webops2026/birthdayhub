'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface Birthstone {
  id: string;
  month: number;
  name_ja: string;
  name_en: string;
  meaning_ja: string[];
  meaning_en: string[];
  color: string;
}

// 誕生石データ
const BIRTHSTONES: Record<number, Birthstone> = {
  1: { id: '1', month: 1, name_ja: 'ガーネット', name_en: 'Garnet', meaning_ja: ['真実', '友愛'], meaning_en: ['Truth', 'Friendship'], color: '#C1446A' },
  2: { id: '2', month: 2, name_ja: 'アメジスト', name_en: 'Amethyst', meaning_ja: ['誠実'], meaning_en: ['Sincerity'], color: '#9966CC' },
  3: { id: '3', month: 3, name_ja: 'アクアマリン', name_en: 'Aquamarine', meaning_ja: ['沈着'], meaning_en: ['Composure'], color: '#7DD3E8' },
  4: { id: '4', month: 4, name_ja: 'ダイヤモンド', name_en: 'Diamond', meaning_ja: ['永遠の絆'], meaning_en: ['Eternal Bond'], color: '#B9D9EB' },
  5: { id: '5', month: 5, name_ja: 'エメラルド', name_en: 'Emerald', meaning_ja: ['幸運'], meaning_en: ['Fortune'], color: '#50C878' },
  6: { id: '6', month: 6, name_ja: 'パール', name_en: 'Pearl', meaning_ja: ['健康'], meaning_en: ['Health'], color: '#FDEEF4' },
  7: { id: '7', month: 7, name_ja: 'ルビー', name_en: 'Ruby', meaning_ja: ['情熱'], meaning_en: ['Passion'], color: '#E0115F' },
  8: { id: '8', month: 8, name_ja: 'ペリドット', name_en: 'Peridot', meaning_ja: ['和合'], meaning_en: ['Harmony'], color: '#9CB86E' },
  9: { id: '9', month: 9, name_ja: 'サファイア', name_en: 'Sapphire', meaning_ja: ['誠実'], meaning_en: ['Sincerity'], color: '#5B8DBE' },
  10: { id: '10', month: 10, name_ja: 'オパール', name_en: 'Opal', meaning_ja: ['歓喜'], meaning_en: ['Joy'], color: '#A8C3BC' },
  11: { id: '11', month: 11, name_ja: 'トパーズ', name_en: 'Topaz', meaning_ja: ['友情'], meaning_en: ['Friendship'], color: '#FFC87C' },
  12: { id: '12', month: 12, name_ja: 'ターコイズ', name_en: 'Turquoise', meaning_ja: ['成功'], meaning_en: ['Success'], color: '#5FCED4' }
};

export default function HomePage() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const [year, setYear] = useState(currentYear - 30);
  const [month, setMonth] = useState(currentMonth);
  const [day, setDay] = useState(currentDay);

  const todayBirthstone = BIRTHSTONES[currentMonth];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${locale}/birthday/${year}/${month}/${day}`);
  };

  const isJa = locale === 'ja';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 via-white to-white" />
        
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Date badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100">
              <span className="text-2xl">📅</span>
              <span className="text-gray-600 font-medium">
                {isJa ? `${currentYear}年${currentMonth}月${currentDay}日` : `${currentMonth}/${currentDay}/${currentYear}`}
              </span>
            </div>
          </div>

          {/* Main heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {isJa ? (
                <>
                  今日の誕生石は
                  <br />
                  <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                    {todayBirthstone.name_ja}
                  </span>
                </>
              ) : (
                <>
                  Today&apos;s birthstone is
                  <br />
                  <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                    {todayBirthstone.name_en}
                  </span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              {isJa 
                ? '誕生石・誕生花・誕生色で、あなたの特別な日を彩りましょう'
                : 'Color your special day with birthstones, flowers, and colors'
              }
            </p>
          </div>

          {/* Birthstone card */}
          <div className="max-w-lg mx-auto mb-16">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 text-center">
              {/* Gem circle */}
              <div className="flex justify-center mb-6">
                <div 
                  className="w-24 h-24 rounded-full shadow-lg"
                  style={{ 
                    backgroundColor: todayBirthstone.color,
                    boxShadow: `0 8px 30px ${todayBirthstone.color}40`
                  }}
                />
              </div>

              {/* Stone info */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {isJa ? todayBirthstone.name_ja : todayBirthstone.name_en}
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                {isJa ? `${currentMonth}月の誕生石` : `Birthstone of ${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][currentMonth - 1]}`}
              </p>

              {/* Meanings */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {(isJa ? todayBirthstone.meaning_ja : todayBirthstone.meaning_en).map((meaning, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-50 text-gray-600 border border-gray-100"
                  >
                    {meaning}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={`/${locale}/birthstones`}
                className="inline-flex items-center gap-2 text-rose-500 font-medium hover:text-rose-600 transition-colors"
              >
                {isJa ? 'すべての誕生石を見る' : 'View all birthstones'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Search Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {isJa ? 'あなたの誕生日を調べる' : 'Look up your birthday'}
            </h2>
            <p className="text-gray-500">
              {isJa ? '生年月日を入力してください' : 'Enter your birth date'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tCommon('year')}
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-300 transition-all"
                >
                  {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tCommon('month')}
                </label>
                <select
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-300 transition-all"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tCommon('day')}
                </label>
                <select
                  value={day}
                  onChange={(e) => setDay(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-300 transition-all"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 transition-all shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/30"
            >
              {isJa ? '誕生日情報を見る' : 'View birthday info'}
            </button>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {isJa ? '誕生日の要素を探索' : 'Explore Birthday Elements'}
            </h2>
            <p className="text-gray-500">
              {isJa ? 'あなたの特別な日にまつわる情報' : 'Information about your special day'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Birthstones */}
            <a
              href={`/${locale}/birthstones`}
              className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('exploreBirthstones')}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('exploreBirthstonesDesc')}
              </p>
            </a>

            {/* Birthflowers */}
            <a
              href={`/${locale}/birthflowers`}
              className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-100/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('exploreBirthflowers')}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('exploreBirthflowersDesc')}
              </p>
            </a>

            {/* Birthcolors */}
            <a
              href={`/${locale}/birthcolors`}
              className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('exploreBirthcolors')}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('exploreBirthcolorsDesc')}
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Monthly Birthstones */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {isJa ? '12ヶ月の誕生石' : 'Birthstones by Month'}
            </h2>
            <p className="text-gray-500">
              {isJa ? 'あなたの月の宝石を見つけよう' : 'Find your month\'s gemstone'}
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.values(BIRTHSTONES).map((stone) => (
              <a
                key={stone.id}
                href={`/${locale}/birthstones/${stone.month}`}
                className="group flex flex-col items-center p-5 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
              >
                <div 
                  className="w-10 h-10 rounded-full mb-3 group-hover:scale-110 transition-transform shadow-sm"
                  style={{ backgroundColor: stone.color }}
                />
                <span className="text-xs text-gray-400 mb-1">{stone.month}{isJa ? '月' : ''}</span>
                <span className="text-sm font-medium text-gray-900 text-center">
                  {isJa ? stone.name_ja : stone.name_en}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

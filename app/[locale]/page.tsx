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

const BIRTH_FLOWERS: Record<string, { name_ja: string; name_en: string; meaning_ja: string; meaning_en: string; emoji: string }> = {
  '1-11': { name_ja: 'カーネーション', name_en: 'Carnation', meaning_ja: '無垢で深い愛', meaning_en: 'Pure love', emoji: '🌹' },
};

const BIRTH_COLORS: Record<string, { name_ja: string; name_en: string; hex: string; meaning_ja: string }> = {
  '1-11': { name_ja: '深紅', name_en: 'Crimson', hex: '#DC143C', meaning_ja: '情熱・決断力' },
};

function getWareki(year: number): string {
  if (year >= 2019) return `令和${year - 2018}年`;
  if (year >= 1989) return `平成${year - 1988}年`;
  if (year >= 1926) return `昭和${year - 1925}年`;
  if (year >= 1912) return `大正${year - 1911}年`;
  return `明治${year - 1867}年`;
}

function getYakudoshi(birthYear: number, currentYear: number, gender: 'male' | 'female'): string | null {
  const age = currentYear - birthYear + 1;
  if (gender === 'male') {
    if (age === 25) return '本厄（25歳）';
    if (age === 42) return '大厄（42歳）';
    if (age === 61) return '本厄（61歳）';
    if ([24, 41, 60].includes(age)) return '前厄';
    if ([26, 43, 62].includes(age)) return '後厄';
  }
  return null;
}

const ROKUYOU = ['大安', '赤口', '先勝', '友引', '先負', '仏滅'];

function getNijushisekki(month: number, day: number): string {
  if (month === 1 && day >= 20) return '大寒';
  if (month === 1 && day >= 5) return '小寒';
  return '小寒';
}

function getZodiac(month: number, day: number): { ja: string; en: string; symbol: string } {
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return { ja: 'みずがめ座', en: 'Aquarius', symbol: '♒' };
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return { ja: 'やぎ座', en: 'Capricorn', symbol: '♑' };
  return { ja: 'やぎ座', en: 'Capricorn', symbol: '♑' };
}

const ZODIAC_ANIMALS: Record<number, { ja: string; emoji: string }> = {
  0: { ja: '申（さる）', emoji: '🐵' },
  1: { ja: '酉（とり）', emoji: '🐔' },
  2: { ja: '戌（いぬ）', emoji: '🐕' },
  3: { ja: '亥（いのしし）', emoji: '🐗' },
  4: { ja: '子（ねずみ）', emoji: '🐭' },
  5: { ja: '丑（うし）', emoji: '🐮' },
  6: { ja: '寅（とら）', emoji: '🐯' },
  7: { ja: '卯（うさぎ）', emoji: '🐰' },
  8: { ja: '辰（たつ）', emoji: '🐲' },
  9: { ja: '巳（へび）', emoji: '🐍' },
  10: { ja: '午（うま）', emoji: '🐴' },
  11: { ja: '未（ひつじ）', emoji: '🐑' },
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
  const todayFlower = BIRTH_FLOWERS[`${currentMonth}-${currentDay}`] || { name_ja: 'スイートピー', name_en: 'Sweet Pea', meaning_ja: '門出・優しい思い出', meaning_en: 'Departure', emoji: '🌸' };
  const todayColor = BIRTH_COLORS[`${currentMonth}-${currentDay}`] || { name_ja: '紅梅色', name_en: 'Crimson Plum', hex: '#E86B79', meaning_ja: '情熱・決意' };
  const wareki = getWareki(currentYear);
  const rokuyou = ROKUYOU[currentDay % 6];
  const nijushisekki = getNijushisekki(currentMonth, currentDay);
  const zodiac = getZodiac(currentMonth, currentDay);
  const eto = ZODIAC_ANIMALS[currentYear % 12];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${locale}/birthday/${year}/${month}/${day}`);
  };

  const isJa = locale === 'ja';
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Visual Impact */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center text-white mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-lg">📅</span>
              {isJa ? `${currentYear}年${currentMonth}月${currentDay}日` : `${monthNames[currentMonth - 1]} ${currentDay}, ${currentYear}`}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {isJa ? (
                <>誕生日を、<br className="md:hidden" /><span className="text-yellow-300">特別に。</span></>
              ) : (
                <>Make your birthday<br className="md:hidden" /> <span className="text-yellow-300">special.</span></>
              )}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              {isJa 
                ? '誕生石・誕生花・星座から、和暦・厄年・六曜まで。あなたの誕生日に関する全ての情報をお届けします。'
                : 'From birthstones and birth flowers to zodiac signs. Discover everything about your special day.'
              }
            </p>
            
            {/* Search Form */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="bg-white rounded-2xl p-2 shadow-2xl shadow-purple-900/30 flex flex-wrap md:flex-nowrap gap-2">
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="flex-1 min-w-0 px-4 py-3 text-gray-900 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-purple-500 text-sm font-medium"
                >
                  {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                    <option key={y} value={y}>{y}{isJa ? '年' : ''}</option>
                  ))}
                </select>
                <select
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                  className="flex-1 min-w-0 px-4 py-3 text-gray-900 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-purple-500 text-sm font-medium"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                    <option key={m} value={m}>{isJa ? `${m}月` : monthNames[m-1]}</option>
                  ))}
                </select>
                <select
                  value={day}
                  onChange={(e) => setDay(Number(e.target.value))}
                  className="flex-1 min-w-0 px-4 py-3 text-gray-900 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-purple-500 text-sm font-medium"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>{d}{isJa ? '日' : ''}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all shadow-lg"
                >
                  {isJa ? '調べる' : 'Search'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Today's Info - Featured Cards */}
      <section className="relative -mt-12 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-5">
            {/* 誕生石 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${todayBirthstone.color}40, ${todayBirthstone.color})`,
                  }}
                >
                  💎
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                  {isJa ? '誕生石' : 'Birthstone'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {isJa ? todayBirthstone.name_ja : todayBirthstone.name_en}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {(isJa ? todayBirthstone.meaning_ja : todayBirthstone.meaning_en).join(' · ')}
              </p>
              <a href={`/${locale}/birthstones/${currentMonth}`} className="text-sm font-medium text-purple-600 hover:text-purple-700 inline-flex items-center gap-1">
                {isJa ? '詳しく見る' : 'Learn more'} →
              </a>
            </div>

            {/* 誕生花 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center text-2xl shadow-lg">
                  {todayFlower.emoji}
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                  {isJa ? '誕生花' : 'Birth Flower'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {isJa ? todayFlower.name_ja : todayFlower.name_en}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {isJa ? todayFlower.meaning_ja : todayFlower.meaning_en}
              </p>
              <a href={`/${locale}/birthflowers`} className="text-sm font-medium text-pink-600 hover:text-pink-700 inline-flex items-center gap-1">
                {isJa ? '詳しく見る' : 'Learn more'} →
              </a>
            </div>

            {/* 誕生色 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-14 h-14 rounded-2xl shadow-lg"
                  style={{ backgroundColor: todayColor.hex }}
                />
                <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                  {isJa ? '誕生色' : 'Birth Color'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {isJa ? todayColor.name_ja : todayColor.name_en}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {todayColor.hex}
              </p>
              <a href={`/${locale}/birthcolors`} className="text-sm font-medium text-orange-600 hover:text-orange-700 inline-flex items-center gap-1">
                {isJa ? '詳しく見る' : 'Learn more'} →
              </a>
            </div>

            {/* 星座 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center text-2xl shadow-lg">
                  {zodiac.symbol}
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                  {isJa ? '星座' : 'Zodiac'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {isJa ? zodiac.ja : zodiac.en}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {isJa ? '西洋占星術' : 'Western Astrology'}
              </p>
              <span className="text-sm font-medium text-indigo-600">
                {zodiac.symbol}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Japanese Culture Section */}
      {isJa && (
        <section className="px-6 py-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🏯</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">日本の暦・文化</h2>
                <p className="text-sm text-gray-600">Japanese Calendar & Culture</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📅</span>
                  <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">和暦</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{wareki}</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{eto.emoji}</span>
                  <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">干支</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{eto.ja}</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🌙</span>
                  <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">六曜</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{rokuyou}</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🌾</span>
                  <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">二十四節気</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{nijushisekki}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 12 Months Birthstones */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {isJa ? '12ヶ月の誕生石' : '12 Month Birthstones'}
            </h2>
            <p className="text-gray-600">
              {isJa ? 'あなたの月の宝石を見つけましょう' : 'Find the gemstone for your month'}
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {Object.values(BIRTHSTONES).map((stone) => (
              <a
                key={stone.id}
                href={`/${locale}/birthstones/${stone.month}`}
                className="group relative bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `radial-gradient(circle at 30% 30%, ${stone.color}80, ${stone.color})`,
                    boxShadow: `0 8px 20px ${stone.color}40`
                  }}
                />
                <p className="text-xs font-medium text-gray-400 mb-1">
                  {stone.month}{isJa ? '月' : ''}
                </p>
                <p className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {isJa ? stone.name_ja : stone.name_en}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories CTA */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {isJa ? 'もっと詳しく調べる' : 'Explore More'}
            </h2>
            <p className="text-gray-600">
              {isJa ? '各カテゴリーの詳細情報を確認' : 'Dive deeper into each category'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href={`/${locale}/birthstones`}
              className="group bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">💎</div>
              <h3 className="text-2xl font-bold mb-2">{t('exploreBirthstones')}</h3>
              <p className="text-white/80 mb-4">{t('exploreBirthstonesDesc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                {isJa ? '詳しく見る' : 'Explore'} 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>

            <a
              href={`/${locale}/birthflowers`}
              className="group bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 text-white shadow-xl shadow-pink-500/25 hover:shadow-2xl hover:shadow-pink-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🌸</div>
              <h3 className="text-2xl font-bold mb-2">{t('exploreBirthflowers')}</h3>
              <p className="text-white/80 mb-4">{t('exploreBirthflowersDesc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                {isJa ? '詳しく見る' : 'Explore'} 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>

            <a
              href={`/${locale}/birthcolors`}
              className="group bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-2xl font-bold mb-2">{t('exploreBirthcolors')}</h3>
              <p className="text-white/80 mb-4">{t('exploreBirthcolorsDesc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                {isJa ? '詳しく見る' : 'Explore'} 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

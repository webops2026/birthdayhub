'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

// データ定義
const BIRTHSTONES: Record<number, { name_ja: string; name_en: string; meaning: string; color: string }> = {
  1: { name_ja: 'ガーネット', name_en: 'Garnet', meaning: '真実・友愛', color: '#8B1538' },
  2: { name_ja: 'アメジスト', name_en: 'Amethyst', meaning: '誠実', color: '#9966CC' },
  3: { name_ja: 'アクアマリン', name_en: 'Aquamarine', meaning: '沈着', color: '#7DD3E8' },
  4: { name_ja: 'ダイヤモンド', name_en: 'Diamond', meaning: '永遠の絆', color: '#B9D9EB' },
  5: { name_ja: 'エメラルド', name_en: 'Emerald', meaning: '幸運', color: '#50C878' },
  6: { name_ja: 'パール', name_en: 'Pearl', meaning: '健康', color: '#FDEEF4' },
  7: { name_ja: 'ルビー', name_en: 'Ruby', meaning: '情熱', color: '#E0115F' },
  8: { name_ja: 'ペリドット', name_en: 'Peridot', meaning: '和合', color: '#9CB86E' },
  9: { name_ja: 'サファイア', name_en: 'Sapphire', meaning: '誠実', color: '#0F52BA' },
  10: { name_ja: 'オパール', name_en: 'Opal', meaning: '歓喜', color: '#A8C3BC' },
  11: { name_ja: 'トパーズ', name_en: 'Topaz', meaning: '友情', color: '#FFC87C' },
  12: { name_ja: 'ターコイズ', name_en: 'Turquoise', meaning: '成功', color: '#40E0D0' }
};

const FLOWERS: Record<number, { name_ja: string; name_en: string; meaning: string }> = {
  1: { name_ja: 'カーネーション', name_en: 'Carnation', meaning: '無垢で深い愛' },
  2: { name_ja: 'フリージア', name_en: 'Freesia', meaning: '純潔' },
  3: { name_ja: 'スイートピー', name_en: 'Sweet Pea', meaning: '門出' },
  4: { name_ja: 'カスミソウ', name_en: "Baby's Breath", meaning: '清らかな心' },
  5: { name_ja: 'スズラン', name_en: 'Lily of the Valley', meaning: '幸福の再来' },
  6: { name_ja: 'バラ', name_en: 'Rose', meaning: '愛' },
  7: { name_ja: 'ユリ', name_en: 'Lily', meaning: '純粋' },
  8: { name_ja: 'ヒマワリ', name_en: 'Sunflower', meaning: '憧れ' },
  9: { name_ja: 'リンドウ', name_en: 'Gentian', meaning: '正義' },
  10: { name_ja: 'コスモス', name_en: 'Cosmos', meaning: '調和' },
  11: { name_ja: 'キク', name_en: 'Chrysanthemum', meaning: '高貴' },
  12: { name_ja: 'ポインセチア', name_en: 'Poinsettia', meaning: '祝福' },
};

const ZODIAC: Record<string, { ja: string; en: string; period: string }> = {
  capricorn: { ja: 'やぎ座', en: 'Capricorn', period: '12/22 - 1/19' },
  aquarius: { ja: 'みずがめ座', en: 'Aquarius', period: '1/20 - 2/18' },
  pisces: { ja: 'うお座', en: 'Pisces', period: '2/19 - 3/20' },
  aries: { ja: 'おひつじ座', en: 'Aries', period: '3/21 - 4/19' },
  taurus: { ja: 'おうし座', en: 'Taurus', period: '4/20 - 5/20' },
  gemini: { ja: 'ふたご座', en: 'Gemini', period: '5/21 - 6/21' },
  cancer: { ja: 'かに座', en: 'Cancer', period: '6/22 - 7/22' },
  leo: { ja: 'しし座', en: 'Leo', period: '7/23 - 8/22' },
  virgo: { ja: 'おとめ座', en: 'Virgo', period: '8/23 - 9/22' },
  libra: { ja: 'てんびん座', en: 'Libra', period: '9/23 - 10/23' },
  scorpio: { ja: 'さそり座', en: 'Scorpio', period: '10/24 - 11/21' },
  sagittarius: { ja: 'いて座', en: 'Sagittarius', period: '11/22 - 12/21' },
};

function getZodiac(month: number, day: number): string {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'pisces';
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'gemini';
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'libra';
  if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return 'scorpio';
  return 'sagittarius';
}

function getEra(year: number): string {
  if (year >= 2019) return `令和${year - 2018}年`;
  if (year >= 1989) return `平成${year - 1988}年`;
  if (year >= 1926) return `昭和${year - 1925}年`;
  return `${year}年`;
}

export default function HomePage() {
  const t = useTranslations('home');
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const isJa = locale === 'ja';

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const [year, setYear] = useState(currentYear - 30);
  const [month, setMonth] = useState(currentMonth);
  const [day, setDay] = useState(currentDay);

  const birthstone = BIRTHSTONES[currentMonth];
  const flower = FLOWERS[currentMonth];
  const zodiacKey = getZodiac(currentMonth, currentDay);
  const zodiac = ZODIAC[zodiacKey];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${locale}/birthday/${year}/${month}/${day}`);
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const formattedDate = isJa 
    ? `${currentMonth}月${currentDay}日` 
    : `${monthNames[currentMonth - 1]} ${currentDay}`;

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero - Apple/Stripe style: Large typography, lots of whitespace */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-6">
            {formattedDate}
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tight leading-none mb-8">
            {isJa ? '誕生日の、すべて。' : 'Everything Birthday.'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {isJa 
              ? '誕生石、誕生花、星座、和暦。あなたの特別な日を彩る情報がここに。' 
              : 'Birthstones, flowers, zodiac signs, and more. Everything about your special day.'}
          </p>
        </div>
      </section>

      {/* Today's Info - Kinfolk/MUJI style: Minimal, editorial */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 md:gap-24">
            
            {/* Birthstone */}
            <div className="group">
              <div 
                className="w-20 h-20 rounded-full mb-8 transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: birthstone.color }}
              />
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
                {isJa ? '今月の誕生石' : "This Month's Birthstone"}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                {isJa ? birthstone.name_ja : birthstone.name_en}
              </h2>
              <p className="text-gray-500">
                {birthstone.meaning}
              </p>
            </div>

            {/* Birthflower */}
            <div className="group">
              <div className="w-20 h-20 rounded-full bg-gray-50 mb-8 flex items-center justify-center text-4xl transition-transform duration-500 group-hover:scale-110">
                🌸
              </div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
                {isJa ? '今月の誕生花' : "This Month's Flower"}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                {isJa ? flower.name_ja : flower.name_en}
              </h2>
              <p className="text-gray-500">
                {flower.meaning}
              </p>
            </div>

            {/* Zodiac */}
            <div className="group">
              <div className="w-20 h-20 rounded-full bg-gray-900 mb-8 flex items-center justify-center text-white text-2xl font-bold transition-transform duration-500 group-hover:scale-110">
                {zodiac.ja.charAt(0)}
              </div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
                {isJa ? '星座' : 'Zodiac Sign'}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                {isJa ? zodiac.ja : zodiac.en}
              </h2>
              <p className="text-gray-500">
                {zodiac.period}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Form - Stripe style: Clean, functional */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            {isJa ? 'あなたの誕生日を調べる' : 'Look up your birthday'}
          </h2>
          <p className="text-lg text-gray-500 mb-12">
            {isJa 
              ? '生年月日を入力してください' 
              : 'Enter your date of birth'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4 justify-center">
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="px-6 py-4 bg-white border border-gray-200 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              >
                {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="px-6 py-4 bg-white border border-gray-200 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>{isJa ? `${m}月` : monthNames[m - 1]}</option>
                ))}
              </select>
              <select
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
                className="px-6 py-4 bg-white border border-gray-200 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              className="px-12 py-4 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isJa ? '詳しく見る' : 'View Details'}
            </button>
          </form>
        </div>
      </section>

      {/* Japanese Culture Section - Editorial style */}
      {isJa && (
        <section className="py-24 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">
              日本の暦
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-16">
              和の情報
            </h2>
            
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <p className="text-6xl font-bold text-gray-900 mb-2">{getEra(currentYear)}</p>
                <p className="text-sm text-gray-400">和暦</p>
              </div>
              <div>
                <p className="text-6xl font-bold text-gray-900 mb-2">大安</p>
                <p className="text-sm text-gray-400">六曜</p>
              </div>
              <div>
                <p className="text-6xl font-bold text-gray-900 mb-2">小寒</p>
                <p className="text-sm text-gray-400">二十四節気</p>
              </div>
              <div>
                <p className="text-6xl font-bold text-gray-900 mb-2">巳</p>
                <p className="text-sm text-gray-400">干支</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features - Apple style: Simple grid */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
            {isJa ? 'もっと詳しく' : 'Explore More'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-1">
            <a
              href={`/${locale}/birthstones`}
              className="group p-12 bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">
                {isJa ? '誕生石' : 'Birthstones'}
              </p>
              <p className="text-2xl font-semibold group-hover:translate-x-2 transition-transform">
                {isJa ? '12ヶ月の誕生石を見る →' : 'View all birthstones →'}
              </p>
            </a>

            <a
              href={`/${locale}/birthflowers`}
              className="group p-12 bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">
                {isJa ? '誕生花' : 'Birth Flowers'}
              </p>
              <p className="text-2xl font-semibold group-hover:translate-x-2 transition-transform">
                {isJa ? '12ヶ月の誕生花を見る →' : 'View all flowers →'}
              </p>
            </a>

            <a
              href={`/${locale}/birthcolors`}
              className="group p-12 bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">
                {isJa ? '誕生色' : 'Birth Colors'}
              </p>
              <p className="text-2xl font-semibold group-hover:translate-x-2 transition-transform">
                {isJa ? '誕生色を探す →' : 'Explore colors →'}
              </p>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

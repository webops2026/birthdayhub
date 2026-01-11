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

// 誕生花サンプルデータ
const SAMPLE_FLOWERS: Record<number, { name_ja: string; name_en: string; meaning: string }> = {
  1: { name_ja: 'カーネーション', name_en: 'Carnation', meaning: '無垢で深い愛' },
  2: { name_ja: 'フリージア', name_en: 'Freesia', meaning: '純潔' },
  3: { name_ja: 'スイートピー', name_en: 'Sweet Pea', meaning: '門出' },
  4: { name_ja: 'カスミソウ', name_en: 'Baby\'s Breath', meaning: '清らかな心' },
  5: { name_ja: 'スズラン', name_en: 'Lily of the Valley', meaning: '幸福の再来' },
  6: { name_ja: 'バラ', name_en: 'Rose', meaning: '愛' },
  7: { name_ja: 'ユリ', name_en: 'Lily', meaning: '純粋' },
  8: { name_ja: 'ヒマワリ', name_en: 'Sunflower', meaning: '憧れ' },
  9: { name_ja: 'リンドウ', name_en: 'Gentian', meaning: '正義' },
  10: { name_ja: 'コスモス', name_en: 'Cosmos', meaning: '調和' },
  11: { name_ja: 'キク', name_en: 'Chrysanthemum', meaning: '高貴' },
  12: { name_ja: 'ポインセチア', name_en: 'Poinsettia', meaning: '祝福' },
};

// 誕生色サンプルデータ
const SAMPLE_COLORS: Record<number, { name_ja: string; hex: string; personality: string }> = {
  1: { name_ja: '深紅', hex: '#DC143C', personality: '情熱的で行動力がある' },
  2: { name_ja: '紫水晶色', hex: '#9966CC', personality: '神秘的で直感的' },
  3: { name_ja: '若草色', hex: '#7DD3E8', personality: '爽やかで明るい' },
  4: { name_ja: '桜色', hex: '#FFB7C5', personality: '優しく思いやりがある' },
  5: { name_ja: '新緑色', hex: '#7CFC00', personality: '成長志向で前向き' },
  6: { name_ja: 'パール', hex: '#F0EAD6', personality: '上品で洗練されている' },
  7: { name_ja: '真紅', hex: '#E0115F', personality: '情熱的でエネルギッシュ' },
  8: { name_ja: '黄緑', hex: '#9CB86E', personality: '調和を大切にする' },
  9: { name_ja: '群青色', hex: '#5B8DBE', personality: '誠実で信頼できる' },
  10: { name_ja: '乳白色', hex: '#A8C3BC', personality: '神秘的で魅力的' },
  11: { name_ja: '黄金色', hex: '#FFC87C', personality: '社交的で温かい' },
  12: { name_ja: 'ターコイズ', hex: '#5FCED4', personality: '自由で創造的' },
};

// 星座データ
const ZODIAC_SIGNS: Record<string, { name_ja: string; name_en: string; period: string }> = {
  capricorn: { name_ja: 'やぎ座', name_en: 'Capricorn', period: '12/22-1/19' },
  aquarius: { name_ja: 'みずがめ座', name_en: 'Aquarius', period: '1/20-2/18' },
  pisces: { name_ja: 'うお座', name_en: 'Pisces', period: '2/19-3/20' },
  aries: { name_ja: 'おひつじ座', name_en: 'Aries', period: '3/21-4/19' },
  taurus: { name_ja: 'おうし座', name_en: 'Taurus', period: '4/20-5/20' },
  gemini: { name_ja: 'ふたご座', name_en: 'Gemini', period: '5/21-6/21' },
  cancer: { name_ja: 'かに座', name_en: 'Cancer', period: '6/22-7/22' },
  leo: { name_ja: 'しし座', name_en: 'Leo', period: '7/23-8/22' },
  virgo: { name_ja: 'おとめ座', name_en: 'Virgo', period: '8/23-9/22' },
  libra: { name_ja: 'てんびん座', name_en: 'Libra', period: '9/23-10/23' },
  scorpio: { name_ja: 'さそり座', name_en: 'Scorpio', period: '10/24-11/21' },
  sagittarius: { name_ja: 'いて座', name_en: 'Sagittarius', period: '11/22-12/21' },
};

// 干支データ
const CHINESE_ZODIAC = [
  { name_ja: '子（ねずみ）', name_en: 'Rat' },
  { name_ja: '丑（うし）', name_en: 'Ox' },
  { name_ja: '寅（とら）', name_en: 'Tiger' },
  { name_ja: '卯（うさぎ）', name_en: 'Rabbit' },
  { name_ja: '辰（たつ）', name_en: 'Dragon' },
  { name_ja: '巳（へび）', name_en: 'Snake' },
  { name_ja: '午（うま）', name_en: 'Horse' },
  { name_ja: '未（ひつじ）', name_en: 'Sheep' },
  { name_ja: '申（さる）', name_en: 'Monkey' },
  { name_ja: '酉（とり）', name_en: 'Rooster' },
  { name_ja: '戌（いぬ）', name_en: 'Dog' },
  { name_ja: '亥（いのしし）', name_en: 'Pig' },
];

// 和暦変換関数
function getJapaneseEra(year: number): { era: string; eraYear: number } {
  if (year >= 2019) return { era: '令和', eraYear: year - 2018 };
  if (year >= 1989) return { era: '平成', eraYear: year - 1988 };
  if (year >= 1926) return { era: '昭和', eraYear: year - 1925 };
  if (year >= 1912) return { era: '大正', eraYear: year - 1911 };
  if (year >= 1868) return { era: '明治', eraYear: year - 1867 };
  return { era: '西暦', eraYear: year };
}

// 星座判定
function getZodiacSign(month: number, day: number): keyof typeof ZODIAC_SIGNS {
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
  const [isLoading, setIsLoading] = useState(true);

  const todayBirthstone = BIRTHSTONES[currentMonth];
  const todayFlower = SAMPLE_FLOWERS[currentMonth];
  const todayColor = SAMPLE_COLORS[currentMonth];
  const zodiacSign = getZodiacSign(currentMonth, currentDay);
  const zodiac = ZODIAC_SIGNS[zodiacSign];
  const chineseZodiac = CHINESE_ZODIAC[(currentYear - 4) % 12];
  const japaneseEra = getJapaneseEra(currentYear);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${locale}/birthday/${year}/${month}/${day}`);
  };

  const isJa = locale === 'ja';

  // Skeleton Loader Component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50">
        <section className="pt-16 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6 animate-pulse">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-32 h-6 bg-gray-200 rounded"></div>
              </div>
              <div className="w-64 h-12 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse"></div>
              <div className="w-96 h-12 bg-gray-200 rounded-xl mx-auto animate-pulse"></div>
            </div>
          </div>
        </section>
        <section className="pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`bg-white/80 rounded-3xl p-6 animate-pulse ${i === 0 ? 'md:col-span-6 lg:col-span-5' : i === 8 ? 'md:col-span-6 lg:col-span-6' : 'md:col-span-3 lg:col-span-4'}`}>
                  <div className="h-20 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50">
      {/* Hero Section - Integrated */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Today's Date + Input Form */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6 animate-fade-in">
              <span className="text-3xl">🎂</span>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900">
                  {currentYear}年{currentMonth}月{currentDay}日
                </p>
                <p className="text-sm text-gray-500">{japaneseEra.era}{japaneseEra.eraYear}年</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              今日の誕生日情報
            </h1>
            
            {/* Inline Birthday Input */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
              <div className="flex gap-3 bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="flex-1 px-3 py-2 bg-gray-50 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                >
                  {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                    <option key={y} value={y}>{y}年</option>
                  ))}
                </select>
                <select
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                  className="flex-1 px-3 py-2 bg-gray-50 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                    <option key={m} value={m}>{m}月</option>
                  ))}
                </select>
                <select
                  value={day}
                  onChange={(e) => setDay(Number(e.target.value))}
                  className="flex-1 px-3 py-2 bg-gray-50 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>{d}日</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  検索
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bento Grid - 全情報表示 */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
            
            {/* 誕生石 - LARGE (Featured) */}
            <div 
              className="md:col-span-6 lg:col-span-5 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${todayBirthstone.color}08 0%, transparent 100%), rgba(255, 255, 255, 0.8)`
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-3xl group-hover:scale-110 transition-transform">💎</span>
                  <h2 className="text-xl font-bold text-gray-900">誕生石</h2>
                </div>
                <div className="flex items-center gap-6 mb-6">
                  <div 
                    className="w-24 h-24 rounded-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: todayBirthstone.color }}
                  />
                  <div>
                    <p className="text-4xl font-bold text-gray-900 mb-1">{todayBirthstone.name_ja}</p>
                    <p className="text-lg text-gray-500">{todayBirthstone.name_en}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {todayBirthstone.meaning_ja.map((m, i) => (
                    <span key={i} className="px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              {/* Decorative element */}
              <div 
                className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: todayBirthstone.color }}
              />
            </div>

            {/* 星座 */}
            <div className="md:col-span-3 lg:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⭐</span>
                <h2 className="text-lg font-bold text-gray-900">星座</h2>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{zodiac.name_ja}</p>
              <p className="text-sm text-gray-500 mb-1">{zodiac.name_en}</p>
              <p className="text-xs text-gray-400">{zodiac.period}</p>
            </div>

            {/* 和暦 */}
            <div className="md:col-span-3 lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📅</span>
                <h2 className="text-lg font-bold text-gray-900">和暦</h2>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {japaneseEra.era}{japaneseEra.eraYear}年
              </p>
              <p className="text-sm text-gray-500">{currentYear}年</p>
            </div>

            {/* 誕生花 */}
            <div 
              className="md:col-span-3 lg:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, #FFC0CB08 0%, transparent 100%), rgba(255, 255, 255, 0.8)`
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🌸</span>
                  <h2 className="text-lg font-bold text-gray-900">誕生花</h2>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{todayFlower.name_ja}</p>
                <p className="text-sm text-gray-500 mb-3">{todayFlower.name_en}</p>
                <div className="inline-block px-3 py-1.5 bg-pink-50 text-pink-700 rounded-full text-sm font-medium">
                  {todayFlower.meaning}
                </div>
              </div>
            </div>

            {/* 誕生色 */}
            <div 
              className="md:col-span-3 lg:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${todayColor.hex}08 0%, transparent 100%), rgba(255, 255, 255, 0.8)`
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎨</span>
                  <h2 className="text-lg font-bold text-gray-900">誕生色</h2>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <div 
                    className="w-16 h-16 rounded-xl shadow-md flex-shrink-0"
                    style={{ backgroundColor: todayColor.hex }}
                  />
                  <div>
                    <p className="text-xl font-bold text-gray-900">{todayColor.name_ja}</p>
                    <p className="text-xs text-gray-500 font-mono">{todayColor.hex}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{todayColor.personality}</p>
              </div>
            </div>

            {/* 干支 */}
            <div className="md:col-span-2 lg:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🐉</span>
                <h2 className="text-lg font-bold text-gray-900">干支</h2>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{chineseZodiac.name_ja}</p>
              <p className="text-sm text-gray-500">{chineseZodiac.name_en}</p>
            </div>

            {/* 六曜 */}
            <div className="md:col-span-2 lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌙</span>
                <h2 className="text-lg font-bold text-gray-900">六曜</h2>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">大安</p>
              <p className="text-xs text-gray-600">万事に吉</p>
            </div>

            {/* 二十四節気 */}
            <div className="md:col-span-2 lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌾</span>
                <h2 className="text-lg font-bold text-gray-900">二十四節気</h2>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">小寒</p>
              <p className="text-xs text-gray-600">寒の入り</p>
            </div>

            {/* 厄年 - WIDE */}
            <div className="md:col-span-6 lg:col-span-6 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🙏</span>
                <h2 className="text-lg font-bold text-gray-900">厄年</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">男性</p>
                  <p className="text-sm text-gray-600">25歳・42歳・61歳</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">女性</p>
                  <p className="text-sm text-gray-600">19歳・33歳・37歳・61歳</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">※本厄の年齢</p>
            </div>

          </div>
        </div>
      </section>

      {/* Features - Simplified */}
      <section className="py-12 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href={`/${locale}/birthstones`}
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">💎</span>
              <h3 className="font-bold text-gray-900">{t('exploreBirthstones')}</h3>
            </a>

            <a
              href={`/${locale}/birthflowers`}
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">🌸</span>
              <h3 className="font-bold text-gray-900">{t('exploreBirthflowers')}</h3>
            </a>

            <a
              href={`/${locale}/birthcolors`}
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">🎨</span>
              <h3 className="font-bold text-gray-900">{t('exploreBirthcolors')}</h3>
            </a>

            <a
              href={`/${locale}/age-calculator`}
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">📅</span>
              <h3 className="font-bold text-gray-900">和暦変換</h3>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

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

  const todayBirthstone = BIRTHSTONES[currentMonth];
  const todayFlower = SAMPLE_FLOWERS[currentMonth];
  const todayColor = SAMPLE_COLORS[currentMonth];
  const zodiacSign = getZodiacSign(currentMonth, currentDay);
  const zodiac = ZODIAC_SIGNS[zodiacSign];
  const chineseZodiac = CHINESE_ZODIAC[(currentYear - 4) % 12];
  const japaneseEra = getJapaneseEra(currentYear);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${locale}/birthday/${year}/${month}/${day}`);
  };

  const isJa = locale === 'ja';

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50">
      {/* Hero Section - Today's Date */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm mb-6">
            <span className="text-3xl">🎂</span>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">
                {currentYear}年{currentMonth}月{currentDay}日
              </p>
              <p className="text-sm text-gray-500">{japaneseEra.era}{japaneseEra.eraYear}年</p>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            今日の誕生日情報
          </h1>
          <p className="text-lg text-gray-600">
            {currentMonth}月{currentDay}日生まれのあなたへ
          </p>
        </div>
      </section>

      {/* Main Info Grid - 全情報表示 */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 誕生石 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💎</span>
                <h2 className="text-lg font-bold text-gray-900">誕生石</h2>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-16 h-16 rounded-full shadow-md flex-shrink-0"
                  style={{ backgroundColor: todayBirthstone.color }}
                />
                <div>
                  <p className="text-xl font-bold text-gray-900">{todayBirthstone.name_ja}</p>
                  <p className="text-sm text-gray-500">{todayBirthstone.name_en}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {todayBirthstone.meaning_ja.map((m, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* 誕生花 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌸</span>
                <h2 className="text-lg font-bold text-gray-900">誕生花</h2>
              </div>
              <div className="mb-3">
                <p className="text-xl font-bold text-gray-900 mb-1">{todayFlower.name_ja}</p>
                <p className="text-sm text-gray-500 mb-2">{todayFlower.name_en}</p>
                <div className="inline-block px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm">
                  {todayFlower.meaning}
                </div>
              </div>
            </div>

            {/* 誕生色 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎨</span>
                <h2 className="text-lg font-bold text-gray-900">誕生色</h2>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-16 h-16 rounded-lg shadow-md flex-shrink-0"
                  style={{ backgroundColor: todayColor.hex }}
                />
                <div>
                  <p className="text-xl font-bold text-gray-900">{todayColor.name_ja}</p>
                  <p className="text-xs text-gray-500 font-mono">{todayColor.hex}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{todayColor.personality}</p>
            </div>

            {/* 星座 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⭐</span>
                <h2 className="text-lg font-bold text-gray-900">星座</h2>
              </div>
              <p className="text-xl font-bold text-gray-900 mb-1">{zodiac.name_ja}</p>
              <p className="text-sm text-gray-500 mb-2">{zodiac.name_en}</p>
              <p className="text-xs text-gray-400">{zodiac.period}</p>
            </div>

            {/* 干支 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🐉</span>
                <h2 className="text-lg font-bold text-gray-900">干支</h2>
              </div>
              <p className="text-xl font-bold text-gray-900 mb-1">{chineseZodiac.name_ja}</p>
              <p className="text-sm text-gray-500">{chineseZodiac.name_en}</p>
            </div>

            {/* 和暦 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📅</span>
                <h2 className="text-lg font-bold text-gray-900">和暦</h2>
              </div>
              <p className="text-xl font-bold text-gray-900 mb-1">
                {japaneseEra.era}{japaneseEra.eraYear}年
              </p>
              <p className="text-sm text-gray-500">{currentYear}年（西暦）</p>
            </div>

            {/* 厄年 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🙏</span>
                <h2 className="text-lg font-bold text-gray-900">厄年</h2>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                男性: 25歳・42歳・61歳<br/>
                女性: 19歳・33歳・37歳・61歳
              </p>
              <p className="text-xs text-gray-400">※本厄の年齢</p>
            </div>

            {/* 六曜 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌙</span>
                <h2 className="text-lg font-bold text-gray-900">六曜</h2>
              </div>
              <p className="text-xl font-bold text-gray-900 mb-1">大安</p>
              <p className="text-sm text-gray-600">万事に吉、何事にも良い日</p>
            </div>

            {/* 二十四節気 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌾</span>
                <h2 className="text-lg font-bold text-gray-900">二十四節気</h2>
              </div>
              <p className="text-xl font-bold text-gray-900 mb-1">小寒</p>
              <p className="text-sm text-gray-600">寒さが最も厳しくなる時期</p>
            </div>

          </div>
        </div>
      </section>

      {/* Birthday Search */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              あなたの誕生日を調べる
            </h2>
            <p className="text-gray-600">
              生年月日を入力すると、上記の情報すべてが表示されます
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {tCommon('year')}
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 transition-all"
                >
                  {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {tCommon('month')}
                </label>
                <select
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 transition-all"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {tCommon('day')}
                </label>
                <select
                  value={day}
                  onChange={(e) => setDay(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 transition-all"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 transition-all shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 text-lg"
            >
              🎂 誕生日情報をすべて見る
            </button>
          </form>
        </div>
      </section>

      {/* Features - Quick Access */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              詳しく調べる
            </h2>
            <p className="text-gray-600">
              各情報の一覧ページへ
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href={`/${locale}/birthstones`}
              className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-3 block">💎</span>
              <h3 className="font-bold text-gray-900 mb-1">{t('exploreBirthstones')}</h3>
              <p className="text-sm text-gray-500">{t('exploreBirthstonesDesc')}</p>
            </a>

            <a
              href={`/${locale}/birthflowers`}
              className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-3 block">🌸</span>
              <h3 className="font-bold text-gray-900 mb-1">{t('exploreBirthflowers')}</h3>
              <p className="text-sm text-gray-500">{t('exploreBirthflowersDesc')}</p>
            </a>

            <a
              href={`/${locale}/birthcolors`}
              className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-3 block">🎨</span>
              <h3 className="font-bold text-gray-900 mb-1">{t('exploreBirthcolors')}</h3>
              <p className="text-sm text-gray-500">{t('exploreBirthcolorsDesc')}</p>
            </a>

            <a
              href={`/${locale}/age-calculator`}
              className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-3 block">📅</span>
              <h3 className="font-bold text-gray-900 mb-1">和暦変換</h3>
              <p className="text-sm text-gray-500">西暦と和暦を相互変換</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

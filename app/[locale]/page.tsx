'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface Birthstone {
  month: number;
  name_ja: string;
  name_en: string;
  meaning_ja: string[];
  meaning_en: string[];
  color: string;
}

const BIRTHSTONES: Record<number, Birthstone> = {
  1: { month: 1, name_ja: 'ガーネット', name_en: 'Garnet', meaning_ja: ['真実', '友愛'], meaning_en: ['Truth', 'Friendship'], color: '#8B2942' },
  2: { month: 2, name_ja: 'アメジスト', name_en: 'Amethyst', meaning_ja: ['誠実', '心の平和'], meaning_en: ['Sincerity', 'Peace'], color: '#7B5EA7' },
  3: { month: 3, name_ja: 'アクアマリン', name_en: 'Aquamarine', meaning_ja: ['沈着', '勇敢'], meaning_en: ['Composure', 'Courage'], color: '#6BA3BE' },
  4: { month: 4, name_ja: 'ダイヤモンド', name_en: 'Diamond', meaning_ja: ['永遠の絆', '純潔'], meaning_en: ['Eternal Bond', 'Purity'], color: '#B8C4CE' },
  5: { month: 5, name_ja: 'エメラルド', name_en: 'Emerald', meaning_ja: ['幸運', '希望'], meaning_en: ['Fortune', 'Hope'], color: '#3D8B5F' },
  6: { month: 6, name_ja: 'パール', name_en: 'Pearl', meaning_ja: ['健康', '富'], meaning_en: ['Health', 'Wealth'], color: '#E8DFD0' },
  7: { month: 7, name_ja: 'ルビー', name_en: 'Ruby', meaning_ja: ['情熱', '仁愛'], meaning_en: ['Passion', 'Love'], color: '#A4243B' },
  8: { month: 8, name_ja: 'ペリドット', name_en: 'Peridot', meaning_ja: ['夫婦の幸福', '和合'], meaning_en: ['Harmony', 'Fortune'], color: '#7D9B4A' },
  9: { month: 9, name_ja: 'サファイア', name_en: 'Sapphire', meaning_ja: ['誠実', '慈愛'], meaning_en: ['Sincerity', 'Charity'], color: '#3A5BA0' },
  10: { month: 10, name_ja: 'オパール', name_en: 'Opal', meaning_ja: ['歓喜', '希望'], meaning_en: ['Joy', 'Hope'], color: '#A7B5A6' },
  11: { month: 11, name_ja: 'トパーズ', name_en: 'Topaz', meaning_ja: ['友情', '潔白'], meaning_en: ['Friendship', 'Innocence'], color: '#D4A84B' },
  12: { month: 12, name_ja: 'ターコイズ', name_en: 'Turquoise', meaning_ja: ['成功', '繁栄'], meaning_en: ['Success', 'Prosperity'], color: '#4A9B9B' }
};

const BIRTH_FLOWERS: Record<number, { name_ja: string; name_en: string; meaning_ja: string; meaning_en: string }> = {
  1: { name_ja: 'カーネーション', name_en: 'Carnation', meaning_ja: '無垢で深い愛', meaning_en: 'Pure love' },
  2: { name_ja: 'スミレ', name_en: 'Violet', meaning_ja: '誠実・謙虚', meaning_en: 'Faithfulness' },
  3: { name_ja: 'スイセン', name_en: 'Daffodil', meaning_ja: '希望・再生', meaning_en: 'Rebirth' },
  4: { name_ja: 'デイジー', name_en: 'Daisy', meaning_ja: '純潔・無邪気', meaning_en: 'Innocence' },
  5: { name_ja: 'スズラン', name_en: 'Lily of the Valley', meaning_ja: '幸福の再来', meaning_en: 'Happiness' },
  6: { name_ja: 'バラ', name_en: 'Rose', meaning_ja: '愛・美', meaning_en: 'Love' },
  7: { name_ja: 'ハス', name_en: 'Lotus', meaning_ja: '清純・神聖', meaning_en: 'Purity' },
  8: { name_ja: 'グラジオラス', name_en: 'Gladiolus', meaning_ja: '勝利・誠実', meaning_en: 'Victory' },
  9: { name_ja: 'アスター', name_en: 'Aster', meaning_ja: '信頼・追憶', meaning_en: 'Trust' },
  10: { name_ja: 'キク', name_en: 'Chrysanthemum', meaning_ja: '高貴・長寿', meaning_en: 'Nobility' },
  11: { name_ja: 'キンセンカ', name_en: 'Marigold', meaning_ja: '変わらぬ愛', meaning_en: 'Eternal love' },
  12: { name_ja: 'ポインセチア', name_en: 'Poinsettia', meaning_ja: '祝福・聖なる願い', meaning_en: 'Celebration' }
};

function getWareki(year: number): string {
  if (year >= 2019) return `令和${year - 2018}年`;
  if (year >= 1989) return `平成${year - 1988}年`;
  if (year >= 1926) return `昭和${year - 1925}年`;
  return `大正${year - 1911}年`;
}

const ROKUYOU = ['大安', '赤口', '先勝', '友引', '先負', '仏滅'];
const ETO = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

function getZodiac(month: number, day: number): { ja: string; en: string } {
  const zodiacs = [
    { ja: 'やぎ座', en: 'Capricorn', start: [12, 22], end: [1, 19] },
    { ja: 'みずがめ座', en: 'Aquarius', start: [1, 20], end: [2, 18] },
    { ja: 'うお座', en: 'Pisces', start: [2, 19], end: [3, 20] },
    { ja: 'おひつじ座', en: 'Aries', start: [3, 21], end: [4, 19] },
    { ja: 'おうし座', en: 'Taurus', start: [4, 20], end: [5, 20] },
    { ja: 'ふたご座', en: 'Gemini', start: [5, 21], end: [6, 21] },
    { ja: 'かに座', en: 'Cancer', start: [6, 22], end: [7, 22] },
    { ja: 'しし座', en: 'Leo', start: [7, 23], end: [8, 22] },
    { ja: 'おとめ座', en: 'Virgo', start: [8, 23], end: [9, 22] },
    { ja: 'てんびん座', en: 'Libra', start: [9, 23], end: [10, 23] },
    { ja: 'さそり座', en: 'Scorpio', start: [10, 24], end: [11, 22] },
    { ja: 'いて座', en: 'Sagittarius', start: [11, 23], end: [12, 21] },
  ];
  
  for (const z of zodiacs) {
    if ((month === z.start[0] && day >= z.start[1]) || (month === z.end[0] && day <= z.end[1])) {
      return { ja: z.ja, en: z.en };
    }
  }
  return { ja: 'やぎ座', en: 'Capricorn' };
}

export default function HomePage() {
  const t = useTranslations('home');
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

  const isJa = locale === 'ja';
  const birthstone = BIRTHSTONES[currentMonth];
  const birthflower = BIRTH_FLOWERS[currentMonth];
  const zodiac = getZodiac(currentMonth, currentDay);
  const wareki = getWareki(currentYear);
  const eto = ETO[(currentYear - 4) % 12];
  const rokuyou = ROKUYOU[currentDay % 6];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${locale}/birthday/${year}/${month}/${day}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Today's Date */}
      <div className="mb-12">
        <p className="text-sm text-neutral-500 mb-2">
          {isJa ? '今日' : 'Today'}
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900 mb-1">
          {isJa 
            ? `${currentYear}年${currentMonth}月${currentDay}日`
            : new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
          }
        </h1>
        <p className="text-neutral-500">
          {isJa ? `${wareki} / ${rokuyou}` : zodiac.en}
        </p>
      </div>

      {/* Search */}
      <div className="mb-16 p-6 bg-neutral-50 rounded-lg">
        <h2 className="text-lg font-medium text-neutral-900 mb-4">
          {isJa ? '誕生日を調べる' : 'Look up a birthday'}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-3">
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="px-4 py-2.5 bg-white border border-neutral-200 rounded-md text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
          >
            {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="px-4 py-2.5 bg-white border border-neutral-200 rounded-md text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
              <option key={m} value={m}>{isJa ? `${m}月` : m}</option>
            ))}
          </select>
          <select
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
            className="px-4 py-2.5 bg-white border border-neutral-200 rounded-md text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
          >
            {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <button
            type="submit"
            className="px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors"
          >
            {isJa ? '調べる' : 'Search'}
          </button>
        </form>
      </div>

      {/* Today's Info */}
      <section className="mb-16">
        <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-6">
          {isJa ? '今日の情報' : "Today's Info"}
        </h2>
        
        <div className="space-y-1">
          {/* Birthstone */}
          <a 
            href={`/${locale}/birthstones/${currentMonth}`}
            className="flex items-center justify-between py-4 border-b border-neutral-100 hover:bg-neutral-50 -mx-3 px-3 rounded transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: birthstone.color }}
              />
              <div>
                <p className="text-sm text-neutral-500">{isJa ? '誕生石' : 'Birthstone'}</p>
                <p className="text-neutral-900 font-medium">
                  {isJa ? birthstone.name_ja : birthstone.name_en}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-neutral-400">
                {(isJa ? birthstone.meaning_ja : birthstone.meaning_en).join('・')}
              </span>
              <span className="text-neutral-300 group-hover:text-neutral-500 transition-colors">→</span>
            </div>
          </a>

          {/* Birth Flower */}
          <a 
            href={`/${locale}/birthflowers`}
            className="flex items-center justify-between py-4 border-b border-neutral-100 hover:bg-neutral-50 -mx-3 px-3 rounded transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-pink-300" />
              <div>
                <p className="text-sm text-neutral-500">{isJa ? '誕生花' : 'Birth Flower'}</p>
                <p className="text-neutral-900 font-medium">
                  {isJa ? birthflower.name_ja : birthflower.name_en}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-neutral-400">
                {isJa ? birthflower.meaning_ja : birthflower.meaning_en}
              </span>
              <span className="text-neutral-300 group-hover:text-neutral-500 transition-colors">→</span>
            </div>
          </a>

          {/* Zodiac */}
          <div className="flex items-center justify-between py-4 border-b border-neutral-100">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-indigo-300" />
              <div>
                <p className="text-sm text-neutral-500">{isJa ? '星座' : 'Zodiac Sign'}</p>
                <p className="text-neutral-900 font-medium">
                  {isJa ? zodiac.ja : zodiac.en}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Japanese Culture - only for Japanese locale */}
      {isJa && (
        <section className="mb-16">
          <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-6">
            日本の暦
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-neutral-500 mb-1">和暦</p>
              <p className="text-neutral-900 font-medium">{wareki}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-1">干支</p>
              <p className="text-neutral-900 font-medium">{eto}年</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-1">六曜</p>
              <p className="text-neutral-900 font-medium">{rokuyou}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-1">旧暦</p>
              <p className="text-neutral-900 font-medium">12月13日</p>
            </div>
          </div>
        </section>
      )}

      {/* 12 Month Birthstones */}
      <section className="mb-16">
        <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-6">
          {isJa ? '12ヶ月の誕生石' : 'Birthstones by Month'}
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {Object.values(BIRTHSTONES).map((stone) => (
            <a
              key={stone.month}
              href={`/${locale}/birthstones/${stone.month}`}
              className="group p-4 rounded-lg border border-neutral-100 hover:border-neutral-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: stone.color }}
                />
                <span className="text-xs text-neutral-400">
                  {stone.month}{isJa ? '月' : ''}
                </span>
              </div>
              <p className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                {isJa ? stone.name_ja : stone.name_en}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-6">
          {isJa ? 'カテゴリー' : 'Categories'}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <a
            href={`/${locale}/birthstones`}
            className="p-6 rounded-lg border border-neutral-200 hover:border-neutral-400 transition-colors group"
          >
            <h3 className="font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
              {t('exploreBirthstones')}
            </h3>
            <p className="text-sm text-neutral-500">{t('exploreBirthstonesDesc')}</p>
          </a>
          <a
            href={`/${locale}/birthflowers`}
            className="p-6 rounded-lg border border-neutral-200 hover:border-neutral-400 transition-colors group"
          >
            <h3 className="font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
              {t('exploreBirthflowers')}
            </h3>
            <p className="text-sm text-neutral-500">{t('exploreBirthflowersDesc')}</p>
          </a>
          <a
            href={`/${locale}/birthcolors`}
            className="p-6 rounded-lg border border-neutral-200 hover:border-neutral-400 transition-colors group"
          >
            <h3 className="font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
              {t('exploreBirthcolors')}
            </h3>
            <p className="text-sm text-neutral-500">{t('exploreBirthcolorsDesc')}</p>
          </a>
        </div>
      </section>
    </div>
  );
}

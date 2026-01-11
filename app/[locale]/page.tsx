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

// 誕生花データ（サンプル）
const BIRTH_FLOWERS: Record<string, { name_ja: string; name_en: string; meaning_ja: string; meaning_en: string; }> = {
  '1-11': { name_ja: 'カーネーション', name_en: 'Carnation', meaning_ja: '無垢で深い愛', meaning_en: 'Pure love' },
};

// 誕生色データ（サンプル）
const BIRTH_COLORS: Record<string, { name_ja: string; name_en: string; hex: string; meaning_ja: string; }> = {
  '1-11': { name_ja: '深紅', name_en: 'Crimson', hex: '#DC143C', meaning_ja: '情熱・決断力' },
};

// 和暦変換
function getWareki(year: number): string {
  if (year >= 2019) return `令和${year - 2018}年`;
  if (year >= 1989) return `平成${year - 1988}年`;
  if (year >= 1926) return `昭和${year - 1925}年`;
  if (year >= 1912) return `大正${year - 1911}年`;
  return `明治${year - 1867}年`;
}

// 厄年判定
function getYakudoshi(birthYear: number, currentYear: number, gender: 'male' | 'female'): string | null {
  const age = currentYear - birthYear + 1; // 数え年
  
  if (gender === 'male') {
    if (age === 25) return '本厄（25歳）';
    if (age === 42) return '本厄（42歳・大厄）';
    if (age === 61) return '本厄（61歳）';
    if (age === 24 || age === 41 || age === 60) return '前厄';
    if (age === 26 || age === 43 || age === 62) return '後厄';
  } else {
    if (age === 19) return '本厄（19歳）';
    if (age === 33) return '本厄（33歳・大厄）';
    if (age === 37) return '本厄（37歳）';
    if (age === 18 || age === 32 || age === 36) return '前厄';
    if (age === 20 || age === 34 || age === 38) return '後厄';
  }
  
  return null;
}

// 六曜データ（簡易版）
const ROKUYOU = ['大安', '赤口', '先勝', '友引', '先負', '仏滅'];

// 二十四節気
function getNijushisekki(month: number, day: number): string {
  if (month === 1 && day >= 5) return '小寒';
  if (month === 1 && day >= 20) return '大寒';
  if (month === 2 && day >= 4) return '立春';
  return '小寒の頃';
}

// 星座
function getZodiac(month: number, day: number): { ja: string; en: string } {
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return { ja: 'みずがめ座', en: 'Aquarius' };
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return { ja: 'やぎ座', en: 'Capricorn' };
  return { ja: 'やぎ座', en: 'Capricorn' };
}

// 干支
const ZODIAC_ANIMALS = ['子（ね）', '丑（うし）', '寅（とら）', '卯（う）', '辰（たつ）', '巳（み）', '午（うま）', '未（ひつじ）', '申（さる）', '酉（とり）', '戌（いぬ）', '亥（い）'];

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
  const todayFlower = BIRTH_FLOWERS[`${currentMonth}-${currentDay}`] || { name_ja: 'カーネーション', name_en: 'Carnation', meaning_ja: '無垢で深い愛', meaning_en: 'Pure love' };
  const todayColor = BIRTH_COLORS[`${currentMonth}-${currentDay}`] || { name_ja: '深紅', name_en: 'Crimson', hex: '#DC143C', meaning_ja: '情熱・決断力' };
  const wareki = getWareki(currentYear);
  const yakudoshi = getYakudoshi(1990, currentYear, 'male');
  const rokuyou = ROKUYOU[currentDay % 6];
  const nijushisekki = getNijushisekki(currentMonth, currentDay);
  const zodiac = getZodiac(currentMonth, currentDay);
  const eto = ZODIAC_ANIMALS[currentYear % 12];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${locale}/birthday/${year}/${month}/${day}`);
  };

  const isJa = locale === 'ja';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 mb-3">
              {isJa ? `${currentYear}年${currentMonth}月${currentDay}日` : `${currentMonth}/${currentDay}/${currentYear}`}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              {isJa ? '今日の誕生日情報' : "Today's Birthday Info"}
            </h1>
            <p className="text-gray-600 text-lg">
              {isJa ? 'あなたの誕生日に関する全ての情報' : 'Everything about your birthday'}
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-900"
              >
                {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-900"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <select
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-900"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <button
                type="submit"
                className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                {isJa ? '検索' : 'Search'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Today's Info Grid */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-6">
            {/* 誕生石 */}
            <div className="border-l-2 border-gray-900 pl-4">
              <p className="text-xs text-gray-500 mb-2">{isJa ? '誕生石' : 'Birthstone'}</p>
              <p className="font-bold text-gray-900 mb-1">{isJa ? todayBirthstone.name_ja : todayBirthstone.name_en}</p>
              <p className="text-sm text-gray-600">{(isJa ? todayBirthstone.meaning_ja : todayBirthstone.meaning_en).join('・')}</p>
            </div>

            {/* 誕生花 */}
            <div className="border-l-2 border-gray-900 pl-4">
              <p className="text-xs text-gray-500 mb-2">{isJa ? '誕生花' : 'Birth Flower'}</p>
              <p className="font-bold text-gray-900 mb-1">{isJa ? todayFlower.name_ja : todayFlower.name_en}</p>
              <p className="text-sm text-gray-600">{isJa ? todayFlower.meaning_ja : todayFlower.meaning_en}</p>
            </div>

            {/* 誕生色 */}
            <div className="border-l-2 border-gray-900 pl-4">
              <p className="text-xs text-gray-500 mb-2">{isJa ? '誕生色' : 'Birth Color'}</p>
              <p className="font-bold text-gray-900 mb-1">{isJa ? todayColor.name_ja : todayColor.name_en}</p>
              <p className="text-sm text-gray-600">{todayColor.hex}</p>
            </div>

            {/* 星座 */}
            <div className="border-l-2 border-gray-900 pl-4">
              <p className="text-xs text-gray-500 mb-2">{isJa ? '星座' : 'Zodiac'}</p>
              <p className="font-bold text-gray-900 mb-1">{isJa ? zodiac.ja : zodiac.en}</p>
              <p className="text-sm text-gray-600">Western</p>
            </div>
          </div>
        </div>
      </section>

      {/* Japanese Cultural Info */}
      {isJa && (
        <section className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-xl font-bold text-gray-900 mb-8">日本の暦・文化</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p className="text-xs text-gray-500 mb-1">和暦</p>
                <p className="text-sm text-gray-900">{wareki}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">厄年</p>
                <p className="text-sm text-gray-900">{yakudoshi || '該当なし'}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">六曜</p>
                <p className="text-sm text-gray-900">{rokuyou}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">二十四節気</p>
                <p className="text-sm text-gray-900">{nijushisekki}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">干支</p>
                <p className="text-sm text-gray-900">{eto}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">旧暦</p>
                <p className="text-sm text-gray-900">12月13日</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">数え年</p>
                <p className="text-sm text-gray-900">{currentYear - 1990 + 1}歳</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">次の節句</p>
                <p className="text-sm text-gray-900">人日の節句</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Monthly Birthstones */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            {isJa ? '12ヶ月の誕生石' : 'Birthstones by Month'}
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {Object.values(BIRTHSTONES).map((stone) => (
              <a
                key={stone.id}
                href={`/${locale}/birthstones/${stone.month}`}
                className="block border border-gray-200 p-4 hover:border-gray-900 transition-colors"
              >
                <p className="text-xs text-gray-500 mb-2">{stone.month}{isJa ? '月' : ''}</p>
                <p className="text-sm font-medium text-gray-900">{isJa ? stone.name_ja : stone.name_en}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            {isJa ? 'カテゴリー' : 'Categories'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href={`/${locale}/birthstones`}
              className="block border border-gray-200 p-6 hover:border-gray-900 transition-colors"
            >
              <h3 className="font-bold text-gray-900 mb-2">{t('exploreBirthstones')}</h3>
              <p className="text-sm text-gray-600">{t('exploreBirthstonesDesc')}</p>
            </a>

            <a
              href={`/${locale}/birthflowers`}
              className="block border border-gray-200 p-6 hover:border-gray-900 transition-colors"
            >
              <h3 className="font-bold text-gray-900 mb-2">{t('exploreBirthflowers')}</h3>
              <p className="text-sm text-gray-600">{t('exploreBirthflowersDesc')}</p>
            </a>

            <a
              href={`/${locale}/birthcolors`}
              className="block border border-gray-200 p-6 hover:border-gray-900 transition-colors"
            >
              <h3 className="font-bold text-gray-900 mb-2">{t('exploreBirthcolors')}</h3>
              <p className="text-sm text-gray-600">{t('exploreBirthcolorsDesc')}</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

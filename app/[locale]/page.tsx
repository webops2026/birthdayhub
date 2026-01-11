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
  const age = currentYear - birthYear + 1;
  
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

// 六曜データ
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-slate-500 mb-3 font-medium">
              {isJa ? `${currentYear}年${currentMonth}月${currentDay}日` : `${currentMonth}/${currentDay}/${currentYear}`}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              {isJa ? '今日の誕生日情報' : "Today's Birthday Info"}
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {isJa ? 'あなたの誕生日に関する全ての情報' : 'Everything about your birthday'}
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-md mx-auto mb-16">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all shadow-sm"
              >
                {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all shadow-sm"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <select
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
                className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all shadow-sm"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 whitespace-nowrap"
              >
                {isJa ? '検索' : 'Search'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Today's Info Cards */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {/* 誕生石 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-xl shadow-inner"
                  style={{ backgroundColor: todayBirthstone.color }}
                />
                <div>
                  <p className="text-xs text-slate-500 font-medium">{isJa ? '誕生石' : 'Birthstone'}</p>
                  <p className="font-bold text-slate-900">{isJa ? todayBirthstone.name_ja : todayBirthstone.name_en}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">{(isJa ? todayBirthstone.meaning_ja : todayBirthstone.meaning_en).join('・')}</p>
            </div>

            {/* 誕生花 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center shadow-inner">
                  <span className="text-xl">🌸</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{isJa ? '誕生花' : 'Birth Flower'}</p>
                  <p className="font-bold text-slate-900">{isJa ? todayFlower.name_ja : todayFlower.name_en}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">{isJa ? todayFlower.meaning_ja : todayFlower.meaning_en}</p>
            </div>

            {/* 誕生色 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-xl shadow-inner"
                  style={{ backgroundColor: todayColor.hex }}
                />
                <div>
                  <p className="text-xs text-slate-500 font-medium">{isJa ? '誕生色' : 'Birth Color'}</p>
                  <p className="font-bold text-slate-900">{isJa ? todayColor.name_ja : todayColor.name_en}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">{todayColor.hex}</p>
            </div>

            {/* 星座 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center shadow-inner">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{isJa ? '星座' : 'Zodiac'}</p>
                  <p className="font-bold text-slate-900">{isJa ? zodiac.ja : zodiac.en}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">Western</p>
            </div>
          </div>

          {/* Japanese Cultural Info */}
          {isJa && (
            <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 rounded-2xl p-8 border border-amber-100/50 shadow-sm mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span>🇯🇵</span>
                日本の暦・文化
              </h2>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                  <p className="text-xs text-slate-500 mb-1 font-medium">和暦</p>
                  <p className="text-sm font-semibold text-slate-900">{wareki}</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                  <p className="text-xs text-slate-500 mb-1 font-medium">厄年</p>
                  <p className="text-sm font-semibold text-slate-900">{yakudoshi || '該当なし'}</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                  <p className="text-xs text-slate-500 mb-1 font-medium">六曜</p>
                  <p className="text-sm font-semibold text-slate-900">{rokuyou}</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                  <p className="text-xs text-slate-500 mb-1 font-medium">二十四節気</p>
                  <p className="text-sm font-semibold text-slate-900">{nijushisekki}</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                  <p className="text-xs text-slate-500 mb-1 font-medium">干支</p>
                  <p className="text-sm font-semibold text-slate-900">{eto}</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                  <p className="text-xs text-slate-500 mb-1 font-medium">旧暦</p>
                  <p className="text-sm font-semibold text-slate-900">12月13日</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                  <p className="text-xs text-slate-500 mb-1 font-medium">数え年</p>
                  <p className="text-sm font-semibold text-slate-900">{currentYear - 1990 + 1}歳</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                  <p className="text-xs text-slate-500 mb-1 font-medium">次の節句</p>
                  <p className="text-sm font-semibold text-slate-900">人日の節句</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Monthly Birthstones */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {isJa ? '12ヶ月の誕生石' : 'Birthstones by Month'}
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {Object.values(BIRTHSTONES).map((stone) => (
              <a
                key={stone.id}
                href={`/${locale}/birthstones/${stone.month}`}
                className="group bg-white rounded-xl p-4 hover:shadow-md transition-all border border-slate-100 hover:border-blue-200"
              >
                <div
                  className="w-12 h-12 rounded-xl mb-3 mx-auto shadow-sm"
                  style={{ backgroundColor: stone.color }}
                />
                <p className="text-xs text-slate-500 text-center mb-1">{stone.month}{isJa ? '月' : ''}</p>
                <p className="text-sm font-semibold text-slate-900 text-center group-hover:text-blue-600 transition-colors">
                  {isJa ? stone.name_ja : stone.name_en}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {isJa ? 'カテゴリー' : 'Categories'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href={`/${locale}/birthstones`}
              className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all border border-slate-100 hover:border-blue-200"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💎</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {t('exploreBirthstones')}
              </h3>
              <p className="text-sm text-slate-600">{t('exploreBirthstonesDesc')}</p>
            </a>

            <a
              href={`/${locale}/birthflowers`}
              className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all border border-slate-100 hover:border-pink-200"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌸</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors">
                {t('exploreBirthflowers')}
              </h3>
              <p className="text-sm text-slate-600">{t('exploreBirthflowersDesc')}</p>
            </a>

            <a
              href={`/${locale}/birthcolors`}
              className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all border border-slate-100 hover:border-purple-200"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                {t('exploreBirthcolors')}
              </h3>
              <p className="text-sm text-slate-600">{t('exploreBirthcolorsDesc')}</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

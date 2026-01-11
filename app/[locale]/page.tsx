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
  // ... 他の節気も追加可能
  return '小寒の頃';
}

// 星座
function getZodiac(month: number, day: number): { ja: string; en: string } {
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return { ja: 'みずがめ座', en: 'Aquarius' };
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return { ja: 'やぎ座', en: 'Capricorn' };
  // ... 他の星座
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Today's Birthday Info */}
      <section className="relative py-12 px-6 bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Date Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 mb-4">
              <span className="text-xl">📅</span>
              <span className="font-bold text-gray-900">
                {isJa ? `${currentYear}年${currentMonth}月${currentDay}日` : `${currentMonth}/${currentDay}/${currentYear}`}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {isJa ? '今日の誕生日情報' : "Today's Birthday Info"}
            </h1>
            <p className="text-gray-600">
              {isJa ? 'あなたの誕生日に関する全ての情報がここに' : 'Everything about your birthday in one place'}
            </p>
          </div>

          {/* Info Grid - All Birthday Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* 誕生石 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-12 h-12 rounded-full shadow-md"
                  style={{ backgroundColor: todayBirthstone.color }}
                />
                <div>
                  <div className="text-xs text-gray-500 font-medium">💎 {isJa ? '誕生石' : 'Birthstone'}</div>
                  <div className="font-bold text-gray-900">{isJa ? todayBirthstone.name_ja : todayBirthstone.name_en}</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {(isJa ? todayBirthstone.meaning_ja : todayBirthstone.meaning_en).join('・')}
              </div>
            </div>

            {/* 誕生花 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-2xl">
                  🌸
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">{isJa ? '誕生花' : 'Birth Flower'}</div>
                  <div className="font-bold text-gray-900">{isJa ? todayFlower.name_ja : todayFlower.name_en}</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {isJa ? todayFlower.meaning_ja : todayFlower.meaning_en}
              </div>
            </div>

            {/* 誕生色 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-12 h-12 rounded-lg shadow-md"
                  style={{ backgroundColor: todayColor.hex }}
                />
                <div>
                  <div className="text-xs text-gray-500 font-medium">🎨 {isJa ? '誕生色' : 'Birth Color'}</div>
                  <div className="font-bold text-gray-900">{isJa ? todayColor.name_ja : todayColor.name_en}</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {todayColor.hex}
              </div>
            </div>

            {/* 星座 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                  ⭐
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">{isJa ? '星座' : 'Zodiac Sign'}</div>
                  <div className="font-bold text-gray-900">{isJa ? zodiac.ja : zodiac.en}</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Western Zodiac
              </div>
            </div>
          </div>

          {/* Japanese Cultural Info - Only for JA */}
          {isJa && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🇯🇵</span>
                日本の暦・文化情報
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 和暦 */}
                <div className="bg-white/80 rounded-lg p-4">
                  <div className="text-xs text-gray-500 font-medium mb-1">📅 和暦</div>
                  <div className="font-bold text-gray-900">{wareki}</div>
                  <div className="text-sm text-gray-600 mt-1">令和8年</div>
                </div>

                {/* 厄年 */}
                <div className="bg-white/80 rounded-lg p-4">
                  <div className="text-xs text-gray-500 font-medium mb-1">🙏 厄年</div>
                  <div className="font-bold text-gray-900">{yakudoshi || '該当なし'}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {yakudoshi ? '厄除け推奨' : '平常年'}
                  </div>
                </div>

                {/* 六曜 */}
                <div className="bg-white/80 rounded-lg p-4">
                  <div className="text-xs text-gray-500 font-medium mb-1">🌙 六曜</div>
                  <div className="font-bold text-gray-900">{rokuyou}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {rokuyou === '大安' ? '万事に吉' : '冠婚葬祭の参考に'}
                  </div>
                </div>

                {/* 二十四節気 */}
                <div className="bg-white/80 rounded-lg p-4">
                  <div className="text-xs text-gray-500 font-medium mb-1">🌾 二十四節気</div>
                  <div className="font-bold text-gray-900">{nijushisekki}</div>
                  <div className="text-sm text-gray-600 mt-1">寒さが厳しい季節</div>
                </div>

                {/* 干支 */}
                <div className="bg-white/80 rounded-lg p-4">
                  <div className="text-xs text-gray-500 font-medium mb-1">🐉 干支</div>
                  <div className="font-bold text-gray-900">{eto}</div>
                  <div className="text-sm text-gray-600 mt-1">{currentYear}年生まれ</div>
                </div>

                {/* 旧暦 */}
                <div className="bg-white/80 rounded-lg p-4">
                  <div className="text-xs text-gray-500 font-medium mb-1">🎏 旧暦</div>
                  <div className="font-bold text-gray-900">12月13日</div>
                  <div className="text-sm text-gray-600 mt-1">旧暦での日付</div>
                </div>

                {/* 年齢（数え年） */}
                <div className="bg-white/80 rounded-lg p-4">
                  <div className="text-xs text-gray-500 font-medium mb-1">🎂 数え年</div>
                  <div className="font-bold text-gray-900">{currentYear - 1990 + 1}歳</div>
                  <div className="text-sm text-gray-600 mt-1">厄年計算に使用</div>
                </div>

                {/* 節句 */}
                <div className="bg-white/80 rounded-lg p-4">
                  <div className="text-xs text-gray-500 font-medium mb-1">🎌 次の節句</div>
                  <div className="font-bold text-gray-900">人日の節句</div>
                  <div className="text-sm text-gray-600 mt-1">1月7日（七草粥）</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Birthday Search Section */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isJa ? 'あなたの誕生日を調べる' : 'Look up your birthday'}
            </h2>
            <p className="text-gray-600">
              {isJa ? '生年月日を入力すると全ての情報が表示されます' : 'Enter your birth date to see all information'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tCommon('year')}
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-300 transition-all"
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
                  className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-300 transition-all"
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
                  className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-300 transition-all"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
            >
              {isJa ? '🎂 詳細な誕生日情報を見る' : '🎂 View detailed birthday info'}
            </button>
          </form>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isJa ? '誕生日に関する情報を探索' : 'Explore Birthday Information'}
            </h2>
            <p className="text-gray-600">
              {isJa ? '各カテゴリの詳細情報をチェック' : 'Check detailed information for each category'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a href={`/${locale}/birthstones`} className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-rose-200 transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('exploreBirthstones')}</h3>
              <p className="text-sm text-gray-600">{t('exploreBirthstonesDesc')}</p>
            </a>

            <a href={`/${locale}/birthflowers`} className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-pink-200 transition-all">
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('exploreBirthflowers')}</h3>
              <p className="text-sm text-gray-600">{t('exploreBirthflowersDesc')}</p>
            </a>

            <a href={`/${locale}/birthcolors`} className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('exploreBirthcolors')}</h3>
              <p className="text-sm text-gray-600">{t('exploreBirthcolorsDesc')}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Monthly Birthstones Quick View */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {isJa ? '12ヶ月の誕生石' : 'Birthstones by Month'}
          </h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {Object.values(BIRTHSTONES).map((stone) => (
              <a
                key={stone.id}
                href={`/${locale}/birthstones/${stone.month}`}
                className="group flex flex-col items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div 
                  className="w-10 h-10 rounded-full mb-2 group-hover:scale-110 transition-transform shadow-sm"
                  style={{ backgroundColor: stone.color }}
                />
                <span className="text-xs text-gray-500 mb-1">{stone.month}{isJa ? '月' : ''}</span>
                <span className="text-xs font-medium text-gray-900 text-center">
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

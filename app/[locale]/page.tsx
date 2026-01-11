'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

// Data Types mimicking database properties
interface Birthstone {
  id: string;
  month: number;
  name_ja: string;
  name_en: string;
  meaning_ja: string[];
  meaning_en: string[];
  color: string;
  bg_class: string;
}

// Notion colors adapted for Tailwind
const NOTION_COLORS = {
  default: 'bg-white',
  gray: 'bg-[#f1f1ef]',
  brown: 'bg-[#f4eeee]',
  orange: 'bg-[#fbecdd]',
  yellow: 'bg-[#fbf3db]',
  green: 'bg-[#edf3ec]',
  blue: 'bg-[#e7f3f8]',
  purple: 'bg-[#f6f3f9]',
  pink: 'bg-[#fafffa]',
  red: 'bg-[#fdebec]',
};

// Data with Notion color tags
const BIRTHSTONES: Record<number, Birthstone> = {
  1: { id: '1', month: 1, name_ja: 'ガーネット', name_en: 'Garnet', meaning_ja: ['真実', '友愛'], meaning_en: ['Truth', 'Friendship'], color: '#B03060', bg_class: 'bg-[#fdebec] text-[#d44c47]' }, // Red
  2: { id: '2', month: 2, name_ja: 'アメジスト', name_en: 'Amethyst', meaning_ja: ['誠実'], meaning_en: ['Sincerity'], color: '#9966CC', bg_class: 'bg-[#f6f3f9] text-[#9065b0]' }, // Purple
  3: { id: '3', month: 3, name_ja: 'アクアマリン', name_en: 'Aquamarine', meaning_ja: ['沈着'], meaning_en: ['Composure'], color: '#7FFFD4', bg_class: 'bg-[#e7f3f8] text-[#337ea9]' }, // Blue
  4: { id: '4', month: 4, name_ja: 'ダイヤモンド', name_en: 'Diamond', meaning_ja: ['永遠の絆'], meaning_en: ['Eternal Bond'], color: '#E0FFFF', bg_class: 'bg-[#f1f1ef] text-[#787774]' }, // Gray
  5: { id: '5', month: 5, name_ja: 'エメラルド', name_en: 'Emerald', meaning_ja: ['幸運'], meaning_en: ['Fortune'], color: '#50C878', bg_class: 'bg-[#edf3ec] text-[#448361]' }, // Green
  6: { id: '6', month: 6, name_ja: 'パール', name_en: 'Pearl', meaning_ja: ['健康'], meaning_en: ['Health'], color: '#F0EAD6', bg_class: 'bg-[#fbf3db] text-[#cb912f]' }, // Yellow
  7: { id: '7', month: 7, name_ja: 'ルビー', name_en: 'Ruby', meaning_ja: ['情熱'], meaning_en: ['Passion'], color: '#E0115F', bg_class: 'bg-[#fdebec] text-[#d44c47]' }, // Red
  8: { id: '8', month: 8, name_ja: 'ペリドット', name_en: 'Peridot', meaning_ja: ['和合'], meaning_en: ['Harmony'], color: '#9ACD32', bg_class: 'bg-[#edf3ec] text-[#448361]' }, // Green
  9: { id: '9', month: 9, name_ja: 'サファイア', name_en: 'Sapphire', meaning_ja: ['誠実'], meaning_en: ['Sincerity'], color: '#0F52BA', bg_class: 'bg-[#e7f3f8] text-[#337ea9]' }, // Blue
  10: { id: '10', month: 10, name_ja: 'オパール', name_en: 'Opal', meaning_ja: ['歓喜'], meaning_en: ['Joy'], color: '#A8C3BC', bg_class: 'bg-[#fbecdd] text-[#d9730d]' }, // Orange
  11: { id: '11', month: 11, name_ja: 'トパーズ', name_en: 'Topaz', meaning_ja: ['友情'], meaning_en: ['Friendship'], color: '#FFC87C', bg_class: 'bg-[#fbf3db] text-[#cb912f]' }, // Yellow
  12: { id: '12', month: 12, name_ja: 'ターコイズ', name_en: 'Turquoise', meaning_ja: ['成功'], meaning_en: ['Success'], color: '#40E0D0', bg_class: 'bg-[#e7f3f8] text-[#337ea9]' } // Blue
};

// Icons as SVG components
const Icons = {
  Search: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
  Calendar: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  ChevronRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
  Grid: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
};

export default function HomePage() {
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
  
  // Dynamic data (simplified for this view)
  const birthstone = BIRTHSTONES[currentMonth];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${locale}/birthday/${year}/${month}/${day}`);
  };

  return (
    <div className="font-sans text-[#37352f]">
      {/* Page Icon & Title */}
      <div className="mb-12 group">
        <div className="text-[78px] leading-none mb-4 select-none cursor-default transition-transform origin-left hover:scale-110 duration-200">
          📅
        </div>
        <h1 className="text-4xl font-bold border-b border-[#e9e9e7] pb-4 mb-2">
          {isJa ? '今日の情報' : "Today's Overview"}
        </h1>
        <div className="flex items-center gap-2 text-[#787774] text-sm">
          <span className="flex items-center gap-1">
            <Icons.Calendar />
            {currentYear}/{currentMonth}/{currentDay}
          </span>
          <span>•</span>
          <span className="bg-[#e7f3f8] text-[#337ea9] px-1.5 rounded text-xs py-0.5">
            Today
          </span>
        </div>
      </div>

      {/* Callout Block (Notion style) */}
      <div className="bg-[#f1f1ef] p-4 rounded-md flex gap-4 mb-12 border border-transparent hover:border-[#dfdfde] transition-colors">
        <div className="text-2xl select-none">💡</div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">
            {isJa ? '今日は何の日？' : 'Did you know?'}
          </h3>
          <p className="text-sm text-[#37352f]">
            {isJa 
              ? `今日は${currentMonth}月の誕生石「${birthstone.name_ja}」の日です。石言葉は「${birthstone.meaning_ja.join('・')}」。`
              : `Today is the day of "${birthstone.name_en}", the birthstone for ${currentMonth}. It symbolizes ${birthstone.meaning_en.join(' and ')}.`
            }
          </p>
        </div>
      </div>

      {/* Database View: Search */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-[#787774] uppercase tracking-wider">
          <Icons.Search />
          {isJa ? '誕生日を検索' : 'Search Birthday'}
        </div>
        
        <div className="border border-[#e9e9e7] rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#e9e9e7]">
            <div className="flex-1 hover:bg-[#f7f7f5] transition-colors">
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full p-3 bg-transparent text-sm focus:outline-none cursor-pointer"
              >
                {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 hover:bg-[#f7f7f5] transition-colors">
              <select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="w-full p-3 bg-transparent text-sm focus:outline-none cursor-pointer"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>{isJa ? `${m}月` : m}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 hover:bg-[#f7f7f5] transition-colors">
              <select
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
                className="w-full p-3 bg-transparent text-sm focus:outline-none cursor-pointer"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-[#f7f7f5] text-[#37352f] px-6 py-3 text-sm font-medium transition-colors border-l-0 sm:border-l border-[#e9e9e7]"
            >
              {isJa ? '開く' : 'Open'}
            </button>
          </form>
        </div>
      </div>

      {/* Database View: Gallery (Birthstones) */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4 border-b border-[#e9e9e7] pb-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#37352f]">
            <Icons.Grid />
            {isJa ? '誕生石データベース' : 'Birthstone Database'}
          </div>
          <span className="text-xs text-[#9b9a97] bg-[#f1f1ef] px-1.5 py-0.5 rounded">12 items</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.values(BIRTHSTONES).map((stone) => (
            <a
              key={stone.id}
              href={`/${locale}/birthstones/${stone.month}`}
              className="group border border-[#e9e9e7] rounded-lg overflow-hidden hover:bg-[#f7f7f5] transition-all cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
            >
              <div className={`h-24 ${stone.bg_class} flex items-center justify-center text-4xl opacity-80 group-hover:opacity-100 transition-opacity`}>
                💎
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">💎</span>
                  <span className="font-medium text-sm truncate">
                    {isJa ? stone.name_ja : stone.name_en}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-[#f1f1ef] text-[#787774] text-[10px] px-1.5 py-0.5 rounded">
                    {stone.month}{isJa ? '月' : ''}
                  </span>
                  {(isJa ? stone.meaning_ja : stone.meaning_en).map((m, i) => (
                    <span key={i} className={`${stone.bg_class} text-[10px] px-1.5 py-0.5 rounded truncate max-w-full`}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Link List View (Categories) */}
      <div className="mb-12">
        <div className="border-b border-[#e9e9e7] pb-2 mb-2 text-sm font-semibold text-[#37352f]">
          {isJa ? 'カテゴリー' : 'Categories'}
        </div>
        <div className="flex flex-col">
          <a href={`/${locale}/birthstones`} className="flex items-center gap-3 p-2 hover:bg-[#f1f1ef] rounded transition-colors group">
            <span className="text-xl p-1 bg-[#e7f3f8] rounded">💎</span>
            <span className="border-b border-[#e9e9e7] group-hover:border-transparent flex-1 py-1 text-sm font-medium">
              {isJa ? '誕生石一覧' : 'Birthstones'}
            </span>
          </a>
          <a href={`/${locale}/birthflowers`} className="flex items-center gap-3 p-2 hover:bg-[#f1f1ef] rounded transition-colors group">
            <span className="text-xl p-1 bg-[#fdebec] rounded">🌸</span>
            <span className="border-b border-[#e9e9e7] group-hover:border-transparent flex-1 py-1 text-sm font-medium">
              {isJa ? '誕生花一覧' : 'Birth Flowers'}
            </span>
          </a>
          <a href={`/${locale}/birthcolors`} className="flex items-center gap-3 p-2 hover:bg-[#f1f1ef] rounded transition-colors group">
            <span className="text-xl p-1 bg-[#fbf3db] rounded">🎨</span>
            <span className="border-b border-[#e9e9e7] group-hover:border-transparent flex-1 py-1 text-sm font-medium">
              {isJa ? '誕生色一覧' : 'Birth Colors'}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

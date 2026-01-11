'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

// 和暦データ
const ERAS = [
  { name: '令和', nameEn: 'Reiwa', start: 2019 },
  { name: '平成', nameEn: 'Heisei', start: 1989, end: 2019 },
  { name: '昭和', nameEn: 'Showa', start: 1926, end: 1989 },
  { name: '大正', nameEn: 'Taisho', start: 1912, end: 1926 },
  { name: '明治', nameEn: 'Meiji', start: 1868, end: 1912 },
];

function getWareki(year: number): { era: string; eraEn: string; year: number } {
  for (const era of ERAS) {
    if (year >= era.start && (!era.end || year < era.end)) {
      return {
        era: era.name,
        eraEn: era.nameEn,
        year: year - era.start + 1
      };
    }
  }
  return { era: '不明', eraEn: 'Unknown', year: 0 };
}

export default function AgeCalculatorPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isJa = locale === 'ja';
  
  const currentYear = new Date().getFullYear();
  const [birthYear, setBirthYear] = useState(1990);
  
  const age = currentYear - birthYear;
  const wareki = getWareki(birthYear);
  const currentWareki = getWareki(currentYear);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-4">
            Age Calculator
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            {isJa ? '和暦変換・年齢計算' : 'Japanese Era Converter'}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {isJa 
              ? '西暦から和暦への変換と、年齢計算ができます。'
              : 'Convert between Western and Japanese calendar years, and calculate age.'
            }
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          {/* Input Card */}
          <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm mb-8">
            <label className="block text-sm text-stone-500 mb-3">
              {isJa ? '生まれた年（西暦）' : 'Birth Year (Western)'}
            </label>
            <select
              value={birthYear}
              onChange={(e) => setBirthYear(Number(e.target.value))}
              className="w-full text-4xl font-bold text-stone-900 bg-stone-50 rounded-2xl px-6 py-4 border-0 focus:ring-2 focus:ring-stone-200 transition-all"
            >
              {Array.from({ length: 100 }, (_, i) => currentYear - i).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Age Card */}
            <div className="bg-white rounded-3xl p-8 border border-stone-100">
              <p className="text-xs tracking-[0.2em] text-stone-400 uppercase mb-4">
                {isJa ? '現在の年齢' : 'Current Age'}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold text-stone-900">{age}</span>
                <span className="text-2xl text-stone-400">{isJa ? '歳' : 'years old'}</span>
              </div>
            </div>

            {/* Wareki Card */}
            <div className="bg-white rounded-3xl p-8 border border-stone-100">
              <p className="text-xs tracking-[0.2em] text-stone-400 uppercase mb-4">
                {isJa ? '和暦' : 'Japanese Era'}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-stone-900">
                  {isJa ? wareki.era : wareki.eraEn}
                </span>
                <span className="text-2xl text-stone-400">
                  {wareki.year}{isJa ? '年' : ''}
                </span>
              </div>
              <p className="text-sm text-stone-500 mt-2">
                {birthYear}{isJa ? '年生まれ' : ' born'}
              </p>
            </div>
          </div>

          {/* Era Reference Table */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 mb-6">
              {isJa ? '和暦一覧' : 'Japanese Eras Reference'}
            </h2>
            <div className="space-y-4">
              {ERAS.map((era) => (
                <div 
                  key={era.name}
                  className="flex items-center justify-between py-3 border-b border-stone-100 last:border-0"
                >
                  <div>
                    <span className="font-bold text-stone-900">
                      {isJa ? era.name : era.nameEn}
                    </span>
                    <span className="text-stone-400 ml-2">
                      {isJa ? era.nameEn : era.name}
                    </span>
                  </div>
                  <span className="text-sm text-stone-500">
                    {era.start} - {era.end || isJa ? '現在' : 'Present'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

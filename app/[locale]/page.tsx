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

// 静的な誕生石データ
const BIRTHSTONES: Record<number, Birthstone> = {
  1: { id: '1', month: 1, name_ja: 'ガーネット', name_en: 'Garnet', meaning_ja: ['真実', '友愛'], meaning_en: ['Truth', 'Friendship'], color: '#9B1B30' },
  2: { id: '2', month: 2, name_ja: 'アメジスト', name_en: 'Amethyst', meaning_ja: ['誠実'], meaning_en: ['Sincerity'], color: '#9966CC' },
  3: { id: '3', month: 3, name_ja: 'アクアマリン', name_en: 'Aquamarine', meaning_ja: ['沈着'], meaning_en: ['Composure'], color: '#7FFFD4' },
  4: { id: '4', month: 4, name_ja: 'ダイヤモンド', name_en: 'Diamond', meaning_ja: ['永遠の絆'], meaning_en: ['Eternal Bond'], color: '#E8E8E8' },
  5: { id: '5', month: 5, name_ja: 'エメラルド', name_en: 'Emerald', meaning_ja: ['幸運'], meaning_en: ['Fortune'], color: '#50C878' },
  6: { id: '6', month: 6, name_ja: 'パール', name_en: 'Pearl', meaning_ja: ['健康'], meaning_en: ['Health'], color: '#F5F5DC' },
  7: { id: '7', month: 7, name_ja: 'ルビー', name_en: 'Ruby', meaning_ja: ['情熱'], meaning_en: ['Passion'], color: '#E0115F' },
  8: { id: '8', month: 8, name_ja: 'ペリドット', name_en: 'Peridot', meaning_ja: ['和合'], meaning_en: ['Harmony'], color: '#B4C424' },
  9: { id: '9', month: 9, name_ja: 'サファイア', name_en: 'Sapphire', meaning_ja: ['誠実'], meaning_en: ['Sincerity'], color: '#0F52BA' },
  10: { id: '10', month: 10, name_ja: 'オパール', name_en: 'Opal', meaning_ja: ['歓喜'], meaning_en: ['Joy'], color: '#A8C3BC' },
  11: { id: '11', month: 11, name_ja: 'トパーズ', name_en: 'Topaz', meaning_ja: ['友情'], meaning_en: ['Friendship'], color: '#FFC87C' },
  12: { id: '12', month: 12, name_ja: 'ターコイズ', name_en: 'Turquoise', meaning_ja: ['成功'], meaning_en: ['Success'], color: '#40E0D0' }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${locale}/birthday/${year}/${month}/${day}`);
  };

  const monthNames = {
    ja: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };

  const isJa = locale === 'ja';

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${todayBirthstone.color}40, transparent)`
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse"
               style={{ backgroundColor: `${todayBirthstone.color}30` }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] animate-pulse delay-1000"
               style={{ backgroundColor: `${todayBirthstone.color}20` }} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '60px 60px'
             }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/60 text-sm font-medium tracking-wide">
                  {isJa ? `${currentMonth}月${currentDay}日` : `${monthNames.en[currentMonth - 1]} ${currentDay}`}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                {isJa ? (
                  <>
                    今日の誕生石は
                    <br />
                    <span style={{ color: todayBirthstone.color }} className="drop-shadow-[0_0_30px_currentColor]">
                      {todayBirthstone.name_ja}
                    </span>
                  </>
                ) : (
                  <>
                    Today&apos;s birthstone is
                    <br />
                    <span style={{ color: todayBirthstone.color }} className="drop-shadow-[0_0_30px_currentColor]">
                      {todayBirthstone.name_en}
                    </span>
                  </>
                )}
              </h1>

              <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {isJa 
                  ? '誕生石・誕生花・誕生色で、あなただけの特別な日を発見しましょう'
                  : 'Discover the unique meaning behind your special day through birthstones, flowers, and colors'
                }
              </p>

              {/* Meaning tags */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
                {(isJa ? todayBirthstone.meaning_ja : todayBirthstone.meaning_en).map((meaning, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105"
                    style={{ 
                      borderColor: `${todayBirthstone.color}50`,
                      color: todayBirthstone.color,
                      backgroundColor: `${todayBirthstone.color}10`
                    }}
                  >
                    {meaning}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={`/${locale}/birthstones`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                style={{ backgroundColor: todayBirthstone.color }}
              >
                {isJa ? 'すべての誕生石を見る' : 'View All Birthstones'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right: Gem visualization */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer glow rings */}
                <div className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse"
                     style={{ backgroundColor: todayBirthstone.color, transform: 'scale(1.5)' }} />
                <div className="absolute inset-0 rounded-full blur-2xl opacity-20 animate-pulse delay-500"
                     style={{ backgroundColor: todayBirthstone.color, transform: 'scale(1.3)' }} />
                
                {/* Main gem */}
                <div 
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${todayBirthstone.color}, ${todayBirthstone.color}80 50%, ${todayBirthstone.color}40)`,
                    boxShadow: `
                      0 0 60px ${todayBirthstone.color}60,
                      inset 0 0 60px rgba(255,255,255,0.2),
                      inset 20px 20px 60px rgba(255,255,255,0.3)
                    `
                  }}
                >
                  {/* Shine effect */}
                  <div className="absolute top-8 left-12 w-16 h-16 bg-white/40 rounded-full blur-xl" />
                  <div className="absolute top-16 left-20 w-8 h-8 bg-white/60 rounded-full blur-md" />
                  
                  {/* Center text */}
                  <div className="text-center">
                    <span className="text-white/90 text-2xl md:text-3xl font-light tracking-widest">
                      {currentMonth}月
                    </span>
                  </div>
                </div>

                {/* Orbiting particles */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: todayBirthstone.color,
                      boxShadow: `0 0 10px ${todayBirthstone.color}`,
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 60}deg) translateX(180px)`,
                      animation: `orbit 20s linear infinite`,
                      animationDelay: `${i * -3}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Search Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isJa ? 'あなたの誕生日を調べる' : 'Discover Your Birthday'}
            </h2>
            <p className="text-white/50">
              {isJa ? '生年月日を入力して、あなただけの特別な情報を見つけましょう' : 'Enter your birth date to find your unique birthday profile'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-xl" />
            
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10">
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
                <div>
                  <label className="block text-white/40 text-sm font-medium mb-3 uppercase tracking-wider">
                    {tCommon('year')}
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
                  >
                    {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                      <option key={y} value={y} className="bg-[#1a1a2e] text-white">
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/40 text-sm font-medium mb-3 uppercase tracking-wider">
                    {tCommon('month')}
                  </label>
                  <select
                    value={month}
                    onChange={(e) => setMonth(Number(e.target.value))}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                      <option key={m} value={m} className="bg-[#1a1a2e] text-white">
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/40 text-sm font-medium mb-3 uppercase tracking-wider">
                    {tCommon('day')}
                  </label>
                  <select
                    value={day}
                    onChange={(e) => setDay(Number(e.target.value))}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d} className="bg-[#1a1a2e] text-white">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-5 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(147,51,234,0.4)] bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white"
              >
                {isJa ? '誕生日情報を見る' : 'View Birthday Info'} →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isJa ? '誕生日の要素を探索する' : 'Explore Birthday Elements'}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              {isJa ? '誕生石、誕生花、誕生色であなたの特別な日の意味を発見しましょう' : 'Discover the meaning behind your special day through stones, flowers, and colors'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Birthstones Card */}
            <a
              href={`/${locale}/birthstones`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500/10 to-rose-500/5 border border-rose-500/20 p-8 transition-all hover:scale-[1.02] hover:border-rose-500/40"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-colors" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-rose-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💎</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {t('exploreBirthstones')}
                </h3>
                <p className="text-white/50 mb-6 leading-relaxed">
                  {t('exploreBirthstonesDesc')}
                </p>
                
                <div className="flex items-center gap-2 text-rose-400 font-medium group-hover:gap-4 transition-all">
                  {isJa ? '詳しく見る' : 'Learn more'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Birthflowers Card */}
            <a
              href={`/${locale}/birthflowers`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 p-8 transition-all hover:scale-[1.02] hover:border-pink-500/40"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-colors" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🌸</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {t('exploreBirthflowers')}
                </h3>
                <p className="text-white/50 mb-6 leading-relaxed">
                  {t('exploreBirthflowersDesc')}
                </p>
                
                <div className="flex items-center gap-2 text-pink-400 font-medium group-hover:gap-4 transition-all">
                  {isJa ? '詳しく見る' : 'Learn more'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Birthcolors Card */}
            <a
              href={`/${locale}/birthcolors`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/20 p-8 transition-all hover:scale-[1.02] hover:border-violet-500/40"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-colors" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎨</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {t('exploreBirthcolors')}
                </h3>
                <p className="text-white/50 mb-6 leading-relaxed">
                  {t('exploreBirthcolorsDesc')}
                </p>
                
                <div className="flex items-center gap-2 text-violet-400 font-medium group-hover:gap-4 transition-all">
                  {isJa ? '詳しく見る' : 'Learn more'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Monthly Birthstones Preview */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isJa ? '12ヶ月の誕生石' : 'Birthstones by Month'}
            </h2>
            <p className="text-white/50">
              {isJa ? '各月の誕生石とその意味' : 'Each month\'s birthstone and its meaning'}
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.values(BIRTHSTONES).map((stone) => (
              <a
                key={stone.id}
                href={`/${locale}/birthstones/${stone.month}`}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:scale-105"
              >
                <div 
                  className="w-12 h-12 rounded-full mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: stone.color,
                    boxShadow: `0 0 20px ${stone.color}40`
                  }}
                />
                <span className="text-white/40 text-xs mb-1">{stone.month}月</span>
                <span className="text-white font-medium text-sm text-center">
                  {isJa ? stone.name_ja : stone.name_en}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Orbit animation keyframes */}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(180px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(180px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { supabase } from '@/lib/supabase';

interface Birthstone {
  id: string;
  month: number;
  name_ja: string;
  name_en: string;
  meaning_ja: string[];
  meaning_en: string[];
  color: string;
}

export default function HomePage() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const router = useRouter();

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const [year, setYear] = useState(currentYear - 30);
  const [month, setMonth] = useState(currentMonth);
  const [day, setDay] = useState(currentDay);
  const [todayBirthstone, setTodayBirthstone] = useState<Birthstone | null>(null);

  useEffect(() => {
    const fetchTodayBirthstone = async () => {
      const { data, error } = await supabase
        .from('birthstones')
        .select('*')
        .eq('month', currentMonth)
        .maybeSingle();

      if (data && !error) {
        setTodayBirthstone(data);
      }
    };

    fetchTodayBirthstone();
  }, [currentMonth]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/birthday/${year}/${month}/${day}`);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="relative">
      {/* Hero Section with Today's Birthstone */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              {t('subtitle')}
            </p>
            <p className="text-lg text-white/80">
              {monthNames[currentMonth - 1]} {currentDay}, {currentYear}
            </p>
          </div>

          {/* Today's Birthstone Showcase */}
          {todayBirthstone && (
            <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <div className="text-center mb-6">
                  <p className="text-white/80 text-sm uppercase tracking-wider mb-2">Today's Birthstone</p>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {todayBirthstone.name_en}
                  </h2>
                  <p className="text-2xl md:text-3xl text-white/90 mb-6">
                    {todayBirthstone.name_ja}
                  </p>
                </div>
                
                {/* Gem visualization */}
                <div className="flex justify-center mb-8">
                  <div 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl animate-float"
                    style={{ 
                      backgroundColor: todayBirthstone.color,
                      boxShadow: `0 0 60px ${todayBirthstone.color}80, inset 0 0 30px rgba(255,255,255,0.3)`
                    }}
                  />
                </div>

                {/* Meanings */}
                <div className="flex flex-wrap justify-center gap-3">
                  {todayBirthstone.meaning_en.map((meaning, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30"
                    >
                      {meaning}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgb(254, 242, 242)"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Birthday Input Form */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
            <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t('enterBirthday')}
            </h2>
            <p className="text-center text-gray-500 mb-8">Discover your unique birthday profile</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {tCommon('year')}
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all bg-gray-50 hover:bg-white"
                  >
                    {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {tCommon('month')}
                  </label>
                  <select
                    value={month}
                    onChange={(e) => setMonth(Number(e.target.value))}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all bg-gray-50 hover:bg-white"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {tCommon('day')}
                  </label>
                  <select
                    value={day}
                    onChange={(e) => setDay(Number(e.target.value))}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all bg-gray-50 hover:bg-white"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold py-5 px-8 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
              >
                ✨ {tCommon('calculate')}
              </button>
            </form>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Explore Birthday Elements
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Discover the meaning behind your special day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="/birthstones"
            className="group bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">💎</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {t('exploreBirthstones')}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t('exploreBirthstonesDesc')}</p>
            </div>
          </a>

          <a
            href="/birthflowers"
            className="group bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">🌸</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {t('exploreBirthflowers')}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t('exploreBirthflowersDesc')}</p>
            </div>
          </a>

          <a
            href="/birthcolors"
            className="group bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {t('exploreBirthcolors')}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t('exploreBirthcolorsDesc')}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

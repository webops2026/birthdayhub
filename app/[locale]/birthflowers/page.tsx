'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useBirthday } from '@/lib/birthday-context';

// 月別誕生花データ（充実版）
const BIRTHFLOWERS = [
  { 
    month: 1, 
    name: 'カーネーション', 
    nameEn: 'Carnation', 
    emoji: '🌸', 
    color: '#FFB3D9',
    meaning: '無垢で深い愛・母の愛', 
    meaningEn: 'Pure & Deep Love, Motherly Love',
    description: '母の日の花として有名。色によって花言葉が変わる多彩な花です。',
    descriptionEn: 'Famous as Mother\'s Day flower. Meanings vary by color.',
    season: '冬から春',
    seasonEn: 'Winter to Spring'
  },
  { 
    month: 2, 
    name: 'スミレ', 
    nameEn: 'Violet', 
    emoji: '💜', 
    color: '#8B7BB8',
    meaning: '誠実・謙虚・小さな幸せ', 
    meaningEn: 'Faithfulness, Modesty & Little Happiness',
    description: '可憐な紫の小花。ヨーロッパでは春の訪れを告げる花として親しまれています。',
    descriptionEn: 'Delicate purple flower. Symbol of spring arrival in Europe.',
    season: '早春',
    seasonEn: 'Early Spring'
  },
  { 
    month: 3, 
    name: 'スイセン', 
    nameEn: 'Daffodil', 
    emoji: '🌼', 
    color: '#FFED4E',
    meaning: '希望・自己愛・新しい始まり', 
    meaningEn: 'Hope, Self-love & New Beginnings',
    description: '春を象徴する黄色い花。ラッパのような形が特徴的です。',
    descriptionEn: 'Yellow flower symbolizing spring. Characterized by trumpet shape.',
    season: '早春',
    seasonEn: 'Early Spring'
  },
  { 
    month: 4, 
    name: 'デイジー', 
    nameEn: 'Daisy', 
    emoji: '🌼', 
    color: '#FFFFFF',
    meaning: '純潔・希望・平和', 
    meaningEn: 'Innocence, Hope & Peace',
    description: '白い花びらと黄色い中心が愛らしい花。英語で「日の目」という意味があります。',
    descriptionEn: 'Lovely flower with white petals and yellow center. Name means "day\'s eye".',
    season: '春',
    seasonEn: 'Spring'
  },
  { 
    month: 5, 
    name: 'スズラン', 
    nameEn: 'Lily of the Valley', 
    emoji: '🌿', 
    color: '#E8F5E9',
    meaning: '幸福の再来・純粋', 
    meaningEn: 'Return of Happiness & Purity',
    description: '鈴のような小さな白い花。フランスでは5月1日に贈る習慣があります。',
    descriptionEn: 'Small white bell-shaped flowers. Traditionally gifted on May 1st in France.',
    season: '春',
    seasonEn: 'Spring'
  },
  { 
    month: 6, 
    name: 'バラ', 
    nameEn: 'Rose', 
    emoji: '🌹', 
    color: '#FF6B9D',
    meaning: '愛・美・情熱', 
    meaningEn: 'Love, Beauty & Passion',
    description: '花の女王と呼ばれる華麗な花。色と本数で様々な愛のメッセージを伝えます。',
    descriptionEn: 'Majestic flower called "Queen of Flowers". Conveys various love messages by color and number.',
    season: '春から秋',
    seasonEn: 'Spring to Fall'
  },
  { 
    month: 7, 
    name: 'ユリ', 
    nameEn: 'Lily', 
    emoji: '🌷', 
    color: '#FFEBF0',
    meaning: '純粋・威厳・高貴', 
    meaningEn: 'Purity, Majesty & Nobility',
    description: '大きく美しい花びらと上品な香りが特徴。聖母マリアの象徴とされています。',
    descriptionEn: 'Large beautiful petals with elegant fragrance. Symbol of Virgin Mary.',
    season: '初夏',
    seasonEn: 'Early Summer'
  },
  { 
    month: 8, 
    name: 'ヒマワリ', 
    nameEn: 'Sunflower', 
    emoji: '🌻', 
    color: '#FFD700',
    meaning: '憧れ・情熱・光輝', 
    meaningEn: 'Adoration, Passion & Radiance',
    description: '太陽に向かって咲く夏の象徴。明るく元気なイメージの花です。',
    descriptionEn: 'Symbol of summer that turns toward the sun. Bright and cheerful image.',
    season: '夏',
    seasonEn: 'Summer'
  },
  { 
    month: 9, 
    name: 'アスター', 
    nameEn: 'Aster', 
    emoji: '💐', 
    color: '#DDA0DD',
    meaning: '信頼・追憶・変化', 
    meaningEn: 'Trust, Remembrance & Change',
    description: '星のような形から「星」を意味する名前がつけられました。',
    descriptionEn: 'Named for its star-like shape. "Aster" means star in Greek.',
    season: '夏から秋',
    seasonEn: 'Summer to Fall'
  },
  { 
    month: 10, 
    name: 'キク', 
    nameEn: 'Chrysanthemum', 
    emoji: '🌸', 
    color: '#FFE4B5',
    meaning: '高貴・長寿・真実', 
    meaningEn: 'Nobility, Longevity & Truth',
    description: '日本の国花。皇室の紋章にも使われる格調高い花です。',
    descriptionEn: 'National flower of Japan. Used in Imperial Family crest.',
    season: '秋',
    seasonEn: 'Fall'
  },
  { 
    month: 11, 
    name: 'ガーベラ', 
    nameEn: 'Gerbera', 
    emoji: '🌺', 
    color: '#FF6347',
    meaning: '希望・前進・感謝', 
    meaningEn: 'Hope, Progress & Gratitude',
    description: '明るくポップな色合いが人気。贈り物に最適な花です。',
    descriptionEn: 'Popular for bright, pop colors. Perfect for gifts.',
    season: '春と秋',
    seasonEn: 'Spring & Fall'
  },
  { 
    month: 12, 
    name: 'ポインセチア', 
    nameEn: 'Poinsettia', 
    emoji: '🎄', 
    color: '#DC143C',
    meaning: '祝福・幸運・聖なる夜', 
    meaningEn: 'Blessing, Good Luck & Holy Night',
    description: 'クリスマスの花として有名。赤と緑の配色が美しい植物です。',
    descriptionEn: 'Famous as Christmas flower. Beautiful red and green coloring.',
    season: '冬',
    seasonEn: 'Winter'
  },
];

export default function BirthflowersPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isJa = locale === 'ja';
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const { month: birthMonth, isSet, isInitialized } = useBirthday();

  // 誕生月に自動スクロール
  useEffect(() => {
    if (isInitialized && isSet) {
      const timer = setTimeout(() => {
        const element = document.getElementById(`month-${birthMonth}`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setSelectedMonth(birthMonth);
        setTimeout(() => setSelectedMonth(null), 2000);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInitialized, isSet, birthMonth]);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-4">
            Birth Flowers
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            {isJa ? '誕生花' : 'Birth Flowers'}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed text-lg">
            {isJa 
              ? '各月を象徴する花には、美しい花言葉が込められています。あなたの誕生月の花を見つけて、その意味を知りましょう。'
              : 'Each month has its own flower with beautiful meanings. Discover the flower of your birth month and learn its significance.'
            }
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-sm font-medium text-stone-700 mb-4">
              {isJa ? '月を選択' : 'Select Month'}
            </p>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    const element = document.getElementById(`month-${m}`);
                    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setSelectedMonth(m);
                    setTimeout(() => setSelectedMonth(null), 2000);
                  }}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-stone-100 hover:scale-105"
                >
                  {m}月
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {BIRTHFLOWERS.map((flower) => (
              <div
                key={flower.month}
                id={`month-${flower.month}`}
                className={`group bg-white rounded-3xl p-8 border transition-all duration-500 ${
                  selectedMonth === flower.month
                    ? 'border-stone-400 shadow-2xl scale-[1.02] ring-2 ring-stone-300'
                    : 'border-stone-100 hover:border-stone-200 hover:shadow-xl'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-stone-100 rounded-full text-xs tracking-[0.2em] text-stone-500 uppercase mb-3">
                      {isJa ? `${flower.month}月` : `${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][flower.month - 1]}`}
                    </span>
                    <h2 className="text-3xl font-bold text-stone-900 tracking-tight mb-1">
                      {isJa ? flower.name : flower.nameEn}
                    </h2>
                    <p className="text-base text-stone-400">
                      {isJa ? flower.nameEn : flower.name}
                    </p>
                  </div>
                  
                  {/* Flower Color - Elegant */}
                  <div 
                    className="w-24 h-24 rounded-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${flower.color}60 0%, ${flower.color} 100%)`,
                      boxShadow: `inset 0 2px 8px rgba(255,255,255,0.4), 0 8px 24px ${flower.color}40`
                    }}
                  />
                </div>

                {/* Meaning */}
                <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: flower.color + '15' }}>
                  <p className="text-xs text-stone-500 mb-1 tracking-wider">
                    {isJa ? '花言葉' : 'FLOWER LANGUAGE'}
                  </p>
                  <p className="text-base font-semibold text-stone-800">
                    {isJa ? flower.meaning : flower.meaningEn}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-xs text-stone-500 mb-2 tracking-wider">
                    {isJa ? '特徴' : 'CHARACTERISTICS'}
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {isJa ? flower.description : flower.descriptionEn}
                  </p>
                </div>

                {/* Season */}
                <div className="pt-4 border-t border-stone-100">
                  <p className="text-xs text-stone-500 mb-2 tracking-wider">
                    {isJa ? '開花時期' : 'BLOOMING SEASON'}
                  </p>
                  <p className="text-sm text-stone-700">
                    {isJa ? flower.season : flower.seasonEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useParams } from 'next/navigation';

// 月別誕生花データ
const BIRTHFLOWERS = [
  { month: 1, name: 'カーネーション', nameEn: 'Carnation', emoji: '🌸', meaning: '無垢で深い愛', meaningEn: 'Pure & Deep Love' },
  { month: 2, name: 'スミレ', nameEn: 'Violet', emoji: '💜', meaning: '誠実・謙虚', meaningEn: 'Faithfulness & Modesty' },
  { month: 3, name: 'スイセン', nameEn: 'Daffodil', emoji: '🌼', meaning: '希望・自己愛', meaningEn: 'Hope & Self-love' },
  { month: 4, name: 'デイジー', nameEn: 'Daisy', emoji: '🌼', meaning: '純潔・希望', meaningEn: 'Innocence & Hope' },
  { month: 5, name: 'スズラン', nameEn: 'Lily of the Valley', emoji: '🌿', meaning: '幸福の再来', meaningEn: 'Return of Happiness' },
  { month: 6, name: 'バラ', nameEn: 'Rose', emoji: '🌹', meaning: '愛・美', meaningEn: 'Love & Beauty' },
  { month: 7, name: 'ユリ', nameEn: 'Lily', emoji: '🌷', meaning: '純粋・威厳', meaningEn: 'Purity & Majesty' },
  { month: 8, name: 'ヒマワリ', nameEn: 'Sunflower', emoji: '🌻', meaning: '憧れ・情熱', meaningEn: 'Adoration & Passion' },
  { month: 9, name: 'アスター', nameEn: 'Aster', emoji: '💐', meaning: '信頼・追憶', meaningEn: 'Trust & Remembrance' },
  { month: 10, name: 'キク', nameEn: 'Chrysanthemum', emoji: '🌸', meaning: '高貴・長寿', meaningEn: 'Nobility & Longevity' },
  { month: 11, name: 'ガーベラ', nameEn: 'Gerbera', emoji: '🌺', meaning: '希望・前進', meaningEn: 'Hope & Forward' },
  { month: 12, name: 'ポインセチア', nameEn: 'Poinsettia', emoji: '🎄', meaning: '祝福・幸運', meaningEn: 'Blessing & Good Luck' },
];

export default function BirthflowersPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isJa = locale === 'ja';

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
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {isJa 
              ? '各月を象徴する花には、美しい花言葉が込められています。あなたの誕生月の花を見つけてください。'
              : 'Each month has its own flower with beautiful meanings. Discover the flower of your birth month.'
            }
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {BIRTHFLOWERS.map((flower) => (
              <a
                key={flower.month}
                href={`/${locale}/birthflowers/${flower.month}`}
                className="group bg-white rounded-2xl p-6 border border-stone-100 hover:border-stone-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Month Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs tracking-[0.2em] text-stone-400 uppercase">
                    {isJa ? `${flower.month}月` : `${flower.month.toString().padStart(2, '0')} / ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][flower.month - 1]}`}
                  </span>
                  <svg 
                    className="w-4 h-4 text-stone-300 group-hover:text-stone-500 group-hover:translate-x-1 transition-all" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Flower Emoji */}
                <div className="w-16 h-16 rounded-2xl mb-6 bg-stone-50 flex items-center justify-center">
                  <span className="text-4xl">{flower.emoji}</span>
                </div>

                {/* Flower Name */}
                <h2 className="text-2xl font-bold text-stone-900 tracking-tight mb-1">
                  {isJa ? flower.name : flower.nameEn}
                </h2>
                <p className="text-sm text-stone-400 mb-4">
                  {isJa ? flower.nameEn : flower.name}
                </p>

                {/* Meaning */}
                <p className="text-sm text-stone-600">
                  {isJa ? flower.meaning : flower.meaningEn}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

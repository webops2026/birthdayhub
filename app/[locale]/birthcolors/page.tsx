'use client';

import { useParams } from 'next/navigation';

// 月別誕生色データ
const BIRTHCOLORS = [
  { month: 1, name: '深紅', nameEn: 'Crimson', color: '#8B1538', meaning: '情熱・力強さ', meaningEn: 'Passion & Strength' },
  { month: 2, name: '藤色', nameEn: 'Wisteria', color: '#89729E', meaning: '優雅・神秘', meaningEn: 'Elegance & Mystery' },
  { month: 3, name: '若草色', nameEn: 'Spring Green', color: '#B9D08B', meaning: '希望・新生', meaningEn: 'Hope & Renewal' },
  { month: 4, name: '桜色', nameEn: 'Cherry Blossom', color: '#FEEEED', meaning: '純潔・優美', meaningEn: 'Purity & Grace' },
  { month: 5, name: '翡翠色', nameEn: 'Jade', color: '#38B48B', meaning: '調和・繁栄', meaningEn: 'Harmony & Prosperity' },
  { month: 6, name: '紫陽花色', nameEn: 'Hydrangea', color: '#7B90D2', meaning: '移ろい・辛抱', meaningEn: 'Change & Patience' },
  { month: 7, name: '紅色', nameEn: 'Vermilion', color: '#D7003A', meaning: '活力・情熱', meaningEn: 'Vitality & Passion' },
  { month: 8, name: '向日葵色', nameEn: 'Sunflower Yellow', color: '#FFC20E', meaning: '輝き・活発', meaningEn: 'Radiance & Energy' },
  { month: 9, name: '葡萄色', nameEn: 'Grape', color: '#522F60', meaning: '豊穣・成熟', meaningEn: 'Abundance & Maturity' },
  { month: 10, name: '茜色', nameEn: 'Madder Red', color: '#B7282E', meaning: '実り・変化', meaningEn: 'Harvest & Change' },
  { month: 11, name: '琥珀色', nameEn: 'Amber', color: '#C44303', meaning: '温もり・安定', meaningEn: 'Warmth & Stability' },
  { month: 12, name: '銀鼠色', nameEn: 'Silver Gray', color: '#95949A', meaning: '静寂・洗練', meaningEn: 'Tranquility & Refinement' },
];

export default function BirthcolorsPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isJa = locale === 'ja';

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-4">
            Birth Colors
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            {isJa ? '誕生色' : 'Birth Colors'}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {isJa 
              ? '日本の四季と文化から生まれた、各月を象徴する美しい色。あなたの誕生月の色を見つけてください。'
              : 'Beautiful colors symbolizing each month, inspired by Japanese seasons and culture. Discover the color of your birth month.'
            }
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {BIRTHCOLORS.map((color) => (
              <a
                key={color.month}
                href={`/${locale}/birthcolors/${color.month}`}
                className="group bg-white rounded-2xl p-6 border border-stone-100 hover:border-stone-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Month Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs tracking-[0.2em] text-stone-400 uppercase">
                    {isJa ? `${color.month}月` : `${color.month.toString().padStart(2, '0')} / ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][color.month - 1]}`}
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

                {/* Color Swatch */}
                <div 
                  className="w-full h-24 rounded-2xl mb-6"
                  style={{ 
                    backgroundColor: color.color,
                    boxShadow: `0 4px 20px ${color.color}40`
                  }}
                />

                {/* Color Name */}
                <h2 className="text-2xl font-bold text-stone-900 tracking-tight mb-1">
                  {isJa ? color.name : color.nameEn}
                </h2>
                <p className="text-sm text-stone-400 mb-4 font-mono">
                  {color.color}
                </p>

                {/* Meaning */}
                <p className="text-sm text-stone-600">
                  {isJa ? color.meaning : color.meaningEn}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

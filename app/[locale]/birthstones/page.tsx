'use client';

import { useParams } from 'next/navigation';

// 月別誕生石データ
const BIRTHSTONES = [
  { month: 1, name: 'ガーネット', nameEn: 'Garnet', color: '#8B0000', meaning: '真実・友愛', meaningEn: 'Truth & Friendship' },
  { month: 2, name: 'アメジスト', nameEn: 'Amethyst', color: '#9966CC', meaning: '誠実・心の平和', meaningEn: 'Sincerity & Peace' },
  { month: 3, name: 'アクアマリン', nameEn: 'Aquamarine', color: '#7FFFD4', meaning: '沈着・勇敢', meaningEn: 'Courage & Serenity' },
  { month: 4, name: 'ダイヤモンド', nameEn: 'Diamond', color: '#B9F2FF', meaning: '永遠の絆・純潔', meaningEn: 'Eternal Bond & Purity' },
  { month: 5, name: 'エメラルド', nameEn: 'Emerald', color: '#50C878', meaning: '幸運・幸福', meaningEn: 'Luck & Happiness' },
  { month: 6, name: 'パール', nameEn: 'Pearl', color: '#FDEEF4', meaning: '健康・富・長寿', meaningEn: 'Health & Wealth' },
  { month: 7, name: 'ルビー', nameEn: 'Ruby', color: '#E0115F', meaning: '情熱・仁愛', meaningEn: 'Passion & Love' },
  { month: 8, name: 'ペリドット', nameEn: 'Peridot', color: '#E6E200', meaning: '夫婦の幸福', meaningEn: 'Marital Happiness' },
  { month: 9, name: 'サファイア', nameEn: 'Sapphire', color: '#0F52BA', meaning: '慈愛・誠実', meaningEn: 'Wisdom & Loyalty' },
  { month: 10, name: 'オパール', nameEn: 'Opal', color: '#A8C3BC', meaning: '希望・幸運', meaningEn: 'Hope & Luck' },
  { month: 11, name: 'トパーズ', nameEn: 'Topaz', color: '#FFC87C', meaning: '友情・希望', meaningEn: 'Friendship & Hope' },
  { month: 12, name: 'ターコイズ', nameEn: 'Turquoise', color: '#40E0D0', meaning: '成功・繁栄', meaningEn: 'Success & Prosperity' },
];

export default function BirthstonesPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isJa = locale === 'ja';

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-4">
            Birthstones
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            {isJa ? '誕生石' : 'Birthstones'}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {isJa 
              ? '各月に定められた宝石には、それぞれ特別な意味と力が込められています。あなたの誕生月の石を見つけてください。'
              : 'Each month has its own special gemstone with unique meaning and power. Discover the stone of your birth month.'
            }
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {BIRTHSTONES.map((stone) => (
              <a
                key={stone.month}
                href={`/${locale}/birthstones/${stone.month}`}
                className="group bg-white rounded-2xl p-6 border border-stone-100 hover:border-stone-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Month Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs tracking-[0.2em] text-stone-400 uppercase">
                    {isJa ? `${stone.month}月` : `${stone.month.toString().padStart(2, '0')} / ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][stone.month - 1]}`}
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

                {/* Stone Color */}
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 shadow-inner"
                  style={{ 
                    background: `linear-gradient(135deg, ${stone.color}40 0%, ${stone.color} 100%)`,
                    boxShadow: `inset 0 2px 4px rgba(255,255,255,0.3), 0 4px 12px ${stone.color}30`
                  }}
                />

                {/* Stone Name */}
                <h2 className="text-2xl font-bold text-stone-900 tracking-tight mb-1">
                  {isJa ? stone.name : stone.nameEn}
                </h2>
                <p className="text-sm text-stone-400 mb-4">
                  {isJa ? stone.nameEn : stone.name}
                </p>

                {/* Meaning */}
                <p className="text-sm text-stone-600">
                  {isJa ? stone.meaning : stone.meaningEn}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

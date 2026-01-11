'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

// 月別誕生石データ（充実版）
const BIRTHSTONES = [
  { 
    month: 1, 
    name: 'ガーネット', 
    nameEn: 'Garnet', 
    color: '#8B0000', 
    meaning: '真実・友愛・貞操', 
    meaningEn: 'Truth, Friendship & Loyalty',
    description: '深い赤色が特徴の宝石。古代から「勝利の石」として戦士に愛されました。',
    descriptionEn: 'Known for its deep red color. Ancient warriors cherished it as the "stone of victory".',
    effects: '情熱を高め、目標達成をサポート',
    effectsEn: 'Enhances passion and supports goal achievement'
  },
  { 
    month: 2, 
    name: 'アメジスト', 
    nameEn: 'Amethyst', 
    color: '#9966CC', 
    meaning: '誠実・心の平和・高貴', 
    meaningEn: 'Sincerity, Peace & Nobility',
    description: '紫色の美しい水晶。ギリシャ神話では「酔わない石」とされています。',
    descriptionEn: 'Beautiful purple quartz. In Greek mythology, known as the "stone of sobriety".',
    effects: '精神の安定、直感力を高める',
    effectsEn: 'Stabilizes mind and enhances intuition'
  },
  { 
    month: 3, 
    name: 'アクアマリン', 
    nameEn: 'Aquamarine', 
    color: '#7FFFD4', 
    meaning: '沈着・勇敢・聡明', 
    meaningEn: 'Courage, Serenity & Wisdom',
    description: '海のような青緑色の宝石。船乗りのお守りとして使われてきました。',
    descriptionEn: 'Sea-blue gemstone. Historically used as a talisman for sailors.',
    effects: 'コミュニケーション能力向上、癒し',
    effectsEn: 'Improves communication and provides healing'
  },
  { 
    month: 4, 
    name: 'ダイヤモンド', 
    nameEn: 'Diamond', 
    color: '#B9F2FF', 
    meaning: '永遠の絆・純潔・不屈', 
    meaningEn: 'Eternal Bond, Purity & Invincibility',
    description: '最も硬い天然物質。「永遠の愛」の象徴として婚約指輪に使われます。',
    descriptionEn: 'The hardest natural substance. Symbolizes eternal love in engagement rings.',
    effects: '精神力強化、成功を引き寄せる',
    effectsEn: 'Strengthens spirit and attracts success'
  },
  { 
    month: 5, 
    name: 'エメラルド', 
    nameEn: 'Emerald', 
    color: '#50C878', 
    meaning: '幸運・幸福・希望', 
    meaningEn: 'Luck, Happiness & Hope',
    description: '鮮やかな緑色の宝石。クレオパトラも愛したとされる高貴な石です。',
    descriptionEn: 'Vivid green gemstone. Said to be beloved by Cleopatra.',
    effects: '愛と調和、知性を高める',
    effectsEn: 'Brings love, harmony and enhances intelligence'
  },
  { 
    month: 6, 
    name: 'パール（真珠）', 
    nameEn: 'Pearl', 
    color: '#FDEEF4', 
    meaning: '健康・富・長寿・純潔', 
    meaningEn: 'Health, Wealth, Longevity & Purity',
    description: '貝から生まれる有機宝石。「月の涙」「人魚の涙」とも呼ばれます。',
    descriptionEn: 'Organic gem from oysters. Called "tears of the moon" or "mermaid\'s tears".',
    effects: '母性愛、精神の安定',
    effectsEn: 'Maternal love and mental stability'
  },
  { 
    month: 7, 
    name: 'ルビー', 
    nameEn: 'Ruby', 
    color: '#E0115F', 
    meaning: '情熱・仁愛・威厳', 
    meaningEn: 'Passion, Love & Dignity',
    description: '「宝石の女王」と呼ばれる赤い宝石。王族に愛されてきました。',
    descriptionEn: 'Red gem called "Queen of Gems". Beloved by royalty throughout history.',
    effects: '勝利、カリスマ性を高める',
    effectsEn: 'Brings victory and enhances charisma'
  },
  { 
    month: 8, 
    name: 'ペリドット', 
    nameEn: 'Peridot', 
    color: '#E6E200', 
    meaning: '夫婦の幸福・和合', 
    meaningEn: 'Marital Happiness & Harmony',
    description: '明るい黄緑色の宝石。「太陽の石」として古代エジプトで崇拝されました。',
    descriptionEn: 'Bright yellow-green gem. Worshipped as the "sun stone" in ancient Egypt.',
    effects: 'ネガティブエネルギーを払う、前向きさ',
    effectsEn: 'Dispels negativity and brings positivity'
  },
  { 
    month: 9, 
    name: 'サファイア', 
    nameEn: 'Sapphire', 
    color: '#0F52BA', 
    meaning: '慈愛・誠実・徳望', 
    meaningEn: 'Wisdom, Loyalty & Nobility',
    description: '深い青色の宝石。王室のジュエリーとして多く使われています。',
    descriptionEn: 'Deep blue gemstone. Frequently used in royal jewelry.',
    effects: '集中力向上、冷静な判断力',
    effectsEn: 'Improves focus and calm judgment'
  },
  { 
    month: 10, 
    name: 'オパール', 
    nameEn: 'Opal', 
    color: '#A8C3BC', 
    meaning: '希望・幸運・創造', 
    meaningEn: 'Hope, Luck & Creativity',
    description: '虹色に輝く神秘的な宝石。「遊色効果」が美しい石です。',
    descriptionEn: 'Mystical gem with rainbow colors. Known for beautiful "play of color".',
    effects: '創造性、インスピレーション',
    effectsEn: 'Enhances creativity and inspiration'
  },
  { 
    month: 11, 
    name: 'トパーズ', 
    nameEn: 'Topaz', 
    color: '#FFC87C', 
    meaning: '友情・希望・潔白', 
    meaningEn: 'Friendship, Hope & Integrity',
    description: '黄金色から青色まで様々な色があります。古代ギリシャでは力の石とされました。',
    descriptionEn: 'Ranges from golden to blue. Ancient Greeks considered it a stone of strength.',
    effects: '明るさ、自信を与える',
    effectsEn: 'Brings brightness and confidence'
  },
  { 
    month: 12, 
    name: 'ターコイズ', 
    nameEn: 'Turquoise', 
    color: '#40E0D0', 
    meaning: '成功・繁栄・旅の安全', 
    meaningEn: 'Success, Prosperity & Safe Travel',
    description: 'トルコ石とも呼ばれる青い宝石。旅のお守りとして古くから使われています。',
    descriptionEn: 'Blue stone also called Turkish stone. Long used as a travel talisman.',
    effects: '邪気を払う、コミュニケーション',
    effectsEn: 'Wards off evil and enhances communication'
  },
];

export default function BirthstonesPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isJa = locale === 'ja';
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

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
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed text-lg">
            {isJa 
              ? '各月に定められた宝石には、それぞれ特別な意味と力が込められています。あなたの誕生月の石を見つけて、その魅力を知りましょう。'
              : 'Each month has its own special gemstone with unique meaning and power. Discover the stone of your birth month and learn about its beauty.'
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
            {BIRTHSTONES.map((stone) => (
              <div
                key={stone.month}
                id={`month-${stone.month}`}
                className={`group bg-white rounded-3xl p-8 border transition-all duration-500 ${
                  selectedMonth === stone.month
                    ? 'border-stone-400 shadow-2xl scale-[1.02] ring-2 ring-stone-300'
                    : 'border-stone-100 hover:border-stone-200 hover:shadow-xl'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-stone-100 rounded-full text-xs tracking-[0.2em] text-stone-500 uppercase mb-3">
                      {isJa ? `${stone.month}月` : `${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][stone.month - 1]}`}
                    </span>
                    <h2 className="text-3xl font-bold text-stone-900 tracking-tight mb-1">
                      {isJa ? stone.name : stone.nameEn}
                    </h2>
                    <p className="text-base text-stone-400">
                      {isJa ? stone.nameEn : stone.name}
                    </p>
                  </div>
                  
                  {/* Stone Visual - Larger */}
                  <div 
                    className="w-24 h-24 rounded-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${stone.color}60 0%, ${stone.color} 100%)`,
                      boxShadow: `inset 0 2px 8px rgba(255,255,255,0.4), 0 8px 24px ${stone.color}40`
                    }}
                  />
                </div>

                {/* Meaning */}
                <div className="mb-6 p-4 bg-stone-50 rounded-xl">
                  <p className="text-xs text-stone-500 mb-1 tracking-wider">
                    {isJa ? '石言葉' : 'MEANING'}
                  </p>
                  <p className="text-base font-semibold text-stone-800">
                    {isJa ? stone.meaning : stone.meaningEn}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-xs text-stone-500 mb-2 tracking-wider">
                    {isJa ? '特徴' : 'CHARACTERISTICS'}
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {isJa ? stone.description : stone.descriptionEn}
                  </p>
                </div>

                {/* Effects */}
                <div className="pt-4 border-t border-stone-100">
                  <p className="text-xs text-stone-500 mb-2 tracking-wider">
                    {isJa ? '効果・パワー' : 'EFFECTS & POWER'}
                  </p>
                  <p className="text-sm text-stone-700">
                    {isJa ? stone.effects : stone.effectsEn}
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

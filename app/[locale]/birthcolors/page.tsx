'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

// 月別誕生色データ（充実版）
const BIRTHCOLORS = [
  { 
    month: 1, 
    name: '深紅', 
    nameEn: 'Crimson', 
    color: '#8B1538',
    hex: '#8B1538',
    rgb: 'RGB(139, 21, 56)',
    meaning: '情熱・力強さ・決意', 
    meaningEn: 'Passion, Strength & Determination',
    description: '新年の始まりを象徴する力強い赤。エネルギーと情熱に満ちた色です。',
    descriptionEn: 'Strong red symbolizing new year\'s beginning. Full of energy and passion.',
    personality: '行動力があり、リーダーシップを発揮する',
    personalityEn: 'Action-oriented with leadership qualities'
  },
  { 
    month: 2, 
    name: '藤色', 
    nameEn: 'Wisteria', 
    color: '#89729E',
    hex: '#89729E',
    rgb: 'RGB(137, 114, 158)',
    meaning: '優雅・神秘・高貴', 
    meaningEn: 'Elegance, Mystery & Nobility',
    description: '春の訪れを告げる藤の花の色。優雅で神秘的な印象を与えます。',
    descriptionEn: 'Color of wisteria announcing spring. Gives elegant and mystical impression.',
    personality: '創造的で芸術的感性が豊か',
    personalityEn: 'Creative with rich artistic sensibility'
  },
  { 
    month: 3, 
    name: '若草色', 
    nameEn: 'Spring Green', 
    color: '#B9D08B',
    hex: '#B9D08B',
    rgb: 'RGB(185, 208, 139)',
    meaning: '希望・新生・成長', 
    meaningEn: 'Hope, Renewal & Growth',
    description: '芽吹く若草の色。新しい始まりと成長を象徴します。',
    descriptionEn: 'Color of budding grass. Symbolizes new beginnings and growth.',
    personality: '前向きで柔軟性がある',
    personalityEn: 'Positive and flexible'
  },
  { 
    month: 4, 
    name: '桜色', 
    nameEn: 'Cherry Blossom', 
    color: '#FEEEED',
    hex: '#FEEEED',
    rgb: 'RGB(254, 238, 237)',
    meaning: '純潔・優美・儚さ', 
    meaningEn: 'Purity, Grace & Transience',
    description: '日本の春を代表する桜の色。優しく柔らかな印象です。',
    descriptionEn: 'Color representing Japanese spring. Gentle and soft impression.',
    personality: '優しく思いやりがある',
    personalityEn: 'Kind and considerate'
  },
  { 
    month: 5, 
    name: '翡翠色', 
    nameEn: 'Jade', 
    color: '#38B48B',
    hex: '#38B48B',
    rgb: 'RGB(56, 180, 139)',
    meaning: '調和・繁栄・癒し', 
    meaningEn: 'Harmony, Prosperity & Healing',
    description: '新緑の美しさを表す色。調和と癒しをもたらします。',
    descriptionEn: 'Color expressing beauty of fresh greenery. Brings harmony and healing.',
    personality: 'バランス感覚に優れ、調和を重んじる',
    personalityEn: 'Excellent balance and values harmony'
  },
  { 
    month: 6, 
    name: '紫陽花色', 
    nameEn: 'Hydrangea', 
    color: '#7B90D2',
    hex: '#7B90D2',
    rgb: 'RGB(123, 144, 210)',
    meaning: '移ろい・辛抱・神秘', 
    meaningEn: 'Change, Patience & Mystery',
    description: '梅雨を彩る紫陽花の色。変化と適応を象徴します。',
    descriptionEn: 'Color of hydrangeas adorning rainy season. Symbolizes change and adaptation.',
    personality: '忍耐強く、状況に応じて柔軟に対応',
    personalityEn: 'Patient and flexibly adapts to situations'
  },
  { 
    month: 7, 
    name: '紅色', 
    nameEn: 'Vermilion', 
    color: '#D7003A',
    hex: '#D7003A',
    rgb: 'RGB(215, 0, 58)',
    meaning: '活力・情熱・勇気', 
    meaningEn: 'Vitality, Passion & Courage',
    description: '夏の太陽のような鮮やかな赤。活力とエネルギーに満ちています。',
    descriptionEn: 'Vivid red like summer sun. Full of vitality and energy.',
    personality: '情熱的で行動的、チャレンジ精神旺盛',
    personalityEn: 'Passionate, active with strong challenge spirit'
  },
  { 
    month: 8, 
    name: '向日葵色', 
    nameEn: 'Sunflower Yellow', 
    color: '#FFC20E',
    hex: '#FFC20E',
    rgb: 'RGB(255, 194, 14)',
    meaning: '輝き・活発・希望', 
    meaningEn: 'Radiance, Energy & Hope',
    description: '太陽に向かうひまわりの色。明るく元気な印象を与えます。',
    descriptionEn: 'Color of sunflowers facing the sun. Gives bright and cheerful impression.',
    personality: '明るく社交的、ポジティブ思考',
    personalityEn: 'Bright, sociable with positive thinking'
  },
  { 
    month: 9, 
    name: '葡萄色', 
    nameEn: 'Grape', 
    color: '#522F60',
    hex: '#522F60',
    rgb: 'RGB(82, 47, 96)',
    meaning: '豊穣・成熟・知性', 
    meaningEn: 'Abundance, Maturity & Intelligence',
    description: '実りの秋を表す深い紫。知性と成熟を象徴します。',
    descriptionEn: 'Deep purple representing harvest autumn. Symbolizes intelligence and maturity.',
    personality: '思慮深く、知的で落ち着いている',
    personalityEn: 'Thoughtful, intellectual and calm'
  },
  { 
    month: 10, 
    name: '茜色', 
    nameEn: 'Madder Red', 
    color: '#B7282E',
    hex: '#B7282E',
    rgb: 'RGB(183, 40, 46)',
    meaning: '実り・変化・情熱', 
    meaningEn: 'Harvest, Change & Passion',
    description: '夕焼けや紅葉を思わせる赤。季節の変化を表します。',
    descriptionEn: 'Red reminiscent of sunset and autumn leaves. Represents seasonal change.',
    personality: '情熱的で変化を恐れない',
    personalityEn: 'Passionate and unafraid of change'
  },
  { 
    month: 11, 
    name: '琥珀色', 
    nameEn: 'Amber', 
    color: '#C44303',
    hex: '#C44303',
    rgb: 'RGB(196, 67, 3)',
    meaning: '温もり・安定・保護', 
    meaningEn: 'Warmth, Stability & Protection',
    description: '秋の深まりを感じさせる温かな色。安心感を与えます。',
    descriptionEn: 'Warm color evoking deepening autumn. Provides sense of security.',
    personality: '温和で安定感があり、人を癒す',
    personalityEn: 'Gentle, stable and comforting to others'
  },
  { 
    month: 12, 
    name: '銀鼠色', 
    nameEn: 'Silver Gray', 
    color: '#95949A',
    hex: '#95949A',
    rgb: 'RGB(149, 148, 154)',
    meaning: '静寂・洗練・知性', 
    meaningEn: 'Tranquility, Refinement & Intelligence',
    description: '冬の静けさを表す上品な色。洗練された印象を与えます。',
    descriptionEn: 'Elegant color representing winter tranquility. Gives refined impression.',
    personality: '冷静で知的、洗練されたセンス',
    personalityEn: 'Calm, intelligent with refined taste'
  },
];

export default function BirthcolorsPage() {
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
            Birth Colors
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            🎨 {isJa ? '誕生色' : 'Birth Colors'}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed text-lg">
            {isJa 
              ? '各月を代表する色には、性格や運勢を表す意味が込められています。あなたの誕生月の色を見つけて、その意味を知りましょう。'
              : 'Each month has its representative color with meanings reflecting personality and fortune. Discover your birth month color and learn its significance.'
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
            {BIRTHCOLORS.map((colorData) => (
              <div
                key={colorData.month}
                id={`month-${colorData.month}`}
                className={`group bg-white rounded-3xl p-8 border transition-all duration-500 ${
                  selectedMonth === colorData.month
                    ? 'border-stone-400 shadow-2xl scale-[1.02] ring-2 ring-stone-300'
                    : 'border-stone-100 hover:border-stone-200 hover:shadow-xl'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-stone-100 rounded-full text-xs tracking-[0.2em] text-stone-500 uppercase mb-3">
                      {isJa ? `${colorData.month}月` : `${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][colorData.month - 1]}`}
                    </span>
                    <h2 className="text-3xl font-bold text-stone-900 tracking-tight mb-1">
                      {isJa ? colorData.name : colorData.nameEn}
                    </h2>
                    <p className="text-base text-stone-400">
                      {isJa ? colorData.nameEn : colorData.name}
                    </p>
                  </div>
                  
                  {/* Color Swatch - Larger */}
                  <div 
                    className="w-24 h-24 rounded-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: colorData.color,
                      boxShadow: `0 8px 24px ${colorData.color}60`
                    }}
                  />
                </div>

                {/* Color Codes */}
                <div className="mb-6 p-4 bg-stone-50 rounded-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-stone-500 mb-1">HEX</p>
                      <p className="text-sm font-mono font-semibold text-stone-800">{colorData.hex}</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 mb-1">RGB</p>
                      <p className="text-xs font-mono text-stone-700">{colorData.rgb}</p>
                    </div>
                  </div>
                </div>

                {/* Meaning */}
                <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: colorData.color + '15' }}>
                  <p className="text-xs text-stone-500 mb-1 tracking-wider">
                    {isJa ? '色の意味' : 'COLOR MEANING'}
                  </p>
                  <p className="text-base font-semibold text-stone-800">
                    {isJa ? colorData.meaning : colorData.meaningEn}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-xs text-stone-500 mb-2 tracking-wider">
                    {isJa ? '特徴' : 'CHARACTERISTICS'}
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {isJa ? colorData.description : colorData.descriptionEn}
                  </p>
                </div>

                {/* Personality */}
                <div className="pt-4 border-t border-stone-100">
                  <p className="text-xs text-stone-500 mb-2 tracking-wider">
                    {isJa ? '性格傾向' : 'PERSONALITY TRAITS'}
                  </p>
                  <p className="text-sm text-stone-700 flex items-center gap-2">
                    <span className="text-base">✨</span>
                    {isJa ? colorData.personality : colorData.personalityEn}
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

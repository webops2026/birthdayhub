'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useBirthday } from '@/lib/birthday-context';
import { getFamousBirthdays, FamousPerson } from '@/lib/famous-birthdays';

interface Birthstone {
  id: string;
  month: number;
  name_ja: string;
  name_en: string;
  meaning_ja: string[];
  meaning_en: string[];
  color: string;
}

// 誕生石データ
const BIRTHSTONES: Record<number, Birthstone> = {
  1: { id: '1', month: 1, name_ja: 'ガーネット', name_en: 'Garnet', meaning_ja: ['真実', '友愛'], meaning_en: ['Truth', 'Friendship'], color: '#C1446A' },
  2: { id: '2', month: 2, name_ja: 'アメジスト', name_en: 'Amethyst', meaning_ja: ['誠実'], meaning_en: ['Sincerity'], color: '#9966CC' },
  3: { id: '3', month: 3, name_ja: 'アクアマリン', name_en: 'Aquamarine', meaning_ja: ['沈着'], meaning_en: ['Composure'], color: '#7DD3E8' },
  4: { id: '4', month: 4, name_ja: 'ダイヤモンド', name_en: 'Diamond', meaning_ja: ['永遠の絆'], meaning_en: ['Eternal Bond'], color: '#E8E8E8' },
  5: { id: '5', month: 5, name_ja: 'エメラルド', name_en: 'Emerald', meaning_ja: ['幸運'], meaning_en: ['Fortune'], color: '#50C878' },
  6: { id: '6', month: 6, name_ja: 'パール', name_en: 'Pearl', meaning_ja: ['健康'], meaning_en: ['Health'], color: '#F5F5F5' },
  7: { id: '7', month: 7, name_ja: 'ルビー', name_en: 'Ruby', meaning_ja: ['情熱'], meaning_en: ['Passion'], color: '#E0115F' },
  8: { id: '8', month: 8, name_ja: 'ペリドット', name_en: 'Peridot', meaning_ja: ['和合'], meaning_en: ['Harmony'], color: '#9CB86E' },
  9: { id: '9', month: 9, name_ja: 'サファイア', name_en: 'Sapphire', meaning_ja: ['誠実'], meaning_en: ['Sincerity'], color: '#0F52BA' },
  10: { id: '10', month: 10, name_ja: 'オパール', name_en: 'Opal', meaning_ja: ['歓喜'], meaning_en: ['Joy'], color: '#A8C3BC' },
  11: { id: '11', month: 11, name_ja: 'トパーズ', name_en: 'Topaz', meaning_ja: ['友情'], meaning_en: ['Friendship'], color: '#FFC87C' },
  12: { id: '12', month: 12, name_ja: 'ターコイズ', name_en: 'Turquoise', meaning_ja: ['成功'], meaning_en: ['Success'], color: '#40E0D0' }
};

// 誕生花サンプルデータ
const SAMPLE_FLOWERS: Record<number, { name_ja: string; name_en: string; meaning: string }> = {
  1: { name_ja: 'カーネーション', name_en: 'Carnation', meaning: '無垢で深い愛' },
  2: { name_ja: 'フリージア', name_en: 'Freesia', meaning: '純潔' },
  3: { name_ja: 'スイートピー', name_en: 'Sweet Pea', meaning: '門出' },
  4: { name_ja: 'カスミソウ', name_en: 'Baby\'s Breath', meaning: '清らかな心' },
  5: { name_ja: 'スズラン', name_en: 'Lily of the Valley', meaning: '幸福の再来' },
  6: { name_ja: 'バラ', name_en: 'Rose', meaning: '愛' },
  7: { name_ja: 'ユリ', name_en: 'Lily', meaning: '純粋' },
  8: { name_ja: 'ヒマワリ', name_en: 'Sunflower', meaning: '憧れ' },
  9: { name_ja: 'リンドウ', name_en: 'Gentian', meaning: '正義' },
  10: { name_ja: 'コスモス', name_en: 'Cosmos', meaning: '調和' },
  11: { name_ja: 'キク', name_en: 'Chrysanthemum', meaning: '高貴' },
  12: { name_ja: 'ポインセチア', name_en: 'Poinsettia', meaning: '祝福' },
};

// 誕生色サンプルデータ
const SAMPLE_COLORS: Record<number, { name_ja: string; hex: string; personality: string }> = {
  1: { name_ja: '深紅', hex: '#8B1538', personality: '情熱的で行動力がある' },
  2: { name_ja: '紫水晶色', hex: '#9966CC', personality: '神秘的で直感的' },
  3: { name_ja: '若草色', hex: '#7DD3E8', personality: '爽やかで明るい' },
  4: { name_ja: '桜色', hex: '#FFB7C5', personality: '優しく思いやりがある' },
  5: { name_ja: '新緑色', hex: '#7CFC00', personality: '成長志向で前向き' },
  6: { name_ja: 'パール', hex: '#F0EAD6', personality: '上品で洗練されている' },
  7: { name_ja: '真紅', hex: '#E0115F', personality: '情熱的でエネルギッシュ' },
  8: { name_ja: '黄緑', hex: '#9CB86E', personality: '調和を大切にする' },
  9: { name_ja: '群青色', hex: '#0F52BA', personality: '誠実で信頼できる' },
  10: { name_ja: '乳白色', hex: '#A8C3BC', personality: '神秘的で魅力的' },
  11: { name_ja: '黄金色', hex: '#FFC87C', personality: '社交的で温かい' },
  12: { name_ja: 'ターコイズ', hex: '#40E0D0', personality: '自由で創造的' },
};

// 星座データ
const ZODIAC_SIGNS: Record<string, { name_ja: string; name_en: string; period: string }> = {
  capricorn: { name_ja: 'やぎ座', name_en: 'Capricorn', period: '12/22-1/19' },
  aquarius: { name_ja: 'みずがめ座', name_en: 'Aquarius', period: '1/20-2/18' },
  pisces: { name_ja: 'うお座', name_en: 'Pisces', period: '2/19-3/20' },
  aries: { name_ja: 'おひつじ座', name_en: 'Aries', period: '3/21-4/19' },
  taurus: { name_ja: 'おうし座', name_en: 'Taurus', period: '4/20-5/20' },
  gemini: { name_ja: 'ふたご座', name_en: 'Gemini', period: '5/21-6/21' },
  cancer: { name_ja: 'かに座', name_en: 'Cancer', period: '6/22-7/22' },
  leo: { name_ja: 'しし座', name_en: 'Leo', period: '7/23-8/22' },
  virgo: { name_ja: 'おとめ座', name_en: 'Virgo', period: '8/23-9/22' },
  libra: { name_ja: 'てんびん座', name_en: 'Libra', period: '9/23-10/23' },
  scorpio: { name_ja: 'さそり座', name_en: 'Scorpio', period: '10/24-11/21' },
  sagittarius: { name_ja: 'いて座', name_en: 'Sagittarius', period: '11/22-12/21' },
};

// 干支データ
const CHINESE_ZODIAC = [
  { name_ja: '子（ねずみ）', name_en: 'Rat' },
  { name_ja: '丑（うし）', name_en: 'Ox' },
  { name_ja: '寅（とら）', name_en: 'Tiger' },
  { name_ja: '卯（うさぎ）', name_en: 'Rabbit' },
  { name_ja: '辰（たつ）', name_en: 'Dragon' },
  { name_ja: '巳（へび）', name_en: 'Snake' },
  { name_ja: '午（うま）', name_en: 'Horse' },
  { name_ja: '未（ひつじ）', name_en: 'Sheep' },
  { name_ja: '申（さる）', name_en: 'Monkey' },
  { name_ja: '酉（とり）', name_en: 'Rooster' },
  { name_ja: '戌（いぬ）', name_en: 'Dog' },
  { name_ja: '亥（いのしし）', name_en: 'Pig' },
];

// 和暦変換関数
function getJapaneseEra(year: number): { era: string; eraYear: number } {
  if (year >= 2019) return { era: '令和', eraYear: year - 2018 };
  if (year >= 1989) return { era: '平成', eraYear: year - 1988 };
  if (year >= 1926) return { era: '昭和', eraYear: year - 1925 };
  if (year >= 1912) return { era: '大正', eraYear: year - 1911 };
  if (year >= 1868) return { era: '明治', eraYear: year - 1867 };
  return { era: '西暦', eraYear: year };
}

// 星座判定
function getZodiacSign(month: number, day: number): keyof typeof ZODIAC_SIGNS {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'pisces';
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'gemini';
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'libra';
  if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return 'scorpio';
  return 'sagittarius';
}

// 年齢計算関数
function calculateAge(birthYear: number, birthMonth: number, birthDay: number): {
  age: number;
  days: number;
  nextBirthday: Date;
  daysUntilBirthday: number;
  dayOfWeek: string;
  dayOfWeekJa: string;
  isFuture: boolean;
  daysUntilBirth: number;
} {
  const today = new Date();
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

  // 未来の日付かどうか判定
  const isFuture = birthDate > today;

  // 誕生までの日数（未来の場合）
  const daysUntilBirth = isFuture
    ? Math.ceil((birthDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  // 年齢計算
  let age = today.getFullYear() - birthYear;
  if (today.getMonth() + 1 < birthMonth ||
      (today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)) {
    age--;
  }
  // 未来の場合は0歳とする
  if (isFuture) age = 0;

  // 生存日数（未来の場合は0）
  const diffTime = isFuture ? 0 : Math.abs(today.getTime() - birthDate.getTime());
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // 次の誕生日
  let nextBirthday = new Date(today.getFullYear(), birthMonth - 1, birthDay);
  if (nextBirthday < today) {
    nextBirthday = new Date(today.getFullYear() + 1, birthMonth - 1, birthDay);
  }

  // 次の誕生日まで
  const diffUntil = nextBirthday.getTime() - today.getTime();
  const daysUntilBirthday = Math.ceil(diffUntil / (1000 * 60 * 60 * 24));

  // 誕生日の曜日
  const dayOfWeekEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeekJa = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
  const dayOfWeek = dayOfWeekEn[birthDate.getDay()];
  const dayOfWeekJp = dayOfWeekJa[birthDate.getDay()];

  return { age, days, nextBirthday, daysUntilBirthday, dayOfWeek, dayOfWeekJa: dayOfWeekJp, isFuture, daysUntilBirth };
}

// 学歴年表計算（日本の学制）
function calculateEducation(birthYear: number, birthMonth: number, birthDay: number): {
  elementarySchoolEnter: number;
  elementarySchoolGraduate: number;
  juniorHighSchoolEnter: number;
  juniorHighSchoolGraduate: number;
  highSchoolEnter: number;
  highSchoolGraduate: number;
  universityEnter: number;
  universityGraduate: number;
  masterEnter: number;
  masterGraduate: number;
  doctoralEnter: number;
  doctoralGraduate: number;
} {
  // 4月1日以前生まれは早生まれとして前年度扱い
  // 4月2日〜翌年4月1日生まれが同じ学年
  let schoolYear = birthYear;
  if (birthMonth >= 4 && birthMonth <= 12) {
    // 4月〜12月生まれ: 生まれた年+7年の4月に小学校入学
    schoolYear = birthYear + 7;
  } else {
    // 1月〜3月生まれ（早生まれ）: 生まれた年+6年の4月に小学校入学
    schoolYear = birthYear + 6;
  }

  return {
    elementarySchoolEnter: schoolYear,           // 小学校入学
    elementarySchoolGraduate: schoolYear + 6,    // 小学校卒業
    juniorHighSchoolEnter: schoolYear + 6,       // 中学校入学
    juniorHighSchoolGraduate: schoolYear + 9,    // 中学校卒業
    highSchoolEnter: schoolYear + 9,             // 高校入学
    highSchoolGraduate: schoolYear + 12,         // 高校卒業
    universityEnter: schoolYear + 12,            // 大学入学
    universityGraduate: schoolYear + 16,         // 大学卒業（4年制）
    masterEnter: schoolYear + 16,                // 大学院（修士）入学
    masterGraduate: schoolYear + 18,             // 大学院（修士）卒業（2年制）
    doctoralEnter: schoolYear + 18,              // 大学院（博士）入学
    doctoralGraduate: schoolYear + 21,           // 大学院（博士）卒業（3年制）
  };
}

// 六曜計算
function getRokuyo(year: number, month: number, day: number): { name: string; meaning: string } {
  // 旧暦変換は複雑なため、簡易計算を使用
  // (月 + 日) % 6 で近似計算
  const rokuyoList = [
    { name: '大安', meaning: '万事に吉' },
    { name: '赤口', meaning: '正午のみ吉' },
    { name: '先勝', meaning: '午前中が吉' },
    { name: '友引', meaning: '朝夕は吉' },
    { name: '先負', meaning: '午後が吉' },
    { name: '仏滅', meaning: '万事に凶' },
  ];
  const index = (month + day) % 6;
  return rokuyoList[index];
}

// 二十四節気計算
function getSekki(month: number, day: number): { name: string; meaning: string } {
  const sekkiList = [
    { start: [1, 5], name: '小寒', meaning: '寒の入り' },
    { start: [1, 20], name: '大寒', meaning: '最も寒い時期' },
    { start: [2, 4], name: '立春', meaning: '春の始まり' },
    { start: [2, 19], name: '雨水', meaning: '雪が雨に変わる' },
    { start: [3, 6], name: '啓蟄', meaning: '虫が動き出す' },
    { start: [3, 21], name: '春分', meaning: '昼夜の長さが等しい' },
    { start: [4, 5], name: '清明', meaning: '清らかで明るい' },
    { start: [4, 20], name: '穀雨', meaning: '穀物を潤す雨' },
    { start: [5, 6], name: '立夏', meaning: '夏の始まり' },
    { start: [5, 21], name: '小満', meaning: '草木が茂る' },
    { start: [6, 6], name: '芒種', meaning: '穀物の種まき' },
    { start: [6, 21], name: '夏至', meaning: '昼が最も長い' },
    { start: [7, 7], name: '小暑', meaning: '暑さが始まる' },
    { start: [7, 23], name: '大暑', meaning: '最も暑い時期' },
    { start: [8, 7], name: '立秋', meaning: '秋の始まり' },
    { start: [8, 23], name: '処暑', meaning: '暑さが収まる' },
    { start: [9, 8], name: '白露', meaning: '草に露が降りる' },
    { start: [9, 23], name: '秋分', meaning: '昼夜の長さが等しい' },
    { start: [10, 8], name: '寒露', meaning: '露が冷たくなる' },
    { start: [10, 24], name: '霜降', meaning: '霜が降りる' },
    { start: [11, 7], name: '立冬', meaning: '冬の始まり' },
    { start: [11, 22], name: '小雪', meaning: '雪が降り始める' },
    { start: [12, 7], name: '大雪', meaning: '雪が多くなる' },
    { start: [12, 22], name: '冬至', meaning: '昼が最も短い' },
  ];

  // 該当する節気を逆順で探す
  for (let i = sekkiList.length - 1; i >= 0; i--) {
    const [sekkiMonth, sekkiDay] = sekkiList[i].start;
    if (month > sekkiMonth || (month === sekkiMonth && day >= sekkiDay)) {
      return { name: sekkiList[i].name, meaning: sekkiList[i].meaning };
    }
  }
  // 1月初旬は前年の冬至の期間
  return { name: '冬至', meaning: '昼が最も短い' };
}

// 厄年計算
function getYakudoshi(birthYear: number, currentYear: number): {
  isYakudoshi: boolean;
  type: string;
  maleYakudoshi: { age: number; type: string }[];
  femaleYakudoshi: { age: number; type: string }[];
} {
  const age = currentYear - birthYear + 1; // 数え年

  // 男性の厄年（数え年）
  const maleYakuAges = [
    { age: 24, type: '前厄' }, { age: 25, type: '本厄' }, { age: 26, type: '後厄' },
    { age: 41, type: '前厄' }, { age: 42, type: '大厄' }, { age: 43, type: '後厄' },
    { age: 60, type: '前厄' }, { age: 61, type: '本厄' }, { age: 62, type: '後厄' },
  ];

  // 女性の厄年（数え年）
  const femaleYakuAges = [
    { age: 18, type: '前厄' }, { age: 19, type: '本厄' }, { age: 20, type: '後厄' },
    { age: 32, type: '前厄' }, { age: 33, type: '大厄' }, { age: 34, type: '後厄' },
    { age: 36, type: '前厄' }, { age: 37, type: '本厄' }, { age: 38, type: '後厄' },
    { age: 60, type: '前厄' }, { age: 61, type: '本厄' }, { age: 62, type: '後厄' },
  ];

  const maleMatch = maleYakuAges.find(y => y.age === age);
  const femaleMatch = femaleYakuAges.find(y => y.age === age);

  return {
    isYakudoshi: !!(maleMatch || femaleMatch),
    type: maleMatch?.type || femaleMatch?.type || '',
    maleYakudoshi: maleYakuAges.filter(y => y.type === '本厄' || y.type === '大厄'),
    femaleYakudoshi: femaleYakuAges.filter(y => y.type === '本厄' || y.type === '大厄'),
  };
}

export default function HomePage() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const params = useParams();
  const locale = params.locale as string;

  // Context から誕生日状態を取得
  const birthday = useBirthday();
  const { year, month, day, setYear: setContextYear, setMonth: setContextMonth, setDay: setContextDay } = birthday;

  const today = new Date();
  const currentYear = today.getFullYear();

  const [isLoading, setIsLoading] = useState(true);
  const [useWareki, setUseWareki] = useState(false); // 和暦モード切替
  const [selectedEra, setSelectedEra] = useState('令和'); // 選択された元号
  const [eraYear, setEraYear] = useState(currentYear - 2018); // 和暦の年（現在の令和年）

  // 誕生日に基づくデータ計算
  const ageData = calculateAge(year, month, day);
  const educationData = calculateEducation(year, month, day);
  const todayBirthstone = BIRTHSTONES[month];
  const todayFlower = SAMPLE_FLOWERS[month];
  const todayColor = SAMPLE_COLORS[month];
  const zodiacSign = getZodiacSign(month, day);
  const zodiac = ZODIAC_SIGNS[zodiacSign];
  const chineseZodiac = CHINESE_ZODIAC[(year - 4) % 12];
  const birthEra = getJapaneseEra(year); // 誕生年の元号
  const rokuyo = getRokuyo(year, month, day); // 六曜
  const sekki = getSekki(month, day); // 二十四節気
  const yakudoshi = getYakudoshi(year, currentYear); // 厄年
  const famousPeople = getFamousBirthdays(month, day, locale); // 同じ誕生日の有名人

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  // 和暦→西暦変換
  const warekiToSeireki = (era: string, eraYear: number): number => {
    const eraStarts: { [key: string]: number } = {
      '令和': 2019,
      '平成': 1989,
      '昭和': 1926,
      '大正': 1912,
      '明治': 1868,
    };
    return eraStarts[era] + eraYear - 1;
  };

  // 西暦→和暦変換
  const seirekiToWareki = (year: number): { era: string; eraYear: number } => {
    if (year >= 2019) return { era: '令和', eraYear: year - 2018 };
    if (year >= 1989) return { era: '平成', eraYear: year - 1988 };
    if (year >= 1926) return { era: '昭和', eraYear: year - 1925 };
    if (year >= 1912) return { era: '大正', eraYear: year - 1911 };
    return { era: '明治', eraYear: year - 1867 };
  };
  
  // 選択された誕生日の和暦を計算（useMemoで最適化）
  const selectedDateWareki = useMemo(() => seirekiToWareki(year), [year]);

  // 和暦の年変更時に西暦を更新
  const handleEraYearChange = (newEraYear: number) => {
    setEraYear(newEraYear);
    const newYear = warekiToSeireki(selectedEra, newEraYear);
    setContextYear(newYear);
  };

  // 元号変更時に西暦を更新
  const handleEraChange = (newEra: string) => {
    setSelectedEra(newEra);
    // 新しい元号の1年目にリセット
    setEraYear(1);
    const newYear = warekiToSeireki(newEra, 1);
    setContextYear(newYear);
  };

  // 西暦変更時に和暦を更新
  const handleYearChange = (newYear: number) => {
    setContextYear(newYear);
    const wareki = seirekiToWareki(newYear);
    setSelectedEra(wareki.era);
    setEraYear(wareki.eraYear);
  };

  // 月変更
  const handleMonthChange = (newMonth: number) => {
    setContextMonth(newMonth);
  };

  // 日変更
  const handleDayChange = (newDay: number) => {
    setContextDay(newDay);
  };

  // 西暦モードに切り替え
  const switchToSeireki = () => {
    setUseWareki(false);
    // 現在の和暦を西暦に変換（既に同期されているはず）
  };

  // 和暦モードに切り替え
  const switchToWareki = () => {
    setUseWareki(true);
    // 現在の西暦を和暦に変換
    const wareki = seirekiToWareki(year);
    setSelectedEra(wareki.era);
    setEraYear(wareki.eraYear);
  };

  // 各元号の最大年数を取得
  const getMaxEraYear = (era: string): number => {
    const eraRanges: { [key: string]: { start: number; end: number } } = {
      '令和': { start: 2019, end: currentYear + 1 }, // 2019年〜来年（未来の日付にも対応）
      '平成': { start: 1989, end: 2019 }, // 1989年〜2019年（31年間）
      '昭和': { start: 1926, end: 1989 }, // 1926年〜1989年（64年間）
      '大正': { start: 1912, end: 1926 }, // 1912年〜1926年（15年間）
      '明治': { start: 1868, end: 1912 }, // 1868年〜1912年（45年間）
    };
    return eraRanges[era].end - eraRanges[era].start + 1;
  };

  const isJa = locale === 'ja';

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50">
        <section className="pt-20 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-16 bg-stone-200 rounded-lg w-64 mx-auto"></div>
              <div className="h-12 bg-stone-200 rounded-lg w-96 mx-auto"></div>
              <div className="grid grid-cols-12 gap-4 mt-12">
                <div className="col-span-12 lg:col-span-8 h-96 bg-stone-200 rounded-3xl"></div>
                <div className="col-span-6 lg:col-span-4 h-48 bg-stone-200 rounded-2xl"></div>
                <div className="col-span-6 lg:col-span-4 h-48 bg-stone-200 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Birthday Input Form */}
          <div className="max-w-2xl mx-auto mb-16">
            {/* 日本語ページの場合、西暦/和暦切替ボタン */}
            {isJa && (
              <div className="flex justify-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={switchToSeireki}
                  className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors ${
                    !useWareki
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  西暦
                </button>
                <button
                  type="button"
                  onClick={switchToWareki}
                  className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors ${
                    useWareki
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  和暦
                </button>
              </div>
            )}

            <div className="bg-white rounded-2xl p-2 shadow-sm border border-stone-200 flex items-center gap-2">
              {isJa && useWareki ? (
                // 和暦入力
                <>
                  <select
                    value={selectedEra}
                    onChange={(e) => handleEraChange(e.target.value)}
                    className="flex-1 px-4 py-3 bg-transparent border-0 text-stone-900 focus:outline-none focus:ring-0 text-sm font-medium"
                  >
                    <option value="令和">令和</option>
                    <option value="平成">平成</option>
                    <option value="昭和">昭和</option>
                    <option value="大正">大正</option>
                    <option value="明治">明治</option>
                  </select>
                  <select
                    value={eraYear}
                    onChange={(e) => handleEraYearChange(Number(e.target.value))}
                    className="flex-1 px-4 py-3 bg-transparent border-0 text-stone-900 focus:outline-none focus:ring-0 text-sm font-medium"
                  >
                    {Array.from({ length: getMaxEraYear(selectedEra) }, (_, i) => i + 1).map((y) => (
                      <option key={y} value={y}>{y}年</option>
                    ))}
                  </select>
                  <span className="text-stone-400">/</span>
                  <select
                    value={month}
                    onChange={(e) => handleMonthChange(Number(e.target.value))}
                    className="flex-1 px-4 py-3 bg-transparent border-0 text-stone-900 focus:outline-none focus:ring-0 text-sm font-medium"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                      <option key={m} value={m}>{m}月</option>
                    ))}
                  </select>
                  <span className="text-stone-400">/</span>
                  <select
                    value={day}
                    onChange={(e) => handleDayChange(Number(e.target.value))}
                    className="flex-1 px-4 py-3 bg-transparent border-0 text-stone-900 focus:outline-none focus:ring-0 text-sm font-medium"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>{d}日</option>
                    ))}
                  </select>
                </>
              ) : (
                // 西暦入力
                <>
                  <select
                    value={year}
                    onChange={(e) => handleYearChange(Number(e.target.value))}
                    className="flex-1 px-4 py-3 bg-transparent border-0 text-stone-900 focus:outline-none focus:ring-0 text-sm font-medium"
                  >
                    {Array.from({ length: 101 }, (_, i) => currentYear + 1 - i).map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                  <span className="text-stone-400">/</span>
                  <select
                    value={month}
                    onChange={(e) => handleMonthChange(Number(e.target.value))}
                    className="flex-1 px-4 py-3 bg-transparent border-0 text-stone-900 focus:outline-none focus:ring-0 text-sm font-medium"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <span className="text-stone-400">/</span>
                  <select
                    value={day}
                    onChange={(e) => handleDayChange(Number(e.target.value))}
                    className="flex-1 px-4 py-3 bg-transparent border-0 text-stone-900 focus:outline-none focus:ring-0 text-sm font-medium"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid - Main Content */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4">
            
            {/* Age Card / Birth Countdown Card */}
            <div className="col-span-6 lg:col-span-4 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">
                {ageData.isFuture
                  ? (isJa ? '誕生まで' : 'Until Birth')
                  : 'Age · 年齢'}
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-5xl font-bold text-stone-900">
                  {ageData.isFuture ? ageData.daysUntilBirth : ageData.age}
                </h3>
                <span className="text-xl text-stone-400">
                  {ageData.isFuture
                    ? (isJa ? '日後' : ' days')
                    : (isJa ? '歳' : 'years')}
                </span>
              </div>
              <p className="text-sm text-stone-500">
                {ageData.isFuture
                  ? ''
                  : `${ageData.days.toLocaleString()}${isJa ? '日目' : ' days lived'}`}
              </p>
            </div>

            {/* Next Birthday Card / Due Date Card */}
            <div className="col-span-6 lg:col-span-4 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">
                {ageData.isFuture
                  ? (isJa ? '予定日' : 'Due Date')
                  : 'Next Birthday'}
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-5xl font-bold text-stone-900">
                  {ageData.isFuture ? `${month}/${day}` : ageData.daysUntilBirthday}
                </h3>
                <span className="text-xl text-stone-400">
                  {ageData.isFuture ? '' : (isJa ? '日後' : ' days')}
                </span>
              </div>
              <p className="text-sm text-stone-500">
                {ageData.isFuture
                  ? `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`
                  : `${ageData.nextBirthday.getFullYear()}.${(ageData.nextBirthday.getMonth() + 1).toString().padStart(2, '0')}.${ageData.nextBirthday.getDate().toString().padStart(2, '0')}`}
              </p>
            </div>

            {/* Day of Week Card */}
            <div className="col-span-6 lg:col-span-4 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">
                Born On
              </p>
              <h3 className="text-3xl font-bold text-stone-900 mb-2">
                {isJa ? ageData.dayOfWeekJa : ageData.dayOfWeek}
              </h3>
              <p className="text-sm text-stone-400">
                {isJa ? ageData.dayOfWeek : ageData.dayOfWeekJa}
              </p>
            </div>

            {/* Zodiac */}
            <div className="col-span-6 lg:col-span-4 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">
                Zodiac
              </p>
              <h3 className="text-3xl font-bold text-stone-900 mb-2">
                {zodiac.name_ja}
              </h3>
              <p className="text-stone-500 text-sm">{zodiac.name_en}</p>
              <p className="text-xs text-stone-400 mt-2">{zodiac.period}</p>
            </div>

            {/* Era - 誕生年の元号 */}
            <div className="col-span-6 lg:col-span-4 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">
                Era · 元号
              </p>
              <h3 className="text-3xl font-bold text-stone-900 mb-2">
                {birthEra.era}{birthEra.eraYear}年
              </h3>
              <p className="text-stone-500 text-sm">{year}年生まれ</p>
            </div>

            {/* Chinese Zodiac */}
            <div className="col-span-6 lg:col-span-4 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">
                Chinese Zodiac
              </p>
              <h3 className="text-2xl font-bold text-stone-900 mb-1">
                {chineseZodiac.name_ja}
              </h3>
              <p className="text-stone-500 text-sm">{chineseZodiac.name_en}</p>
            </div>
            
            {/* Birthstone - HERO CARD (Large) */}
            <div 
              className="col-span-12 lg:col-span-8 row-span-2 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group relative"
            >
              {/* Background Gradient */}
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 30% 50%, ${todayBirthstone.color} 0%, transparent 70%)`
                }}
              />
              
              <div className="relative z-10 p-12">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="text-sm font-medium text-stone-500 tracking-widest uppercase mb-3">
                      Birthstone · {month}月
                    </p>
                    <h2 className="text-6xl font-bold text-stone-900 mb-3 tracking-tight">
                      {todayBirthstone.name_ja}
                    </h2>
                    <p className="text-2xl text-stone-400 font-light tracking-wide">
                      {todayBirthstone.name_en}
                    </p>
                  </div>
                  
                  {/* Gem Visual */}
                  <div 
                    className="w-32 h-32 rounded-full shadow-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500"
                    style={{ 
                      backgroundColor: todayBirthstone.color,
                      boxShadow: `0 20px 60px ${todayBirthstone.color}40`
                    }}
                  />
                </div>
                
                <div className="flex gap-3">
                  {todayBirthstone.meaning_ja.map((m, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2.5 bg-stone-50 text-stone-700 rounded-full text-sm font-medium tracking-wide"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Flower */}
            <div className="col-span-6 lg:col-span-4 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">
                Flower
              </p>
              <h3 className="text-2xl font-bold text-stone-900 mb-1">
                {todayFlower.name_ja}
              </h3>
              <p className="text-stone-400 text-sm mb-3">{todayFlower.name_en}</p>
              <p className="text-stone-600 text-sm">{todayFlower.meaning}</p>
            </div>

            {/* Color */}
            <div className="col-span-6 lg:col-span-4 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">
                Color
              </p>
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-16 h-16 rounded-xl shadow-lg flex-shrink-0"
                  style={{ backgroundColor: todayColor.hex }}
                />
                <div>
                  <h3 className="text-xl font-bold text-stone-900">
                    {todayColor.name_ja}
                  </h3>
                  <p className="text-xs text-stone-400 font-mono">{todayColor.hex}</p>
                </div>
              </div>
            </div>

            {/* Rokuyou */}
            <div className="col-span-6 lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">
                六曜
              </p>
              <h3 className="text-2xl font-bold text-stone-900 mb-1">{rokuyo.name}</h3>
              <p className="text-xs text-stone-500">{rokuyo.meaning}</p>
            </div>

            {/* 24 Sekki */}
            <div className="col-span-6 lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">
                二十四節気
              </p>
              <h3 className="text-2xl font-bold text-stone-900 mb-1">{sekki.name}</h3>
              <p className="text-xs text-stone-500">{sekki.meaning}</p>
            </div>

            {/* Yakudoshi - Wide */}
            <div className="col-span-12 lg:col-span-6 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">
                厄年 Yakudoshi
              </p>
              {yakudoshi.isYakudoshi && (
                <div className="mb-4 p-3 bg-red-50 rounded-lg">
                  <p className="text-sm font-semibold text-red-700">
                    現在{yakudoshi.type}です（数え年 {currentYear - year + 1}歳）
                  </p>
                </div>
              )}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-stone-700 mb-2">男性</p>
                  <p className="text-sm text-stone-500">
                    {yakudoshi.maleYakudoshi.map(y => `${y.age}歳`).join('・')}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-700 mb-2">女性</p>
                  <p className="text-sm text-stone-500">
                    {yakudoshi.femaleYakudoshi.map(y => `${y.age}歳`).join('・')}
                  </p>
                </div>
              </div>
              <p className="text-xs text-stone-400 mt-4">※本厄・大厄の年齢（数え年）</p>
            </div>

            {/* Famous People - Wide */}
            {famousPeople.length > 0 && (
              <div className="col-span-12 lg:col-span-6 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">
                  👤 {isJa ? '同じ誕生日の有名人' : 'Famous People Born This Day'}
                </p>
                <div className="space-y-3">
                  {famousPeople.slice(0, 3).map((person, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {person.name[isJa ? 'ja' : 'en'].charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-stone-800 text-sm truncate">
                          {person.name[isJa ? 'ja' : 'en']}
                        </p>
                        <p className="text-xs text-stone-500 truncate">
                          {person.profession[isJa ? 'ja' : 'en']}
                          {person.birthYear > 0 && ` (${person.birthYear})`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Timeline - Wide (日本語のみ) */}
            {isJa && (
              <div className="col-span-12 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">
                  🎓 学歴年表
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                    <p className="text-xs text-stone-500 mb-2">小学校</p>
                    <p className="text-sm font-semibold text-stone-700 mb-1">
                      入学: {educationData.elementarySchoolEnter}年 6歳
                    </p>
                    <p className="text-sm font-semibold text-stone-700">
                      卒業: {educationData.elementarySchoolGraduate}年 12歳
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
                    <p className="text-xs text-stone-500 mb-2">中学校</p>
                    <p className="text-sm font-semibold text-stone-700 mb-1">
                      入学: {educationData.juniorHighSchoolEnter}年 12歳
                    </p>
                    <p className="text-sm font-semibold text-stone-700">
                      卒業: {educationData.juniorHighSchoolGraduate}年 15歳
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50">
                    <p className="text-xs text-stone-500 mb-2">高校</p>
                    <p className="text-sm font-semibold text-stone-700 mb-1">
                      入学: {educationData.highSchoolEnter}年 15歳
                    </p>
                    <p className="text-sm font-semibold text-stone-700">
                      卒業: {educationData.highSchoolGraduate}年 18歳
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                    <p className="text-xs text-stone-500 mb-2">大学（4年制）</p>
                    <p className="text-sm font-semibold text-stone-700 mb-1">
                      入学: {educationData.universityEnter}年 18歳
                    </p>
                    <p className="text-sm font-semibold text-stone-700">
                      卒業: {educationData.universityGraduate}年 22歳
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-rose-50 to-red-50">
                    <p className="text-xs text-stone-500 mb-2">修士課程（2年制）</p>
                    <p className="text-sm font-semibold text-stone-700 mb-1">
                      入学: {educationData.masterEnter}年 22歳
                    </p>
                    <p className="text-sm font-semibold text-stone-700">
                      卒業: {educationData.masterGraduate}年 24歳
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50">
                    <p className="text-xs text-stone-500 mb-2">博士課程（3年制）</p>
                    <p className="text-sm font-semibold text-stone-700 mb-1">
                      入学: {educationData.doctoralEnter}年 24歳
                    </p>
                    <p className="text-sm font-semibold text-stone-700">
                      卒業: {educationData.doctoralGraduate}年 27歳
                    </p>
                  </div>
                </div>
                <p className="text-xs text-stone-400 mt-4 text-center">
                  ※4月2日〜翌年4月1日生まれが同学年です（早生まれ対応済み）
                </p>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href={`/${locale}/birthstones`}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-stone-100"
            >
              <div className="w-12 h-12 rounded-full bg-stone-900 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">💎</span>
              </div>
              <h3 className="font-semibold text-stone-900 text-sm tracking-wide">
                {t('exploreBirthstones')}
              </h3>
            </a>

            <a
              href={`/${locale}/birthflowers`}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-stone-100"
            >
              <div className="w-12 h-12 rounded-full bg-stone-900 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🌸</span>
              </div>
              <h3 className="font-semibold text-stone-900 text-sm tracking-wide">
                {t('exploreBirthflowers')}
              </h3>
            </a>

            <a
              href={`/${locale}/birthcolors`}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-stone-100"
            >
              <div className="w-12 h-12 rounded-full bg-stone-900 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="font-semibold text-stone-900 text-sm tracking-wide">
                {t('exploreBirthcolors')}
              </h3>
            </a>

            <a
              href={`/${locale}/age-calculator`}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-stone-100"
            >
              <div className="w-12 h-12 rounded-full bg-stone-900 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">📅</span>
              </div>
              <h3 className="font-semibold text-stone-900 text-sm tracking-wide">
                和暦変換
              </h3>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

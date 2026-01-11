/**
 * Birthday utility functions
 */

/**
 * Calculate age from birthdate
 */
export function getAge(birthdate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  return age;
}

/**
 * Get zodiac sign from month and day
 */
export function getZodiacSign(month: number, day: number): { ja: string; en: string; symbol: string } {
  const signs = [
    { ja: 'やぎ座', en: 'Capricorn', symbol: '♑' },
    { ja: 'みずがめ座', en: 'Aquarius', symbol: '♒' },
    { ja: 'うお座', en: 'Pisces', symbol: '♓' },
    { ja: 'おひつじ座', en: 'Aries', symbol: '♈' },
    { ja: 'おうし座', en: 'Taurus', symbol: '♉' },
    { ja: 'ふたご座', en: 'Gemini', symbol: '♊' },
    { ja: 'かに座', en: 'Cancer', symbol: '♋' },
    { ja: 'しし座', en: 'Leo', symbol: '♌' },
    { ja: 'おとめ座', en: 'Virgo', symbol: '♍' },
    { ja: 'てんびん座', en: 'Libra', symbol: '♎' },
    { ja: 'さそり座', en: 'Scorpio', symbol: '♏' },
    { ja: 'いて座', en: 'Sagittarius', symbol: '♐' },
  ];

  const dates = [
    [1, 20], [2, 19], [3, 21], [4, 20], [5, 21], [6, 22],
    [7, 23], [8, 23], [9, 23], [10, 24], [11, 22], [12, 22],
  ];

  let signIndex = month - 1;
  if (day < dates[month - 1][1]) {
    signIndex = (month - 2 + 12) % 12;
  }

  return signs[signIndex];
}

/**
 * Get Chinese zodiac from year
 */
export function getChineseZodiac(year: number): { ja: string; en: string; symbol: string } {
  const zodiacs = [
    { ja: '子（ねずみ）', en: 'Rat', symbol: '🐀' },
    { ja: '丑（うし）', en: 'Ox', symbol: '🐂' },
    { ja: '寅（とら）', en: 'Tiger', symbol: '🐅' },
    { ja: '卯（うさぎ）', en: 'Rabbit', symbol: '🐇' },
    { ja: '辰（たつ）', en: 'Dragon', symbol: '🐉' },
    { ja: '巳（へび）', en: 'Snake', symbol: '🐍' },
    { ja: '午（うま）', en: 'Horse', symbol: '🐴' },
    { ja: '未（ひつじ）', en: 'Goat', symbol: '🐐' },
    { ja: '申（さる）', en: 'Monkey', symbol: '🐒' },
    { ja: '酉（とり）', en: 'Rooster', symbol: '🐓' },
    { ja: '戌（いぬ）', en: 'Dog', symbol: '🐕' },
    { ja: '亥（いのしし）', en: 'Pig', symbol: '🐖' },
  ];

  const index = (year - 4) % 12;
  return zodiacs[index < 0 ? index + 12 : index];
}

/**
 * Convert Western year to Japanese era (Wareki)
 */
export function getWareki(year: number, month: number, day: number): string {
  const date = new Date(year, month - 1, day);

  // Reiwa (令和) - May 1, 2019 onwards
  if (date >= new Date(2019, 4, 1)) {
    const reiwaYear = year - 2019 + 1;
    return `令和${reiwaYear === 1 ? '元' : reiwaYear}年${month}月${day}日`;
  }

  // Heisei (平成) - January 8, 1989 to April 30, 2019
  if (date >= new Date(1989, 0, 8)) {
    const heiseiYear = year - 1989 + 1;
    return `平成${heiseiYear === 1 ? '元' : heiseiYear}年${month}月${day}日`;
  }

  // Showa (昭和) - December 25, 1926 to January 7, 1989
  if (date >= new Date(1926, 11, 25)) {
    const showaYear = year - 1926 + 1;
    return `昭和${showaYear === 1 ? '元' : showaYear}年${month}月${day}日`;
  }

  // Taisho (大正) - July 30, 1912 to December 24, 1926
  if (date >= new Date(1912, 6, 30)) {
    const taishoYear = year - 1912 + 1;
    return `大正${taishoYear === 1 ? '元' : taishoYear}年${month}月${day}日`;
  }

  // Meiji (明治) - January 1, 1868 to July 29, 1912
  if (date >= new Date(1868, 0, 1)) {
    const meijiYear = year - 1868 + 1;
    return `明治${meijiYear === 1 ? '元' : meijiYear}年${month}月${day}日`;
  }

  return `${year}年${month}月${day}日`;
}

/**
 * Calculate Yakudoshi (unlucky years) for Japanese tradition
 */
export function getYakudoshi(birthYear: number, birthdate: Date) {
  const currentYear = new Date().getFullYear();
  const age = getAge(birthdate);

  // Male Yakudoshi ages
  const maleYakudoshi = {
    maeyaku: [24, 41, 60], // 前厄
    honyaku: [25, 42, 61], // 本厄
    atoyaku: [26, 43, 62], // 後厄
  };

  // Female Yakudoshi ages
  const femaleYakudoshi = {
    maeyaku: [18, 32, 36, 60], // 前厄
    honyaku: [19, 33, 37, 61], // 本厄
    atoyaku: [20, 34, 38, 62], // 後厄
  };

  const getMaleYakudoshi = () => {
    if (maleYakudoshi.honyaku.includes(age)) return '本厄';
    if (maleYakudoshi.maeyaku.includes(age)) return '前厄';
    if (maleYakudoshi.atoyaku.includes(age)) return '後厄';
    return null;
  };

  const getFemaleYakudoshi = () => {
    if (femaleYakudoshi.honyaku.includes(age)) return '本厄';
    if (femaleYakudoshi.maeyaku.includes(age)) return '前厄';
    if (femaleYakudoshi.atoyaku.includes(age)) return '後厄';
    return null;
  };

  const getNextHonyaku = (yakudoshiAges: { honyaku: number[] }) => {
    const nextAge = yakudoshiAges.honyaku.find(a => a > age);
    return nextAge ? { age: nextAge } : null;
  };

  return {
    isMale: true, // For now, show both
    isFemale: true,
    male: {
      current: getMaleYakudoshi(),
      next: getNextHonyaku(maleYakudoshi),
    },
    female: {
      current: getFemaleYakudoshi(),
      next: getNextHonyaku(femaleYakudoshi),
    },
  };
}

/**
 * Calculate Life Path Number (Numerology)
 */
export function getLifePathNumber(year: number, month: number, day: number): number {
  const reduceToSingleDigit = (num: number): number => {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
  };

  const yearSum = reduceToSingleDigit(year);
  const monthSum = reduceToSingleDigit(month);
  const daySum = reduceToSingleDigit(day);

  const total = yearSum + monthSum + daySum;
  return reduceToSingleDigit(total);
}

/**
 * Get Life Path Number meaning
 */
export function getLifePathMeaning(number: number): { en: string; ja: string } {
  const meanings: { [key: number]: { en: string; ja: string } } = {
    1: { en: 'Leader, Independent, Ambitious', ja: 'リーダー、独立心、野心的' },
    2: { en: 'Diplomatic, Cooperative, Sensitive', ja: '外交的、協調的、繊細' },
    3: { en: 'Creative, Expressive, Optimistic', ja: '創造的、表現力豊か、楽観的' },
    4: { en: 'Practical, Organized, Hardworking', ja: '実用的、組織的、勤勉' },
    5: { en: 'Adventurous, Freedom-loving, Dynamic', ja: '冒険的、自由を愛する、ダイナミック' },
    6: { en: 'Nurturing, Responsible, Harmonious', ja: '育成的、責任感、調和的' },
    7: { en: 'Analytical, Spiritual, Introspective', ja: '分析的、精神的、内省的' },
    8: { en: 'Ambitious, Powerful, Material Success', ja: '野心的、力強い、物質的成功' },
    9: { en: 'Humanitarian, Compassionate, Idealistic', ja: '人道的、思いやり、理想主義' },
    11: { en: 'Intuitive, Inspirational, Visionary', ja: '直感的、鼓舞的、先見性' },
    22: { en: 'Master Builder, Practical Idealist', ja: 'マスタービルダー、実践的理想主義' },
    33: { en: 'Master Teacher, Compassionate Leader', ja: 'マスターティーチャー、思いやりのあるリーダー' },
  };

  return meanings[number] || { en: '', ja: '' };
}

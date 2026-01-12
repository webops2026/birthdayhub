// 同じ誕生日の偉人データ

export interface FamousPerson {
  name: { ja: string; en: string };
  birthYear: number;
  deathYear?: number;
  profession: { ja: string; en: string };
}

// 月日をキーとした偉人データ (MM-DD形式)
export const famousBirthdays: Record<string, FamousPerson[]> = {
  // 1月
  '01-01': [
    { name: { ja: '豊臣秀吉', en: 'Toyotomi Hideyoshi' }, birthYear: 1537, deathYear: 1598, profession: { ja: '戦国武将', en: 'Samurai' } },
    { name: { ja: 'J・D・サリンジャー', en: 'J.D. Salinger' }, birthYear: 1919, deathYear: 2010, profession: { ja: '作家', en: 'Writer' } },
  ],
  '01-04': [
    { name: { ja: 'アイザック・ニュートン', en: 'Isaac Newton' }, birthYear: 1643, deathYear: 1727, profession: { ja: '物理学者', en: 'Physicist' } },
  ],
  '01-08': [
    { name: { ja: 'エルヴィス・プレスリー', en: 'Elvis Presley' }, birthYear: 1935, deathYear: 1977, profession: { ja: '歌手', en: 'Singer' } },
    { name: { ja: 'スティーヴン・ホーキング', en: 'Stephen Hawking' }, birthYear: 1942, deathYear: 2018, profession: { ja: '物理学者', en: 'Physicist' } },
  ],
  '01-15': [
    { name: { ja: 'マーティン・ルーサー・キング・Jr', en: 'Martin Luther King Jr.' }, birthYear: 1929, deathYear: 1968, profession: { ja: '公民権運動指導者', en: 'Civil Rights Leader' } },
  ],
  '01-17': [
    { name: { ja: 'ベンジャミン・フランクリン', en: 'Benjamin Franklin' }, birthYear: 1706, deathYear: 1790, profession: { ja: '政治家・発明家', en: 'Politician & Inventor' } },
    { name: { ja: '坂本龍一', en: 'Ryuichi Sakamoto' }, birthYear: 1952, deathYear: 2023, profession: { ja: '音楽家', en: 'Musician' } },
  ],
  '01-27': [
    { name: { ja: 'モーツァルト', en: 'Wolfgang Amadeus Mozart' }, birthYear: 1756, deathYear: 1791, profession: { ja: '作曲家', en: 'Composer' } },
  ],
  // 2月
  '02-03': [
    { name: { ja: '節分', en: 'Setsubun Day' }, birthYear: 0, profession: { ja: '日本の伝統行事', en: 'Japanese Traditional Event' } },
  ],
  '02-11': [
    { name: { ja: 'トーマス・エジソン', en: 'Thomas Edison' }, birthYear: 1847, deathYear: 1931, profession: { ja: '発明家', en: 'Inventor' } },
  ],
  '02-12': [
    { name: { ja: 'エイブラハム・リンカーン', en: 'Abraham Lincoln' }, birthYear: 1809, deathYear: 1865, profession: { ja: '第16代米国大統領', en: '16th US President' } },
    { name: { ja: 'チャールズ・ダーウィン', en: 'Charles Darwin' }, birthYear: 1809, deathYear: 1882, profession: { ja: '自然科学者', en: 'Naturalist' } },
  ],
  '02-22': [
    { name: { ja: 'ジョージ・ワシントン', en: 'George Washington' }, birthYear: 1732, deathYear: 1799, profession: { ja: '初代米国大統領', en: '1st US President' } },
  ],
  // 3月
  '03-03': [
    { name: { ja: 'アレクサンダー・グラハム・ベル', en: 'Alexander Graham Bell' }, birthYear: 1847, deathYear: 1922, profession: { ja: '発明家', en: 'Inventor' } },
  ],
  '03-06': [
    { name: { ja: 'ミケランジェロ', en: 'Michelangelo' }, birthYear: 1475, deathYear: 1564, profession: { ja: '芸術家', en: 'Artist' } },
  ],
  '03-14': [
    { name: { ja: 'アルベルト・アインシュタイン', en: 'Albert Einstein' }, birthYear: 1879, deathYear: 1955, profession: { ja: '物理学者', en: 'Physicist' } },
  ],
  '03-21': [
    { name: { ja: 'ヨハン・ゼバスティアン・バッハ', en: 'Johann Sebastian Bach' }, birthYear: 1685, deathYear: 1750, profession: { ja: '作曲家', en: 'Composer' } },
  ],
  '03-26': [
    { name: { ja: '北野武', en: 'Takeshi Kitano' }, birthYear: 1947, profession: { ja: '映画監督・コメディアン', en: 'Film Director & Comedian' } },
  ],
  '03-31': [
    { name: { ja: 'ルネ・デカルト', en: 'Rene Descartes' }, birthYear: 1596, deathYear: 1650, profession: { ja: '哲学者', en: 'Philosopher' } },
  ],
  // 4月
  '04-02': [
    { name: { ja: 'ハンス・クリスチャン・アンデルセン', en: 'Hans Christian Andersen' }, birthYear: 1805, deathYear: 1875, profession: { ja: '童話作家', en: 'Fairy Tale Writer' } },
  ],
  '04-15': [
    { name: { ja: 'レオナルド・ダ・ヴィンチ', en: 'Leonardo da Vinci' }, birthYear: 1452, deathYear: 1519, profession: { ja: '芸術家・発明家', en: 'Artist & Inventor' } },
  ],
  '04-16': [
    { name: { ja: 'チャールズ・チャップリン', en: 'Charlie Chaplin' }, birthYear: 1889, deathYear: 1977, profession: { ja: '俳優・映画監督', en: 'Actor & Director' } },
  ],
  '04-23': [
    { name: { ja: 'ウィリアム・シェイクスピア', en: 'William Shakespeare' }, birthYear: 1564, deathYear: 1616, profession: { ja: '劇作家', en: 'Playwright' } },
  ],
  // 5月
  '05-05': [
    { name: { ja: 'カール・マルクス', en: 'Karl Marx' }, birthYear: 1818, deathYear: 1883, profession: { ja: '哲学者・経済学者', en: 'Philosopher & Economist' } },
  ],
  '05-12': [
    { name: { ja: 'フローレンス・ナイチンゲール', en: 'Florence Nightingale' }, birthYear: 1820, deathYear: 1910, profession: { ja: '看護師', en: 'Nurse' } },
  ],
  '05-29': [
    { name: { ja: 'ジョン・F・ケネディ', en: 'John F. Kennedy' }, birthYear: 1917, deathYear: 1963, profession: { ja: '第35代米国大統領', en: '35th US President' } },
  ],
  // 6月
  '06-01': [
    { name: { ja: 'マリリン・モンロー', en: 'Marilyn Monroe' }, birthYear: 1926, deathYear: 1962, profession: { ja: '女優', en: 'Actress' } },
  ],
  '06-12': [
    { name: { ja: 'アンネ・フランク', en: 'Anne Frank' }, birthYear: 1929, deathYear: 1945, profession: { ja: '日記作家', en: 'Diarist' } },
  ],
  // 7月
  '07-04': [
    { name: { ja: 'アメリカ独立記念日', en: 'US Independence Day' }, birthYear: 1776, profession: { ja: '祝日', en: 'Holiday' } },
  ],
  '07-07': [
    { name: { ja: 'マルク・シャガール', en: 'Marc Chagall' }, birthYear: 1887, deathYear: 1985, profession: { ja: '画家', en: 'Painter' } },
  ],
  '07-26': [
    { name: { ja: 'ジョージ・バーナード・ショー', en: 'George Bernard Shaw' }, birthYear: 1856, deathYear: 1950, profession: { ja: '劇作家', en: 'Playwright' } },
  ],
  // 8月
  '08-04': [
    { name: { ja: 'バラク・オバマ', en: 'Barack Obama' }, birthYear: 1961, profession: { ja: '第44代米国大統領', en: '44th US President' } },
  ],
  '08-15': [
    { name: { ja: 'ナポレオン・ボナパルト', en: 'Napoleon Bonaparte' }, birthYear: 1769, deathYear: 1821, profession: { ja: 'フランス皇帝', en: 'Emperor of France' } },
  ],
  // 9月
  '09-05': [
    { name: { ja: 'フレディ・マーキュリー', en: 'Freddie Mercury' }, birthYear: 1946, deathYear: 1991, profession: { ja: '歌手（Queen）', en: 'Singer (Queen)' } },
  ],
  '09-21': [
    { name: { ja: '宮沢賢治', en: 'Kenji Miyazawa' }, birthYear: 1896, deathYear: 1933, profession: { ja: '作家・詩人', en: 'Writer & Poet' } },
    { name: { ja: 'スティーヴン・キング', en: 'Stephen King' }, birthYear: 1947, profession: { ja: '作家', en: 'Writer' } },
  ],
  // 10月
  '10-02': [
    { name: { ja: 'マハトマ・ガンディー', en: 'Mahatma Gandhi' }, birthYear: 1869, deathYear: 1948, profession: { ja: '独立運動指導者', en: 'Independence Leader' } },
  ],
  '10-09': [
    { name: { ja: 'ジョン・レノン', en: 'John Lennon' }, birthYear: 1940, deathYear: 1980, profession: { ja: 'ミュージシャン（Beatles）', en: 'Musician (Beatles)' } },
  ],
  '10-28': [
    { name: { ja: 'ビル・ゲイツ', en: 'Bill Gates' }, birthYear: 1955, profession: { ja: '実業家（Microsoft創業者）', en: 'Entrepreneur (Microsoft)' } },
  ],
  '10-31': [
    { name: { ja: '蒋介石', en: 'Chiang Kai-shek' }, birthYear: 1887, deathYear: 1975, profession: { ja: '政治家', en: 'Politician' } },
  ],
  // 11月
  '11-11': [
    { name: { ja: 'フョードル・ドストエフスキー', en: 'Fyodor Dostoevsky' }, birthYear: 1821, deathYear: 1881, profession: { ja: '作家', en: 'Writer' } },
  ],
  '11-19': [
    { name: { ja: '松下幸之助', en: 'Konosuke Matsushita' }, birthYear: 1894, deathYear: 1989, profession: { ja: '実業家（Panasonic創業者）', en: 'Entrepreneur (Panasonic)' } },
  ],
  '11-30': [
    { name: { ja: 'マーク・トウェイン', en: 'Mark Twain' }, birthYear: 1835, deathYear: 1910, profession: { ja: '作家', en: 'Writer' } },
    { name: { ja: 'ウィンストン・チャーチル', en: 'Winston Churchill' }, birthYear: 1874, deathYear: 1965, profession: { ja: '英国首相', en: 'British Prime Minister' } },
  ],
  // 12月
  '12-05': [
    { name: { ja: 'ウォルト・ディズニー', en: 'Walt Disney' }, birthYear: 1901, deathYear: 1966, profession: { ja: '映画プロデューサー', en: 'Film Producer' } },
  ],
  '12-16': [
    { name: { ja: 'ルートヴィヒ・ヴァン・ベートーヴェン', en: 'Ludwig van Beethoven' }, birthYear: 1770, deathYear: 1827, profession: { ja: '作曲家', en: 'Composer' } },
  ],
  '12-25': [
    { name: { ja: 'アイザック・ニュートン（新暦）', en: 'Isaac Newton (New Style)' }, birthYear: 1642, deathYear: 1727, profession: { ja: '物理学者', en: 'Physicist' } },
  ],
};

// 月日から偉人を取得
export function getFamousBirthdays(month: number, day: number): FamousPerson[] {
  const key = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return famousBirthdays[key] || [];
}

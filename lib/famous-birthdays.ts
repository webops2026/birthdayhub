// 同じ誕生日の偉人データ

export interface FamousPerson {
  name: { ja: string; en: string };
  birthYear: number;
  deathYear?: number;
  profession: { ja: string; en: string };
  nationality: 'jp' | 'intl';
}

// 月日をキーとした偉人データ (MM-DD形式)
export const famousBirthdays: Record<string, FamousPerson[]> = {
  // 1月
  '01-01': [
    { name: { ja: '豊臣秀吉', en: 'Toyotomi Hideyoshi' }, birthYear: 1537, deathYear: 1598, profession: { ja: '戦国武将', en: 'Samurai' }, nationality: 'jp' },
    { name: { ja: 'J・D・サリンジャー', en: 'J.D. Salinger' }, birthYear: 1919, deathYear: 2010, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '01-02': [
    { name: { ja: '津川雅彦', en: 'Masahiko Tsugawa' }, birthYear: 1940, deathYear: 2018, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'アイザック・アシモフ', en: 'Isaac Asimov' }, birthYear: 1920, deathYear: 1992, profession: { ja: 'SF作家', en: 'Sci-Fi Writer' }, nationality: 'intl' },
  ],
  '01-03': [
    { name: { ja: '小堺一機', en: 'Kazuki Kosaka' }, birthYear: 1956, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'J・R・R・トールキン', en: 'J.R.R. Tolkien' }, birthYear: 1892, deathYear: 1973, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '01-04': [
    { name: { ja: '子門真人', en: 'Masato Shimon' }, birthYear: 1944, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'アイザック・ニュートン', en: 'Isaac Newton' }, birthYear: 1643, deathYear: 1727, profession: { ja: '物理学者', en: 'Physicist' }, nationality: 'intl' },
  ],
  '01-05': [
    { name: { ja: '宮崎駿', en: 'Hayao Miyazaki' }, birthYear: 1941, profession: { ja: 'アニメ監督', en: 'Anime Director' }, nationality: 'jp' },
    { name: { ja: '渡辺謙', en: 'Ken Watanabe' }, birthYear: 1959, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
  ],
  '01-06': [
    { name: { ja: '中畑清', en: 'Kiyoshi Nakahata' }, birthYear: 1954, profession: { ja: '野球選手', en: 'Baseball Player' }, nationality: 'jp' },
    { name: { ja: 'ジャンヌ・ダルク', en: 'Joan of Arc' }, birthYear: 1412, deathYear: 1431, profession: { ja: '軍人', en: 'Military Leader' }, nationality: 'intl' },
  ],
  '01-07': [
    { name: { ja: '吉田美和', en: 'Miwa Yoshida' }, birthYear: 1965, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ニコラス・ケイジ', en: 'Nicolas Cage' }, birthYear: 1964, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '01-08': [
    { name: { ja: '小泉純一郎', en: 'Junichiro Koizumi' }, birthYear: 1942, profession: { ja: '政治家', en: 'Politician' }, nationality: 'jp' },
    { name: { ja: 'エルヴィス・プレスリー', en: 'Elvis Presley' }, birthYear: 1935, deathYear: 1977, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '01-09': [
    { name: { ja: '一路真輝', en: 'Maki Ichiro' }, birthYear: 1965, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'リチャード・ニクソン', en: 'Richard Nixon' }, birthYear: 1913, deathYear: 1994, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '01-10': [
    { name: { ja: '浜口京子', en: 'Kyoko Hamaguchi' }, birthYear: 1978, profession: { ja: 'レスリング選手', en: 'Wrestler' }, nationality: 'jp' },
    { name: { ja: 'ロッド・スチュワート', en: 'Rod Stewart' }, birthYear: 1945, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '01-11': [
    { name: { ja: '深津絵里', en: 'Eri Fukatsu' }, birthYear: 1973, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'アレクサンダー・ハミルトン', en: 'Alexander Hamilton' }, birthYear: 1755, deathYear: 1804, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '01-12': [
    { name: { ja: '村上春樹', en: 'Haruki Murakami' }, birthYear: 1949, profession: { ja: '作家', en: 'Writer' }, nationality: 'jp' },
    { name: { ja: 'イモトアヤコ', en: 'Ayako Imoto' }, birthYear: 1986, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
  ],
  '01-13': [
    { name: { ja: '太川陽介', en: 'Yosuke Tagawa' }, birthYear: 1959, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'オーランド・ブルーム', en: 'Orlando Bloom' }, birthYear: 1977, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '01-14': [
    { name: { ja: '田中将大', en: 'Masahiro Tanaka' }, birthYear: 1988, profession: { ja: '野球選手', en: 'Baseball Player' }, nationality: 'jp' },
    { name: { ja: 'アルベルト・シュバイツァー', en: 'Albert Schweitzer' }, birthYear: 1875, deathYear: 1965, profession: { ja: '医師', en: 'Physician' }, nationality: 'intl' },
  ],
  '01-15': [
    { name: { ja: '樹木希林', en: 'Kirin Kiki' }, birthYear: 1943, deathYear: 2018, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'マーティン・ルーサー・キング', en: 'Martin Luther King Jr.' }, birthYear: 1929, deathYear: 1968, profession: { ja: '公民権運動指導者', en: 'Civil Rights Leader' }, nationality: 'intl' },
  ],
  '01-16': [
    { name: { ja: '池上彰', en: 'Akira Ikegami' }, birthYear: 1950, profession: { ja: 'ジャーナリスト', en: 'Journalist' }, nationality: 'jp' },
    { name: { ja: 'ケイト・モス', en: 'Kate Moss' }, birthYear: 1974, profession: { ja: 'モデル', en: 'Model' }, nationality: 'intl' },
  ],
  '01-17': [
    { name: { ja: '坂本龍一', en: 'Ryuichi Sakamoto' }, birthYear: 1952, deathYear: 2023, profession: { ja: '音楽家', en: 'Musician' }, nationality: 'jp' },
    { name: { ja: 'ベンジャミン・フランクリン', en: 'Benjamin Franklin' }, birthYear: 1706, deathYear: 1790, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '01-18': [
    { name: { ja: '北野武', en: 'Beat Takeshi' }, birthYear: 1947, profession: { ja: '映画監督', en: 'Director' }, nationality: 'jp' },
    { name: { ja: 'ケビン・コスナー', en: 'Kevin Costner' }, birthYear: 1955, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '01-19': [
    { name: { ja: '松任谷由実', en: 'Yumi Matsutoya' }, birthYear: 1954, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'エドガー・アラン・ポー', en: 'Edgar Allan Poe' }, birthYear: 1809, deathYear: 1849, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '01-20': [
    { name: { ja: '三國連太郎', en: 'Rentaro Mikuni' }, birthYear: 1923, deathYear: 2013, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'フェデリコ・フェリーニ', en: 'Federico Fellini' }, birthYear: 1920, deathYear: 1993, profession: { ja: '映画監督', en: 'Director' }, nationality: 'intl' },
  ],
  '01-21': [
    { name: { ja: '高田純次', en: 'Junji Takada' }, birthYear: 1947, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'クリスチャン・ディオール', en: 'Christian Dior' }, birthYear: 1905, deathYear: 1957, profession: { ja: 'デザイナー', en: 'Designer' }, nationality: 'intl' },
  ],
  '01-22': [
    { name: { ja: '中田英寿', en: 'Hidetoshi Nakata' }, birthYear: 1977, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'jp' },
    { name: { ja: 'フランシス・ベーコン', en: 'Francis Bacon' }, birthYear: 1561, deathYear: 1626, profession: { ja: '哲学者', en: 'Philosopher' }, nationality: 'intl' },
  ],
  '01-23': [
    { name: { ja: '湯川秀樹', en: 'Hideki Yukawa' }, birthYear: 1907, deathYear: 1981, profession: { ja: '物理学者', en: 'Physicist' }, nationality: 'jp' },
    { name: { ja: '葉加瀬太郎', en: 'Taro Hakase' }, birthYear: 1968, profession: { ja: 'バイオリニスト', en: 'Violinist' }, nationality: 'jp' },
  ],
  '01-24': [
    { name: { ja: '尾崎将司', en: 'Masashi Ozaki' }, birthYear: 1947, profession: { ja: 'ゴルファー', en: 'Golfer' }, nationality: 'jp' },
    { name: { ja: 'ニール・ダイアモンド', en: 'Neil Diamond' }, birthYear: 1941, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '01-25': [
    { name: { ja: '松本零士', en: 'Leiji Matsumoto' }, birthYear: 1938, deathYear: 2023, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'ロバート・バーンズ', en: 'Robert Burns' }, birthYear: 1759, deathYear: 1796, profession: { ja: '詩人', en: 'Poet' }, nationality: 'intl' },
  ],
  '01-26': [
    { name: { ja: '所ジョージ', en: 'George Tokoro' }, birthYear: 1955, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ダグラス・マッカーサー', en: 'Douglas MacArthur' }, birthYear: 1880, deathYear: 1964, profession: { ja: '軍人', en: 'Military Leader' }, nationality: 'intl' },
  ],
  '01-27': [
    { name: { ja: '清水ミチコ', en: 'Michiko Shimizu' }, birthYear: 1960, profession: { ja: 'タレント', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'モーツァルト', en: 'Wolfgang Amadeus Mozart' }, birthYear: 1756, deathYear: 1791, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  '01-28': [
    { name: { ja: '三浦知良', en: 'Kazuyoshi Miura' }, birthYear: 1967, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'jp' },
    { name: { ja: 'ジャクソン・ポロック', en: 'Jackson Pollock' }, birthYear: 1912, deathYear: 1956, profession: { ja: '画家', en: 'Painter' }, nationality: 'intl' },
  ],
  '01-29': [
    { name: { ja: '毛利衛', en: 'Mamoru Mohri' }, birthYear: 1948, profession: { ja: '宇宙飛行士', en: 'Astronaut' }, nationality: 'jp' },
    { name: { ja: 'オプラ・ウィンフリー', en: 'Oprah Winfrey' }, birthYear: 1954, profession: { ja: 'TV司会者', en: 'TV Host' }, nationality: 'intl' },
  ],
  '01-30': [
    { name: { ja: '長谷川町子', en: 'Machiko Hasegawa' }, birthYear: 1920, deathYear: 1992, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'フランクリン・ルーズベルト', en: 'Franklin D. Roosevelt' }, birthYear: 1882, deathYear: 1945, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '01-31': [
    { name: { ja: '香取慎吾', en: 'Shingo Katori' }, birthYear: 1977, profession: { ja: 'タレント', en: 'Entertainer' }, nationality: 'jp' },
    { name: { ja: 'フランツ・シューベルト', en: 'Franz Schubert' }, birthYear: 1797, deathYear: 1828, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  // 2月
  '02-01': [
    { name: { ja: '沢田研二', en: 'Kenji Sawada' }, birthYear: 1948, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'クラーク・ゲーブル', en: 'Clark Gable' }, birthYear: 1901, deathYear: 1960, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '02-02': [
    { name: { ja: 'HISASHI', en: 'HISASHI' }, birthYear: 1972, profession: { ja: 'ミュージシャン', en: 'Musician' }, nationality: 'jp' },
    { name: { ja: 'シャキール・オニール', en: "Shaquille O'Neal" }, birthYear: 1972, profession: { ja: 'バスケ選手', en: 'Basketball Player' }, nationality: 'intl' },
  ],
  '02-03': [
    { name: { ja: '川島なお美', en: 'Naomi Kawashima' }, birthYear: 1960, deathYear: 2015, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'フェリックス・メンデルスゾーン', en: 'Felix Mendelssohn' }, birthYear: 1809, deathYear: 1847, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  '02-04': [
    { name: { ja: '小泉今日子', en: 'Kyoko Koizumi' }, birthYear: 1966, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'アリス・クーパー', en: 'Alice Cooper' }, birthYear: 1948, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '02-05': [
    { name: { ja: '大地真央', en: 'Mao Daichi' }, birthYear: 1956, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'クリスティアーノ・ロナウド', en: 'Cristiano Ronaldo' }, birthYear: 1985, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'intl' },
  ],
  '02-06': [
    { name: { ja: '福山雅治', en: 'Masaharu Fukuyama' }, birthYear: 1969, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ボブ・マーリー', en: 'Bob Marley' }, birthYear: 1945, deathYear: 1981, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '02-07': [
    { name: { ja: '向井理', en: 'Osamu Mukai' }, birthYear: 1982, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'チャールズ・ディケンズ', en: 'Charles Dickens' }, birthYear: 1812, deathYear: 1870, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '02-08': [
    { name: { ja: '佐々木主浩', en: 'Kazuhiro Sasaki' }, birthYear: 1968, profession: { ja: '野球選手', en: 'Baseball Player' }, nationality: 'jp' },
    { name: { ja: 'ジェームズ・ディーン', en: 'James Dean' }, birthYear: 1931, deathYear: 1955, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '02-09': [
    { name: { ja: '手塚治虫', en: 'Osamu Tezuka' }, birthYear: 1928, deathYear: 1989, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'ミア・ファロー', en: 'Mia Farrow' }, birthYear: 1945, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '02-10': [
    { name: { ja: '島田紳助', en: 'Shinsuke Shimada' }, birthYear: 1956, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'グレン・ミラー', en: 'Glenn Miller' }, birthYear: 1904, deathYear: 1944, profession: { ja: '音楽家', en: 'Musician' }, nationality: 'intl' },
  ],
  '02-11': [
    { name: { ja: '加藤剛', en: 'Go Kato' }, birthYear: 1938, deathYear: 2018, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'トーマス・エジソン', en: 'Thomas Edison' }, birthYear: 1847, deathYear: 1931, profession: { ja: '発明家', en: 'Inventor' }, nationality: 'intl' },
  ],
  '02-12': [
    { name: { ja: '植村直己', en: 'Naomi Uemura' }, birthYear: 1941, deathYear: 1984, profession: { ja: '冒険家', en: 'Adventurer' }, nationality: 'jp' },
    { name: { ja: 'エイブラハム・リンカーン', en: 'Abraham Lincoln' }, birthYear: 1809, deathYear: 1865, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '02-13': [
    { name: { ja: '出川哲朗', en: 'Tetsuro Degawa' }, birthYear: 1964, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ピーター・ガブリエル', en: 'Peter Gabriel' }, birthYear: 1950, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '02-14': [
    { name: { ja: '酒井法子', en: 'Noriko Sakai' }, birthYear: 1971, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'マイケル・ブルームバーグ', en: 'Michael Bloomberg' }, birthYear: 1942, profession: { ja: '実業家', en: 'Entrepreneur' }, nationality: 'intl' },
  ],
  '02-15': [
    { name: { ja: '堀ちえみ', en: 'Chiemi Hori' }, birthYear: 1967, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ガリレオ・ガリレイ', en: 'Galileo Galilei' }, birthYear: 1564, deathYear: 1642, profession: { ja: '科学者', en: 'Scientist' }, nationality: 'intl' },
  ],
  '02-16': [
    { name: { ja: '中森明菜', en: 'Akina Nakamori' }, birthYear: 1965, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジョン・マッケンロー', en: 'John McEnroe' }, birthYear: 1959, profession: { ja: 'テニス選手', en: 'Tennis Player' }, nationality: 'intl' },
  ],
  '02-17': [
    { name: { ja: '香椎由宇', en: 'Yuu Kashii' }, birthYear: 1987, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'マイケル・ジョーダン', en: 'Michael Jordan' }, birthYear: 1963, profession: { ja: 'バスケ選手', en: 'Basketball Player' }, nationality: 'intl' },
  ],
  '02-18': [
    { name: { ja: '蛭子能収', en: 'Yoshikazu Ebisu' }, birthYear: 1947, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'ジョン・トラボルタ', en: 'John Travolta' }, birthYear: 1954, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '02-19': [
    { name: { ja: '薬丸裕英', en: 'Hirohide Yakumaru' }, birthYear: 1966, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'コペルニクス', en: 'Nicolaus Copernicus' }, birthYear: 1473, deathYear: 1543, profession: { ja: '天文学者', en: 'Astronomer' }, nationality: 'intl' },
  ],
  '02-20': [
    { name: { ja: '志村けん', en: 'Ken Shimura' }, birthYear: 1950, deathYear: 2020, profession: { ja: 'コメディアン', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'カート・コバーン', en: 'Kurt Cobain' }, birthYear: 1967, deathYear: 1994, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '02-21': [
    { name: { ja: '要潤', en: 'Jun Kaname' }, birthYear: 1981, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'アラン・リックマン', en: 'Alan Rickman' }, birthYear: 1946, deathYear: 2016, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '02-22': [
    { name: { ja: '鳥山明', en: 'Akira Toriyama' }, birthYear: 1955, deathYear: 2024, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'ジョージ・ワシントン', en: 'George Washington' }, birthYear: 1732, deathYear: 1799, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '02-23': [
    { name: { ja: '天皇陛下', en: 'Emperor Naruhito' }, birthYear: 1960, profession: { ja: '天皇', en: 'Emperor of Japan' }, nationality: 'jp' },
    { name: { ja: 'ゲオルク・ヘンデル', en: 'George Handel' }, birthYear: 1685, deathYear: 1759, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  '02-24': [
    { name: { ja: '草野仁', en: 'Hitoshi Kusano' }, birthYear: 1944, profession: { ja: 'アナウンサー', en: 'Announcer' }, nationality: 'jp' },
    { name: { ja: 'スティーブ・ジョブズ', en: 'Steve Jobs' }, birthYear: 1955, deathYear: 2011, profession: { ja: '実業家', en: 'Entrepreneur' }, nationality: 'intl' },
  ],
  '02-25': [
    { name: { ja: '松本明子', en: 'Akiko Matsumoto' }, birthYear: 1966, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ルノワール', en: 'Pierre-Auguste Renoir' }, birthYear: 1841, deathYear: 1919, profession: { ja: '画家', en: 'Painter' }, nationality: 'intl' },
  ],
  '02-26': [
    { name: { ja: '三浦知良', en: 'Kazuyoshi Miura' }, birthYear: 1967, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'jp' },
    { name: { ja: 'ビクトル・ユーゴー', en: 'Victor Hugo' }, birthYear: 1802, deathYear: 1885, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '02-27': [
    { name: { ja: '徳永英明', en: 'Hideaki Tokunaga' }, birthYear: 1961, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'エリザベス・テイラー', en: 'Elizabeth Taylor' }, birthYear: 1932, deathYear: 2011, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '02-28': [
    { name: { ja: '菊川怜', en: 'Rei Kikukawa' }, birthYear: 1978, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ジョン・スタインベック', en: 'John Steinbeck' }, birthYear: 1902, deathYear: 1968, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '02-29': [
    { name: { ja: '峰竜太', en: 'Ryuta Mine' }, birthYear: 1952, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ジョアキーノ・ロッシーニ', en: 'Gioachino Rossini' }, birthYear: 1792, deathYear: 1868, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  // 3月
  '03-01': [
    { name: { ja: '川崎麻世', en: 'Mayo Kawasaki' }, birthYear: 1963, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'フレデリック・ショパン', en: 'Frederic Chopin' }, birthYear: 1810, deathYear: 1849, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  '03-02': [
    { name: { ja: '島崎和歌子', en: 'Wakako Shimazaki' }, birthYear: 1973, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ミハエル・ゴルバチョフ', en: 'Mikhail Gorbachev' }, birthYear: 1931, deathYear: 2022, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '03-03': [
    { name: { ja: '竹中直人', en: 'Naoto Takenaka' }, birthYear: 1956, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'アレクサンダー・グラハム・ベル', en: 'Alexander Graham Bell' }, birthYear: 1847, deathYear: 1922, profession: { ja: '発明家', en: 'Inventor' }, nationality: 'intl' },
  ],
  '03-04': [
    { name: { ja: '佐野史郎', en: 'Shiro Sano' }, birthYear: 1955, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'アントニオ・ヴィヴァルディ', en: 'Antonio Vivaldi' }, birthYear: 1678, deathYear: 1741, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  '03-05': [
    { name: { ja: '北条司', en: 'Tsukasa Hojo' }, birthYear: 1959, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'ロザ・ルクセンブルク', en: 'Rosa Luxemburg' }, birthYear: 1871, deathYear: 1919, profession: { ja: '革命家', en: 'Revolutionary' }, nationality: 'intl' },
  ],
  '03-06': [
    { name: { ja: '高橋真梨子', en: 'Mariko Takahashi' }, birthYear: 1949, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ミケランジェロ', en: 'Michelangelo' }, birthYear: 1475, deathYear: 1564, profession: { ja: '芸術家', en: 'Artist' }, nationality: 'intl' },
  ],
  '03-07': [
    { name: { ja: 'オール巨人', en: 'All Kyojin' }, birthYear: 1951, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'モーリス・ラヴェル', en: 'Maurice Ravel' }, birthYear: 1875, deathYear: 1937, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  '03-08': [
    { name: { ja: '高木ブー', en: 'Boo Takagi' }, birthYear: 1933, profession: { ja: 'コメディアン', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: '水木しげる', en: 'Shigeru Mizuki' }, birthYear: 1922, deathYear: 2015, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
  ],
  '03-09': [
    { name: { ja: '木梨憲武', en: 'Noritake Kinashi' }, birthYear: 1962, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ユーリイ・ガガーリン', en: 'Yuri Gagarin' }, birthYear: 1934, deathYear: 1968, profession: { ja: '宇宙飛行士', en: 'Astronaut' }, nationality: 'intl' },
  ],
  '03-10': [
    { name: { ja: '藤子不二雄A', en: 'Fujiko A. Fujio' }, birthYear: 1934, deathYear: 2022, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'オサマ・ビン・ラディン', en: 'Osama bin Laden' }, birthYear: 1957, deathYear: 2011, profession: { ja: 'テロリスト', en: 'Terrorist' }, nationality: 'intl' },
  ],
  '03-11': [
    { name: { ja: '大沢たかお', en: 'Takao Osawa' }, birthYear: 1968, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ルパート・マードック', en: 'Rupert Murdoch' }, birthYear: 1931, profession: { ja: '実業家', en: 'Entrepreneur' }, nationality: 'intl' },
  ],
  '03-12': [
    { name: { ja: '勝俣州和', en: 'Kunikazu Katsumata' }, birthYear: 1965, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ジャック・ケルアック', en: 'Jack Kerouac' }, birthYear: 1922, deathYear: 1969, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '03-13': [
    { name: { ja: 'コロッケ', en: 'Korokke' }, birthYear: 1960, profession: { ja: 'コメディアン', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'L・ロン・ハバード', en: 'L. Ron Hubbard' }, birthYear: 1911, deathYear: 1986, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '03-14': [
    { name: { ja: '五木ひろし', en: 'Hiroshi Itsuki' }, birthYear: 1948, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'アルベルト・アインシュタイン', en: 'Albert Einstein' }, birthYear: 1879, deathYear: 1955, profession: { ja: '物理学者', en: 'Physicist' }, nationality: 'intl' },
  ],
  '03-15': [
    { name: { ja: '武豊', en: 'Yutaka Take' }, birthYear: 1969, profession: { ja: '騎手', en: 'Jockey' }, nationality: 'jp' },
    { name: { ja: 'アンドリュー・ジャクソン', en: 'Andrew Jackson' }, birthYear: 1767, deathYear: 1845, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '03-16': [
    { name: { ja: '石田ひかり', en: 'Hikari Ishida' }, birthYear: 1972, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ジェリー・ルイス', en: 'Jerry Lewis' }, birthYear: 1926, deathYear: 2017, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '03-17': [
    { name: { ja: '渡辺喜美', en: 'Yoshimi Watanabe' }, birthYear: 1952, profession: { ja: '政治家', en: 'Politician' }, nationality: 'jp' },
    { name: { ja: 'ナット・キング・コール', en: 'Nat King Cole' }, birthYear: 1919, deathYear: 1965, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '03-18': [
    { name: { ja: '哀川翔', en: 'Sho Aikawa' }, birthYear: 1961, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'リュック・ベッソン', en: 'Luc Besson' }, birthYear: 1959, profession: { ja: '映画監督', en: 'Director' }, nationality: 'intl' },
  ],
  '03-19': [
    { name: { ja: '稲森いずみ', en: 'Izumi Inamori' }, birthYear: 1972, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ブルース・ウィリス', en: 'Bruce Willis' }, birthYear: 1955, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '03-20': [
    { name: { ja: '竹内まりや', en: 'Mariya Takeuchi' }, birthYear: 1955, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'スパイク・リー', en: 'Spike Lee' }, birthYear: 1957, profession: { ja: '映画監督', en: 'Director' }, nationality: 'intl' },
  ],
  '03-21': [
    { name: { ja: '岩城滉一', en: 'Koichi Iwaki' }, birthYear: 1951, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ヨハン・ゼバスティアン・バッハ', en: 'Johann Sebastian Bach' }, birthYear: 1685, deathYear: 1750, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  '03-22': [
    { name: { ja: '有働由美子', en: 'Yumiko Udo' }, birthYear: 1969, profession: { ja: 'アナウンサー', en: 'Announcer' }, nationality: 'jp' },
    { name: { ja: 'アンドリュー・ロイド・ウェバー', en: 'Andrew Lloyd Webber' }, birthYear: 1948, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  '03-23': [
    { name: { ja: '黒澤明', en: 'Akira Kurosawa' }, birthYear: 1910, deathYear: 1998, profession: { ja: '映画監督', en: 'Director' }, nationality: 'jp' },
    { name: { ja: '川端康成', en: 'Yasunari Kawabata' }, birthYear: 1899, deathYear: 1972, profession: { ja: '作家', en: 'Writer' }, nationality: 'jp' },
  ],
  '03-24': [
    { name: { ja: '原辰徳', en: 'Tatsunori Hara' }, birthYear: 1958, profession: { ja: '野球選手', en: 'Baseball Player' }, nationality: 'jp' },
    { name: { ja: 'スティーブ・マックイーン', en: 'Steve McQueen' }, birthYear: 1930, deathYear: 1980, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '03-25': [
    { name: { ja: '嘉門タツオ', en: 'Tatsuo Kamon' }, birthYear: 1959, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'エルトン・ジョン', en: 'Elton John' }, birthYear: 1947, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '03-26': [
    { name: { ja: '北野武', en: 'Takeshi Kitano' }, birthYear: 1947, profession: { ja: '映画監督', en: 'Director' }, nationality: 'jp' },
    { name: { ja: 'スティーブン・タイラー', en: 'Steven Tyler' }, birthYear: 1948, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '03-27': [
    { name: { ja: '松本幸四郎', en: 'Koshiro Matsumoto' }, birthYear: 1942, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'クエンティン・タランティーノ', en: 'Quentin Tarantino' }, birthYear: 1963, profession: { ja: '映画監督', en: 'Director' }, nationality: 'intl' },
  ],
  '03-28': [
    { name: { ja: '神田うの', en: 'Uno Kanda' }, birthYear: 1975, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'レディー・ガガ', en: 'Lady Gaga' }, birthYear: 1986, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '03-29': [
    { name: { ja: '西島秀俊', en: 'Hidetoshi Nishijima' }, birthYear: 1971, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'エル・グレコ', en: 'El Greco' }, birthYear: 1541, deathYear: 1614, profession: { ja: '画家', en: 'Painter' }, nationality: 'intl' },
  ],
  '03-30': [
    { name: { ja: '千原ジュニア', en: 'Chihara Junior' }, birthYear: 1974, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'ヴィンセント・ヴァン・ゴッホ', en: 'Vincent van Gogh' }, birthYear: 1853, deathYear: 1890, profession: { ja: '画家', en: 'Painter' }, nationality: 'intl' },
  ],
  '03-31': [
    { name: { ja: '舘ひろし', en: 'Hiroshi Tachi' }, birthYear: 1950, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ルネ・デカルト', en: 'Rene Descartes' }, birthYear: 1596, deathYear: 1650, profession: { ja: '哲学者', en: 'Philosopher' }, nationality: 'intl' },
  ],
  // 4月
  '04-01': [
    { name: { ja: '桑田真澄', en: 'Masumi Kuwata' }, birthYear: 1968, profession: { ja: '野球選手', en: 'Baseball Player' }, nationality: 'jp' },
    { name: { ja: 'スーザン・ボイル', en: 'Susan Boyle' }, birthYear: 1961, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '04-02': [
    { name: { ja: '忌野清志郎', en: 'Kiyoshiro Imawano' }, birthYear: 1951, deathYear: 2009, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ハンス・C・アンデルセン', en: 'Hans Christian Andersen' }, birthYear: 1805, deathYear: 1875, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '04-03': [
    { name: { ja: '大泉洋', en: 'Yo Oizumi' }, birthYear: 1973, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'エディ・マーフィ', en: 'Eddie Murphy' }, birthYear: 1961, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-04': [
    { name: { ja: '照英', en: 'Shoei' }, birthYear: 1974, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ロバート・ダウニー・Jr', en: 'Robert Downey Jr.' }, birthYear: 1965, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-05': [
    { name: { ja: '西川貴教', en: 'Takanori Nishikawa' }, birthYear: 1970, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'コリン・パウエル', en: 'Colin Powell' }, birthYear: 1937, deathYear: 2021, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '04-06': [
    { name: { ja: '乙武洋匡', en: 'Hirotada Ototake' }, birthYear: 1976, profession: { ja: '作家', en: 'Writer' }, nationality: 'jp' },
    { name: { ja: 'ポール・ルベンス', en: 'Paul Reubens' }, birthYear: 1952, deathYear: 2023, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-07': [
    { name: { ja: 'GACKT', en: 'GACKT' }, birthYear: 1973, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジャッキー・チェン', en: 'Jackie Chan' }, birthYear: 1954, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-08': [
    { name: { ja: '桃井かおり', en: 'Kaori Momoi' }, birthYear: 1951, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'パブロ・ピカソ', en: 'Pablo Picasso' }, birthYear: 1881, deathYear: 1973, profession: { ja: '画家', en: 'Painter' }, nationality: 'intl' },
  ],
  '04-09': [
    { name: { ja: '天海祐希', en: 'Yuki Amami' }, birthYear: 1967, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'クリステン・スチュワート', en: 'Kristen Stewart' }, birthYear: 1990, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '04-10': [
    { name: { ja: '木村佳乃', en: 'Yoshino Kimura' }, birthYear: 1976, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'スティーブン・セガール', en: 'Steven Seagal' }, birthYear: 1952, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-11': [
    { name: { ja: '森高千里', en: 'Chisato Moritaka' }, birthYear: 1969, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジェレミー・クラークソン', en: 'Jeremy Clarkson' }, birthYear: 1960, profession: { ja: 'TV司会者', en: 'TV Host' }, nationality: 'intl' },
  ],
  '04-12': [
    { name: { ja: '高橋克典', en: 'Katsunori Takahashi' }, birthYear: 1964, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'デヴィッド・レターマン', en: 'David Letterman' }, birthYear: 1947, profession: { ja: 'TV司会者', en: 'TV Host' }, nationality: 'intl' },
  ],
  '04-13': [
    { name: { ja: '西城秀樹', en: 'Hideki Saijo' }, birthYear: 1955, deathYear: 2018, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'トーマス・ジェファーソン', en: 'Thomas Jefferson' }, birthYear: 1743, deathYear: 1826, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '04-14': [
    { name: { ja: '工藤静香', en: 'Shizuka Kudo' }, birthYear: 1970, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'サラ・ミシェル・ゲラー', en: 'Sarah Michelle Gellar' }, birthYear: 1977, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '04-15': [
    { name: { ja: '北沢豪', en: 'Tsuyoshi Kitazawa' }, birthYear: 1968, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'jp' },
    { name: { ja: 'レオナルド・ダ・ヴィンチ', en: 'Leonardo da Vinci' }, birthYear: 1452, deathYear: 1519, profession: { ja: '芸術家', en: 'Artist' }, nationality: 'intl' },
  ],
  '04-16': [
    { name: { ja: '徳井義実', en: 'Yoshimi Tokui' }, birthYear: 1975, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'チャーリー・チャップリン', en: 'Charlie Chaplin' }, birthYear: 1889, deathYear: 1977, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-17': [
    { name: { ja: '高見沢俊彦', en: 'Toshihiko Takamizawa' }, birthYear: 1954, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ヴィクトリア・ベッカム', en: 'Victoria Beckham' }, birthYear: 1974, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '04-18': [
    { name: { ja: '伊藤つかさ', en: 'Tsukasa Ito' }, birthYear: 1967, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'エリック・ロバーツ', en: 'Eric Roberts' }, birthYear: 1956, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-19': [
    { name: { ja: '坂下千里子', en: 'Chiriko Sakashita' }, birthYear: 1973, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ケイト・ハドソン', en: 'Kate Hudson' }, birthYear: 1979, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '04-20': [
    { name: { ja: '宇治原史規', en: 'Fuminori Ujihara' }, birthYear: 1976, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'アドルフ・ヒトラー', en: 'Adolf Hitler' }, birthYear: 1889, deathYear: 1945, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '04-21': [
    { name: { ja: '安田美沙子', en: 'Misako Yasuda' }, birthYear: 1982, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'エリザベス2世', en: 'Queen Elizabeth II' }, birthYear: 1926, deathYear: 2022, profession: { ja: '女王', en: 'Queen' }, nationality: 'intl' },
  ],
  '04-22': [
    { name: { ja: '中田翔', en: 'Sho Nakata' }, birthYear: 1989, profession: { ja: '野球選手', en: 'Baseball Player' }, nationality: 'jp' },
    { name: { ja: 'ジャック・ニコルソン', en: 'Jack Nicholson' }, birthYear: 1937, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-23': [
    { name: { ja: '加藤あい', en: 'Ai Kato' }, birthYear: 1982, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ウィリアム・シェイクスピア', en: 'William Shakespeare' }, birthYear: 1564, deathYear: 1616, profession: { ja: '劇作家', en: 'Playwright' }, nationality: 'intl' },
  ],
  '04-24': [
    { name: { ja: '名倉潤', en: 'Jun Nagura' }, birthYear: 1968, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'バーブラ・ストライサンド', en: 'Barbra Streisand' }, birthYear: 1942, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '04-25': [
    { name: { ja: '鶴田真由', en: 'Mayu Tsuruta' }, birthYear: 1970, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'アル・パチーノ', en: 'Al Pacino' }, birthYear: 1940, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-26': [
    { name: { ja: '加藤浩次', en: 'Koji Kato' }, birthYear: 1969, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ジェット・リー', en: 'Jet Li' }, birthYear: 1963, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-27': [
    { name: { ja: '宮根誠司', en: 'Seiji Miyane' }, birthYear: 1963, profession: { ja: 'アナウンサー', en: 'Announcer' }, nationality: 'jp' },
    { name: { ja: 'サミュエル・モールス', en: 'Samuel Morse' }, birthYear: 1791, deathYear: 1872, profession: { ja: '発明家', en: 'Inventor' }, nationality: 'intl' },
  ],
  '04-28': [
    { name: { ja: '生田斗真', en: 'Toma Ikuta' }, birthYear: 1984, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ジェイソン・リー', en: 'Jason Lee' }, birthYear: 1970, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-29': [
    { name: { ja: '田中裕二', en: 'Yuji Tanaka' }, birthYear: 1965, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'ダニエル・デイ＝ルイス', en: 'Daniel Day-Lewis' }, birthYear: 1957, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '04-30': [
    { name: { ja: '常盤貴子', en: 'Takako Tokiwa' }, birthYear: 1972, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'カール・フリードリヒ・ガウス', en: 'Carl Friedrich Gauss' }, birthYear: 1777, deathYear: 1855, profession: { ja: '数学者', en: 'Mathematician' }, nationality: 'intl' },
  ],
  // 5月
  '05-01': [
    { name: { ja: '原沙知絵', en: 'Sachie Hara' }, birthYear: 1978, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ウェス・アンダーソン', en: 'Wes Anderson' }, birthYear: 1969, profession: { ja: '映画監督', en: 'Director' }, nationality: 'intl' },
  ],
  '05-02': [
    { name: { ja: '夏木マリ', en: 'Mari Natsuki' }, birthYear: 1952, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'デヴィッド・ベッカム', en: 'David Beckham' }, birthYear: 1975, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'intl' },
  ],
  '05-03': [
    { name: { ja: '三宅健', en: 'Ken Miyake' }, birthYear: 1979, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジェームズ・ブラウン', en: 'James Brown' }, birthYear: 1933, deathYear: 2006, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '05-04': [
    { name: { ja: '菊池桃子', en: 'Momoko Kikuchi' }, birthYear: 1968, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'オードリー・ヘプバーン', en: 'Audrey Hepburn' }, birthYear: 1929, deathYear: 1993, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '05-05': [
    { name: { ja: '渡部篤郎', en: 'Atsuro Watabe' }, birthYear: 1968, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'カール・マルクス', en: 'Karl Marx' }, birthYear: 1818, deathYear: 1883, profession: { ja: '哲学者', en: 'Philosopher' }, nationality: 'intl' },
  ],
  '05-06': [
    { name: { ja: '荒木大輔', en: 'Daisuke Araki' }, birthYear: 1964, profession: { ja: '野球選手', en: 'Baseball Player' }, nationality: 'jp' },
    { name: { ja: 'ジョージ・クルーニー', en: 'George Clooney' }, birthYear: 1961, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '05-07': [
    { name: { ja: '上川隆也', en: 'Takaya Kamikawa' }, birthYear: 1965, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ヨハネス・ブラームス', en: 'Johannes Brahms' }, birthYear: 1833, deathYear: 1897, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  '05-08': [
    { name: { ja: 'さくらももこ', en: 'Momoko Sakura' }, birthYear: 1965, deathYear: 2018, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'エンリケ・イグレシアス', en: 'Enrique Iglesias' }, birthYear: 1975, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '05-09': [
    { name: { ja: '香川照之', en: 'Teruyuki Kagawa' }, birthYear: 1965, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ビリー・ジョエル', en: 'Billy Joel' }, birthYear: 1949, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '05-10': [
    { name: { ja: '高橋尚子', en: 'Naoko Takahashi' }, birthYear: 1972, profession: { ja: 'マラソン選手', en: 'Marathon Runner' }, nationality: 'jp' },
    { name: { ja: 'ボノ', en: 'Bono' }, birthYear: 1960, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '05-11': [
    { name: { ja: '浜田雅功', en: 'Masatoshi Hamada' }, birthYear: 1963, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'サルバドール・ダリ', en: 'Salvador Dali' }, birthYear: 1904, deathYear: 1989, profession: { ja: '画家', en: 'Painter' }, nationality: 'intl' },
  ],
  '05-12': [
    { name: { ja: '渡辺徹', en: 'Toru Watanabe' }, birthYear: 1961, deathYear: 2022, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'フローレンス・ナイチンゲール', en: 'Florence Nightingale' }, birthYear: 1820, deathYear: 1910, profession: { ja: '看護師', en: 'Nurse' }, nationality: 'intl' },
  ],
  '05-13': [
    { name: { ja: '太田光', en: 'Hikari Ota' }, birthYear: 1965, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'スティーヴィー・ワンダー', en: 'Stevie Wonder' }, birthYear: 1950, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '05-14': [
    { name: { ja: '古市憲寿', en: 'Noritoshi Furuichi' }, birthYear: 1985, profession: { ja: '社会学者', en: 'Sociologist' }, nationality: 'jp' },
    { name: { ja: 'マーク・ザッカーバーグ', en: 'Mark Zuckerberg' }, birthYear: 1984, profession: { ja: '実業家', en: 'Entrepreneur' }, nationality: 'intl' },
  ],
  '05-15': [
    { name: { ja: '井上康生', en: 'Kosei Inoue' }, birthYear: 1978, profession: { ja: '柔道家', en: 'Judoka' }, nationality: 'jp' },
    { name: { ja: 'マイク・オールドフィールド', en: 'Mike Oldfield' }, birthYear: 1953, profession: { ja: '音楽家', en: 'Musician' }, nationality: 'intl' },
  ],
  '05-16': [
    { name: { ja: 'ドルフ・ラングレン', en: 'Dolph Lundgren' }, birthYear: 1957, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
    { name: { ja: 'ジャネット・ジャクソン', en: 'Janet Jackson' }, birthYear: 1966, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '05-17': [
    { name: { ja: '坂井真紀', en: 'Maki Sakai' }, birthYear: 1970, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'トニー・パーカー', en: 'Tony Parker' }, birthYear: 1982, profession: { ja: 'バスケ選手', en: 'Basketball Player' }, nationality: 'intl' },
  ],
  '05-18': [
    { name: { ja: '槇原敬之', en: 'Noriyuki Makihara' }, birthYear: 1969, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジョン・ポール2世', en: 'Pope John Paul II' }, birthYear: 1920, deathYear: 2005, profession: { ja: 'ローマ教皇', en: 'Pope' }, nationality: 'intl' },
  ],
  '05-19': [
    { name: { ja: '神木隆之介', en: 'Ryunosuke Kamiki' }, birthYear: 1993, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'マルコムX', en: 'Malcolm X' }, birthYear: 1925, deathYear: 1965, profession: { ja: '活動家', en: 'Activist' }, nationality: 'intl' },
  ],
  '05-20': [
    { name: { ja: '光浦靖子', en: 'Yasuko Mitsuura' }, birthYear: 1971, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'チェル', en: 'Cher' }, birthYear: 1946, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '05-21': [
    { name: { ja: '梨花', en: 'Rinka' }, birthYear: 1973, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'Mr.T', en: 'Mr. T' }, birthYear: 1952, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '05-22': [
    { name: { ja: '田中麗奈', en: 'Rena Tanaka' }, birthYear: 1980, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ナオミ・キャンベル', en: 'Naomi Campbell' }, birthYear: 1970, profession: { ja: 'モデル', en: 'Model' }, nationality: 'intl' },
  ],
  '05-23': [
    { name: { ja: '久保田利伸', en: 'Toshinobu Kubota' }, birthYear: 1962, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジョーン・コリンズ', en: 'Joan Collins' }, birthYear: 1933, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '05-24': [
    { name: { ja: '小林聡美', en: 'Satomi Kobayashi' }, birthYear: 1965, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ボブ・ディラン', en: 'Bob Dylan' }, birthYear: 1941, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '05-25': [
    { name: { ja: '上田慎一郎', en: 'Shinichiro Ueda' }, birthYear: 1984, profession: { ja: '映画監督', en: 'Director' }, nationality: 'jp' },
    { name: { ja: 'イアン・マッケラン', en: 'Ian McKellen' }, birthYear: 1939, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '05-26': [
    { name: { ja: 'TAKAHIRO', en: 'TAKAHIRO' }, birthYear: 1984, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジョン・ウェイン', en: 'John Wayne' }, birthYear: 1907, deathYear: 1979, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '05-27': [
    { name: { ja: '内藤剛志', en: 'Takashi Naito' }, birthYear: 1955, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ヘンリー・キッシンジャー', en: 'Henry Kissinger' }, birthYear: 1923, deathYear: 2023, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '05-28': [
    { name: { ja: '黒木瞳', en: 'Hitomi Kuroki' }, birthYear: 1960, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'カイリー・ミノーグ', en: 'Kylie Minogue' }, birthYear: 1968, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '05-29': [
    { name: { ja: '片山右京', en: 'Ukyo Katayama' }, birthYear: 1963, profession: { ja: 'F1ドライバー', en: 'F1 Driver' }, nationality: 'jp' },
    { name: { ja: 'ジョン・F・ケネディ', en: 'John F. Kennedy' }, birthYear: 1917, deathYear: 1963, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '05-30': [
    { name: { ja: '酒井若菜', en: 'Wakana Sakai' }, birthYear: 1980, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'スティーブン・ジェラード', en: 'Steven Gerrard' }, birthYear: 1980, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'intl' },
  ],
  '05-31': [
    { name: { ja: '有吉弘行', en: 'Hiroiki Ariyoshi' }, birthYear: 1974, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'クリント・イーストウッド', en: 'Clint Eastwood' }, birthYear: 1930, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  // 6月
  '06-01': [
    { name: { ja: '岡本夏生', en: 'Natsuki Okamoto' }, birthYear: 1965, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'マリリン・モンロー', en: 'Marilyn Monroe' }, birthYear: 1926, deathYear: 1962, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '06-02': [
    { name: { ja: '政井マヤ', en: 'Maya Masai' }, birthYear: 1976, profession: { ja: 'アナウンサー', en: 'Announcer' }, nationality: 'jp' },
    { name: { ja: 'ドミニク・ウェスト', en: 'Dominic West' }, birthYear: 1969, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '06-03': [
    { name: { ja: '長澤まさみ', en: 'Masami Nagasawa' }, birthYear: 1987, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ラファエル・ナダル', en: 'Rafael Nadal' }, birthYear: 1986, profession: { ja: 'テニス選手', en: 'Tennis Player' }, nationality: 'intl' },
  ],
  '06-04': [
    { name: { ja: '高原直泰', en: 'Naohiro Takahara' }, birthYear: 1979, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'jp' },
    { name: { ja: 'アンジェリーナ・ジョリー', en: 'Angelina Jolie' }, birthYear: 1975, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '06-05': [
    { name: { ja: '福田彩乃', en: 'Ayano Fukuda' }, birthYear: 1988, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'マーク・ウォールバーグ', en: 'Mark Wahlberg' }, birthYear: 1971, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '06-06': [
    { name: { ja: '緒形直人', en: 'Naoto Ogata' }, birthYear: 1967, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ジェイソン・アイザックス', en: 'Jason Isaacs' }, birthYear: 1963, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '06-07': [
    { name: { ja: '手越祐也', en: 'Yuya Tegoshi' }, birthYear: 1987, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'プリンス', en: 'Prince' }, birthYear: 1958, deathYear: 2016, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '06-08': [
    { name: { ja: '森尾由美', en: 'Yumi Morio' }, birthYear: 1966, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'カニエ・ウェスト', en: 'Kanye West' }, birthYear: 1977, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '06-09': [
    { name: { ja: '薬師丸ひろ子', en: 'Hiroko Yakushimaru' }, birthYear: 1964, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'マイケル・J・フォックス', en: 'Michael J. Fox' }, birthYear: 1961, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '06-10': [
    { name: { ja: 'いとうあさこ', en: 'Asako Ito' }, birthYear: 1970, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'エリザベス・ハーレイ', en: 'Elizabeth Hurley' }, birthYear: 1965, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '06-11': [
    { name: { ja: '沢口靖子', en: 'Yasuko Sawaguchi' }, birthYear: 1965, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'シャイア・ラブーフ', en: 'Shia LaBeouf' }, birthYear: 1986, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '06-12': [
    { name: { ja: '宮本浩次', en: 'Hiroji Miyamoto' }, birthYear: 1966, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'アンネ・フランク', en: 'Anne Frank' }, birthYear: 1929, deathYear: 1945, profession: { ja: '日記作家', en: 'Diarist' }, nationality: 'intl' },
  ],
  '06-13': [
    { name: { ja: '森口瑤子', en: 'Yoko Moriguchi' }, birthYear: 1966, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'クリス・エヴァンス', en: 'Chris Evans' }, birthYear: 1981, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '06-14': [
    { name: { ja: '藤井隆', en: 'Takashi Fujii' }, birthYear: 1972, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ドナルド・トランプ', en: 'Donald Trump' }, birthYear: 1946, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '06-15': [
    { name: { ja: '大林素子', en: 'Motoko Obayashi' }, birthYear: 1967, profession: { ja: 'バレー選手', en: 'Volleyball Player' }, nationality: 'jp' },
    { name: { ja: 'ニール・パトリック・ハリス', en: 'Neil Patrick Harris' }, birthYear: 1973, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '06-16': [
    { name: { ja: 'ねづっち', en: 'Nezucchi' }, birthYear: 1975, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'トゥパック・シャクール', en: 'Tupac Shakur' }, birthYear: 1971, deathYear: 1996, profession: { ja: 'ラッパー', en: 'Rapper' }, nationality: 'intl' },
  ],
  '06-17': [
    { name: { ja: '二宮和也', en: 'Kazunari Ninomiya' }, birthYear: 1983, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ヴィーナス・ウィリアムズ', en: 'Venus Williams' }, birthYear: 1980, profession: { ja: 'テニス選手', en: 'Tennis Player' }, nationality: 'intl' },
  ],
  '06-18': [
    { name: { ja: '細川直美', en: 'Naomi Hosokawa' }, birthYear: 1974, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ポール・マッカートニー', en: 'Paul McCartney' }, birthYear: 1942, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '06-19': [
    { name: { ja: '広瀬香美', en: 'Kohmi Hirose' }, birthYear: 1966, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジグフェルド', en: 'Zoe Saldana' }, birthYear: 1978, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '06-20': [
    { name: { ja: '相武紗季', en: 'Saki Aibu' }, birthYear: 1985, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ニコール・キッドマン', en: 'Nicole Kidman' }, birthYear: 1967, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '06-21': [
    { name: { ja: '松本伊代', en: 'Iyo Matsumoto' }, birthYear: 1965, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'クリス・プラット', en: 'Chris Pratt' }, birthYear: 1979, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '06-22': [
    { name: { ja: '阿部寛', en: 'Hiroshi Abe' }, birthYear: 1964, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'メリル・ストリープ', en: 'Meryl Streep' }, birthYear: 1949, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '06-23': [
    { name: { ja: '南野陽子', en: 'Yoko Minamino' }, birthYear: 1967, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ジネディーヌ・ジダン', en: 'Zinedine Zidane' }, birthYear: 1972, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'intl' },
  ],
  '06-24': [
    { name: { ja: '八木亜希子', en: 'Akiko Yagi' }, birthYear: 1965, profession: { ja: 'アナウンサー', en: 'Announcer' }, nationality: 'jp' },
    { name: { ja: 'リオネル・メッシ', en: 'Lionel Messi' }, birthYear: 1987, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'intl' },
  ],
  '06-25': [
    { name: { ja: '松浦亜弥', en: 'Aya Matsuura' }, birthYear: 1986, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジョージ・オーウェル', en: 'George Orwell' }, birthYear: 1903, deathYear: 1950, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '06-26': [
    { name: { ja: '具志堅用高', en: 'Yoko Gushiken' }, birthYear: 1955, profession: { ja: 'ボクサー', en: 'Boxer' }, nationality: 'jp' },
    { name: { ja: 'アリアナ・グランデ', en: 'Ariana Grande' }, birthYear: 1993, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '06-27': [
    { name: { ja: '優香', en: 'Yuka' }, birthYear: 1980, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'トビー・マグワイア', en: 'Tobey Maguire' }, birthYear: 1975, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '06-28': [
    { name: { ja: '水野美紀', en: 'Miki Mizuno' }, birthYear: 1974, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'イーロン・マスク', en: 'Elon Musk' }, birthYear: 1971, profession: { ja: '実業家', en: 'Entrepreneur' }, nationality: 'intl' },
  ],
  '06-29': [
    { name: { ja: 'パパイヤ鈴木', en: 'Papaya Suzuki' }, birthYear: 1966, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ニコール・シャージンガー', en: 'Nicole Scherzinger' }, birthYear: 1978, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '06-30': [
    { name: { ja: '矢部浩之', en: 'Hiroyuki Yabe' }, birthYear: 1971, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'マイク・タイソン', en: 'Mike Tyson' }, birthYear: 1966, profession: { ja: 'ボクサー', en: 'Boxer' }, nationality: 'intl' },
  ],
  // 7月
  '07-01': [
    { name: { ja: '明石家さんま', en: 'Sanma Akashiya' }, birthYear: 1955, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'ダイアナ妃', en: 'Princess Diana' }, birthYear: 1961, deathYear: 1997, profession: { ja: '王室', en: 'Royalty' }, nationality: 'intl' },
  ],
  '07-02': [
    { name: { ja: '浅野忠信', en: 'Tadanobu Asano' }, birthYear: 1973, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'リンジー・ローハン', en: 'Lindsay Lohan' }, birthYear: 1986, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '07-03': [
    { name: { ja: '岡村隆史', en: 'Takashi Okamura' }, birthYear: 1970, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'トム・クルーズ', en: 'Tom Cruise' }, birthYear: 1962, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-04': [
    { name: { ja: 'GACKT', en: 'GACKT' }, birthYear: 1973, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'カルビン・クーリッジ', en: 'Calvin Coolidge' }, birthYear: 1872, deathYear: 1933, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '07-05': [
    { name: { ja: '藤井フミヤ', en: 'Fumiya Fujii' }, birthYear: 1962, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'P・T・バーナム', en: 'P.T. Barnum' }, birthYear: 1810, deathYear: 1891, profession: { ja: '興行師', en: 'Showman' }, nationality: 'intl' },
  ],
  '07-06': [
    { name: { ja: '太田光代', en: 'Mitsuyo Ota' }, birthYear: 1964, profession: { ja: '実業家', en: 'Entrepreneur' }, nationality: 'jp' },
    { name: { ja: 'シルベスター・スタローン', en: 'Sylvester Stallone' }, birthYear: 1946, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-07': [
    { name: { ja: '堤真一', en: 'Shinichi Tsutsumi' }, birthYear: 1964, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'リンゴ・スター', en: 'Ringo Starr' }, birthYear: 1940, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '07-08': [
    { name: { ja: '三谷幸喜', en: 'Koki Mitani' }, birthYear: 1961, profession: { ja: '脚本家', en: 'Screenwriter' }, nationality: 'jp' },
    { name: { ja: 'ケビン・ベーコン', en: 'Kevin Bacon' }, birthYear: 1958, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-09': [
    { name: { ja: '稲垣吾郎', en: 'Goro Inagaki' }, birthYear: 1973, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'トム・ハンクス', en: 'Tom Hanks' }, birthYear: 1956, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-10': [
    { name: { ja: '沢村一樹', en: 'Ikkei Sawamura' }, birthYear: 1967, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ニコラ・テスラ', en: 'Nikola Tesla' }, birthYear: 1856, deathYear: 1943, profession: { ja: '発明家', en: 'Inventor' }, nationality: 'intl' },
  ],
  '07-11': [
    { name: { ja: '木村拓哉', en: 'Takuya Kimura' }, birthYear: 1972, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: '真田広之', en: 'Hiroyuki Sanada' }, birthYear: 1960, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
  ],
  '07-12': [
    { name: { ja: '渡辺美里', en: 'Misato Watanabe' }, birthYear: 1966, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'マララ・ユスフザイ', en: 'Malala Yousafzai' }, birthYear: 1997, profession: { ja: '活動家', en: 'Activist' }, nationality: 'intl' },
  ],
  '07-13': [
    { name: { ja: '北斗晶', en: 'Akira Hokuto' }, birthYear: 1967, profession: { ja: 'プロレスラー', en: 'Wrestler' }, nationality: 'jp' },
    { name: { ja: 'ハリソン・フォード', en: 'Harrison Ford' }, birthYear: 1942, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-14': [
    { name: { ja: '斉藤慶子', en: 'Keiko Saito' }, birthYear: 1961, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'グスタフ・クリムト', en: 'Gustav Klimt' }, birthYear: 1862, deathYear: 1918, profession: { ja: '画家', en: 'Painter' }, nationality: 'intl' },
  ],
  '07-15': [
    { name: { ja: '瀬古利彦', en: 'Toshihiko Seko' }, birthYear: 1956, profession: { ja: 'マラソン選手', en: 'Marathon Runner' }, nationality: 'jp' },
    { name: { ja: 'レンブラント', en: 'Rembrandt' }, birthYear: 1606, deathYear: 1669, profession: { ja: '画家', en: 'Painter' }, nationality: 'intl' },
  ],
  '07-16': [
    { name: { ja: '児嶋一哉', en: 'Kazuya Kojima' }, birthYear: 1972, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'ウィル・フェレル', en: 'Will Ferrell' }, birthYear: 1967, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-17': [
    { name: { ja: '大竹しのぶ', en: 'Shinobu Otake' }, birthYear: 1957, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'アンゲラ・メルケル', en: 'Angela Merkel' }, birthYear: 1954, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '07-18': [
    { name: { ja: '松永真穂', en: 'Maho Matsunaga' }, birthYear: 1989, profession: { ja: '声優', en: 'Voice Actor' }, nationality: 'jp' },
    { name: { ja: 'ネルソン・マンデラ', en: 'Nelson Mandela' }, birthYear: 1918, deathYear: 2013, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '07-19': [
    { name: { ja: '近藤真彦', en: 'Masahiko Kondo' }, birthYear: 1964, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ベネディクト・カンバーバッチ', en: 'Benedict Cumberbatch' }, birthYear: 1976, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-20': [
    { name: { ja: '緒形拳', en: 'Ken Ogata' }, birthYear: 1937, deathYear: 2008, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'サンドラ・オー', en: 'Sandra Oh' }, birthYear: 1971, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '07-21': [
    { name: { ja: '船越英一郎', en: 'Eiichiro Funakoshi' }, birthYear: 1960, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ロビン・ウィリアムズ', en: 'Robin Williams' }, birthYear: 1951, deathYear: 2014, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-22': [
    { name: { ja: '内村光良', en: 'Teruyoshi Uchimura' }, birthYear: 1964, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'セレーナ・ゴメス', en: 'Selena Gomez' }, birthYear: 1992, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '07-23': [
    { name: { ja: '松方弘樹', en: 'Hiroki Matsukata' }, birthYear: 1942, deathYear: 2017, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ダニエル・ラドクリフ', en: 'Daniel Radcliffe' }, birthYear: 1989, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-24': [
    { name: { ja: '谷原章介', en: 'Shosuke Tanihara' }, birthYear: 1972, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ジェニファー・ロペス', en: 'Jennifer Lopez' }, birthYear: 1969, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '07-25': [
    { name: { ja: '高島礼子', en: 'Reiko Takashima' }, birthYear: 1964, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'マット・ルブランク', en: 'Matt LeBlanc' }, birthYear: 1967, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-26': [
    { name: { ja: '秋元康', en: 'Yasushi Akimoto' }, birthYear: 1958, profession: { ja: 'プロデューサー', en: 'Producer' }, nationality: 'jp' },
    { name: { ja: 'ミック・ジャガー', en: 'Mick Jagger' }, birthYear: 1943, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '07-27': [
    { name: { ja: '松井秀喜', en: 'Hideki Matsui' }, birthYear: 1974, profession: { ja: '野球選手', en: 'Baseball Player' }, nationality: 'jp' },
    { name: { ja: 'ジョナサン・リース・マイヤーズ', en: 'Jonathan Rhys Meyers' }, birthYear: 1977, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-28': [
    { name: { ja: 'スガシカオ', en: 'Shikao Suga' }, birthYear: 1966, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ベアトリクス・ポター', en: 'Beatrix Potter' }, birthYear: 1866, deathYear: 1943, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '07-29': [
    { name: { ja: '高木美保', en: 'Miho Takagi' }, birthYear: 1962, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ウォーレン・バフェット', en: 'Warren Buffett' }, birthYear: 1930, profession: { ja: '投資家', en: 'Investor' }, nationality: 'intl' },
  ],
  '07-30': [
    { name: { ja: 'ジャン・レノ', en: 'Jean Reno' }, birthYear: 1948, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
    { name: { ja: 'アーノルド・シュワルツェネッガー', en: 'Arnold Schwarzenegger' }, birthYear: 1947, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '07-31': [
    { name: { ja: '中山秀征', en: 'Hideyuki Nakayama' }, birthYear: 1967, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'J・K・ローリング', en: 'J.K. Rowling' }, birthYear: 1965, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  // 8月
  '08-01': [
    { name: { ja: '田村正和', en: 'Masakazu Tamura' }, birthYear: 1943, deathYear: 2021, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ジェリー・ガルシア', en: 'Jerry Garcia' }, birthYear: 1942, deathYear: 1995, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '08-02': [
    { name: { ja: '友近', en: 'Tomochika' }, birthYear: 1973, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'サム・ワーシントン', en: 'Sam Worthington' }, birthYear: 1976, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '08-03': [
    { name: { ja: '田中耕一', en: 'Koichi Tanaka' }, birthYear: 1959, profession: { ja: '化学者', en: 'Chemist' }, nationality: 'jp' },
    { name: { ja: 'マーティン・シーン', en: 'Martin Sheen' }, birthYear: 1940, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '08-04': [
    { name: { ja: '布川敏和', en: 'Toshikazu Fukawa' }, birthYear: 1965, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'バラク・オバマ', en: 'Barack Obama' }, birthYear: 1961, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '08-05': [
    { name: { ja: '柴咲コウ', en: 'Ko Shibasaki' }, birthYear: 1981, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ニール・アームストロング', en: 'Neil Armstrong' }, birthYear: 1930, deathYear: 2012, profession: { ja: '宇宙飛行士', en: 'Astronaut' }, nationality: 'intl' },
  ],
  '08-06': [
    { name: { ja: '辰巳琢郎', en: 'Takuro Tatsumi' }, birthYear: 1958, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'アンディ・ウォーホル', en: 'Andy Warhol' }, birthYear: 1928, deathYear: 1987, profession: { ja: '画家', en: 'Painter' }, nationality: 'intl' },
  ],
  '08-07': [
    { name: { ja: '内田春菊', en: 'Shungiku Uchida' }, birthYear: 1959, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'シャーリーズ・セロン', en: 'Charlize Theron' }, birthYear: 1975, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '08-08': [
    { name: { ja: '東野幸治', en: 'Koji Higashino' }, birthYear: 1967, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'ダスティン・ホフマン', en: 'Dustin Hoffman' }, birthYear: 1937, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '08-09': [
    { name: { ja: '黒柳徹子', en: 'Tetsuko Kuroyanagi' }, birthYear: 1933, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ホイットニー・ヒューストン', en: 'Whitney Houston' }, birthYear: 1963, deathYear: 2012, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '08-10': [
    { name: { ja: '角野卓造', en: 'Takuzo Kadono' }, birthYear: 1948, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'アントニオ・バンデラス', en: 'Antonio Banderas' }, birthYear: 1960, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '08-11': [
    { name: { ja: '中尾明慶', en: 'Akiyoshi Nakao' }, birthYear: 1988, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'クリス・ヘムズワース', en: 'Chris Hemsworth' }, birthYear: 1983, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '08-12': [
    { name: { ja: '吉岡秀隆', en: 'Hidetaka Yoshioka' }, birthYear: 1970, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ピート・サンプラス', en: 'Pete Sampras' }, birthYear: 1971, profession: { ja: 'テニス選手', en: 'Tennis Player' }, nationality: 'intl' },
  ],
  '08-13': [
    { name: { ja: '篠原涼子', en: 'Ryoko Shinohara' }, birthYear: 1973, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'アルフレッド・ヒッチコック', en: 'Alfred Hitchcock' }, birthYear: 1899, deathYear: 1980, profession: { ja: '映画監督', en: 'Director' }, nationality: 'intl' },
  ],
  '08-14': [
    { name: { ja: '鈴木保奈美', en: 'Honami Suzuki' }, birthYear: 1966, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ハル・ベリー', en: 'Halle Berry' }, birthYear: 1966, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '08-15': [
    { name: { ja: '川口能活', en: 'Yoshikatsu Kawaguchi' }, birthYear: 1975, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'jp' },
    { name: { ja: 'ナポレオン・ボナパルト', en: 'Napoleon Bonaparte' }, birthYear: 1769, deathYear: 1821, profession: { ja: '皇帝', en: 'Emperor' }, nationality: 'intl' },
  ],
  '08-16': [
    { name: { ja: '西田ひかる', en: 'Hikaru Nishida' }, birthYear: 1972, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'マドンナ', en: 'Madonna' }, birthYear: 1958, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '08-17': [
    { name: { ja: '赤井英和', en: 'Hidekazu Akai' }, birthYear: 1959, profession: { ja: 'ボクサー', en: 'Boxer' }, nationality: 'jp' },
    { name: { ja: 'ロバート・デ・ニーロ', en: 'Robert De Niro' }, birthYear: 1943, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '08-18': [
    { name: { ja: '古谷一行', en: 'Ikko Furuya' }, birthYear: 1944, deathYear: 2022, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'エドワード・ノートン', en: 'Edward Norton' }, birthYear: 1969, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '08-19': [
    { name: { ja: 'ふかわりょう', en: 'Ryo Fukawa' }, birthYear: 1974, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'ココ・シャネル', en: 'Coco Chanel' }, birthYear: 1883, deathYear: 1971, profession: { ja: 'デザイナー', en: 'Designer' }, nationality: 'intl' },
  ],
  '08-20': [
    { name: { ja: '桐島かれん', en: 'Karen Kirishima' }, birthYear: 1964, profession: { ja: 'モデル', en: 'Model' }, nationality: 'jp' },
    { name: { ja: 'H・P・ラヴクラフト', en: 'H.P. Lovecraft' }, birthYear: 1890, deathYear: 1937, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '08-21': [
    { name: { ja: '関根勤', en: 'Tsutomu Sekine' }, birthYear: 1953, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ウサイン・ボルト', en: 'Usain Bolt' }, birthYear: 1986, profession: { ja: '陸上選手', en: 'Sprinter' }, nationality: 'intl' },
  ],
  '08-22': [
    { name: { ja: 'みのもんた', en: 'Mino Monta' }, birthYear: 1944, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ジェームズ・コーデン', en: 'James Corden' }, birthYear: 1978, profession: { ja: 'TV司会者', en: 'TV Host' }, nationality: 'intl' },
  ],
  '08-23': [
    { name: { ja: '山咲トオル', en: 'Toru Yamasaki' }, birthYear: 1969, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'コービー・ブライアント', en: 'Kobe Bryant' }, birthYear: 1978, deathYear: 2020, profession: { ja: 'バスケ選手', en: 'Basketball Player' }, nationality: 'intl' },
  ],
  '08-24': [
    { name: { ja: '三池崇史', en: 'Takashi Miike' }, birthYear: 1960, profession: { ja: '映画監督', en: 'Director' }, nationality: 'jp' },
    { name: { ja: 'デイヴ・シャペル', en: 'Dave Chappelle' }, birthYear: 1973, profession: { ja: 'コメディアン', en: 'Comedian' }, nationality: 'intl' },
  ],
  '08-25': [
    { name: { ja: '岡田武史', en: 'Takeshi Okada' }, birthYear: 1956, profession: { ja: 'サッカー監督', en: 'Football Manager' }, nationality: 'jp' },
    { name: { ja: 'ティム・バートン', en: 'Tim Burton' }, birthYear: 1958, profession: { ja: '映画監督', en: 'Director' }, nationality: 'intl' },
  ],
  '08-26': [
    { name: { ja: '植田まさし', en: 'Masashi Ueda' }, birthYear: 1947, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'マコーレー・カルキン', en: 'Macaulay Culkin' }, birthYear: 1980, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '08-27': [
    { name: { ja: '宮崎美子', en: 'Yoshiko Miyazaki' }, birthYear: 1958, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'マザー・テレサ', en: 'Mother Teresa' }, birthYear: 1910, deathYear: 1997, profession: { ja: '修道女', en: 'Nun' }, nationality: 'intl' },
  ],
  '08-28': [
    { name: { ja: '城島茂', en: 'Shigeru Joshima' }, birthYear: 1970, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジャック・ブラック', en: 'Jack Black' }, birthYear: 1969, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '08-29': [
    { name: { ja: 'マイケル・ジャクソン', en: 'Michael Jackson' }, birthYear: 1958, deathYear: 2009, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
    { name: { ja: 'ペネロペ・クルス', en: 'Penelope Cruz' }, birthYear: 1974, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '08-30': [
    { name: { ja: '松本人志', en: 'Hitoshi Matsumoto' }, birthYear: 1963, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'ウォーレン・バフェット', en: 'Warren Buffett' }, birthYear: 1930, profession: { ja: '投資家', en: 'Investor' }, nationality: 'intl' },
  ],
  '08-31': [
    { name: { ja: '野茂英雄', en: 'Hideo Nomo' }, birthYear: 1968, profession: { ja: '野球選手', en: 'Baseball Player' }, nationality: 'jp' },
    { name: { ja: 'リチャード・ギア', en: 'Richard Gere' }, birthYear: 1949, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  // 9月
  '09-01': [
    { name: { ja: '土田晃之', en: 'Akiyuki Tsuchida' }, birthYear: 1972, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'ドクター・フィル', en: 'Dr. Phil' }, birthYear: 1950, profession: { ja: 'TV司会者', en: 'TV Host' }, nationality: 'intl' },
  ],
  '09-02': [
    { name: { ja: '早見優', en: 'Yu Hayami' }, birthYear: 1966, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'キアヌ・リーブス', en: 'Keanu Reeves' }, birthYear: 1964, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '09-03': [
    { name: { ja: '楳図かずお', en: 'Kazuo Umezu' }, birthYear: 1936, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'チャーリー・シーン', en: 'Charlie Sheen' }, birthYear: 1965, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '09-04': [
    { name: { ja: '田中邦衛', en: 'Kunie Tanaka' }, birthYear: 1932, deathYear: 2021, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ビヨンセ', en: 'Beyonce' }, birthYear: 1981, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '09-05': [
    { name: { ja: '草刈民代', en: 'Tamiyo Kusakari' }, birthYear: 1965, profession: { ja: 'バレリーナ', en: 'Ballerina' }, nationality: 'jp' },
    { name: { ja: 'フレディ・マーキュリー', en: 'Freddie Mercury' }, birthYear: 1946, deathYear: 1991, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '09-06': [
    { name: { ja: '永井大', en: 'Masaru Nagai' }, birthYear: 1978, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'イドリス・エルバ', en: 'Idris Elba' }, birthYear: 1972, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '09-07': [
    { name: { ja: '長渕剛', en: 'Tsuyoshi Nagabuchi' }, birthYear: 1956, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'エヴァン・レイチェル・ウッド', en: 'Evan Rachel Wood' }, birthYear: 1987, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '09-08': [
    { name: { ja: '松本人志', en: 'Hitoshi Matsumoto' }, birthYear: 1963, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'ピンク', en: 'Pink' }, birthYear: 1979, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '09-09': [
    { name: { ja: '弘兼憲史', en: 'Kenshi Hirokane' }, birthYear: 1947, profession: { ja: '漫画家', en: 'Manga Artist' }, nationality: 'jp' },
    { name: { ja: 'アダム・サンドラー', en: 'Adam Sandler' }, birthYear: 1966, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '09-10': [
    { name: { ja: '斉藤由貴', en: 'Yuki Saito' }, birthYear: 1966, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'コリン・ファース', en: 'Colin Firth' }, birthYear: 1960, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '09-11': [
    { name: { ja: '泉ピン子', en: 'Pinko Izumi' }, birthYear: 1947, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ルドルフ・ジュリアーニ', en: 'Rudolph Giuliani' }, birthYear: 1944, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '09-12': [
    { name: { ja: '戸田恵子', en: 'Keiko Toda' }, birthYear: 1957, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ジェニファー・ハドソン', en: 'Jennifer Hudson' }, birthYear: 1981, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '09-13': [
    { name: { ja: '松坂大輔', en: 'Daisuke Matsuzaka' }, birthYear: 1980, profession: { ja: '野球選手', en: 'Baseball Player' }, nationality: 'jp' },
    { name: { ja: 'ベン・サベージ', en: 'Ben Savage' }, birthYear: 1980, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '09-14': [
    { name: { ja: '矢沢永吉', en: 'Eikichi Yazawa' }, birthYear: 1949, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'エイミー・ワインハウス', en: 'Amy Winehouse' }, birthYear: 1983, deathYear: 2011, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '09-15': [
    { name: { ja: '彦摩呂', en: 'Hikomaro' }, birthYear: 1966, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'トム・ハーディ', en: 'Tom Hardy' }, birthYear: 1977, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '09-16': [
    { name: { ja: '東国原英夫', en: 'Hideo Higashikokubaru' }, birthYear: 1957, profession: { ja: '政治家', en: 'Politician' }, nationality: 'jp' },
    { name: { ja: 'エイミー・ポーラー', en: 'Amy Poehler' }, birthYear: 1971, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '09-17': [
    { name: { ja: '杉田智和', en: 'Tomokazu Sugita' }, birthYear: 1980, profession: { ja: '声優', en: 'Voice Actor' }, nationality: 'jp' },
    { name: { ja: 'ブラジル', en: 'Nao 21 pilot' }, birthYear: 1981, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '09-18': [
    { name: { ja: '中井貴一', en: 'Kiichi Nakai' }, birthYear: 1961, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ジェイダ・ピンケット・スミス', en: 'Jada Pinkett Smith' }, birthYear: 1971, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '09-19': [
    { name: { ja: '細田博之', en: 'Hiroyuki Hosoda' }, birthYear: 1944, deathYear: 2023, profession: { ja: '政治家', en: 'Politician' }, nationality: 'jp' },
    { name: { ja: 'ジミー・ファロン', en: 'Jimmy Fallon' }, birthYear: 1974, profession: { ja: 'TV司会者', en: 'TV Host' }, nationality: 'intl' },
  ],
  '09-20': [
    { name: { ja: '安室奈美恵', en: 'Namie Amuro' }, birthYear: 1977, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジョージ・R・R・マーティン', en: 'George R.R. Martin' }, birthYear: 1948, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '09-21': [
    { name: { ja: '宮沢賢治', en: 'Kenji Miyazawa' }, birthYear: 1896, deathYear: 1933, profession: { ja: '作家', en: 'Writer' }, nationality: 'jp' },
    { name: { ja: 'スティーヴン・キング', en: 'Stephen King' }, birthYear: 1947, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  '09-22': [
    { name: { ja: '北島三郎', en: 'Saburo Kitajima' }, birthYear: 1936, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'トム・フェルトン', en: 'Tom Felton' }, birthYear: 1987, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '09-23': [
    { name: { ja: 'イチロー', en: 'Ichiro Suzuki' }, birthYear: 1973, profession: { ja: '野球選手', en: 'Baseball Player' }, nationality: 'jp' },
    { name: { ja: 'ブルース・スプリングスティーン', en: 'Bruce Springsteen' }, birthYear: 1949, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '09-24': [
    { name: { ja: '筒井康隆', en: 'Yasutaka Tsutsui' }, birthYear: 1934, profession: { ja: '作家', en: 'Writer' }, nationality: 'jp' },
    { name: { ja: 'ジム・ヘンソン', en: 'Jim Henson' }, birthYear: 1936, deathYear: 1990, profession: { ja: '人形師', en: 'Puppeteer' }, nationality: 'intl' },
  ],
  '09-25': [
    { name: { ja: '内田有紀', en: 'Yuki Uchida' }, birthYear: 1975, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ウィル・スミス', en: 'Will Smith' }, birthYear: 1968, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '09-26': [
    { name: { ja: '天童よしみ', en: 'Yoshimi Tendo' }, birthYear: 1954, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'セリーナ・ウィリアムズ', en: 'Serena Williams' }, birthYear: 1981, profession: { ja: 'テニス選手', en: 'Tennis Player' }, nationality: 'intl' },
  ],
  '09-27': [
    { name: { ja: '岸谷五朗', en: 'Goro Kishitani' }, birthYear: 1964, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'リル・ウェイン', en: 'Lil Wayne' }, birthYear: 1982, profession: { ja: 'ラッパー', en: 'Rapper' }, nationality: 'intl' },
  ],
  '09-28': [
    { name: { ja: '貴乃花光司', en: 'Koji Takanohana' }, birthYear: 1972, profession: { ja: '力士', en: 'Sumo Wrestler' }, nationality: 'jp' },
    { name: { ja: 'ヒラリー・ダフ', en: 'Hilary Duff' }, birthYear: 1987, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '09-29': [
    { name: { ja: 'ビビる大木', en: 'Bibiru Oki' }, birthYear: 1974, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'ケビン・デュラント', en: 'Kevin Durant' }, birthYear: 1988, profession: { ja: 'バスケ選手', en: 'Basketball Player' }, nationality: 'intl' },
  ],
  '09-30': [
    { name: { ja: '石原良純', en: 'Yoshizumi Ishihara' }, birthYear: 1962, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'マリオン・コティヤール', en: 'Marion Cotillard' }, birthYear: 1975, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  // 10月
  '10-01': [
    { name: { ja: '神田沙也加', en: 'Sayaka Kanda' }, birthYear: 1986, deathYear: 2021, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジュリー・アンドリュース', en: 'Julie Andrews' }, birthYear: 1935, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '10-02': [
    { name: { ja: '浜崎あゆみ', en: 'Ayumi Hamasaki' }, birthYear: 1978, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'マハトマ・ガンディー', en: 'Mahatma Gandhi' }, birthYear: 1869, deathYear: 1948, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '10-03': [
    { name: { ja: '蛯原友里', en: 'Yuri Ebihara' }, birthYear: 1979, profession: { ja: 'モデル', en: 'Model' }, nationality: 'jp' },
    { name: { ja: 'アシュレイ・シンプソン', en: 'Ashlee Simpson' }, birthYear: 1984, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '10-04': [
    { name: { ja: '上戸彩', en: 'Aya Ueto' }, birthYear: 1985, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'スーザン・サランドン', en: 'Susan Sarandon' }, birthYear: 1946, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '10-05': [
    { name: { ja: '西岡徳馬', en: 'Tokuma Nishioka' }, birthYear: 1946, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ケイト・ウィンスレット', en: 'Kate Winslet' }, birthYear: 1975, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '10-06': [
    { name: { ja: '堺雅人', en: 'Masato Sakai' }, birthYear: 1973, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'エリザベス・シュー', en: 'Elisabeth Shue' }, birthYear: 1963, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '10-07': [
    { name: { ja: '氷川きよし', en: 'Kiyoshi Hikawa' }, birthYear: 1977, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ウラジーミル・プーチン', en: 'Vladimir Putin' }, birthYear: 1952, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '10-08': [
    { name: { ja: '室伏広治', en: 'Koji Murofushi' }, birthYear: 1974, profession: { ja: '陸上選手', en: 'Athlete' }, nationality: 'jp' },
    { name: { ja: 'マット・デイモン', en: 'Matt Damon' }, birthYear: 1970, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '10-09': [
    { name: { ja: '長野博', en: 'Hiroshi Nagano' }, birthYear: 1972, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジョン・レノン', en: 'John Lennon' }, birthYear: 1940, deathYear: 1980, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '10-10': [
    { name: { ja: '栗山千明', en: 'Chiaki Kuriyama' }, birthYear: 1984, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'デビッド・リー・ロス', en: 'David Lee Roth' }, birthYear: 1954, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '10-11': [
    { name: { ja: '秋川雅史', en: 'Masafumi Akikawa' }, birthYear: 1967, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ミシェル・ウィー', en: 'Michelle Wie' }, birthYear: 1989, profession: { ja: 'ゴルファー', en: 'Golfer' }, nationality: 'intl' },
  ],
  '10-12': [
    { name: { ja: '真田広之', en: 'Hiroyuki Sanada' }, birthYear: 1960, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ヒュー・ジャックマン', en: 'Hugh Jackman' }, birthYear: 1968, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '10-13': [
    { name: { ja: '松嶋菜々子', en: 'Nanako Matsushima' }, birthYear: 1973, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'アシュリー・テスデイル', en: 'Ashley Tisdale' }, birthYear: 1985, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '10-14': [
    { name: { ja: '永作博美', en: 'Hiromi Nagasaku' }, birthYear: 1970, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'アイゼンハワー', en: 'Dwight Eisenhower' }, birthYear: 1890, deathYear: 1969, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '10-15': [
    { name: { ja: '清水宏保', en: 'Hiroyasu Shimizu' }, birthYear: 1974, profession: { ja: 'スケート選手', en: 'Speed Skater' }, nationality: 'jp' },
    { name: { ja: '佐伯チズ', en: 'Chizu Saeki' }, birthYear: 1943, deathYear: 2020, profession: { ja: '美容家', en: 'Beauty Expert' }, nationality: 'jp' },
  ],
  '10-16': [
    { name: { ja: '大山のぶ代', en: 'Nobuyo Oyama' }, birthYear: 1933, profession: { ja: '声優', en: 'Voice Actor' }, nationality: 'jp' },
    { name: { ja: 'ジョン・メイヤー', en: 'John Mayer' }, birthYear: 1977, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '10-17': [
    { name: { ja: '今井翼', en: 'Tsubasa Imai' }, birthYear: 1981, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'エミネム', en: 'Eminem' }, birthYear: 1972, profession: { ja: 'ラッパー', en: 'Rapper' }, nationality: 'intl' },
  ],
  '10-18': [
    { name: { ja: '郷ひろみ', en: 'Hiromi Go' }, birthYear: 1955, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジャン=クロード・ヴァン・ダム', en: 'Jean-Claude Van Damme' }, birthYear: 1960, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '10-19': [
    { name: { ja: 'ラサール石井', en: 'La Salle Ishii' }, birthYear: 1955, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ジョン・ファヴロー', en: 'Jon Favreau' }, birthYear: 1966, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '10-20': [
    { name: { ja: 'KABA.ちゃん', en: 'KABA.chan' }, birthYear: 1969, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'スヌープ・ドッグ', en: 'Snoop Dogg' }, birthYear: 1971, profession: { ja: 'ラッパー', en: 'Rapper' }, nationality: 'intl' },
  ],
  '10-21': [
    { name: { ja: '永島敏行', en: 'Toshiyuki Nagashima' }, birthYear: 1956, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'キム・カーダシアン', en: 'Kim Kardashian' }, birthYear: 1980, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'intl' },
  ],
  '10-22': [
    { name: { ja: '室井佑月', en: 'Yuzuki Muroi' }, birthYear: 1970, profession: { ja: '作家', en: 'Writer' }, nationality: 'jp' },
    { name: { ja: 'ジェフ・ゴールドブラム', en: 'Jeff Goldblum' }, birthYear: 1952, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '10-23': [
    { name: { ja: '渡辺いっけい', en: 'Ikkei Watanabe' }, birthYear: 1962, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ライアン・レイノルズ', en: 'Ryan Reynolds' }, birthYear: 1976, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '10-24': [
    { name: { ja: '及川光博', en: 'Mitsuhiro Oikawa' }, birthYear: 1969, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ドレイク', en: 'Drake' }, birthYear: 1986, profession: { ja: 'ラッパー', en: 'Rapper' }, nationality: 'intl' },
  ],
  '10-25': [
    { name: { ja: '野村忠宏', en: 'Tadahiro Nomura' }, birthYear: 1974, profession: { ja: '柔道家', en: 'Judoka' }, nationality: 'jp' },
    { name: { ja: 'ケイティ・ペリー', en: 'Katy Perry' }, birthYear: 1984, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '10-26': [
    { name: { ja: '岩崎宏美', en: 'Hiromi Iwasaki' }, birthYear: 1958, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ヒラリー・クリントン', en: 'Hillary Clinton' }, birthYear: 1947, profession: { ja: '政治家', en: 'Politician' }, nationality: 'intl' },
  ],
  '10-27': [
    { name: { ja: '高嶋政伸', en: 'Masanobu Takashima' }, birthYear: 1966, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ジョン・クリーズ', en: 'John Cleese' }, birthYear: 1939, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '10-28': [
    { name: { ja: '倉木麻衣', en: 'Mai Kuraki' }, birthYear: 1982, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ビル・ゲイツ', en: 'Bill Gates' }, birthYear: 1955, profession: { ja: '実業家', en: 'Entrepreneur' }, nationality: 'intl' },
  ],
  '10-29': [
    { name: { ja: '高畑淳子', en: 'Junko Takahata' }, birthYear: 1954, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ウィノナ・ライダー', en: 'Winona Ryder' }, birthYear: 1971, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '10-30': [
    { name: { ja: '神田正輝', en: 'Masaki Kanda' }, birthYear: 1950, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ディエゴ・マラドーナ', en: 'Diego Maradona' }, birthYear: 1960, deathYear: 2020, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'intl' },
  ],
  '10-31': [
    { name: { ja: '山本耕史', en: 'Koji Yamamoto' }, birthYear: 1976, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ピーター・ジャクソン', en: 'Peter Jackson' }, birthYear: 1961, profession: { ja: '映画監督', en: 'Director' }, nationality: 'intl' },
  ],
  // 11月
  '11-01': [
    { name: { ja: '福原愛', en: 'Ai Fukuhara' }, birthYear: 1988, profession: { ja: '卓球選手', en: 'Table Tennis Player' }, nationality: 'jp' },
    { name: { ja: 'ティム・クック', en: 'Tim Cook' }, birthYear: 1960, profession: { ja: '実業家', en: 'Entrepreneur' }, nationality: 'intl' },
  ],
  '11-02': [
    { name: { ja: '深田恭子', en: 'Kyoko Fukada' }, birthYear: 1982, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'デヴィッド・シュワイマー', en: 'David Schwimmer' }, birthYear: 1966, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '11-03': [
    { name: { ja: '柄本明', en: 'Akira Emoto' }, birthYear: 1948, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ケンドリック・ラマー', en: 'Kendrick Lamar' }, birthYear: 1987, profession: { ja: 'ラッパー', en: 'Rapper' }, nationality: 'intl' },
  ],
  '11-04': [
    { name: { ja: '西田敏行', en: 'Toshiyuki Nishida' }, birthYear: 1947, deathYear: 2024, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'マシュー・マコノヒー', en: 'Matthew McConaughey' }, birthYear: 1969, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '11-05': [
    { name: { ja: 'TM NETWORK・木根尚登', en: 'Naoto Kine' }, birthYear: 1957, profession: { ja: 'ミュージシャン', en: 'Musician' }, nationality: 'jp' },
    { name: { ja: 'ブライアン・アダムス', en: 'Bryan Adams' }, birthYear: 1959, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '11-06': [
    { name: { ja: '松岡修造', en: 'Shuzo Matsuoka' }, birthYear: 1967, profession: { ja: 'テニス選手', en: 'Tennis Player' }, nationality: 'jp' },
    { name: { ja: 'エマ・ストーン', en: 'Emma Stone' }, birthYear: 1988, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '11-07': [
    { name: { ja: '長瀬智也', en: 'Tomoya Nagase' }, birthYear: 1978, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'マリ・キュリー', en: 'Marie Curie' }, birthYear: 1867, deathYear: 1934, profession: { ja: '科学者', en: 'Scientist' }, nationality: 'intl' },
  ],
  '11-08': [
    { name: { ja: '坂口憲二', en: 'Kenji Sakaguchi' }, birthYear: 1975, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ゴードン・ラムゼイ', en: 'Gordon Ramsay' }, birthYear: 1966, profession: { ja: 'シェフ', en: 'Chef' }, nationality: 'intl' },
  ],
  '11-09': [
    { name: { ja: 'えなりかずき', en: 'Kazuki Enari' }, birthYear: 1984, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ハイディ・クルム', en: 'Heidi Klum' }, birthYear: 1973, profession: { ja: 'モデル', en: 'Model' }, nationality: 'intl' },
  ],
  '11-10': [
    { name: { ja: 'マキシマムザホルモン・ダイスケはん', en: 'Daisuke han' }, birthYear: 1977, profession: { ja: 'ミュージシャン', en: 'Musician' }, nationality: 'jp' },
    { name: { ja: 'ブリタニー・マーフィー', en: 'Brittany Murphy' }, birthYear: 1977, deathYear: 2009, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '11-11': [
    { name: { ja: '手越祐也', en: 'Yuya Tegoshi' }, birthYear: 1987, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'レオナルド・ディカプリオ', en: 'Leonardo DiCaprio' }, birthYear: 1974, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '11-12': [
    { name: { ja: '由紀さおり', en: 'Saori Yuki' }, birthYear: 1948, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'アン・ハサウェイ', en: 'Anne Hathaway' }, birthYear: 1982, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '11-13': [
    { name: { ja: '大原麗子', en: 'Reiko Ohara' }, birthYear: 1946, deathYear: 2009, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ジェラルド・バトラー', en: 'Gerard Butler' }, birthYear: 1969, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '11-14': [
    { name: { ja: '力石徹', en: 'Toru Rikiishi' }, birthYear: 1967, profession: { ja: 'キャラクター', en: 'Character' }, nationality: 'jp' },
    { name: { ja: 'チャールズ皇太子', en: 'Prince Charles' }, birthYear: 1948, profession: { ja: '王室', en: 'Royalty' }, nationality: 'intl' },
  ],
  '11-15': [
    { name: { ja: '平井堅', en: 'Ken Hirai' }, birthYear: 1972, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ショーン・マーレイ', en: 'Sean Murray' }, birthYear: 1977, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '11-16': [
    { name: { ja: '西村雅彦', en: 'Masahiko Nishimura' }, birthYear: 1960, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'リサ・ボネット', en: 'Lisa Bonet' }, birthYear: 1967, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '11-17': [
    { name: { ja: '城島茂', en: 'Shigeru Joshima' }, birthYear: 1970, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'レイチェル・マクアダムス', en: 'Rachel McAdams' }, birthYear: 1978, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '11-18': [
    { name: { ja: '渡辺満里奈', en: 'Marina Watanabe' }, birthYear: 1970, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ミッキー・マウス', en: 'Mickey Mouse' }, birthYear: 1928, profession: { ja: 'キャラクター', en: 'Character' }, nationality: 'intl' },
  ],
  '11-19': [
    { name: { ja: '松下幸之助', en: 'Konosuke Matsushita' }, birthYear: 1894, deathYear: 1989, profession: { ja: '実業家', en: 'Entrepreneur' }, nationality: 'jp' },
    { name: { ja: 'ジョディ・フォスター', en: 'Jodie Foster' }, birthYear: 1962, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '11-20': [
    { name: { ja: '草笛光子', en: 'Mitsuko Kusabue' }, birthYear: 1933, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ジョー・バイデン', en: 'Joe Biden' }, birthYear: 1942, profession: { ja: '米国大統領', en: 'US President' }, nationality: 'intl' },
  ],
  '11-21': [
    { name: { ja: '古賀稔彦', en: 'Toshihiko Koga' }, birthYear: 1967, deathYear: 2021, profession: { ja: '柔道家', en: 'Judoka' }, nationality: 'jp' },
    { name: { ja: 'ゴールディ・ホーン', en: 'Goldie Hawn' }, birthYear: 1945, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '11-22': [
    { name: { ja: 'aiko', en: 'Aiko' }, birthYear: 1975, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'スカーレット・ヨハンソン', en: 'Scarlett Johansson' }, birthYear: 1984, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '11-23': [
    { name: { ja: '田中美佐子', en: 'Misako Tanaka' }, birthYear: 1959, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'マイリー・サイラス', en: 'Miley Cyrus' }, birthYear: 1992, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '11-24': [
    { name: { ja: '大塚寧々', en: 'Nene Otsuka' }, birthYear: 1968, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'キャサリン・ハイグル', en: 'Katherine Heigl' }, birthYear: 1978, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '11-25': [
    { name: { ja: '椎名林檎', en: 'Ringo Sheena' }, birthYear: 1978, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'クリスティーナ・アップルゲイト', en: 'Christina Applegate' }, birthYear: 1971, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '11-26': [
    { name: { ja: '市川染五郎', en: 'Somegoro Ichikawa' }, birthYear: 1973, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ティナ・ターナー', en: 'Tina Turner' }, birthYear: 1939, deathYear: 2023, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '11-27': [
    { name: { ja: '小室哲哉', en: 'Tetsuya Komuro' }, birthYear: 1958, profession: { ja: '音楽家', en: 'Musician' }, nationality: 'jp' },
    { name: { ja: 'ブルース・リー', en: 'Bruce Lee' }, birthYear: 1940, deathYear: 1973, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '11-28': [
    { name: { ja: '松平健', en: 'Ken Matsudaira' }, birthYear: 1953, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ジョン・スチュワート', en: 'Jon Stewart' }, birthYear: 1962, profession: { ja: 'TV司会者', en: 'TV Host' }, nationality: 'intl' },
  ],
  '11-29': [
    { name: { ja: '田口トモロヲ', en: 'Tomorowo Taguchi' }, birthYear: 1957, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ライアン・ギグス', en: 'Ryan Giggs' }, birthYear: 1973, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'intl' },
  ],
  '11-30': [
    { name: { ja: '秋篠宮文仁親王', en: 'Prince Fumihito' }, birthYear: 1965, profession: { ja: '皇族', en: 'Royalty' }, nationality: 'jp' },
    { name: { ja: 'マーク・トウェイン', en: 'Mark Twain' }, birthYear: 1835, deathYear: 1910, profession: { ja: '作家', en: 'Writer' }, nationality: 'intl' },
  ],
  // 12月
  '12-01': [
    { name: { ja: '富司純子', en: 'Junko Fuji' }, birthYear: 1945, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ウディ・アレン', en: 'Woody Allen' }, birthYear: 1935, profession: { ja: '映画監督', en: 'Director' }, nationality: 'intl' },
  ],
  '12-02': [
    { name: { ja: '深田恭子', en: 'Kyoko Fukada' }, birthYear: 1982, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ブリトニー・スピアーズ', en: 'Britney Spears' }, birthYear: 1981, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '12-03': [
    { name: { ja: '高橋名人', en: 'Master Takahashi' }, birthYear: 1959, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'ブレンダン・フレイザー', en: 'Brendan Fraser' }, birthYear: 1968, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-04': [
    { name: { ja: '田村淳', en: 'Atsushi Tamura' }, birthYear: 1973, profession: { ja: 'お笑い芸人', en: 'Comedian' }, nationality: 'jp' },
    { name: { ja: 'ジェイ・Z', en: 'Jay-Z' }, birthYear: 1969, profession: { ja: 'ラッパー', en: 'Rapper' }, nationality: 'intl' },
  ],
  '12-05': [
    { name: { ja: '観月ありさ', en: 'Arisa Mizuki' }, birthYear: 1976, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ウォルト・ディズニー', en: 'Walt Disney' }, birthYear: 1901, deathYear: 1966, profession: { ja: '映画製作者', en: 'Film Producer' }, nationality: 'intl' },
  ],
  '12-06': [
    { name: { ja: '車だん吉', en: 'Dankichi Kuruma' }, birthYear: 1943, profession: { ja: 'タレント', en: 'TV Personality' }, nationality: 'jp' },
    { name: { ja: 'サラ・ルー', en: 'Sarah Rue' }, birthYear: 1978, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '12-07': [
    { name: { ja: '香川照之', en: 'Teruyuki Kagawa' }, birthYear: 1965, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'エミリー・ブラウニング', en: 'Emily Browning' }, birthYear: 1988, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '12-08': [
    { name: { ja: '稲垣吾郎', en: 'Goro Inagaki' }, birthYear: 1973, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ニッキー・ミナージュ', en: 'Nicki Minaj' }, birthYear: 1982, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '12-09': [
    { name: { ja: '上村愛子', en: 'Aiko Uemura' }, birthYear: 1979, profession: { ja: 'スキー選手', en: 'Skier' }, nationality: 'jp' },
    { name: { ja: 'ジュディ・デンチ', en: 'Judi Dench' }, birthYear: 1934, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '12-10': [
    { name: { ja: '荻野目洋子', en: 'Yoko Oginome' }, birthYear: 1968, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ゴンザロ・イグアイン', en: 'Gonzalo Higuain' }, birthYear: 1987, profession: { ja: 'サッカー選手', en: 'Football Player' }, nationality: 'intl' },
  ],
  '12-11': [
    { name: { ja: '宮崎あおい', en: 'Aoi Miyazaki' }, birthYear: 1985, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ハビエル・バルデム', en: 'Javier Bardem' }, birthYear: 1969, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-12': [
    { name: { ja: '加藤あい', en: 'Ai Kato' }, birthYear: 1982, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'フランク・シナトラ', en: 'Frank Sinatra' }, birthYear: 1915, deathYear: 1998, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '12-13': [
    { name: { ja: '織田裕二', en: 'Yuji Oda' }, birthYear: 1967, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'テイラー・スウィフト', en: 'Taylor Swift' }, birthYear: 1989, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '12-14': [
    { name: { ja: '高畑充希', en: 'Mitsuki Takahata' }, birthYear: 1991, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ヴァネッサ・ハジェンズ', en: 'Vanessa Hudgens' }, birthYear: 1988, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '12-15': [
    { name: { ja: '高橋克典', en: 'Katsunori Takahashi' }, birthYear: 1964, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ドン・ジョンソン', en: 'Don Johnson' }, birthYear: 1949, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-16': [
    { name: { ja: 'BiSH・セントチヒロ・チッチ', en: 'Cent Chihiro Chitti' }, birthYear: 1995, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ベートーヴェン', en: 'Ludwig van Beethoven' }, birthYear: 1770, deathYear: 1827, profession: { ja: '作曲家', en: 'Composer' }, nationality: 'intl' },
  ],
  '12-17': [
    { name: { ja: '牧瀬里穂', en: 'Riho Makise' }, birthYear: 1971, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ミラ・ジョヴォヴィッチ', en: 'Milla Jovovich' }, birthYear: 1975, profession: { ja: '女優', en: 'Actress' }, nationality: 'intl' },
  ],
  '12-18': [
    { name: { ja: '安藤美姫', en: 'Miki Ando' }, birthYear: 1987, profession: { ja: 'スケート選手', en: 'Figure Skater' }, nationality: 'jp' },
    { name: { ja: 'ブラッド・ピット', en: 'Brad Pitt' }, birthYear: 1963, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-19': [
    { name: { ja: '反町隆史', en: 'Takashi Sorimachi' }, birthYear: 1973, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ジェイク・ギレンホール', en: 'Jake Gyllenhaal' }, birthYear: 1980, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-20': [
    { name: { ja: '桑田佳祐', en: 'Keisuke Kuwata' }, birthYear: 1956, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'ジョナ・ヒル', en: 'Jonah Hill' }, birthYear: 1983, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-21': [
    { name: { ja: '本木雅弘', en: 'Masahiro Motoki' }, birthYear: 1965, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'サミュエル・L・ジャクソン', en: 'Samuel L. Jackson' }, birthYear: 1948, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-22': [
    { name: { ja: '国生さゆり', en: 'Sayuri Kokusho' }, birthYear: 1966, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ラルフ・ファインズ', en: 'Ralph Fiennes' }, birthYear: 1962, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-23': [
    { name: { ja: '矢田亜希子', en: 'Akiko Yada' }, birthYear: 1978, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: '上皇陛下', en: 'Emperor Emeritus Akihito' }, birthYear: 1933, profession: { ja: '天皇', en: 'Emperor of Japan' }, nationality: 'jp' },
  ],
  '12-24': [
    { name: { ja: 'TAKUYA∞', en: 'TAKUYA∞' }, birthYear: 1979, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'リッキー・マーティン', en: 'Ricky Martin' }, birthYear: 1971, profession: { ja: '歌手', en: 'Singer' }, nationality: 'intl' },
  ],
  '12-25': [
    { name: { ja: '小椋佳', en: 'Kei Ogura' }, birthYear: 1944, profession: { ja: '歌手', en: 'Singer' }, nationality: 'jp' },
    { name: { ja: 'アイザック・ニュートン', en: 'Isaac Newton' }, birthYear: 1642, deathYear: 1727, profession: { ja: '物理学者', en: 'Physicist' }, nationality: 'intl' },
  ],
  '12-26': [
    { name: { ja: '原田美枝子', en: 'Mieko Harada' }, birthYear: 1958, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'ジャレッド・レト', en: 'Jared Leto' }, birthYear: 1971, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-27': [
    { name: { ja: '浅野忠信', en: 'Tadanobu Asano' }, birthYear: 1973, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'ジェラール・ドパルデュー', en: 'Gerard Depardieu' }, birthYear: 1948, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-28': [
    { name: { ja: '藤山直美', en: 'Naomi Fujiyama' }, birthYear: 1958, profession: { ja: '女優', en: 'Actress' }, nationality: 'jp' },
    { name: { ja: 'デンゼル・ワシントン', en: 'Denzel Washington' }, birthYear: 1954, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-29': [
    { name: { ja: '押切もえ', en: 'Moe Oshikiri' }, birthYear: 1979, profession: { ja: 'モデル', en: 'Model' }, nationality: 'jp' },
    { name: { ja: 'ジュード・ロウ', en: 'Jude Law' }, birthYear: 1972, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
  '12-30': [
    { name: { ja: '小川直也', en: 'Naoya Ogawa' }, birthYear: 1968, profession: { ja: '柔道家', en: 'Judoka' }, nationality: 'jp' },
    { name: { ja: 'タイガー・ウッズ', en: 'Tiger Woods' }, birthYear: 1975, profession: { ja: 'ゴルファー', en: 'Golfer' }, nationality: 'intl' },
  ],
  '12-31': [
    { name: { ja: '江口洋介', en: 'Yosuke Eguchi' }, birthYear: 1967, profession: { ja: '俳優', en: 'Actor' }, nationality: 'jp' },
    { name: { ja: 'アンソニー・ホプキンス', en: 'Anthony Hopkins' }, birthYear: 1937, profession: { ja: '俳優', en: 'Actor' }, nationality: 'intl' },
  ],
};

// 月日から偉人を取得（localeに応じてソート）
export function getFamousBirthdays(month: number, day: number, locale: string = 'ja'): FamousPerson[] {
  const key = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const people = famousBirthdays[key] || [];

  // 日本語版は日本人優先、英語版は海外優先
  return [...people].sort((a, b) => {
    if (locale === 'ja') {
      if (a.nationality === 'jp' && b.nationality === 'intl') return -1;
      if (a.nationality === 'intl' && b.nationality === 'jp') return 1;
    } else {
      if (a.nationality === 'intl' && b.nationality === 'jp') return -1;
      if (a.nationality === 'jp' && b.nationality === 'intl') return 1;
    }
    return 0;
  });
}

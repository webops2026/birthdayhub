import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getAge, getZodiacSign, getChineseZodiac, getWareki, getYakudoshi } from '@/lib/birthday-utils';
import { getFamousBirthdays } from '@/lib/famous-birthdays';

interface Props {
  params: Promise<{
    locale: string;
    year: string;
    month: string;
    day: string;
  }>;
}

export default async function BirthdayPage({ params }: Props) {
  const { locale, year, month, day } = await params;

  const yearNum = parseInt(year);
  const monthNum = parseInt(month);
  const dayNum = parseInt(day);

  // Validate date
  if (
    isNaN(yearNum) || isNaN(monthNum) || isNaN(dayNum) ||
    yearNum < 1900 || yearNum > 2100 ||
    monthNum < 1 || monthNum > 12 ||
    dayNum < 1 || dayNum > 31
  ) {
    notFound();
  }

  const birthdate = new Date(yearNum, monthNum - 1, dayNum);
  if (birthdate.getMonth() !== monthNum - 1) {
    notFound(); // Invalid date (e.g., Feb 30)
  }

  const age = getAge(birthdate);
  const zodiac = getZodiacSign(monthNum, dayNum);
  const chineseZodiac = getChineseZodiac(yearNum);
  const wareki = getWareki(yearNum, monthNum, dayNum);
  const yakudoshi = getYakudoshi(yearNum, birthdate);
  const famousPeople = getFamousBirthdays(monthNum, dayNum);

  const t = await getTranslations('birthday');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          {locale === 'ja'
            ? `${yearNum}年${monthNum}月${dayNum}日生まれのあなた`
            : `Born on ${new Date(yearNum, monthNum - 1, dayNum).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
          }
        </h1>

        {/* Global Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-pink-200 pb-2">
            {t('globalInfo')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🎂</span>
                <h3 className="text-lg font-semibold text-gray-800">{t('age')}</h3>
              </div>
              <p className="text-2xl font-bold text-pink-600">{age}歳</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">💎</span>
                <h3 className="text-lg font-semibold text-gray-800">{t('birthstone')}</h3>
              </div>
              <p className="text-xl font-semibold text-purple-600">
                {locale === 'ja' ? getBirthstoneJa(monthNum) : getBirthstoneEn(monthNum)}
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🌸</span>
                <h3 className="text-lg font-semibold text-gray-800">{t('birthflower')}</h3>
              </div>
              <p className="text-xl font-semibold text-rose-600">
                {locale === 'ja' ? getBirthflowerJa(monthNum, dayNum) : getBirthflowerEn(monthNum, dayNum)}
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">⭐</span>
                <h3 className="text-lg font-semibold text-gray-800">{t('zodiac')}</h3>
              </div>
              <p className="text-xl font-semibold text-indigo-600">{zodiac[locale === 'ja' ? 'ja' : 'en']}</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🐉</span>
                <h3 className="text-lg font-semibold text-gray-800">{t('chineseZodiac')}</h3>
              </div>
              <p className="text-xl font-semibold text-amber-600">{chineseZodiac[locale === 'ja' ? 'ja' : 'en']}</p>
            </div>
          </div>
        </section>

        {/* Japanese Culture (Japanese version only) */}
        {locale === 'ja' && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-pink-200 pb-2">
              🇯🇵 {t('japaneseInfo')}
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📅</span>
                  <h3 className="text-lg font-semibold text-gray-800">{t('wareki')}</h3>
                </div>
                <p className="text-xl font-semibold text-red-600">{wareki}</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🙏</span>
                  <h3 className="text-lg font-semibold text-gray-800">{t('yakudoshi')}</h3>
                </div>
                <div className="text-gray-700">
                  {yakudoshi.isMale && (
                    <div className="mb-4">
                      <p className="font-semibold text-sm text-gray-600 mb-2">男性</p>
                      {yakudoshi.male.current ? (
                        <p className="text-lg text-orange-600 font-semibold">
                          {yakudoshi.male.current}（{age}歳）
                        </p>
                      ) : (
                        <p className="text-gray-600">今年は厄年ではありません</p>
                      )}
                      {yakudoshi.male.next && (
                        <p className="text-sm text-gray-500 mt-2">
                          次の本厄: {yakudoshi.male.next.age}歳 (あと{yakudoshi.male.next.age - age}年)
                        </p>
                      )}
                    </div>
                  )}
                  {yakudoshi.isFemale && (
                    <div>
                      <p className="font-semibold text-sm text-gray-600 mb-2">女性</p>
                      {yakudoshi.female.current ? (
                        <p className="text-lg text-orange-600 font-semibold">
                          {yakudoshi.female.current}（{age}歳）
                        </p>
                      ) : (
                        <p className="text-gray-600">今年は厄年ではありません</p>
                      )}
                      {yakudoshi.female.next && (
                        <p className="text-sm text-gray-500 mt-2">
                          次の本厄: {yakudoshi.female.next.age}歳 (あと{yakudoshi.female.next.age - age}年)
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Famous People with Same Birthday */}
        {famousPeople.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-pink-200 pb-2">
              {locale === 'ja' ? '👤 同じ誕生日の有名人' : '👤 Famous People Born This Day'}
            </h2>
            <div className="grid gap-4">
              {famousPeople.map((person, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-gray-50 p-5 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {person.name[locale === 'ja' ? 'ja' : 'en'].charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {person.name[locale === 'ja' ? 'ja' : 'en']}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {person.profession[locale === 'ja' ? 'ja' : 'en']}
                      {person.birthYear > 0 && (
                        <span className="ml-2 text-gray-400">
                          ({person.birthYear}{person.deathYear ? `-${person.deathYear}` : ''})
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

// Temporary data functions (will be replaced with database queries)
function getBirthstoneJa(month: number): string {
  const stones = [
    'ガーネット', 'アメジスト', 'アクアマリン', 'ダイヤモンド',
    'エメラルド', 'パール・ムーンストーン', 'ルビー', 'ペリドット',
    'サファイア', 'オパール・トルマリン', 'トパーズ・シトリン', 'ターコイズ・タンザナイト'
  ];
  return stones[month - 1] || '';
}

function getBirthstoneEn(month: number): string {
  const stones = [
    'Garnet', 'Amethyst', 'Aquamarine', 'Diamond',
    'Emerald', 'Pearl / Moonstone', 'Ruby', 'Peridot',
    'Sapphire', 'Opal / Tourmaline', 'Topaz / Citrine', 'Turquoise / Tanzanite'
  ];
  return stones[month - 1] || '';
}

function getBirthflowerJa(month: number, day: number): string {
  // Simplified - will be replaced with database
  return '桜';
}

function getBirthflowerEn(month: number, day: number): string {
  // Simplified - will be replaced with database
  return 'Cherry Blossom';
}

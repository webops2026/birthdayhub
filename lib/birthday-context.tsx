'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface BirthdayContextType {
  year: number;
  month: number;
  day: number;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  setDay: (day: number) => void;
  setBirthday: (year: number, month: number, day: number) => void;
  isSet: boolean;
}

const BirthdayContext = createContext<BirthdayContextType | undefined>(undefined);

const STORAGE_KEY = 'birthdayhub_birthday';

interface StoredBirthday {
  year: number;
  month: number;
  day: number;
}

export function BirthdayProvider({
  children,
  locale
}: {
  children: ReactNode;
  locale: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // デフォルト値
  const today = new Date();
  const defaultYear = today.getFullYear() - 30;
  const defaultMonth = today.getMonth() + 1;
  const defaultDay = today.getDate();

  const [year, setYearState] = useState(defaultYear);
  const [month, setMonthState] = useState(defaultMonth);
  const [day, setDayState] = useState(defaultDay);
  const [isSet, setIsSet] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // 初期化: localStorage から読み込み
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: StoredBirthday = JSON.parse(stored);
        if (parsed.year && parsed.month && parsed.day) {
          setYearState(parsed.year);
          setMonthState(parsed.month);
          setDayState(parsed.day);
          setIsSet(true);
        }
      }
    } catch (e) {
      // localStorage error - ignore
    }
    setIsInitialized(true);
  }, []);

  // localStorage に保存 + URL 更新
  const saveBirthday = (y: number, m: number, d: number) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ year: y, month: m, day: d }));
    } catch (e) {
      // localStorage error - ignore
    }
    setIsSet(true);

    // ホームページの場合のみ URL を更新
    if (pathname === `/${locale}` || pathname === `/${locale}/`) {
      const newUrl = `/${locale}/birthday/${y}/${m.toString().padStart(2, '0')}/${d.toString().padStart(2, '0')}`;
      window.history.replaceState(null, '', newUrl);
    }
  };

  const setYear = (y: number) => {
    setYearState(y);
    saveBirthday(y, month, day);
  };

  const setMonth = (m: number) => {
    setMonthState(m);
    saveBirthday(year, m, day);
  };

  const setDay = (d: number) => {
    setDayState(d);
    saveBirthday(year, month, d);
  };

  const setBirthday = (y: number, m: number, d: number) => {
    setYearState(y);
    setMonthState(m);
    setDayState(d);
    saveBirthday(y, m, d);
  };

  // 初期化前は何も表示しない（ハイドレーションエラー防止）
  if (!isInitialized) {
    return null;
  }

  return (
    <BirthdayContext.Provider value={{
      year,
      month,
      day,
      setYear,
      setMonth,
      setDay,
      setBirthday,
      isSet
    }}>
      {children}
    </BirthdayContext.Provider>
  );
}

export function useBirthday() {
  const context = useContext(BirthdayContext);
  if (context === undefined) {
    throw new Error('useBirthday must be used within a BirthdayProvider');
  }
  return context;
}

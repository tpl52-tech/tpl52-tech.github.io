"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dict, htmlLang, type Dict, type Locale } from "@/lib/i18n";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Restore the saved language after hydration (initial render is "en", which
  // matches the server, so there is no hydration mismatch).
  useEffect(() => {
    try {
      const s = localStorage.getItem("locale");
      if (s === "en" || s === "fr" || s === "ko") setLocaleState(s);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale];
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale(): Ctx {
  const c = useContext(LanguageContext);
  if (!c) throw new Error("useLocale must be used within LanguageProvider");
  return c;
}

export function useT(): Dict {
  return dict[useLocale().locale];
}

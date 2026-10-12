"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { dicts, htmlLang, type Dict, type Locale, type Variant } from "@/lib/i18n";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; variant: Variant };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // The PM-focused copy lives under /pm; everything else uses the default set.
  const variant: Variant = pathname?.startsWith("/pm") ? "pm" : "swe";
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
    <LanguageContext.Provider value={{ locale, setLocale, variant }}>
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
  const { locale, variant } = useLocale();
  return dicts[variant][locale];
}

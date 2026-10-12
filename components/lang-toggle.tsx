"use client";

import { locales, localeNames, localeFlags } from "@/lib/i18n";
import { useLocale } from "./language-provider";

export function LangToggle() {
  const { locale, setLocale } = useLocale();
  return (
    <div
      className="flex items-center rounded-full border border-line p-[2px] font-mono text-[0.72rem]"
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => {
        const on = locale === l;
        return (
          <button
            key={l}
            onClick={() => setLocale(l)}
            aria-pressed={on}
            title={localeNames[l]}
            className={`flex items-center gap-[5px] rounded-full px-[9px] py-[4px] transition ${
              on ? "bg-btn text-btn-ink" : "text-dim hover:text-ink"
            }`}
          >
            <span className="text-[0.85rem] leading-none">{localeFlags[l]}</span>
            <span>{localeNames[l]}</span>
          </button>
        );
      })}
    </div>
  );
}

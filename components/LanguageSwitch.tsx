"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";

const OPTIONS: { code: "pt" | "en"; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitch() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label="Selecionar idioma / Select language"
      className="flex items-center rounded-full border border-white/15 p-0.5 text-[12.5px] font-semibold"
    >
      {OPTIONS.map((opt) => {
        const active = locale === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={active}
            className={
              active
                ? "rounded-full bg-brand px-2.5 py-1 text-white"
                : "rounded-full px-2.5 py-1 text-white/60 hover:text-white"
            }
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

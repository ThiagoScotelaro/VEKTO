"use client";

import { FileSpreadsheet, Repeat, Unplug } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

const ICONS = [FileSpreadsheet, Repeat, Unplug];

export default function WhoFor() {
  const { t } = useI18n();

  return (
    <section className="bg-[#f4f8ff] py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <h3 className="text-[13px] font-semibold uppercase tracking-wider text-brand">
          {t.whoFor.eyebrow}
        </h3>
        <h2 className="mt-3 max-w-[640px] text-[28px] font-bold leading-tight text-[#0a0a0a] sm:text-[34px]">
          {t.whoFor.title}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.whoFor.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={item.title}
                className="rounded-[14px] border border-[#d7dee8] bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-light">
                  <Icon size={20} strokeWidth={1.75} className="text-brand" />
                </div>
                <h3 className="mt-4 text-[17px] font-semibold text-[#0a0a0a]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#5b6472]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-[17px] font-semibold text-[#0a0a0a]">
          {t.whoFor.closing}
        </p>
      </div>
    </section>
  );
}

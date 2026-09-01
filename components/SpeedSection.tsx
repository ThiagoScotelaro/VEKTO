"use client";

import { Target, Zap, BarChart3 } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

const ICONS = [Target, Zap, BarChart3];

export default function SpeedSection() {
  const { t } = useI18n();

  return (
    <section className="bg-[#f4f8ff] py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-center lg:gap-16">
          <div>
            <h2 className="text-[30px] font-bold leading-tight text-[#0a0a0a] sm:text-[34px]">
              {t.speed.title}
            </h2>
            <p className="mt-4 max-w-[440px] text-[16px] leading-relaxed text-[#5b6472]">
              {t.speed.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-[#d7e1f3] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {t.speed.pillars.map((pillar, i) => {
              const Icon = ICONS[i];
              return (
                <div key={pillar.title} className="flex gap-4 px-0 py-6 first:pt-0 sm:px-8 sm:py-0 first:sm:pl-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                    <Icon size={20} strokeWidth={1.75} className="text-brand" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#0a0a0a]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-[#5b6472]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div id="sobre" className="mt-16 max-w-[760px] border-t border-[#d7e1f3] pt-10">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider text-brand">
            {t.speed.aboutEyebrow}
          </h3>
          <p className="mt-3 text-[15.5px] leading-relaxed text-[#3d4653]">
            {t.speed.aboutText}
          </p>
        </div>
      </div>
    </section>
  );
}

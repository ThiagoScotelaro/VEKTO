"use client";

import {
  ShieldCheck,
  Database,
  ClipboardList,
  Plug,
  Lock,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

const SECURITY_ICONS = [Lock, Database, ClipboardList, Plug, ShieldCheck];

export default function TechSecurity() {
  const { t } = useI18n();

  return (
    <section className="bg-[#f4f8ff] py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Technology */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-brand">
              {t.tech.eyebrow}
            </h3>
            <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#0a0a0a] sm:text-[30px]">
              {t.tech.title}
            </h2>
            <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed text-[#5b6472]">
              {t.tech.lead}
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {t.tech.categories.map((category) => (
                <div key={category.title}>
                  <h4 className="text-[13.5px] font-semibold text-[#3d4653]">
                    {category.title}
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#d7dee8] bg-white px-3 py-1.5 text-[13.5px] font-medium text-[#3d4653]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-brand">
              {t.security.eyebrow}
            </h3>
            <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#0a0a0a] sm:text-[30px]">
              {t.security.title}
            </h2>
            <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed text-[#5b6472]">
              {t.security.lead}
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {t.security.items.map((item, i) => {
                const Icon = SECURITY_ICONS[i];
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                      <Icon size={18} strokeWidth={1.75} className="text-brand" />
                    </div>
                    <div>
                      <h4 className="text-[15.5px] font-semibold text-[#0a0a0a]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[14px] leading-relaxed text-[#5b6472]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

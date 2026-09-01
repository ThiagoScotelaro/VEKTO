"use client";

import { FileStack, Receipt, MailCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

const AUTOMATION_ICONS = [FileStack, Receipt, MailCheck];

export default function Cases() {
  const { t } = useI18n();
  const { flagship } = t.cases;

  return (
    <section id="cases" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <h3 className="text-[13px] font-semibold uppercase tracking-wider text-brand">
          {t.cases.eyebrow}
        </h3>
        <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0a0a0a] sm:text-[34px]">
          {t.cases.title}
        </h2>
        <p className="mt-3 max-w-[560px] text-[15.5px] leading-relaxed text-[#5b6472]">
          {t.cases.lead}
        </p>

        {/* Flagship case: NEXUS */}
        <div className="relative mt-12 overflow-hidden rounded-[16px] border border-panel-border bg-panel p-7 sm:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(600px_260px_at_15%_0%,rgba(36,116,255,0.18),transparent)]" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <span className="inline-block rounded-full border border-brand/40 bg-white/[0.04] px-3 py-1 text-[12.5px] font-medium text-brand">
                {flagship.tag}
              </span>
              <h3 className="mt-4 text-[24px] font-bold leading-tight text-white sm:text-[28px]">
                {flagship.title}
              </h3>
              <p className="mt-2 text-[16px] font-medium text-white/80">
                {flagship.lead}
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-white/60">
                {flagship.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {flagship.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-[12.5px] font-medium text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-8 border-l-2 border-brand pl-4 text-[14.5px] italic leading-relaxed text-white/70">
                &ldquo;{flagship.quote}&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 self-start sm:gap-5">
              {flagship.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-[12px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="text-[30px] font-extrabold leading-none text-brand sm:text-[34px]">
                    {h.value}
                  </div>
                  <div className="mt-2 text-[13px] leading-snug text-white/60">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automation capability cards */}
        <div className="mt-16">
          <h3 className="text-[19px] font-semibold text-[#0a0a0a]">
            {t.cases.automationsTitle}
          </h3>
          <p className="mt-2 max-w-[620px] text-[14.5px] leading-relaxed text-[#5b6472]">
            {t.cases.automationsLead}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {t.cases.automations.map((item, i) => {
              const Icon = AUTOMATION_ICONS[i];
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-[14px] border border-[#e6eaf0] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_12px_28px_rgba(16,24,40,0.08)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light">
                    <Icon size={18} strokeWidth={1.75} className="text-brand" />
                  </div>
                  <h4 className="mt-4 text-[16px] font-semibold text-[#0a0a0a]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#5b6472]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

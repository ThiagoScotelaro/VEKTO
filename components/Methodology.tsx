"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Methodology() {
  const { t } = useI18n();
  const steps = t.methodology.steps;

  return (
    <section id="como-trabalhamos" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <h2 className="text-center text-[30px] font-bold text-[#0a0a0a] sm:text-[34px]">
          {t.methodology.title}
        </h2>

        {/* Desktop / tablet timeline */}
        <div className="mt-16 hidden md:grid md:grid-cols-4 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 top-5 hidden h-px w-full border-t border-dashed border-[#d7dee8] md:block" />
              )}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-[15px] font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 text-[16px] font-semibold text-[#0a0a0a]">
                {step.title}
              </h3>
              <p className="mt-1.5 px-1 text-[13.5px] leading-snug text-[#5b6472]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 flex flex-col md:hidden">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-10 h-full w-px border-l border-dashed border-[#d7dee8]" />
              )}
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-[15px] font-bold text-white">
                {i + 1}
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-[#0a0a0a]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[14px] leading-relaxed text-[#5b6472]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

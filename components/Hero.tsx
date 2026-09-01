"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TransformationDiagram from "./TransformationDiagram";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-full w-[520px] rotate-[-8deg] bg-[linear-gradient(90deg,rgba(36,116,255,0.16),transparent)] blur-2xl" />
        <div className="absolute left-1/3 top-1/4 h-px w-2/3 -rotate-6 bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="absolute left-0 top-2/3 h-px w-1/2 rotate-3 bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-24">
        <div className="animate-fade-up">
          <h1 className="text-[42px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[54px] lg:text-[68px]">
            {t.hero.titleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < t.hero.titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-white/70 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 rounded-[11px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={17} strokeWidth={2.5} />
            </Link>
            <Link
              href="#solucoes"
              className="inline-flex items-center gap-2 rounded-[11px] border border-white/25 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              {t.hero.ctaSecondary}
              <ArrowRight size={17} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <TransformationDiagram />
        </div>
      </div>
    </section>
  );
}

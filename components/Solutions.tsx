"use client";

import { AppWindow, Cog, BrainCircuit, PuzzleIcon } from "lucide-react";
import SolutionCard from "./SolutionCard";
import { useI18n } from "@/lib/i18n/I18nProvider";

const ICONS = [AppWindow, Cog, BrainCircuit, PuzzleIcon];

export default function Solutions() {
  const { t } = useI18n();

  return (
    <section id="solucoes" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.solutions.items.map((item, i) => (
            <SolutionCard
              key={item.title}
              icon={ICONS[i]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import {
  FileText,
  Mail,
  Table2,
  User,
  Monitor,
  Settings,
  Database,
  CheckCircle2,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

const LEFT_ITEMS = [
  { Icon: FileText, y: 70, label: "Documento" },
  { Icon: Mail, y: 158, label: "Email" },
  { Icon: Table2, y: 246, label: "Folha de cálculo" },
  { Icon: User, y: 334, label: "Utilizador" },
];

const RIGHT_ITEMS = [
  { Icon: Monitor, y: 70, label: "Dashboard" },
  { Icon: Settings, y: 158, label: "Automação" },
  { Icon: Database, y: 246, label: "Base de dados" },
  { Icon: CheckCircle2, y: 334, label: "Validação" },
];

const LEFT_X = 44;
const TANGLE_X = 380;
const TANGLE_Y = 202;
const CENTER_X = 500;
const RIGHT_HUB_X = 618;
const RIGHT_X = 928;

function IconBadge({
  Icon,
  variant,
}: {
  Icon: typeof FileText;
  variant: "muted" | "brand";
}) {
  return (
    <div
      className={
        variant === "brand"
          ? "flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04]"
          : "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]"
      }
    >
      <Icon
        size={20}
        strokeWidth={1.75}
        className={variant === "brand" ? "text-brand" : "text-white/80"}
      />
    </div>
  );
}

export default function TransformationDiagram() {
  const { t } = useI18n();

  return (
    <div className="relative w-full overflow-hidden rounded-[16px] border border-panel-border bg-panel p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(600px_260px_at_80%_10%,rgba(36,116,255,0.18),transparent)]" />

      <div className="relative grid grid-cols-2 gap-2 pb-5">
        <p className="text-[15px] font-medium leading-snug text-white/90 sm:text-base">
          {t.hero.diagramLeft.map((line, i) => (
            <span key={i}>
              {line}
              {i < t.hero.diagramLeft.length - 1 && <br />}
            </span>
          ))}
        </p>
        <p className="text-right text-[15px] font-medium leading-snug text-brand sm:text-base">
          {t.hero.diagramRight.map((line, i) => (
            <span key={i}>
              {line}
              {i < t.hero.diagramRight.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>

      <svg
        viewBox="0 0 972 420"
        className="relative w-full"
        role="img"
        aria-label="Diagrama: processos manuais e desorganizados são transformados pela VEKTO em soluções digitais automatizadas e integradas"
      >
        <g stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none">
          {LEFT_ITEMS.map((item, i) => (
            <path
              key={`l-${i}`}
              d={`M ${LEFT_X + 22} ${item.y + 22} C ${TANGLE_X - 120} ${item.y + 22}, ${TANGLE_X - 90} ${TANGLE_Y}, ${TANGLE_X} ${TANGLE_Y}`}
            />
          ))}
          {/* crossing tangle strands for a "messy" feel */}
          <path d={`M ${LEFT_X + 22} 92 C 220 260, 250 120, ${TANGLE_X} ${TANGLE_Y}`} opacity="0.55" />
          <path d={`M ${LEFT_X + 22} 356 C 220 140, 260 280, ${TANGLE_X} ${TANGLE_Y}`} opacity="0.55" />
          <path d={`M ${LEFT_X + 22} 180 C 250 320, 230 90, ${TANGLE_X} ${TANGLE_Y}`} opacity="0.4" />
          <path d={`M ${LEFT_X + 22} 268 C 250 60, 230 300, ${TANGLE_X} ${TANGLE_Y}`} opacity="0.4" />
        </g>

        {/* tangle knot */}
        <g opacity="0.9">
          <circle cx={TANGLE_X} cy={TANGLE_Y} r="5" fill="rgba(255,255,255,0.7)" />
        </g>

        {/* speed arrow */}
        <g className="text-brand" fill="currentColor">
          {[0, 26, 52].map((dx, i) => (
            <polygon
              key={i}
              className="animate-arrow-slide"
              style={{ animationDelay: `${i * 0.18}s` }}
              opacity={0.45 + i * 0.28}
              points={`${CENTER_X + dx - 34},${TANGLE_Y - 46} ${CENTER_X + dx + 30},${TANGLE_Y} ${CENTER_X + dx - 34},${TANGLE_Y + 46}`}
            />
          ))}
        </g>

        <g stroke="rgba(36,116,255,0.85)" strokeWidth="1.75" fill="none">
          {RIGHT_ITEMS.map((item, i) => (
            <path
              key={`r-${i}`}
              className="flow-line"
              d={`M ${RIGHT_HUB_X} ${TANGLE_Y} C ${RIGHT_HUB_X + 120} ${item.y + 22}, ${RIGHT_X - 140} ${item.y + 22}, ${RIGHT_X - 22} ${item.y + 22}`}
            />
          ))}
        </g>

        <foreignObject x={RIGHT_HUB_X - 28} y={TANGLE_Y - 28} width="56" height="56">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand/40 bg-black/40 shadow-[0_0_24px_rgba(36,116,255,0.35)]">
            <Image src="/logo/vekto-icon.png" alt="" width={132} height={128} unoptimized className="h-6 w-6" aria-hidden />
          </div>
        </foreignObject>

        {LEFT_ITEMS.map((item, i) => (
          <foreignObject key={`li-${i}`} x={LEFT_X} y={item.y} width="48" height="48">
            <IconBadge Icon={item.Icon} variant="muted" />
          </foreignObject>
        ))}

        {RIGHT_ITEMS.map((item, i) => (
          <foreignObject key={`ri-${i}`} x={RIGHT_X} y={item.y} width="48" height="48">
            <IconBadge Icon={item.Icon} variant="brand" />
          </foreignObject>
        ))}
      </svg>
    </div>
  );
}

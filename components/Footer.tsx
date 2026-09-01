"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  const [direction, speed, result] = t.footer.tagline;

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-[1440px] flex-col px-6 py-12 lg:px-10">
        <Image
          src="/logo/vekto-logo.png"
          alt="VEKTO"
          width={664}
          height={160}
          unoptimized
          className="h-7 w-auto self-start object-contain"
        />
        <p className="mt-3 text-[13.5px] font-medium tracking-wide text-white/60">
          {direction} <span className="text-brand">•</span> {speed}{" "}
          <span className="text-brand">•</span> {result}
        </p>
      </div>
    </footer>
  );
}

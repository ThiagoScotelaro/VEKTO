"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  const [direction, speed, result] = t.footer.tagline;

  const navLinks = [
    { label: t.footer.navSolutions, href: "#solucoes" },
    { label: t.footer.navCases, href: "#cases" },
    { label: t.footer.navHow, href: "#como-trabalhamos" },
    { label: t.footer.navContact, href: "#contato" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-12 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div>
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

        <nav
          aria-label={t.footer.companyLabel}
          className="flex flex-wrap gap-x-8 gap-y-3"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-6 py-6 lg:px-10">
          <p className="text-[12.5px] text-white/40">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

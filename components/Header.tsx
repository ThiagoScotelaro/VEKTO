"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { label: t.nav.solutions, href: "#solucoes" },
    { label: t.nav.howWeWork, href: "#como-trabalhamos" },
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.contact, href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-6 lg:px-10">
        <Link href="#top" className="flex shrink-0 items-center" aria-label="VEKTO">
          <Image
            src="/logo/vekto-logo.png"
            alt="VEKTO"
            width={664}
            height={160}
            priority
            unoptimized
            className="h-8 w-auto object-contain lg:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitch />
          <Link
            href="#contato"
            className="inline-flex items-center gap-2 rounded-[11px] bg-brand px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            {t.nav.cta}
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-[15px] font-medium text-white/85 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-[11px] bg-brand px-5 py-3 text-[15px] font-semibold text-white"
            >
              {t.nav.cta}
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

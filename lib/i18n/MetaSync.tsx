"use client";

import { useEffect } from "react";
import { useI18n } from "./I18nProvider";

/**
 * Mantém <title> e a meta description sincronizados com o idioma ativo.
 * O valor inicial (SSR) vem de app/layout.tsx (metadata, em pt-BR por
 * omissão) — isto apenas atualiza no cliente quando o idioma muda.
 */
export default function MetaSync() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);
  }, [t]);

  return null;
}

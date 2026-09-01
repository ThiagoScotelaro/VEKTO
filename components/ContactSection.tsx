"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

type Status =
  | "idle"
  | "submitting"
  | "success"
  | "error"
  | "validation"
  | "invalid-email"
  | "invalid-phone";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

export default function ContactSection() {
  const { t, locale } = useI18n();
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [challenge, setChallenge] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim() || !challenge.trim()) {
      setStatus("validation");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("invalid-email");
      return;
    }
    if (!isValidPhone(phone)) {
      setStatus("invalid-phone");
      return;
    }

    setStatus("submitting");

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement | null)?.value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, challenge, locale, company: honeypot }),
      });

      if (!res.ok) throw new Error("request_failed");

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setChallenge("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-black py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-0 h-full w-[60%] rotate-[-6deg] bg-[linear-gradient(90deg,transparent,rgba(36,116,255,0.28),transparent)] blur-xl" />
        <div className="absolute right-0 top-1/2 h-[2px] w-2/3 -translate-y-1/2 rotate-2 bg-gradient-to-r from-transparent via-brand/70 to-brand" />
      </div>

      <div className="relative mx-auto max-w-[560px] px-6">
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-tight text-white sm:text-[36px]">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-relaxed text-white/70 sm:text-[17px]">
            {t.contact.lead}
          </p>
        </div>

        {status === "success" ? (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-[14px] border border-brand/30 bg-white/[0.04] px-6 py-10 text-center">
            <CheckCircle2 size={34} className="text-brand" strokeWidth={1.75} />
            <h3 className="text-[18px] font-semibold text-white">
              {t.contact.successTitle}
            </h3>
            <p className="max-w-[380px] text-[14.5px] leading-relaxed text-white/70">
              {t.contact.successBody}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4" noValidate>
            {/* honeypot anti-spam — invisível para pessoas, escondido de leitores de ecrã */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-[13.5px] font-medium text-white/80">
                {t.contact.nameLabel}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.namePlaceholder}
                className="w-full rounded-[10px] border border-white/15 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-brand"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-[13.5px] font-medium text-white/80">
                  {t.contact.emailLabel}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full rounded-[10px] border border-white/15 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-brand"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-[13.5px] font-medium text-white/80">
                  {t.contact.phoneLabel}
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.contact.phonePlaceholder}
                  className="w-full rounded-[10px] border border-white/15 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-brand"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-challenge" className="mb-1.5 block text-[13.5px] font-medium text-white/80">
                {t.contact.challengeLabel}
              </label>
              <textarea
                id="contact-challenge"
                name="challenge"
                rows={4}
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                placeholder={t.contact.challengePlaceholder}
                className="w-full resize-none rounded-[10px] border border-white/15 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-brand"
              />
            </div>

            {status === "validation" && (
              <p role="alert" className="text-[13.5px] text-[#ff8a8a]">
                {t.contact.requiredError}
              </p>
            )}
            {status === "invalid-email" && (
              <p role="alert" className="text-[13.5px] text-[#ff8a8a]">
                {t.contact.invalidEmailError}
              </p>
            )}
            {status === "invalid-phone" && (
              <p role="alert" className="text-[13.5px] text-[#ff8a8a]">
                {t.contact.invalidPhoneError}
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="text-[13.5px] text-[#ff8a8a]">
                {t.contact.errorBody}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-[11px] bg-brand px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  {t.contact.submitting}
                </>
              ) : (
                <>
                  {t.contact.submit}
                  <ArrowRight size={17} strokeWidth={2.5} />
                </>
              )}
            </button>

            <p className="text-center text-[12.5px] text-white/40">
              {t.contact.privacyNote}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  challenge?: string;
  locale?: string;
  company?: string; // honeypot — deve vir sempre vazio
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

const SUBMISSIONS_FILE = path.join(process.cwd(), "data", "contact-submissions.json");

async function appendSubmissionToFile(entry: Record<string, unknown>) {
  let existing: Record<string, unknown>[] = [];
  try {
    const raw = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    // ficheiro ainda não existe — começamos uma lista nova
  }
  existing.push(entry);
  await fs.mkdir(path.dirname(SUBMISSIONS_FILE), { recursive: true });
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(existing, null, 2), "utf-8");
}

function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_TO_EMAIL
  );
}

async function sendNotificationEmail(entry: {
  name: string;
  email: string;
  phone: string;
  challenge: string;
  receivedAt: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: entry.email,
    subject: `Novo contato pelo site — ${entry.name}`,
    text: [
      `Nome: ${entry.name}`,
      `E-mail: ${entry.email}`,
      `Telefone: ${entry.phone}`,
      `Desafio:`,
      entry.challenge,
      ``,
      `Recebido em: ${entry.receivedAt}`,
    ].join("\n"),
    html: `
      <p><strong>Nome:</strong> ${escapeHtml(entry.name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(entry.email)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(entry.phone)}</p>
      <p><strong>Desafio:</strong></p>
      <p>${escapeHtml(entry.challenge).replace(/\n/g, "<br/>")}</p>
      <p style="color:#888;font-size:12px">Recebido em: ${entry.receivedAt}</p>
    `,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // honeypot anti-spam: campo escondido que um utilizador real nunca preenche
  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const challenge = (payload.challenge ?? "").trim();

  if (!name || !email || !phone || !challenge) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 }
    );
  }
  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "invalid_phone" },
      { status: 400 }
    );
  }
  if (
    name.length > 200 ||
    email.length > 200 ||
    phone.length > 50 ||
    challenge.length > 4000
  ) {
    return NextResponse.json(
      { ok: false, error: "invalid_length" },
      { status: 400 }
    );
  }

  const entry = {
    name,
    email,
    phone,
    challenge,
    locale: payload.locale === "en" ? "en" : "pt",
    receivedAt: new Date().toISOString(),
  };

  // Guarda sempre uma cópia local (funciona mesmo sem SMTP configurado).
  try {
    await appendSubmissionToFile(entry);
  } catch (err) {
    console.error("[contact] falha ao guardar submissão localmente:", err);
  }

  if (isSmtpConfigured()) {
    try {
      await sendNotificationEmail(entry);
    } catch (err) {
      console.error("[contact] falha ao enviar e-mail via SMTP:", err);
      // A submissão já ficou guardada localmente — não falhamos o pedido
      // só por causa do envio de e-mail.
    }
  } else {
    console.warn(
      "[contact] SMTP não configurado — submissão guardada apenas em data/contact-submissions.json. " +
        "Configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS e CONTACT_TO_EMAIL para receber por e-mail."
    );
  }

  return NextResponse.json({ ok: true });
}

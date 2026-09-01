# VEKTO — Website institucional

Site institucional da VEKTO (empresa de Transformação Digital), construído em
Next.js (App Router) + React + TypeScript + Tailwind CSS v4, seguindo
fielmente a estrutura e identidade visual definidas no briefing.

Idioma padrão: **português do Brasil (pt-BR)**, com **tradução completa para
inglês** (seletor PT/EN no cabeçalho, com deteção automática do idioma do
navegador e memorização da escolha do visitante).

## Como correr o projeto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Build de produção:

```bash
npm run build
npm run start
```

O build foi validado sem erros de TypeScript, sem avisos de ESLint e sem
depender de rede (a fonte Inter está autoalojada em `public/fonts`, não usa
Google Fonts em runtime).

## Formulário de contacto

O antigo botão "Entrar em contacto" abria uma página em branco porque usava
um link `mailto:` direto (depende do cliente de e-mail do visitante estar
configurado). Isso foi substituído por um **formulário real** na secção
"Contato" (`components/ContactSection.tsx`), com campos Nome, E-mail/telefone
e Objetivo, validação e feedback de sucesso/erro sem sair da página.

O formulário envia os dados para `app/api/contact/route.ts`, que:

1. **Guarda sempre uma cópia local** em `data/contact-submissions.json`
   (funciona mesmo sem qualquer configuração — nunca perde um contacto).
2. **Envia um e-mail de notificação por SMTP**, se as variáveis de ambiente
   abaixo estiverem configuradas.

Para receber os contactos por e-mail, cria um ficheiro `.env.local` na raiz
do projeto (não é enviado para o Git) com:

```bash
SMTP_HOST=smtp.exemplo.com
SMTP_PORT=587
SMTP_USER=seu-utilizador
SMTP_PASS=sua-senha-ou-app-password
SMTP_FROM_EMAIL=contacto@vekto.pt
CONTACT_TO_EMAIL=contacto@vekto.pt
```

Qualquer fornecedor de e-mail com acesso SMTP funciona (o da própria VEKTO,
Gmail com "app password", SendGrid, Resend, etc.). Sem estas variáveis, o
site continua a funcionar normalmente e todos os contactos ficam guardados
em `data/contact-submissions.json`.

> **Nota sobre hospedagem serverless (ex.: Vercel):** nesses ambientes o
> sistema de ficheiros é temporário, por isso o ficheiro
> `data/contact-submissions.json` não é fiável em produção — configure
> sempre as variáveis SMTP acima para não perder nenhum contacto quando
> fizer deploy num serviço serverless.

## Onde colocar a logo

A logo oficial fornecida está em:

- `public/logo/vekto-logo.png` — lockup completo (ícone + "VEKTO"), usado no
  `Header` e no `Footer`.
- `public/logo/vekto-icon.png` — apenas o símbolo (barra + seta), usado como
  favicon (`app/layout.tsx`) e no centro do diagrama do Hero.

Estes ficheiros foram extraídos e recortados a partir da imagem da logo
fornecida, com o fundo preto convertido em transparência. Por serem
transparentes apenas sobre fundo preto, foram usados exclusivamente em
secções pretas (header, footer, diagrama), tal como pedido no briefing.
Se a VEKTO tiver ficheiros vetoriais oficiais (SVG) da logo, basta
substituir estes dois PNGs pelos ficheiros oficiais nos mesmos caminhos —
nenhum outro código precisa de mudar.

## Estrutura

```
app/
  layout.tsx           — metadata, SEO, fonte Inter local, I18nProvider
  page.tsx             — composição da homepage
  globals.css          — tokens de cor (azul VEKTO #2474FF), animações
  api/contact/route.ts — recebe as submissões do formulário
components/
  Header.tsx
  LanguageSwitch.tsx    — seletor PT/EN
  Hero.tsx
  TransformationDiagram.tsx
  Solutions.tsx
  SolutionCard.tsx
  SpeedSection.tsx      — "O diferencial é a velocidade" + bloco "Sobre"
  Methodology.tsx        — "Como trabalhamos" (timeline 1–6)
  ContactSection.tsx     — formulário de contacto funcional
  Footer.tsx
lib/i18n/
  dictionaries.ts        — todos os textos em pt-BR e en
  I18nProvider.tsx        — contexto de idioma (client-side)
  MetaSync.tsx            — sincroniza <title>/description com o idioma
public/
  logo/                  — logo VEKTO (ver acima)
  fonts/                 — Inter (self-hosted, woff2)
data/
  contact-submissions.json — cópia local dos contactos recebidos (gitignored)
```

## Notas de conteúdo

Conforme o briefing, o site não inclui números, estatísticas, clientes,
testemunhos, parceiros, preços ou equipa inventados — nenhuma dessa
informação foi fornecida e nenhuma foi inventada. Todo o texto usado é o
texto exato indicado no briefing (traduzido para pt-BR e en).

## Responsividade

Testado em desktop (1440px) e mobile (390px): grelha 4→2→1 colunas nas
soluções, timeline horizontal→vertical, menu hamburger abaixo de 1024px,
hero em coluna única em ecrãs pequenos. O seletor de idioma está sempre
visível, incluindo no menu móvel.

## Deploy

Stack compatível com qualquer plataforma que suporte Next.js (Vercel,
Netlify, etc.). Não há base de dados nem serviços externos obrigatórios —
apenas as variáveis SMTP opcionais acima para receber os contactos por
e-mail.

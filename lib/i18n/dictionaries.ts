export type Locale = "pt" | "en";

export const LOCALES: Locale[] = ["pt", "en"];
export const DEFAULT_LOCALE: Locale = "pt";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    solutions: string;
    cases: string;
    howWeWork: string;
    about: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    titleLines: string[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    diagramLeft: string[];
    diagramRight: string[];
  };
  whoFor: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
    closing: string;
  };
  solutions: {
    items: { title: string; description: string }[];
  };
  cases: {
    eyebrow: string;
    title: string;
    lead: string;
    flagship: {
      tag: string;
      title: string;
      lead: string;
      description: string;
      tags: string[];
      highlights: { value: string; label: string }[];
      quote: string;
    };
    automationsTitle: string;
    automationsLead: string;
    automations: { title: string; description: string }[];
  };
  speed: {
    title: string;
    lead: string;
    pillars: { title: string; description: string }[];
    aboutEyebrow: string;
    aboutText: string;
  };
  methodology: {
    title: string;
    steps: { title: string; description: string }[];
  };
  tech: {
    eyebrow: string;
    title: string;
    lead: string;
    categories: { title: string; items: string[] }[];
  };
  security: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; description: string }[];
  };
  contact: {
    title: string;
    lead: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    challengeLabel: string;
    challengePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    errorBody: string;
    requiredError: string;
    invalidEmailError: string;
    invalidPhoneError: string;
    privacyNote: string;
  };
  footer: {
    tagline: string[];
    companyLabel: string;
    navSolutions: string;
    navCases: string;
    navHow: string;
    navContact: string;
    copyright: string;
  };
}

const pt: Dictionary = {
  meta: {
    title: "VEKTO | Transformação Digital",
    description:
      "A VEKTO transforma processos empresariais por meio de WebApps, automação, integrações e inteligência artificial, com foco em velocidade e resultado.",
  },
  nav: {
    solutions: "Soluções",
    cases: "Cases",
    howWeWork: "Como Trabalhamos",
    about: "Sobre",
    contact: "Contato",
    cta: "Falar com a VEKTO",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  hero: {
    titleLines: ["Transformação", "Digital em Alta", "Velocidade"],
    subtitle:
      "Criamos WebApps, automações, integrações e soluções com IA para resolver problemas reais com rapidez e foco no resultado.",
    ctaPrimary: "Falar com a VEKTO",
    ctaSecondary: "Ver Soluções",
    diagramLeft: ["Processos manuais", "e ineficientes"],
    diagramRight: ["Soluções digitais,", "automatizadas e integradas"],
  },
  whoFor: {
    eyebrow: "Para quem trabalhamos",
    title: "Para empresas que sabem que o processo pode ser melhor.",
    items: [
      {
        title: "Ainda depende de planilhas",
        description:
          "Informação dispersa entre arquivos, controle manual e pouca visibilidade sobre o que está pendente e com quem.",
      },
      {
        title: "A equipe perde tempo com tarefas repetitivas",
        description:
          "Copiar informação, validar dados, gerar documentos ou alimentar sistemas manualmente todos os dias.",
      },
      {
        title: "Os sistemas não conversam entre si",
        description:
          "A mesma informação precisa ser digitada mais de uma vez, em mais de um lugar, por mais de uma pessoa.",
      },
    ],
    closing: "É exatamente aqui que a VEKTO entra.",
  },
  solutions: {
    items: [
      {
        title: "WebApps sob medida",
        description:
          "Sistemas, portais, dashboards e processos digitais personalizados.",
      },
      {
        title: "Automação de processos",
        description:
          "Automatização de tarefas repetitivas e fluxos operacionais.",
      },
      {
        title: "Inteligência Artificial",
        description:
          "IA aplicada quando faz sentido para análise, classificação e apoio à decisão.",
      },
      {
        title: "Integração de sistemas",
        description:
          "Conectamos sistemas, dados e ferramentas para criar um fluxo único.",
      },
    ],
  },
  cases: {
    eyebrow: "Soluções que já construímos",
    title: "Da ideia ao sistema em produção",
    lead: "Não falamos só de capacidade técnica — mostramos o tipo de sistema e automação que a VEKTO constrói.",
    flagship: {
      tag: "Case real · Plataforma interna",
      title: "NEXUS — Gestão & Contabilidade",
      lead: "Toda a operação de uma sociedade de contabilidade, em um só sistema.",
      description:
        "O NEXUS é a plataforma de gestão e contabilidade construída pela VEKTO para centralizar toda a operação de uma sociedade de contabilidade em Portugal — do primeiro contato com o cliente até a submissão da obrigação fiscal (IVA, IES, Modelo 22, Segurança Social), sem depender de planilhas soltas. Cada obrigação segue um circuito de aprovação com estados explícitos, e rotinas de automação (RPA) cuidam do trabalho repetitivo de coleta e preenchimento de dados.",
      tags: [
        "ERP + CRM sob medida",
        "Automação de processos (RPA)",
        "Next.js · NestJS · PostgreSQL",
      ],
      highlights: [
        { value: "43", label: "módulos de serviço na API" },
        { value: "199", label: "telas da aplicação" },
        { value: "122", label: "migrações de banco de dados versionadas" },
        { value: "14", label: "áreas funcionais integradas" },
      ],
      quote:
        "Deixamos de perguntar onde está o arquivo. Agora a pergunta é só se está feito — e o sistema já sabe a resposta.",
    },
    automationsTitle: "Tipos de automação que construímos",
    automationsLead:
      "Além de sistemas completos como o NEXUS, a VEKTO constrói automações com RPA (UiPath, Power Automate) e Power Apps para eliminar trabalho manual em processos específicos.",
    automations: [
      {
        title: "Backoffice autônomo de documentos",
        description:
          "Recebe e-mails e PDFs, extrai e valida dados, classifica e lança no sistema — só pede aprovação humana quando há erro.",
      },
      {
        title: "Contas a pagar",
        description:
          "Do recebimento da fatura à conciliação: validação, aprovação e lançamento automático no ERP.",
      },
      {
        title: "Onboarding de clientes",
        description:
          "Formulário, documentos, verificação, criação em CRM/ERP e liberação de acessos, sem etapas manuais repetidas.",
      },
      {
        title: "Reconciliação automática",
        description:
          "Cruza banco, ERP e faturas para identificar divergências, deixando só as exceções para revisão humana.",
      },
      {
        title: "Agente operacional de e-mail",
        description:
          "Lê caixas de e-mail compartilhadas, identifica o pedido, consulta os sistemas e executa a ação — não só responde.",
      },
    ],
  },
  speed: {
    title: "O diferencial é a velocidade",
    lead: "Entendemos o problema, construímos rapidamente uma solução funcional, colocamos para o cliente usar e evoluímos a partir daí.",
    pillars: [
      {
        title: "Direção",
        description: "Foco claro no que importa para o negócio.",
      },
      {
        title: "Velocidade",
        description: "Execução rápida, sem burocracia.",
      },
      {
        title: "Resultado",
        description: "Soluções que geram impacto desde o início.",
      },
    ],
    aboutEyebrow: "Sobre a VEKTO",
    aboutText:
      "A VEKTO ajuda empresas a transformar processos por meio da tecnologia. Desenvolvemos soluções digitais, automações, integrações e aplicações de IA com foco na execução rápida e no resultado.",
  },
  methodology: {
    title: "Como trabalhamos",
    steps: [
      {
        title: "Diagnóstico",
        description: "Entendemos o processo e identificamos onde está o desperdício.",
      },
      {
        title: "Primeira versão",
        description: "Construímos rapidamente uma solução funcional.",
      },
      {
        title: "Uso real",
        description: "Colocamos nas mãos da equipe para validar no dia a dia.",
      },
      {
        title: "Evolução",
        description: "Melhoramos a partir do uso real e dos dados.",
      },
    ],
  },
  tech: {
    eyebrow: "Tecnologia",
    title: "Tecnologia adequada ao problema",
    lead: "Escolhemos a ferramenta certa para cada situação — não a mais na moda.",
    categories: [
      {
        title: "Desenvolvimento",
        items: ["Next.js", "React", "NestJS", "TypeScript", "PostgreSQL", "Supabase"],
      },
      {
        title: "Automação e RPA",
        items: ["UiPath", "Power Automate", "Power Apps", "SharePoint"],
      },
      {
        title: "Inteligência Artificial",
        items: ["OpenAI", "Claude"],
      },
    ],
  },
  security: {
    eyebrow: "Segurança",
    title: "Construído para ambientes empresariais",
    lead: "Não prometemos o que não conseguimos cumprir — são práticas que aplicamos desde o desenho da solução.",
    items: [
      {
        title: "Acessos",
        description:
          "Permissões configuráveis por módulo e por papel de usuário (ex.: administrador, supervisor, operador).",
      },
      {
        title: "Dados",
        description:
          "Bases de dados estruturadas com controle de versão e histórico de alterações.",
      },
      {
        title: "Auditoria",
        description:
          "Registro de quem fez o quê e quando, quando o processo exige rastreabilidade.",
      },
      {
        title: "Integração",
        description:
          "Comunicação entre sistemas via APIs com autenticação e controle de acesso.",
      },
      {
        title: "Privacidade",
        description:
          "Tratamento de dados considerado desde o desenho da solução, adequado à sensibilidade de cada informação.",
      },
    ],
  },
  contact: {
    title: "Tem um processo manual ou lento?",
    lead: "Conte-nos o desafio. A VEKTO ajuda a transformá-lo em uma solução digital com rapidez e foco no resultado.",
    nameLabel: "Nome",
    namePlaceholder: "O seu nome",
    emailLabel: "E-mail",
    emailPlaceholder: "voce@empresa.com",
    phoneLabel: "Telefone",
    phonePlaceholder: "(00) 00000-0000",
    challengeLabel: "Desafio",
    challengePlaceholder: "Conte-nos, em poucas linhas, o que precisa resolver",
    submit: "Entrar em contato",
    submitting: "Enviando...",
    successTitle: "Mensagem enviada",
    successBody: "Obrigado pelo contato. A VEKTO vai retornar em breve.",
    errorBody: "Não foi possível enviar agora. Tente novamente em instantes.",
    requiredError: "Preencha nome, e-mail, telefone e desafio.",
    invalidEmailError: "Informe um e-mail válido.",
    invalidPhoneError: "Informe um telefone válido (com DDD).",
    privacyNote:
      "Os seus dados são usados apenas para retornarmos o contato.",
  },
  footer: {
    tagline: ["Direção", "Velocidade", "Resultado"],
    companyLabel: "Empresa",
    navSolutions: "Soluções",
    navCases: "Cases",
    navHow: "Como trabalhamos",
    navContact: "Contato",
    copyright: "© 2026 VEKTO. Todos os direitos reservados.",
  },
};

const en: Dictionary = {
  meta: {
    title: "VEKTO | Digital Transformation",
    description:
      "VEKTO transforms business processes through WebApps, automation, integrations and artificial intelligence, focused on speed and results.",
  },
  nav: {
    solutions: "Solutions",
    cases: "Cases",
    howWeWork: "How We Work",
    about: "About",
    contact: "Contact",
    cta: "Talk to VEKTO",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    titleLines: ["Digital Transformation", "at High Speed"],
    subtitle:
      "We build WebApps, automations, integrations and AI solutions to solve real problems quickly, with a focus on results.",
    ctaPrimary: "Talk to VEKTO",
    ctaSecondary: "See Solutions",
    diagramLeft: ["Manual and", "inefficient processes"],
    diagramRight: ["Automated and integrated", "digital solutions"],
  },
  whoFor: {
    eyebrow: "Who we work with",
    title: "For companies that know the process could be better.",
    items: [
      {
        title: "Still runs on spreadsheets",
        description:
          "Information scattered across files, manual control, and little visibility into what's pending and with whom.",
      },
      {
        title: "The team loses time on repetitive tasks",
        description:
          "Copying information, validating data, generating documents or feeding systems by hand, every day.",
      },
      {
        title: "Systems don't talk to each other",
        description:
          "The same information has to be typed more than once, in more than one place, by more than one person.",
      },
    ],
    closing: "That's exactly where VEKTO comes in.",
  },
  solutions: {
    items: [
      {
        title: "Custom WebApps",
        description:
          "Systems, portals, dashboards and personalized digital processes.",
      },
      {
        title: "Process automation",
        description: "Automating repetitive tasks and operational workflows.",
      },
      {
        title: "Artificial Intelligence",
        description:
          "AI applied where it makes sense for analysis, classification and decision support.",
      },
      {
        title: "Systems integration",
        description:
          "We connect systems, data and tools to create a single flow.",
      },
    ],
  },
  cases: {
    eyebrow: "Solutions we've already built",
    title: "From idea to system in production",
    lead: "We don't just talk about technical capacity — we show the kind of system and automation VEKTO builds.",
    flagship: {
      tag: "Real case · Internal platform",
      title: "NEXUS — Management & Accounting",
      lead: "An entire accounting firm's operation, in a single system.",
      description:
        "NEXUS is the management and accounting platform VEKTO built to centralize an entire accounting firm's operation in Portugal — from the first client contact to filing the tax obligation (VAT, IES, Modelo 22, Social Security) — with no loose spreadsheets involved. Every obligation follows an approval workflow with explicit states, and RPA automation handles the repetitive work of collecting and filling in data.",
      tags: [
        "Custom ERP + CRM",
        "Process automation (RPA)",
        "Next.js · NestJS · PostgreSQL",
      ],
      highlights: [
        { value: "43", label: "API service modules" },
        { value: "199", label: "application screens" },
        { value: "122", label: "versioned database migrations" },
        { value: "14", label: "integrated functional areas" },
      ],
      quote:
        "We stopped asking where the file is. Now the only question is whether it's done — and the system already knows the answer.",
    },
    automationsTitle: "Types of automation we build",
    automationsLead:
      "Beyond full systems like NEXUS, VEKTO builds RPA automations (UiPath, Power Automate) and Power Apps to remove manual work from specific processes.",
    automations: [
      {
        title: "Autonomous document backoffice",
        description:
          "Receives emails and PDFs, extracts and validates data, classifies and posts it into the system — asking for human approval only when there's an error.",
      },
      {
        title: "Accounts payable",
        description:
          "From receiving the invoice to reconciliation: validation, approval and automatic posting into the ERP.",
      },
      {
        title: "Client onboarding",
        description:
          "Form, documents, verification, CRM/ERP creation and access provisioning, with no repeated manual steps.",
      },
      {
        title: "Automatic reconciliation",
        description:
          "Cross-checks bank, ERP and invoices to flag discrepancies, leaving only the exceptions for human review.",
      },
      {
        title: "Operational email agent",
        description:
          "Reads shared inboxes, identifies the request, checks the systems and carries out the action — not just replies.",
      },
    ],
  },
  speed: {
    title: "Speed is what sets us apart",
    lead: "We understand the problem, quickly build a working solution, put it in the client's hands, and evolve it from there.",
    pillars: [
      {
        title: "Direction",
        description: "Clear focus on what matters to the business.",
      },
      {
        title: "Speed",
        description: "Fast execution, without bureaucracy.",
      },
      {
        title: "Results",
        description: "Solutions that create impact from day one.",
      },
    ],
    aboutEyebrow: "About VEKTO",
    aboutText:
      "VEKTO helps companies transform processes through technology. We build digital solutions, automations, integrations and AI applications focused on fast execution and results.",
  },
  methodology: {
    title: "How we work",
    steps: [
      {
        title: "Diagnosis",
        description: "We understand the process and find where the waste is.",
      },
      {
        title: "First version",
        description: "We quickly build a working solution.",
      },
      {
        title: "Real use",
        description: "We put it in the team's hands to validate day-to-day.",
      },
      {
        title: "Evolution",
        description: "We improve it based on real use and data.",
      },
    ],
  },
  tech: {
    eyebrow: "Technology",
    title: "Technology that fits the problem",
    lead: "We pick the right tool for each situation — not the trendiest one.",
    categories: [
      {
        title: "Development",
        items: ["Next.js", "React", "NestJS", "TypeScript", "PostgreSQL", "Supabase"],
      },
      {
        title: "Automation and RPA",
        items: ["UiPath", "Power Automate", "Power Apps", "SharePoint"],
      },
      {
        title: "Artificial Intelligence",
        items: ["OpenAI", "Claude"],
      },
    ],
  },
  security: {
    eyebrow: "Security",
    title: "Built for business environments",
    lead: "We don't promise what we can't deliver — these are practices we apply from the design stage on.",
    items: [
      {
        title: "Access",
        description:
          "Configurable permissions by module and by user role (e.g. admin, supervisor, operator).",
      },
      {
        title: "Data",
        description:
          "Structured databases with version control and a history of changes.",
      },
      {
        title: "Auditability",
        description:
          "A record of who did what and when, whenever the process requires traceability.",
      },
      {
        title: "Integration",
        description:
          "System-to-system communication via authenticated APIs with access control.",
      },
      {
        title: "Privacy",
        description:
          "Data handling considered from the design stage, matched to the sensitivity of each piece of information.",
      },
    ],
  },
  contact: {
    title: "Have a manual or slow process?",
    lead: "Tell us the challenge. VEKTO helps turn it into a digital solution, fast and focused on results.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    phoneLabel: "Phone",
    phonePlaceholder: "+1 (555) 000-0000",
    challengeLabel: "Challenge",
    challengePlaceholder: "Tell us, briefly, what you need to solve",
    submit: "Get in touch",
    submitting: "Sending...",
    successTitle: "Message sent",
    successBody: "Thanks for reaching out. VEKTO will get back to you soon.",
    errorBody: "Couldn't send it right now. Please try again shortly.",
    requiredError: "Please fill in name, email, phone and challenge.",
    invalidEmailError: "Please enter a valid email.",
    invalidPhoneError: "Please enter a valid phone number.",
    privacyNote: "Your data is only used to get back in touch with you.",
  },
  footer: {
    tagline: ["Direction", "Speed", "Results"],
    companyLabel: "Company",
    navSolutions: "Solutions",
    navCases: "Cases",
    navHow: "How we work",
    navContact: "Contact",
    copyright: "© 2026 VEKTO. All rights reserved.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en };

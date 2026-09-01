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
  solutions: {
    items: { title: string; description: string }[];
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
        title: "Entender",
        description: "Compreendemos o problema e o contexto.",
      },
      {
        title: "Transformar",
        description: "Desenhamos a solução mais eficiente.",
      },
      {
        title: "Construir",
        description: "Desenvolvemos com foco em qualidade e simplicidade.",
      },
      {
        title: "Automatizar",
        description: "Automatizamos processos e eliminamos tarefas manuais.",
      },
      {
        title: "Implantar",
        description: "Colocamos a solução em produção com segurança.",
      },
      {
        title: "Evoluir",
        description: "Acompanhamos, medimos e evoluímos continuamente.",
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
        title: "Understand",
        description: "We understand the problem and its context.",
      },
      {
        title: "Transform",
        description: "We design the most efficient solution.",
      },
      {
        title: "Build",
        description: "We develop with a focus on quality and simplicity.",
      },
      {
        title: "Automate",
        description: "We automate processes and remove manual tasks.",
      },
      {
        title: "Deploy",
        description: "We put the solution into production safely.",
      },
      {
        title: "Evolve",
        description: "We track, measure and keep improving continuously.",
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
  },
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en };

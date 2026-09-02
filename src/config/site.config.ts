export interface SiteConfig {
  author: string;
  avatar: string;
  siteUrl: string;
  title: {
    id: string;
    en: string;
  };
  eyebrow: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  lede: {
    id: string;
    en: string;
  };
  socials: {
    name: string;
    url: string;
    icon?: string;
  }[];
  topics: {
    id: string;
    label: {
      id: string;
      en: string;
    };
  }[];
}

export const siteConfig: SiteConfig = {
  author: "Muh Farid Zia",
  avatar: "/images/avatar.jpg",
  siteUrl: "https://muhfaridzia.dev",
  title: {
    id: "Blog by Farid",
    en: "Blog by Farid"
  },
  eyebrow: {
    id: "Catatan Lapangan",
    en: "Field notes"
  },
  description: {
    id: "Catatan praktis seputar rekayasa web, AI agent, arsitektur software, dan pertimbangan teknis.",
    en: "Field notes on web engineering, AI agent loops, software architecture, and technical judgment."
  },
  lede: {
    id: "Software Engineer. Web, AI, dan seni membangun sistem tangguh yang benar-benar berguna.",
    en: "Software Engineer. Web, AI, and the unglamorous craft of shipping software people actually use."
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/muhfaridzia"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/muhfaridzia"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/muhfaridzia"
    },
    {
      name: "Email",
      url: "mailto:farid@example.com"
    }
  ],
  topics: [
    { id: "all", label: { id: "Semua", en: "All" } },
    { id: "web", label: { id: "Web", en: "Web" } },
    { id: "ai", label: { id: "AI", en: "AI" } },
    { id: "frontend", label: { id: "Frontend", en: "Frontend" } },
    { id: "debugging", label: { id: "Debugging", en: "Debugging" } },
    { id: "career", label: { id: "Karir", en: "Career" } }
  ]
};

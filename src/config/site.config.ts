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
  avatar: "https://avatars.githubusercontent.com/u/13011170",
  siteUrl: "https://muhfaridzia.dev",
  title: {
    id: "Blog by Muhammad Farid Zia",
    en: "Blog by Muhammad Farid Zia",
  },
  eyebrow: {
    id: "Catatan Rekayasa & Web",
    en: "Software & Web Engineering",
  },
  description: {
    id: "Kumpulan artikel, eksperimen teknis, dan pemikiran seputar web development serta arsitektur software.",
    en: "Personal writings, technical experiments, and thoughts on modern web development and software engineering.",
  },
  lede: {
    id: "Software Engineer. Berbagi pengalaman teknis, arsitektur web modern, dan eksplorasi teknologi yang relevan.",
    en: "Software Engineer. Sharing hands-on engineering experiences, modern web practices, and practical tech insights.",
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/mfaridzia",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/muhfaridzia",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/muhfaridzia",
    },
    {
      name: "Email",
      url: "mailto:muhfaridzia@gmail.com",
    },
  ],
  topics: [
    { id: "all", label: { id: "Semua", en: "All" } },
    { id: "web", label: { id: "Web", en: "Web" } },
    { id: "ai", label: { id: "AI", en: "AI" } },
    { id: "frontend", label: { id: "Frontend", en: "Frontend" } },
    { id: "debugging", label: { id: "Debugging", en: "Debugging" } },
    { id: "career", label: { id: "Karir", en: "Career" } },
  ],
};

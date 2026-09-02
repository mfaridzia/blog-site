import { ui, defaultLang } from "./ui";

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}

export function formatUrl(path: string, lang: Lang): string {
  const clean = path.replace(/^\/(en|id)(\/|$)/, '/');
  const normalized = clean.startsWith('/') ? clean : `/${clean}`;
  
  if (lang === 'en') {
    return `/en${normalized === '/' ? '' : normalized}`;
  }
  return `/id${normalized === '/' ? '' : normalized}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

import translationsEN from "../language/EN.json";
import translationsTH from "../language/TH.json";

type Translations = typeof translationsEN;

export const translations: Record<string, Translations> = {
  en: translationsEN,
  th: translationsTH,
};

export type Language = "en" | "th";

export function getLanguageFromURL(url: URL): Language {
  const parts = url.pathname.split("/");
  const lang = parts[1];
  if (lang === "en" || lang === "th") {
    return lang as Language;
  }
  return "en";
}

export function getTranslations(lang: Language = "en"): Translations {
  return translations[lang] || translations.en;
}

export function t(translations: Translations, path: string): string {
  const keys = path.split(".");
  let value: any = translations;

  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return path;
  }

  return value as string;
}

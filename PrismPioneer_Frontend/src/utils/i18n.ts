import translationsEN from "../language/EN.json";
import translationsTH from "../language/TH.json";

type Translations = typeof translationsEN;

export const translations: Record<string, Translations> = {
  en: translationsEN,
  th: translationsTH,
};

export type Language = "en" | "th";

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

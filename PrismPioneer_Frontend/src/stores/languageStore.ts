import { createStore } from "zustand/vanilla";
import type { Language } from "@/utils/i18n";

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  getLanguage: () => Language;
}

const loadPersistedState = (): Partial<LanguageState> => {
  try {
    const saved = localStorage.getItem("language-storage");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error("Failed to load persisted language:", error);
  }
  return {};
};

const getInitialLanguage = (): Language => {
  if (typeof window !== "undefined") {
    const parts = window.location.pathname.split("/");
    const langFromPath = parts[1];
    if (langFromPath === "en" || langFromPath === "th") {
      return langFromPath as Language;
    }
  }

  const persisted = loadPersistedState();
  return persisted.language || "en";
};

const store = createStore<LanguageState>()((set, get) => {
  const initialState: LanguageState = {
    language: getInitialLanguage(),
    setLanguage: (lang: Language) => {
      set({ language: lang });

      if (typeof window !== "undefined") {
        // Persist to localStorage
        localStorage.setItem("language-storage", JSON.stringify({ language: lang }));

        // Update URL and reload to apply changes (Astro is MPA)
        const currentPath = window.location.pathname;
        const parts = currentPath.split("/");

        if (parts[1] === "en" || parts[1] === "th") {
          if (parts[1] !== lang) {
            parts[1] = lang;
            const newPath = parts.join("/");
            window.location.href = newPath + window.location.search + window.location.hash;
          }
        } else {
          // Handle root or other paths
          const newPath = `/${lang}${currentPath === "/" ? "" : currentPath}`;
          window.location.href = newPath + window.location.search + window.location.hash;
        }
      }
    },
    getLanguage: () => get().language,
  };

  return initialState;
});

export const useLanguageStore = {
  getState: () => store.getState(),
  setState: (state: Partial<LanguageState>) => store.setState(state),
  subscribe: (listener: (state: LanguageState) => void) => store.subscribe(listener),
};

export default useLanguageStore;

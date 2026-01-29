import { create } from "zustand";
import type { Project, ProjectCategory, Technology } from "@/types/portfolio";

interface PortfolioStore {
  projects: Project[];
  categories: ProjectCategory[];
  technologies: Technology[];
  loading: boolean;
  error: string | null;
  setProjects: (projects: Project[]) => void;
  setCategories: (categories: ProjectCategory[]) => void;
  setTechnologies: (technologies: Technology[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  projects: [],
  categories: [],
  technologies: [],
  loading: false,
  error: null,
  setProjects: (projects) => set({ projects }),
  setCategories: (categories) => set({ categories }),
  setTechnologies: (technologies) => set({ technologies }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

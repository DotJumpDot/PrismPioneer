import api from "./api";
import type { Project, ProjectCategory, Technology } from "@/types/portfolio";

export interface ProjectsResponse {
  results: Project[];
  count: number;
  next: string | null;
  previous: string | null;
}

export const portfolioService = {
  getProjects: async (params?: any): Promise<ProjectsResponse> => {
    const response = await api.get<ProjectsResponse>("/portfolio/projects/", { params });
    return response.data;
  },

  getProject: async (slug: string): Promise<Project> => {
    const response = await api.get<Project>(`/portfolio/projects/${slug}/`);
    return response.data;
  },

  getCategories: async (): Promise<ProjectCategory[]> => {
    const response = await api.get<ProjectCategory[]>("/portfolio/categories/");
    return response.data;
  },

  getCategory: async (slug: string): Promise<ProjectCategory> => {
    const response = await api.get<ProjectCategory>(`/portfolio/categories/${slug}/`);
    return response.data;
  },

  getTechnologies: async (): Promise<Technology[]> => {
    const response = await api.get<Technology[]>("/portfolio/technologies/");
    return response.data;
  },

  getTechnology: async (slug: string): Promise<Technology> => {
    const response = await api.get<Technology>(`/portfolio/technologies/${slug}/`);
    return response.data;
  },

  getFeaturedProjects: async (): Promise<{ results: Project[] }> => {
    const response = await api.get<{ results: Project[] }>("/portfolio/projects/featured/");
    return response.data;
  },
};

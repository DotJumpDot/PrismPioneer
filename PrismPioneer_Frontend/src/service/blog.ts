import api from "./api";
import type { BlogPost, BlogCategory, Tag } from "@/types/blog";

export interface BlogPostsResponse {
  results: BlogPost[];
  count: number;
  next: string | null;
  previous: string | null;
}

export const blogService = {
  getPosts: async (params?: any): Promise<BlogPostsResponse> => {
    const response = await api.get<BlogPostsResponse>("/blog/posts/", { params });
    return response.data;
  },

  getPost: async (slug: string): Promise<BlogPost> => {
    const response = await api.get<BlogPost>(`/blog/posts/${slug}/`);
    return response.data;
  },

  getCategories: async (): Promise<BlogCategory[]> => {
    const response = await api.get<BlogCategory[]>("/blog/categories/");
    return response.data;
  },

  getCategory: async (slug: string): Promise<BlogCategory> => {
    const response = await api.get<BlogCategory>(`/blog/categories/${slug}/`);
    return response.data;
  },

  getTags: async (): Promise<Tag[]> => {
    const response = await api.get<Tag[]>("/blog/tags/");
    return response.data;
  },

  getTag: async (slug: string): Promise<Tag> => {
    const response = await api.get<Tag>(`/blog/tags/${slug}/`);
    return response.data;
  },

  getFeaturedPosts: async (): Promise<{ results: BlogPost[] }> => {
    const response = await api.get<{ results: BlogPost[] }>("/blog/posts/featured/");
    return response.data;
  },

  incrementViews: async (slug: string): Promise<{ views: number }> => {
    const response = await api.post<{ views: number }>(`/blog/posts/${slug}/increment_views/`);
    return response.data;
  },
};

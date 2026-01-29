import { create } from "zustand";
import type { BlogPost, BlogCategory, Tag } from "@/types/blog";

interface BlogStore {
  posts: BlogPost[];
  categories: BlogCategory[];
  tags: Tag[];
  loading: boolean;
  error: string | null;
  setPosts: (posts: BlogPost[]) => void;
  setCategories: (categories: BlogCategory[]) => void;
  setTags: (tags: Tag[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  categories: [],
  tags: [],
  loading: false,
  error: null,
  setPosts: (posts) => set({ posts }),
  setCategories: (categories) => set({ categories }),
  setTags: (tags) => set({ tags }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

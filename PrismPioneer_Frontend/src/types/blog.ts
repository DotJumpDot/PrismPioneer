export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  created_at: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  author_username: string;
  category_name: string | null;
  tags: Tag[];
  excerpt: string;
  content: string;
  featured_image: string | null;
  status: string;
  is_featured: boolean;
  views: number;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export type BlogPostStatus = "draft" | "published" | "archived";

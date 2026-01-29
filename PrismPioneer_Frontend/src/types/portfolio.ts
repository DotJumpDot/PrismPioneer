export interface ProjectCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  created_at: string;
}

export interface Technology {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

export interface ProjectImage {
  id: number;
  image: string;
  caption: string;
  order: number;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  category_name: string | null;
  technologies: Technology[];
  thumbnail: string;
  cover_image: string | null;
  github_url: string | null;
  live_url: string | null;
  demo_url: string | null;
  status: string;
  is_featured: boolean;
  order: number;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
}

export type ProjectStatus = 'draft' | 'published' | 'archived';

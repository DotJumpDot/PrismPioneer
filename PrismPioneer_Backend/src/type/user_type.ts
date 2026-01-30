export interface User {
  id: string;
  username: string;
  email: string;
  password_hash?: string;
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
  bio?: string;
  is_active: boolean;
  is_verified: boolean;
  created_at: Date;
  updated_at: Date;
  last_login?: Date;
}

export interface CreateUserInput {
  username: string;
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
  bio?: string;
}

export interface UpdateUserInput {
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
  bio?: string;
  is_active?: boolean;
  is_verified?: boolean;
}

export interface UserResponse {
  id: string;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
  bio?: string;
  is_active: boolean;
  is_verified: boolean;
  created_at: Date;
  updated_at: Date;
  last_login?: Date;
}

export interface UserListResponse {
  users: UserResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface UserQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  is_active?: boolean;
  is_verified?: boolean;
  sort_by?: "username" | "email" | "created_at" | "updated_at";
  sort_order?: "asc" | "desc";
}

export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  user: UserResponse;
  token: string;
  expires_at: Date;
}

export interface UserErrorResponse {
  error: string;
  details?: string;
  field?: string;
}

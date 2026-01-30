import supabase from "../db";
import { User, CreateUserInput, UpdateUserInput, UserQueryParams } from "../type/user_type";
import bcrypt from "bcrypt";

export class UserSQL {
  static async createTable() {
    console.log("ℹ️ Table creation should be done via Supabase Dashboard SQL Editor.");
  }

  static async hashPassword(password: string): Promise<string> {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
  }

  static async createUser(userData: CreateUserInput): Promise<User> {
    const passwordHash = await this.hashPassword(userData.password);

    try {
      const { data, error } = await supabase
        .from("users")
        .insert([
          {
            username: userData.username,
            email: userData.email,
            password_hash: passwordHash,
            first_name: userData.first_name || null,
            last_name: userData.last_name || null,
            avatar_url: userData.avatar_url || null,
            bio: userData.bio || null,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data as User;
    } catch (error) {
      console.error("❌ Error creating user:", error);
      throw error;
    }
  }

  static async getUserById(id: string): Promise<User | null> {
    try {
      const { data, error } = await supabase.from("users").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data as User | null;
    } catch (error) {
      console.error("❌ Error getting user by ID:", error);
      throw error;
    }
  }

  static async getUserByEmail(email: string): Promise<User | null> {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .maybeSingle();
      if (error) throw error;
      return data as User | null;
    } catch (error) {
      console.error("❌ Error getting user by email:", error);
      throw error;
    }
  }

  static async getUserByUsername(username: string): Promise<User | null> {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("username", username)
        .maybeSingle();
      if (error) throw error;
      return data as User | null;
    } catch (error) {
      console.error("❌ Error getting user by username:", error);
      throw error;
    }
  }

  static async getUsers(params: UserQueryParams = {}): Promise<{ users: User[]; total: number }> {
    const {
      page = 1,
      limit = 10,
      search,
      is_active,
      is_verified,
      sort_by = "created_at",
      sort_order = "desc",
    } = params;

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    try {
      let query = supabase.from("users").select("*", { count: "exact" });

      if (search) {
        query = query.or(
          `username.ilike.%${search}%,email.ilike.%${search}%,first_name.ilike.%${search}%,last_name.ilike.%${search}%`
        );
      }

      if (is_active !== undefined) {
        query = query.eq("is_active", is_active);
      }

      if (is_verified !== undefined) {
        query = query.eq("is_verified", is_verified);
      }

      const { data, count, error } = await query
        .order(sort_by, { ascending: sort_order === "asc" })
        .range(from, to);

      if (error) throw error;
      return { users: (data as User[]) || [], total: count || 0 };
    } catch (error) {
      console.error("❌ Error getting users:", error);
      throw error;
    }
  }

  static async updateUser(id: string, userData: UpdateUserInput): Promise<User | null> {
    try {
      const { data, error } = await supabase
        .from("users")
        .update({
          ...userData,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select()
        .maybeSingle();

      if (error) throw error;
      return data as User | null;
    } catch (error) {
      console.error("❌ Error updating user:", error);
      throw error;
    }
  }

  static async deleteUser(id: string): Promise<boolean> {
    try {
      const { error, count } = await supabase.from("users").delete({ count: "exact" }).eq("id", id);
      if (error) throw error;
      return (count || 0) > 0;
    } catch (error) {
      console.error("❌ Error deleting user:", error);
      throw error;
    }
  }

  static async updateLastLogin(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from("users")
        .update({ last_login: new Date().toISOString() })
        .eq("id", id);

      if (error) throw error;
    } catch (error) {
      console.error("❌ Error updating last login:", error);
      throw error;
    }
  }

  static async verifyPassword(password: string, passwordHash: string): Promise<boolean> {
    return await bcrypt.compare(password, passwordHash);
  }

  static async usernameExists(username: string, excludeId?: string): Promise<boolean> {
    try {
      let query = supabase
        .from("users")
        .select("id", { count: "exact", head: true })
        .eq("username", username);

      if (excludeId) {
        query = query.neq("id", excludeId);
      }

      const { count, error } = await query;
      if (error) throw error;
      return (count || 0) > 0;
    } catch (error) {
      console.error("❌ Error checking username existence:", error);
      throw error;
    }
  }

  static async emailExists(email: string, excludeId?: string): Promise<boolean> {
    try {
      let query = supabase
        .from("users")
        .select("id", { count: "exact", head: true })
        .eq("email", email);

      if (excludeId) {
        query = query.neq("id", excludeId);
      }

      const { count, error } = await query;
      if (error) throw error;
      return (count || 0) > 0;
    } catch (error) {
      console.error("❌ Error checking email existence:", error);
      throw error;
    }
  }
}

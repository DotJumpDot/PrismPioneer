import { UserSQL } from "../sql/user_sql";
import {
  User,
  UserResponse,
  UserListResponse,
  CreateUserInput,
  UpdateUserInput,
  UserQueryParams,
  UserLoginInput,
  UserLoginResponse,
  UserErrorResponse,
} from "../type/user_type";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

export class UserService {
  // Map User to UserResponse (exclude sensitive data)
  static mapToUserResponse(user: User): UserResponse {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      avatar_url: user.avatar_url,
      bio: user.bio,
      is_active: user.is_active,
      is_verified: user.is_verified,
      created_at: user.created_at,
      updated_at: user.updated_at,
      last_login: user.last_login,
    };
  }

  // Validate user input
  static validateCreateUserInput(input: CreateUserInput): string[] {
    const errors: string[] = [];

    if (!input.username || input.username.trim().length < 3) {
      errors.push("Username must be at least 3 characters long");
    }

    if (!input.email || !this.isValidEmail(input.email)) {
      errors.push("Invalid email format");
    }

    if (!input.password || input.password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }

    if (input.password && !this.isValidPassword(input.password)) {
      errors.push(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
    }

    return errors;
  }

  static validateUpdateUserInput(input: UpdateUserInput): string[] {
    const errors: string[] = [];

    if (input.username && input.username.trim().length < 3) {
      errors.push("Username must be at least 3 characters long");
    }

    if (input.email && !this.isValidEmail(input.email)) {
      errors.push("Invalid email format");
    }

    return errors;
  }

  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
    return passwordRegex.test(password);
  }

  // Create user with validation
  static async createUser(
    userData: CreateUserInput
  ): Promise<{ success: boolean; data?: UserResponse; error?: UserErrorResponse }> {
    try {
      // Validate input
      const validationErrors = this.validateCreateUserInput(userData);
      if (validationErrors.length > 0) {
        return {
          success: false,
          error: {
            error: "Validation failed",
            details: validationErrors.join(", "),
          },
        };
      }

      // Check if username already exists
      const usernameExists = await UserSQL.usernameExists(userData.username);
      if (usernameExists) {
        return {
          success: false,
          error: {
            error: "Username already exists",
            field: "username",
          },
        };
      }

      // Check if email already exists
      const emailExists = await UserSQL.emailExists(userData.email);
      if (emailExists) {
        return {
          success: false,
          error: {
            error: "Email already exists",
            field: "email",
          },
        };
      }

      // Create user
      const user = await UserSQL.createUser(userData);
      const userResponse = this.mapToUserResponse(user);

      return {
        success: true,
        data: userResponse,
      };
    } catch (error) {
      console.error("❌ Error creating user:", error);
      return {
        success: false,
        error: {
          error: "Failed to create user",
          details: error instanceof Error ? error.message : "Unknown error",
        },
      };
    }
  }

  // Get user by ID
  static async getUserById(
    id: string
  ): Promise<{ success: boolean; data?: UserResponse; error?: UserErrorResponse }> {
    try {
      const user = await UserSQL.getUserById(id);

      if (!user) {
        return {
          success: false,
          error: {
            error: "User not found",
          },
        };
      }

      const userResponse = this.mapToUserResponse(user);
      return {
        success: true,
        data: userResponse,
      };
    } catch (error) {
      console.error("❌ Error getting user by ID:", error);
      return {
        success: false,
        error: {
          error: "Failed to get user",
          details: error instanceof Error ? error.message : "Unknown error",
        },
      };
    }
  }

  // Get all users with pagination
  static async getUsers(
    params: UserQueryParams = {}
  ): Promise<{ success: boolean; data?: UserListResponse; error?: UserErrorResponse }> {
    try {
      const { users, total } = await UserSQL.getUsers(params);

      const page = params.page || 1;
      const limit = params.limit || 10;
      const totalPages = Math.ceil(total / limit);

      const userResponses = users.map((user) => this.mapToUserResponse(user));

      const response: UserListResponse = {
        users: userResponses,
        total,
        page,
        limit,
        totalPages,
      };

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      console.error("❌ Error getting users:", error);
      return {
        success: false,
        error: {
          error: "Failed to get users",
          details: error instanceof Error ? error.message : "Unknown error",
        },
      };
    }
  }

  // Update user
  static async updateUser(
    id: string,
    userData: UpdateUserInput
  ): Promise<{ success: boolean; data?: UserResponse; error?: UserErrorResponse }> {
    try {
      // Validate input
      const validationErrors = this.validateUpdateUserInput(userData);
      if (validationErrors.length > 0) {
        return {
          success: false,
          error: {
            error: "Validation failed",
            details: validationErrors.join(", "),
          },
        };
      }

      // Check if user exists
      const existingUser = await UserSQL.getUserById(id);
      if (!existingUser) {
        return {
          success: false,
          error: {
            error: "User not found",
          },
        };
      }

      // Check if new username conflicts with existing users
      if (userData.username && userData.username !== existingUser.username) {
        const usernameExists = await UserSQL.usernameExists(userData.username, id);
        if (usernameExists) {
          return {
            success: false,
            error: {
              error: "Username already exists",
              field: "username",
            },
          };
        }
      }

      // Check if new email conflicts with existing users
      if (userData.email && userData.email !== existingUser.email) {
        const emailExists = await UserSQL.emailExists(userData.email, id);
        if (emailExists) {
          return {
            success: false,
            error: {
              error: "Email already exists",
              field: "email",
            },
          };
        }
      }

      // Update user
      const updatedUser = await UserSQL.updateUser(id, userData);

      if (!updatedUser) {
        return {
          success: false,
          error: {
            error: "Failed to update user",
          },
        };
      }

      const userResponse = this.mapToUserResponse(updatedUser);
      return {
        success: true,
        data: userResponse,
      };
    } catch (error) {
      console.error("❌ Error updating user:", error);
      return {
        success: false,
        error: {
          error: "Failed to update user",
          details: error instanceof Error ? error.message : "Unknown error",
        },
      };
    }
  }

  // Delete user
  static async deleteUser(id: string): Promise<{ success: boolean; error?: UserErrorResponse }> {
    try {
      // Check if user exists
      const existingUser = await UserSQL.getUserById(id);
      if (!existingUser) {
        return {
          success: false,
          error: {
            error: "User not found",
          },
        };
      }

      // Delete user
      const deleted = await UserSQL.deleteUser(id);

      if (!deleted) {
        return {
          success: false,
          error: {
            error: "Failed to delete user",
          },
        };
      }

      return {
        success: true,
      };
    } catch (error) {
      console.error("❌ Error deleting user:", error);
      return {
        success: false,
        error: {
          error: "Failed to delete user",
          details: error instanceof Error ? error.message : "Unknown error",
        },
      };
    }
  }

  // Login user
  static async loginUser(
    loginData: UserLoginInput
  ): Promise<{ success: boolean; data?: UserLoginResponse; error?: UserErrorResponse }> {
    try {
      // Validate input
      if (!loginData.email || !loginData.password) {
        return {
          success: false,
          error: {
            error: "Email and password are required",
          },
        };
      }

      // Get user by email
      const user = await UserSQL.getUserByEmail(loginData.email);

      if (!user) {
        return {
          success: false,
          error: {
            error: "Invalid email or password",
          },
        };
      }

      // Check if user is active
      if (!user.is_active) {
        return {
          success: false,
          error: {
            error: "Account is deactivated",
          },
        };
      }

      // Verify password
      const isPasswordValid = await UserSQL.verifyPassword(loginData.password, user.password_hash!);

      if (!isPasswordValid) {
        return {
          success: false,
          error: {
            error: "Invalid email or password",
          },
        };
      }

      // Update last login
      await UserSQL.updateLastLogin(user.id);

      // Generate JWT token
      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
          username: user.username,
        },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "24h" }
      );

      const userResponse = this.mapToUserResponse(user);
      const response: UserLoginResponse = {
        user: userResponse,
        token,
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      };

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      console.error("❌ Error logging in user:", error);
      return {
        success: false,
        error: {
          error: "Failed to login",
          details: error instanceof Error ? error.message : "Unknown error",
        },
      };
    }
  }
}

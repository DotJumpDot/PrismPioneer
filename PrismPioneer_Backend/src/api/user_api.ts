import { Elysia, t } from "elysia";
import { UserService } from "../service/user_service";
import { UserSQL } from "../sql/user_sql";
import { initializeDatabase } from "../db";
import {
  CreateUserInput,
  UpdateUserInput,
  UserQueryParams,
  UserLoginInput,
  UserErrorResponse,
} from "../type/user_type";

export const userApi = new Elysia({ prefix: "/users" })
  // Get all users
  .get(
    "/",
    async ({ query, set }) => {
      try {
        const params: UserQueryParams = {
          page: query.page ? parseInt(query.page as string) : 1,
          limit: query.limit ? parseInt(query.limit as string) : 10,
          search: query.search as string,
          is_active: query.is_active ? query.is_active === "true" : undefined,
          is_verified: query.is_verified ? query.is_verified === "true" : undefined,
          sort_by: query.sort_by as UserQueryParams["sort_by"],
          sort_order: query.sort_order as UserQueryParams["sort_order"],
        };

        const result = await UserService.getUsers(params);

        if (!result.success) {
          set.status = 400;
          return result.error;
        }

        set.status = 200;
        return result.data;
      } catch (error) {
        console.error("❌ Error getting users:", error);
        set.status = 500;
        return { error: "Internal server error" };
      }
    },
    {
      detail: {
        tags: ["Users"],
        summary: "Get all users",
        description: "Get a paginated list of users with optional filtering and sorting",
      },
      query: t.Object({
        page: t.Optional(t.String()),
        limit: t.Optional(t.String()),
        search: t.Optional(t.String()),
        is_active: t.Optional(t.String()),
        is_verified: t.Optional(t.String()),
        sort_by: t.Optional(t.String()),
        sort_order: t.Optional(t.String()),
      }),
    }
  )

  // Get user by ID
  .get(
    "/:id",
    async ({ params, set }) => {
      try {
        const result = await UserService.getUserById(params.id);

        if (!result.success) {
          set.status = result.error?.error === "User not found" ? 404 : 400;
          return result.error;
        }

        set.status = 200;
        return result.data;
      } catch (error) {
        console.error("❌ Error getting user by ID:", error);
        set.status = 500;
        return { error: "Internal server error" };
      }
    },
    {
      detail: {
        tags: ["Users"],
        summary: "Get user by ID",
        description: "Get a specific user by their UUID",
      },
      params: t.Object({
        id: t.String({ format: "uuid" }),
      }),
    }
  )

  // Create new user
  .post(
    "/",
    async ({ body, set }) => {
      try {
        const userData: CreateUserInput = body as CreateUserInput;
        const result = await UserService.createUser(userData);

        if (!result.success) {
          set.status = 400;
          return result.error;
        }

        set.status = 201;
        return result.data;
      } catch (error) {
        console.error("❌ Error creating user:", error);
        set.status = 500;
        return { error: "Internal server error" };
      }
    },
    {
      detail: {
        tags: ["Users"],
        summary: "Create new user",
        description: "Create a new user account",
      },
      body: t.Object({
        username: t.String({ minLength: 3, maxLength: 50 }),
        email: t.String({ format: "email" }),
        password: t.String({ minLength: 8 }),
        first_name: t.Optional(t.String({ maxLength: 100 })),
        last_name: t.Optional(t.String({ maxLength: 100 })),
        avatar_url: t.Optional(t.String({ format: "uri" })),
        bio: t.Optional(t.String({ maxLength: 1000 })),
      }),
    }
  )

  // Update user
  .put(
    "/:id",
    async ({ params, body, set }) => {
      try {
        const userData: UpdateUserInput = body as UpdateUserInput;
        const result = await UserService.updateUser(params.id, userData);

        if (!result.success) {
          set.status = result.error?.error === "User not found" ? 404 : 400;
          return result.error;
        }

        set.status = 200;
        return result.data;
      } catch (error) {
        console.error("❌ Error updating user:", error);
        set.status = 500;
        return { error: "Internal server error" };
      }
    },
    {
      detail: {
        tags: ["Users"],
        summary: "Update user",
        description: "Update an existing user",
      },
      params: t.Object({
        id: t.String({ format: "uuid" }),
      }),
      body: t.Object({
        username: t.Optional(t.String({ minLength: 3, maxLength: 50 })),
        email: t.Optional(t.String({ format: "email" })),
        first_name: t.Optional(t.String({ maxLength: 100 })),
        last_name: t.Optional(t.String({ maxLength: 100 })),
        avatar_url: t.Optional(t.String({ format: "uri" })),
        bio: t.Optional(t.String({ maxLength: 1000 })),
        is_active: t.Optional(t.Boolean()),
        is_verified: t.Optional(t.Boolean()),
      }),
    }
  )

  // Delete user
  .delete(
    "/:id",
    async ({ params, set }) => {
      try {
        const result = await UserService.deleteUser(params.id);

        if (!result.success) {
          set.status = result.error?.error === "User not found" ? 404 : 400;
          return result.error;
        }

        set.status = 204;
        return null;
      } catch (error) {
        console.error("❌ Error deleting user:", error);
        set.status = 500;
        return { error: "Internal server error" };
      }
    },
    {
      detail: {
        tags: ["Users"],
        summary: "Delete user",
        description: "Delete a user by their UUID",
      },
      params: t.Object({
        id: t.String({ format: "uuid" }),
      }),
    }
  )

  // User login
  .post(
    "/login",
    async ({ body, set }) => {
      try {
        const loginData: UserLoginInput = body as UserLoginInput;
        const result = await UserService.loginUser(loginData);

        if (!result.success) {
          set.status = 401;
          return result.error;
        }

        set.status = 200;
        return result.data;
      } catch (error) {
        console.error("❌ Error logging in user:", error);
        set.status = 500;
        return { error: "Internal server error" };
      }
    },
    {
      detail: {
        tags: ["Users"],
        summary: "User login",
        description: "Authenticate user and return JWT token",
      },
      body: t.Object({
        email: t.String({ format: "email" }),
        password: t.String({ minLength: 1 }),
      }),
    }
  );

export default userApi;

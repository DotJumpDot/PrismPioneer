import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "../../.env") });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API || process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("SUPABASE_URL or SUPABASE_API/KEY environment variable is not defined");
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

// Test connection
export async function testConnection() {
  try {
    const { data, error } = await supabase.from("users").select("count").limit(1);
    if (error && error.code !== "PGRST116" && error.code !== "42P01") {
      throw error;
    }
    console.log("✅ Supabase API connected successfully");
    return true;
  } catch (error) {
    console.error("❌ Supabase connection failed:", error);
    return false;
  }
}

// Initialize database connection
export async function initializeDatabase() {
  const isConnected = await testConnection();
  if (!isConnected) {
    console.error("Failed to connect to Supabase. Exiting...");
    process.exit(1);
  }
}

export default supabase;

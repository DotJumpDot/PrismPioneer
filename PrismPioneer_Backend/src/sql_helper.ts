import { supabase } from "./db";

export interface QueryResult<T = any> {
  rows: T[];
  rowCount: number;
}

export function buildSQL(strings: TemplateStringsArray, values: any[]): string {
  let result = strings[0];
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value === null || value === undefined) {
      result += "NULL";
    } else if (typeof value === "string") {
      result += `'${value.replace(/'/g, "''")}'`;
    } else if (typeof value === "number" || typeof value === "boolean") {
      result += value.toString();
    } else if (Array.isArray(value)) {
      result += `(${value.map((v) => (typeof v === "string" ? `'${v.replace(/'/g, "''")}'` : v)).join(", ")})`;
    } else if (typeof value === "object" && value instanceof SQL) {
      result += value.toSQL();
    } else {
      result += `'${value}'`;
    }
    result += strings[i + 1];
  }
  return result;
}

export class SQL {
  private parts: string[] = [];

  constructor(value: string) {
    this.parts.push(value);
  }

  append(value: string): SQL {
    this.parts.push(value);
    return this;
  }

  toSQL(): string {
    return this.parts.join(" ");
  }
}

export async function executeRawSQL<T = any>(sql: string): Promise<QueryResult<T>> {
  try {
    const { data, error } = await supabase.rpc("execute_sql", { query: sql });

    if (error) throw error;

    return {
      rows: (data as any)?.rows || [],
      rowCount: (data as any)?.row_count || 0,
    };
  } catch (error) {
    console.error("❌ Error executing SQL:", error);
    throw error;
  }
}

export default function sql(strings: TemplateStringsArray | string, ...values: any[]) {
  let queryString: string;

  if (typeof strings === "string") {
    queryString = strings as string;
  } else {
    queryString = buildSQL(strings as TemplateStringsArray, values);
  }

  return executeRawSQL(queryString);
}

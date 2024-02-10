import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";


const pool = new Pool({
  host: "0.0.0.0",
  port: 5432,
  user: "postgres",
  password: "root",
  database: "postgres",
});

export const db = drizzle(pool);
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST ?? "",
  port: 5432,
  user: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE ?? "",
  ssl: true,
});

export const db = drizzle(pool);
import type { Config } from "drizzle-kit";

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;


export default {
    schema:"./lib/schema.ts",
    driver:"pg",
    out: "./drizzle",
    dbCredentials: {
        host: PGHOST as string,
        port: 5432,
        user: PGUSER,
        password: PGPASSWORD,
        database: PGDATABASE as string,
        ssl: true,
    }
} satisfies Config; 
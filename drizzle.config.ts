import type { Config } from "drizzle-kit";



export default {
    schema:"./lib/schema.ts",
    driver:"pg",
    out: "./drizzle",
    dbCredentials: {
        host: "127.0.0.1",
        port: 5432,
        user: "postgres",
        password: "root",
        database: "post",
    }
} satisfies Config;
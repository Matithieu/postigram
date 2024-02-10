import type {Config} from "drizzle-kit";



export default {
    schema:"./lib/schema.ts",
    driver:"pg",
    out: "./drizzle",
    dbCredentials: {
        host: "0.0.0.0",
        port: 5432,
        user: "postgres",
        password: "root",
        database: "postgres",
    }
} satisfies Config;
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import {db} from "./config-db";
import { userTable,sessionTable } from "./schema";


export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);

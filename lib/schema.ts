import { pgTable, serial, text, varchar,timestamp, } from "drizzle-orm/pg-core";


export const postTable  = pgTable("post", {
    id: serial("id"),
    name: text("name"),
    author: text("author"),
    description: varchar("description"),
    image_url: text("image_url"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  });

export const userTable = pgTable("user", {
  id: text("id").primaryKey(), // because Lucia documentation
  email: text("email"),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});
import { pgTable, serial, text, varchar,timestamp } from "drizzle-orm/pg-core";


export const Post = pgTable("Post", {
    id: serial("id"),
    name: text("name"),
    author: text("author"),
    description: varchar("description"),
    image_url: text("image_url"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  });
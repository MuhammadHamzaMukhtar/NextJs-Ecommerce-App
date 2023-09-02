import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const products = pgTable("products", {
  id: integer("id").notNull().primaryKey(),
  user_id: varchar("userId", { length: 256 }).notNull(),
  category: text("category", { enum: ["male", "female", "kids"] }),
  name: varchar("name", { length: 256 }).notNull(),
  slug: varchar("slug", { length: 256 }).notNull(),
  type: varchar("type", { length: 256 }).notNull(),
  image: varchar("image",  { length: 256 }),
  price: integer("price").notNull(),
  quantity: integer("quantity").notNull().default(1),
});

export type UserProduct = InferModel<typeof products>;
export type NewUserProduct = InferModel<typeof products, "insert">;

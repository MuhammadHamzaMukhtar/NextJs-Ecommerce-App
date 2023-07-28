import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const user_products = pgTable("user_products", {
  user_id: serial("id").notNull(),
  product_id: serial("id").notNull(),
});

export type UserProduct = InferModel<typeof user_products>; // return type when queried
export type NewUserProduct = InferModel<typeof user_products, "insert">; // insert type

import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const product_images = pgTable("product_images", {
  product_id: varchar("user_id", { length: 256 }).notNull(),
  image_url: varchar("image_url", { length: 256 }).notNull(),
});

export type UserProduct = InferModel<typeof product_images>; // return type when queried
export type NewUserProduct = InferModel<typeof product_images, "insert">; // insert type

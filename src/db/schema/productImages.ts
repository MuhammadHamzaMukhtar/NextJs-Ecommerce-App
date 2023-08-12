import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { InferModel, relations } from "drizzle-orm";
import { products } from "./products";

export const productImages = pgTable("productImages", {
  id: serial("id").primaryKey(),
  productId: varchar("productId", { length: 256 }).notNull(),
  image_url: varchar("image_url", { length: 256 }).notNull(),
});

export const imagesRelations = relations(productImages, ({ one }) => ({
  images: one(products, {
    fields: [productImages.productId],
    references: [products.id],
  }),
}));

export type UserProduct = InferModel<typeof productImages>; // return type when queried
export type NewUserProduct = InferModel<typeof productImages, "insert">; // insert type

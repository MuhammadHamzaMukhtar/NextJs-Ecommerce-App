import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const orders = pgTable("orders", {
  id: integer("id").notNull().primaryKey(),
  productId: varchar("productId", { length: 256 }).notNull(),
  userEmail: varchar("userEmail", { length: 256 }).notNull(),
  createdAt: timestamp("createdAt")
});

export type Orders = InferModel<typeof orders>;
export type NewOrder = InferModel<typeof orders, "insert">;

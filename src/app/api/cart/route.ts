import { products } from "@/db/schema/products";
import { db } from "@/lib/drizzle";
import { and, eq, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { product, user_id, quantity } = body;
  console.log("body", body);
  try {
    if (body) {
      const user = await db
        .select({ count: sql<number>`count(*)` })
        .from(products)
        .where(and(eq(products.user_id, user_id), eq(products.id, product.id)));
      console.log("user", user);
      if (user[0].count > 0) {
        await db
          .update(products)
          .set({ quantity: quantity })
          .where(
            and(eq(products.user_id, user_id), eq(products.id, product.id))
          );
      } else {
        await db.insert(products).values({
          user_id: user_id,
          id: product.id,
          quantity: quantity,
          category: product.category,
          name: product.name,
          slug: product.slug,
          type: product.type,
          price: product.price,
        });
      }
      const result = await db.select().from(products);
      console.log("result", result);
      return NextResponse.json(result);
    } else {
      return NextResponse.json({ message: "No products found" });
    }
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};

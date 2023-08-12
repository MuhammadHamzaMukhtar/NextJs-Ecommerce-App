import { productImages } from "@/db/schema/productImages";
import { products } from "@/db/schema/products";
import { db } from "@/lib/drizzle";
import { and, asc, eq, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { product, user_id, quantity } = body;
  try {
    if (body) {
      const userProduct = await db
        .select({ count: sql<number>`count(*)` })
        .from(products)
        .where(and(eq(products.user_id, user_id), eq(products.id, product.id)));
      if (userProduct[0].count > 0) {
        await db
          .update(products)
          .set({ quantity: quantity })
          .where(
            and(eq(products.user_id, user_id), eq(products.id, product.id))
          );
      } else {
        const createdProduct = await db
          .insert(products)
          .values({
            user_id: user_id,
            id: product.id,
            quantity: quantity,
            category: product.category,
            name: product.name,
            slug: product.slug,
            type: product.type,
            price: product.price,
          })
          .returning({ id: products.id });
        product.images.map(async (img: any) => {
          await db
            .insert(productImages)
            .values({ productId: createdProduct.id, image_url: img });
        });
      }
      const result = await db
        .select()
        .from(products)
        .leftJoin(productImages, eq(products.id, productImages.productId))
        .groupBy(products.id)
        .orderBy(asc(products.id));
      return NextResponse.json(result);
    } else {
      return NextResponse.json({ message: "No products found" });
    }
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};

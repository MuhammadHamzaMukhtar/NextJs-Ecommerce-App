import { db } from "@/lib/drizzle";
import { NextRequest } from "next/server";

export const POST=async (request: NextRequest)=>{
    const body = await request.json();
  const { products, user_id } = body;
    // const createdProduct = await db
    //       .insert(products)
    //       .values({
    //         user_id: user_id,
    //         id: product.id,
    //         quantity: quantity,
    //         category: product.category,
    //         name: product.name,
    //         slug: product.slug,
    //         type: product.type,
    //         price: product.price,
    //       })
    //       .returning({ id: products.id });
}
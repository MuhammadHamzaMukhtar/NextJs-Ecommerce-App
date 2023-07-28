import { user_products } from "@/db/schema/user_products";
import { db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  try {
    if (Object.keys(body).length > 0) {
      const result = await db
        .insert(user_products)
        .values({ user_id: body.user_id, product_id: body.product_id })
        .returning({
          user_id: user_products.user_id,
          product_id: user_products.product_id,
        });
      return NextResponse.json(result);
    } else {
      return NextResponse.json({ message: "No products found" });
    }
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};

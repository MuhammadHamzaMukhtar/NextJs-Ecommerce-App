import { products } from "@/db/schema/products";
import { db } from "@/lib/drizzle";
import { eq, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const url = request.nextUrl;
  const userId = url.pathname.split("/")[3];
  if (userId) {
    try {
      const userProducts = await db
        .select({
          id: products.id,
          category: products.category,
          name: products.name,
          slug: products.slug,
          type: products.type,
          price: products.price,
          quantity: products.quantity,
        })
        .from(products)
        .groupBy(products.id)
        .where(eq(products.user_id, userId));
      if (userProducts) {
        console.log("userProducts", userProducts);
        return NextResponse.json(userProducts);
      } else {
        return NextResponse.json(
          { message: "Invalid user id" },
          { status: 400 }
        );
      }
    } catch (error: any) {
      return NextResponse.json(error.message);
    }
  } else {
    return NextResponse.json({ message: "No user id found" }, { status: 400 });
  }
};

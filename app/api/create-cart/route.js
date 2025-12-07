import { db } from "@/config/db/db";
import { cartItemsTable, cartTable } from "@/config/db/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      userEmail,
      productId,
      title,
      price,
      image,
      quantity,
      weigth,
      ingredient,
      skinType,
    } = await req.json();

    let [cart] = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.userEmail, userEmail));

    if (!cart) {
      const [newCart] = await db
        .insert(cartTable)
        .values({
          userEmail,
        })
        .returning();
      cart = newCart;
    }

    const existingItem = await db
      .select()
      .from(cartItemsTable)
      .where(
        and(
          eq(cartItemsTable.cartId),
          eq(cartItemsTable.productId, Number(productId))
        )
      );
    if (existingItem.length > 0) {
      // ممنوع نعمل update → نرجع error
      return NextResponse.json(
        { error: "Product already exists in cart" },
        { status: 400 }
      );
    }
    const [inserted] = await db
      .insert(cartItemsTable)
      .values({
        cartId: cart.id,
        productId,
        title,
        price,
        image,
        quantity,
        weigth,
        ingredient,
        skinType,
      })
      .returning();

    return NextResponse.json(inserted);
  } catch (err) {
    console.error("Error adding to cart :", err);
    return NextResponse.json(
      { error: "Error adding to cart" },
      { status: 500 }
    );
  }
}

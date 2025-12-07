import { db } from "@/config/db/db";
import { cartItemsTable } from "@/config/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const cartItemId = searchParams.get("cartItemId");

    if (!cartItemId) {
      return NextResponse.json(
        { error: "Missing Product Id" },
        { status: 400 }
      );
    }
    await db
      .delete(cartItemsTable)
      .where(eq(cartItemsTable.id, Number(cartItemId)));
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Faild to delete product", err);
    return NextResponse.json(
      { error: "fai to delete product" },
      { status: 500 }
    );
  }
}

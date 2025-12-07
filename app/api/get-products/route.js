import { db } from "@/config/db/db";
import { productsTable } from "@/config/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await db.select().from(productsTable);
    return NextResponse.json(products);
  } catch (err) {
    console.error(err.message || "Error When Fetching Products");
    return NextResponse.json(
      { error: err.message || "Faild to Fetch Products" },
      { status: 500 }
    );
  }
}

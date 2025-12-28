import { db } from "@/config/db/db";
import { productsTable } from "@/config/db/schema";
import { and, eq, sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const brand = searchParams.get("brand");
    const productType = searchParams.get("productType");
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = 8;
    const offset = (page - 1) * limit;
    const conditions = [];
    if (brand) {
      conditions.push(eq(productsTable.brand, brand));
    }

    if (productType) {
      conditions.push(eq(productsTable.productType, productType));
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

    let query = db
      .select()
      .from(productsTable)
      .where(whereClause)
      .limit(limit)
      .offset(offset);

    const totalCountRes = await db
      .select({ count: sql`count(*)` })
      .from(productsTable)
      .where(whereClause);

    const totalCount = Number(totalCountRes[0].count);
    const data = await query;

    return NextResponse.json({
      products: data,
      meta: {
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: page,
        limit,
      },
    });
  } catch (err) {
    console.error(err.message || "Error When Fetching Products");
    return NextResponse.json(
      { error: err.message || "Faild to Fetch Products" },
      { status: 500 }
    );
  }
}

import { db } from "@/config/db/db";
import { productsTable } from "@/config/db/schema";
import { and, eq, ne } from "drizzle-orm";

export async function getRelatedProducts(productType, cuurentProductId) {
  try {
    if (!productType || !cuurentProductId) {
      return [];
    }

    const data = await db
      .select()
      .from(productsTable)
      .where(
        and(
          eq(productsTable.productType, productType),
          ne(productsTable.id, cuurentProductId)
        )
      )
      .limit(4);
    return data;
  } catch (error) {
    console.error("Fetch Error in getRelatedProducts:", error);
    return [];
  }
}

import { db } from "@/config/db/db";
import { productsTable } from "@/config/db/schema";
import BlockClient from "./BlockClient";

export default async function BlockBusterCollection() {
  const products = (await db.select().from(productsTable)).slice(8);
  return <BlockClient products={products} />;
}

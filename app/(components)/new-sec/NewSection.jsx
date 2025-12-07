import NewSectionClient from "./NewSectionClient";
import { db } from "@/config/db/db";
import { productsTable } from "@/config/db/schema";

export default async function NewSection() {
  const products = await db.select().from(productsTable).limit(12);
  return <NewSectionClient products={products} />;
}

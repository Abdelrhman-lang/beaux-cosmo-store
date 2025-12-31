import Recommendation from "@/app/(components)/recommendition/Recommendation";
import PageClient from "./PageClient";
import { db } from "@/config/db/db";
import { productsTable } from "@/config/db/schema";
import { eq } from "drizzle-orm";
import { Suspense } from "react";
export default async function page({ params }) {
  const { id } = await params;
  const product = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.id, id))
    .then((res) => res[0]);
  return (
    <section className="py-20 px-5">
      <PageClient />
      <Suspense fallback={<div>Loading Recommendation.........</div>}>
        <Recommendation
          currentProductId={id}
          productType={product?.productType}
        />
      </Suspense>
    </section>
  );
}

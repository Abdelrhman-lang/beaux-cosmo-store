import React, { Suspense } from "react";
import BreadCramp from "../(components)/bread-cramp/BreadCramp";
import ShopFilter from "./ShopFilter";
import ProductsDisplay from "./ProductsDisplay";

export default function page() {
  return (
    <section className="py-24">
      <BreadCramp />
      <div className="px-6 lg:px-20 mt-14">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <ShopFilter />
          <div className="flex-1">
            <Suspense fallback={<div>Loading Shop......</div>}>
              <ProductsDisplay />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}

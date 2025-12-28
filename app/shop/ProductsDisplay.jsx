"use client";

import {
  fetchProducts,
  fetchProductsCategory,
} from "@/rtk/slices/productSlice";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../(components)/product-card/ProductCard";
import { Spinner } from "@/components/ui/spinner";
import FilterInfo from "./FilterInfo";
import Pagination from "../(components)/pagination/Pagination";

export default function ProductsDisplay() {
  const { items, loading, allProducts } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  useEffect(() => {
    const params = searchParams.toString();
    dispatch(fetchProductsCategory(params ? `?${params}` : ""));
  }, [searchParams, dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const [gridCols, setGridCols] = useState(4);
  return (
    <div className="pt-2.5">
      <FilterInfo
        productsNumber={items?.length}
        setGridCols={setGridCols}
        totalProducts={allProducts?.length}
      />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner className={"w-10 h-10 text-primary"} />
        </div>
      ) : (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${
            gridCols === 4
              ? "xl:grid-cols-4"
              : gridCols === 3
              ? "xl:grid-cols-3"
              : ""
          } gap-x-4 gap-y-10`}
        >
          {items?.map((item) => {
            return <ProductCard product={item} key={item.id} />;
          })}
        </div>
      )}
      <Pagination />
    </div>
  );
}

"use client";

import BreadCramp from "@/app/(components)/bread-cramp/BreadCramp";
import ProductDescription from "@/app/(components)/product-description/ProductDescription";
import ProductDetails from "@/app/(components)/product-details/ProductDetails";
import { ProductSkeleton } from "@/app/(components)/product-skeleton/ProductSkeleton";
import { fetchProducts, fetchSingleProduct } from "@/rtk/slices/productSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PageClient() {
  const { id } = useParams();
  const { singleProduct, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <section>
      <BreadCramp product={singleProduct} />
      <div className="mt-20">
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center">
              <ProductSkeleton />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <img
                    src={singleProduct?.image}
                    alt="product-image"
                    className="rounded-lg"
                  />
                </div>

                <ProductDetails
                  product={singleProduct}
                  className={"space-y-5"}
                />
              </div>
              <ProductDescription product={singleProduct} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

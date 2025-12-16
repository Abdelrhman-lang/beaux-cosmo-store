"use client";
import MainBtn from "../main-btn/MainBtn";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { ProductDialog } from "../product-dialog/ProductDialog";
export default function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <ul className="flex items-center gap-4 cursor-pointer">
            <li>
              <ProductDialog
                title={
                  <button className="cursor-pointer w-[40px] h-[40px] outline-none bg-white flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-500">
                    <Eye className="w-5 h-5" />
                  </button>
                }
                product={product}
              />
            </li>

            <li className=" w-[40px] h-[40px] bg-white flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-500">
              <ProductDialog
                title={
                  <button className="cursor-pointer w-[40px] h-[40px] outline-none bg-white flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-500">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                }
                product={product}
              />
            </li>
            <li className="w-[40px] h-[40px] bg-white flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-500">
              <Heart className="w-5 h-5" />
            </li>
          </ul>
        </div>
        <img src={product?.image} alt="card-img" />
      </div>
      <div className="pt-8 text-center flex flex-col gap-2">
        <h2 className="uppercase text-secondary">{product?.title}</h2>
        <div className="flex items-center justify-center gap-4">
          <span className="text-secondary">${product?.newPrice}</span>
          {product?.oldPrice ? (
            <span className="text-accent line-through">
              ${product?.oldPrice}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <ProductDialog
          title={<MainBtn title={"add to cart"} />}
          product={product}
        />
      </div>
    </div>
  );
}

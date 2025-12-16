"use client";

import { addToCart } from "@/rtk/slices/cartSlice";
import { useUser } from "@clerk/nextjs";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import SecondryBtn from "../sec-btn/SecondryBtn";
import { usePathname } from "next/navigation";

export default function ProductDetails({ product, className }) {
  const [weigth, setWeigth] = useState(null);
  const [ingredient, setIngredient] = useState(null);
  const [skinType, setskinType] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { user } = useUser();
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handelAddToCart = async () => {
    if (!weigth || !ingredient || !skinType) {
      return Swal.fire({
        icon: "warning",
        title: "Please select all options",
        timer: 1500,
        showConfirmButton: false,
      });
    }

    await dispatch(
      addToCart({
        userEmail: user?.primaryEmailAddress?.emailAddress,
        product: singleProduct,
        quantity,
        weigth,
        ingredient,
        skinType,
      })
    );
  };

  return (
    <div className={className}>
      <h3 className="text-3xl text-secondary">{product?.title}</h3>
      <div className="font-semibold flex items-end gap-5">
        <span className="text-2xl">${product?.newPrice}</span>
        {product?.oldPrice ? (
          <span className="text-gray-500 line-through">
            ${product?.oldPrice}
          </span>
        ) : (
          ""
        )}
        {product?.oldPrice ? (
          <div className="bg-black text-white p-2 flex items-center justify-center capitalize text-[12px]">
            save
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <p className="mb-2">Weigth:</p>
        <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {product?.weigth?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setWeigth(item)}
                className={`border border-primary px-4 py-2 text-sm text-center cursor-pointer ${
                  weigth === item ? "text-primary" : "text-secondary"
                }`}
              >
                {item} gm
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className="mb-2">Ingredients:</p>
        <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {product?.ingredient?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setIngredient(item)}
                className={`border border-primary px-4 py-2 text-sm text-center cursor-pointer ${
                  ingredient === item ? "text-primary" : "text-secondary"
                }`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className="mb-2">Skin Type:</p>
        <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {product?.skinType?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setskinType(item)}
                className={`border border-primary px-4 py-2 text-sm text-center cursor-pointer ${
                  skinType === item ? "text-primary" : "text-secondary"
                }`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className="mb-2">Quantity:</p>
        <div className="border border-black px-4 py-2 w-[110px] flex items-center justify-between">
          <button
            className="cursor-pointer hover:text-primary transition-colors duration-300"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-sm">{quantity}</span>
          <button
            className="cursor-pointer hover:text-primary transition-colors duration-300"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
        <SecondryBtn
          title={"ADD TO CART"}
          onClick={() => {
            const existingItem = items.find(
              (item) =>
                item.weigth === weigth &&
                item.ingredient === ingredient &&
                item.skinType === skinType
            );
            if (existingItem) {
              Swal.fire({
                icon: "warning",
                title: "Product Already in Cart",
                timer: 1000,
                showConfirmButton: false,
              });
            } else {
              handelAddToCart();
            }
          }}
        />
        <SecondryBtn title={"ADD TO WISHLIST"} />
      </div>
    </div>
  );
}

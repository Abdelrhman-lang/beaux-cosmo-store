"use client";

import { Spinner } from "@/components/ui/spinner";
import { CartButtonContext } from "@/context/CartButtonContext";
import {
  clearCart,
  deleteFromCart,
  getUserCartItems,
} from "@/rtk/slices/cartSlice";
import { useUser } from "@clerk/nextjs";
import { Trash2, X } from "lucide-react";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SecondryBtn from "../sec-btn/SecondryBtn";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Cart() {
  const { items, loading, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { user } = useUser();
  const vat = 2.5;
  useEffect(() => {
    if (user) {
      dispatch(
        getUserCartItems({
          userEmail: user?.primaryEmailAddress?.emailAddress,
        })
      );
    }
  }, [user, dispatch]);
  const { isCartOpen, setIsCartOpen } = useContext(CartButtonContext);
  return (
    <section
      className={`fixed z-50 top-0  w-full md:w-96 h-full bg-white shadow-md overflow-y-auto ${
        isCartOpen ? "right-0" : "-right-[200%]"
      } p-10 transition-all duration-300`}
    >
      <button
        className="absolute top-5 right-5 cursor-pointer hover:text-primary transition-colors duration-300"
        onClick={() => setIsCartOpen(false)}
      >
        <X className="w-10 h-10" />
      </button>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <Spinner className={"w-10 h-10"} />
        </div>
      ) : items.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-secondary text-3xl text-center capitalize">
              your cart is empty
            </h3>
            <div className="flex items-center justify-center">
              <SecondryBtn title={"Continue Shopping"} />
            </div>
          </div>
        </div>
      ) : (
        <main>
          <h2 className="text-2xl font-bold text-secondary capitalize mb-5">
            your cart
          </h2>
          <div className="flex items-center justify-between text-sm font-semibold pb-5 border-b border-gray-500">
            <p className="uppercase">product</p>
            <p className="uppercase">total</p>
          </div>
          <ul className="pt-5 ">
            {items.map((item) => {
              return (
                <li
                  key={item?.id}
                  className="flex items-center justify-between flex-col md:flex-row gap-4 md:gap-0 mb-14"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[100px] h-[100px]">
                      <img src={item?.image} alt="product-img" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold">{item?.title}</h3>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-500">{item?.quantity}X</span>
                        <span className="text-secondary">${item?.price}</span>
                      </div>
                      <p className="text-sm text-secondary">
                        Weight:{" "}
                        <span className="text-primary">{item?.weigth} gm</span>
                      </p>
                      <p className="text-sm text-secondary">
                        Ingredient:{" "}
                        <span className="text-primary">{item?.ingredient}</span>
                      </p>
                      <p className="text-sm text-secondary">
                        Skin Type:{" "}
                        <span className="text-primary">{item?.skinType}</span>
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      dispatch(
                        deleteFromCart({
                          cartItemId: item?.id,
                          userEmail: user?.primaryEmailAddress?.emailAddress,
                        })
                      )
                    }
                    className="cursor-pointer hover:text-primary transition-colors duration-300"
                  >
                    <Trash2 />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-end border-b border-black pb-5">
            <button
              className="text-gray-400 capitalize text-sm cursor-pointer"
              onClick={() =>
                dispatch(
                  clearCart({
                    userEmail: user?.primaryEmailAddress?.emailAddress,
                  })
                )
              }
            >
              clear cart
            </button>
          </div>
          <div className="flex flex-col gap-2 pt-5">
            <div className="flex items-center justify-between">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Vat:</p>
              <p>${vat}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold">Total:</p>
              <p>${vat + totalPrice}</p>
            </div>
          </div>
          <div className="mt-5">
            <Link
              href={"/cart"}
              className={`${buttonVariants({
                variant: "secondary",
              })} w-full`}
            >
              VIEW CART
            </Link>
          </div>
        </main>
      )}
    </section>
  );
}

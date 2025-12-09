"use client";
import { Spinner } from "@/components/ui/spinner";
import { deleteFromCart } from "@/rtk/slices/cartSlice";
import { useUser } from "@clerk/nextjs";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import BreadCramp from "../(components)/bread-cramp/BreadCramp";
import SecondryBtn from "../(components)/sec-btn/SecondryBtn";
export default function page() {
  const { items, loading, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { user } = useUser();
  const vat = 2.5;
  return (
    <section className="py-20">
      <BreadCramp />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mt-8">
            {loading ? (
              <div className="flex items-center justify-center">
                <Spinner className={"w-10 h-10"} />
              </div>
            ) : items.length === 0 ? (
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center gap-5">
                  <p className="text-4xl text-center">Your Cart is Empty</p>
                  <SecondryBtn title={"continue shopping"} />
                </div>
              </div>
            ) : (
              <>
                <header className="text-center mb-10">
                  <h1 className="mb-3 text-xl font-bold text-gray-900 sm:text-3xl">
                    Your Cart
                  </h1>
                  <div>
                    <Link href={"/"} className="text-primary">
                      Continue Shopinng
                    </Link>
                  </div>
                </header>
                <ul className="space-y-4">
                  {items.map((item) => {
                    return (
                      <li
                        className="flex items-center justify-between pb-10 mb-10"
                        key={item.id}
                      >
                        <div className="flex items-center gap-4">
                          <div className="size-30">
                            <img src={item.image} alt={item.title} />
                          </div>

                          <div>
                            <h3 className="text-xl text-secondary">
                              {item.title}
                            </h3>
                            <div className="text-[14px]">
                              <span className="text-gray-600">
                                {item.quantity}X
                              </span>
                              <span>${item.price}</span>
                            </div>
                            <dl className="mt-0.5 space-y-px text-[14px] text-gray-600">
                              <div>
                                <dt className="inline me-2">Weight:</dt>
                                <dd className="inline text-primary">
                                  {item.weigth} gm
                                </dd>
                              </div>

                              <div>
                                <dt className="inline me-2">Ingredient:</dt>
                                <dd className="inline text-primary">
                                  {item.ingredient}
                                </dd>
                              </div>
                              <div>
                                <dt className="inline me-2">Skin Type:</dt>
                                <dd className="inline text-primary">
                                  {item.skinType}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div
                          className="cursor-pointer hover:text-primary duration-300"
                          onClick={() =>
                            dispatch(
                              deleteFromCart({
                                userEmail:
                                  user?.primaryEmailAddress?.emailAddress,
                                cartItemId: item.id,
                              })
                            )
                          }
                        >
                          <Trash2 />
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-16 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>${totalPrice}</dd>
                      </div>

                      <div className="flex justify-between">
                        <dt>VAT</dt>
                        <dd>${vat}</dd>
                      </div>

                      <div className="flex justify-between  font-medium">
                        <dt>Total</dt>
                        <dd>${totalPrice + vat}</dd>
                      </div>
                    </dl>

                    <div className="flex justify-end">
                      <SecondryBtn title={"Place Order"} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowBigRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import SecondryBtn from "../sec-btn/SecondryBtn";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/rtk/slices/cartSlice";
import { useUser } from "@clerk/nextjs";
import Swal from "sweetalert2";
import ProductDetails from "../product-details/ProductDetails";

export function ProductDialog({ title, product }) {
  const [weigth, setWeigth] = useState(null);
  const [ingredient, setIngredient] = useState(null);
  const [skinType, setskinType] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { user } = useUser();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
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
        product,
        quantity,
        weigth,
        ingredient,
        skinType,
      })
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{title}</DialogTrigger>
      <DialogContent className="sm:max-w-[300px] md:max-w-[650px] lg:max-w-[750px] xl:max-w-[1200px] overflow-y-auto custom-height">
        <DialogHeader>
          <DialogTitle className={"text-sm text-center capitalize"}>
            product #{product?.id} details
          </DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5 lg:gap-x-4">
          <div className="max-w-[470px]">
            <img
              src={product?.image}
              alt="product-image"
              className="object-cover"
            />
          </div>
          <div className="space-y-5">
            <ProductDetails product={product} className={"space-y-5 xl:pr-7"} />
            <div>
              <Link
                href={`/product-details/${product.id}`}
                className="text-sm flex gap-3 items-center text-primary hover:underline"
              >
                View Full Details <ArrowBigRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

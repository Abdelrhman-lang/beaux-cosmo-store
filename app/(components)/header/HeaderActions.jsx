"use client";
import { CartButtonContext } from "@/context/CartButtonContext";
import { UserButton } from "@clerk/nextjs";
import { Search, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { useSelector } from "react-redux";

export default function HeaderActions() {
  const { setIsCartOpen } = useContext(CartButtonContext);
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="flex items-center gap-3 md:gap-5 lg:gap-8">
      <UserButton />
      <div
        onClick={() => setIsCartOpen(true)}
        className="hover:text-primary transition-colors duration-300 cursor-pointer relative"
      >
        <ShoppingCart className="w-6 h-6" />
        <span className="w-5 h-5  rounded-full flex items-center justify-center bg-primary text-[12px] text-secondary absolute -top-3 -right-3 ">
          {items?.length}
        </span>
      </div>
      <div className="hover:text-primary transition-colors duration-300 cursor-pointer">
        <Search className="w-6 h-6" />
      </div>
    </div>
  );
}

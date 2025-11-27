"use client";
import { UserButton } from "@clerk/nextjs";
import { Search, ShoppingCart } from "lucide-react";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-3 md:gap-5 lg:gap-8">
      <UserButton />
      <div className="hover:text-primary transition-colors duration-300 cursor-pointer">
        <ShoppingCart className="w-6 h-6" />
      </div>
      <div className="hover:text-primary transition-colors duration-300 cursor-pointer">
        <Search className="w-6 h-6" />
      </div>
    </div>
  );
}

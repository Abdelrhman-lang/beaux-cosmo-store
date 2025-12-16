"use client";

import { CartButtonContext } from "@/context/CartButtonContext";
import { MenuButtonContext } from "@/context/MenuButtonContext";

import { useContext } from "react";

export default function Overlay() {
  const { isCartOpen, setIsCartOpen } = useContext(CartButtonContext);
  return (
    <div
      onClick={() => {
        setIsCartOpen(false);
        setIsMenuOpen(!isMenuOpen);
      }}
      className={`z-40 w-full h-full top-0 left-0 bottom-0 bg-black/50 ${
        isCartOpen ? "fixed" : "hidden"
      }`}
    ></div>
  );
}

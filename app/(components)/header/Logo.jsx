"use client";
import { MenuButtonContext } from "@/context/MenuButtonContext";
import { Menu, X } from "lucide-react";
import React, { useContext } from "react";

export default function Logo() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuButtonContext);
  return (
    <div className="flex items-center">
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="text-primary" /> : <Menu />}
      </button>
      <div>
        <img src="/logo_1.webp" alt="logo" />
      </div>
    </div>
  );
}

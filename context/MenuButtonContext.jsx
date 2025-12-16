"use client";

import { createContext, useState } from "react";

export const MenuButtonContext = createContext();

export default function MenuButtonProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MenuButtonContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuButtonContext.Provider>
  );
}

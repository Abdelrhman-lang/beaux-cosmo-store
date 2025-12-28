"use client";

import { MenuButtonContext } from "@/context/MenuButtonContext";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useContext } from "react";

export default function Menu() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuButtonContext);
  const links = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Shop", href: "/shop" },
    { id: 3, title: "About", href: "/about" },
    { id: 4, title: "Contact", href: "/contact" },
  ];
  const { user } = useUser();
  return (
    <div
      className={`fixed top-[80px] menu-header w-[280px] bg-primary-foreground ${
        isMenuOpen ? "left-0" : "-left-full"
      } z-30 transition-all duration-300 pt-8`}
    >
      <ul className="flex flex-col gap-5">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className="text-lg px-8 py-1 text-[#444]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className="absolute bottom-10 left-0 px-8 flex items-center justify-center gap-2">
        <span>{user ? <UserButton /> : ""}</span>
        <span>{user?.firstName}</span>
      </div>
    </div>
  );
}

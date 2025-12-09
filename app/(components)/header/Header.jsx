"use client";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderActions from "./HeaderActions";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (scrollY > 50) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full h-auto flex items-center justify-between py-2 px-6 md:px-10 lg:px-20 ${
        bg
          ? "bg-primary-foreground transition-all duration-300"
          : "bg-transparent"
      } ${
        pathname.includes("sign-in") || pathname.includes("sign-up")
          ? "hidden"
          : "flex"
      }`}
    >
      <Logo />
      <Navbar />
      <HeaderActions />
    </header>
  );
}

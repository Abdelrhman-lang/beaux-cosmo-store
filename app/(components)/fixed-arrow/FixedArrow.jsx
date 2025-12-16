"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function FixedArrow() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      if (scrollY > 200) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed z-15 right-5 bottom-5 md:right-10 md:bottom-10 lg:right-20 lg:bottom-20 w-[50px] h-[50px] bg-secondary text-white flex items-center justify-center rounded-full ${
        isShow ? "flex" : "hidden"
      } transition-all duration-300 cursor-pointer hover:bg-primary text-secondary `}
    >
      <ArrowUp />
    </div>
  );
}

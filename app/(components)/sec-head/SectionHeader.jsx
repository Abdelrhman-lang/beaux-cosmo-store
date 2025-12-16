"use client";

import { usePathname } from "next/navigation";

export default function SectionHeader({ subTitle, title }) {
  const pathname = usePathname();
  return (
    <div className="relative mb-20 z-10">
      <p
        className={`${
          pathname.includes("/about") ? "text-white" : "text-primary-foreground"
        } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center  text-6xl md:text-8xl heading capitalize -z-10 tracking-widest`}
      >
        {subTitle}
      </p>
      <p className="text text-secondary text-2xl uppercase text-center">
        {title}
      </p>
    </div>
  );
}

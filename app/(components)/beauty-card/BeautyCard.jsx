import { cn } from "@/lib/utils";
import React from "react";

export default function BeautyCard({
  title,
  text,
  icon: Icon,
  isReversed,
  isEnd,
}) {
  return (
    <div
      className={`${cn("flex gap-5", isReversed ? "flex-row-reverse" : "")}`}
    >
      <div className={`${cn("flex flex-col gap-5", isEnd ? "text-end" : "")}`}>
        <h3 className="text-secondary text-xl uppercase">{title}</h3>
        <p className="leading-relaxed">{text}</p>
      </div>
      <div className="w-[70px] h-[70px] bg-secondary text-white flex items-center justify-center p-2 shrink-0">
        <Icon size={40} />
      </div>
    </div>
  );
}

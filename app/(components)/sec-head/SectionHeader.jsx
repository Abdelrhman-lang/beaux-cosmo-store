import React from "react";

export default function SectionHeader({ subTitle, title }) {
  return (
    <div className="relative mb-20">
      <p className="text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center  text-6xl md:text-8xl heading capitalize -z-10 tracking-widest">
        {subTitle}
      </p>
      <p className="text text-secondary text-2xl uppercase text-center">
        {title}
      </p>
    </div>
  );
}

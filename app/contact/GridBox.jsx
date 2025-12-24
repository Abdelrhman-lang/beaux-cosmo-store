import React from "react";

export default function GridBox({ icon: Icon, title, dataOne, dataTwo, type }) {
  const getHref = (value) => {
    if (type === "tel") return `tel:${value.replace(/-/g, "")}`;
    if (type === "mailto") return `mailto: ${value}`;
    return "#";
  };
  return (
    <div className="border p-5 border-secondary hover:border-primary transition-colors duration-200 cursor-pointer group">
      <div className="flex gap-4 items-center">
        <div className="flex items-center justify-center shrink-0 w-[50px] h-[50px] bg-secondary text-white group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
          <Icon size={30} />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-secondary font-semibold">{title}</h3>
          <div className="flex flex-col gap-3">
            <a
              href={getHref(dataOne)}
              className="text-sm md:text-[16px] hover:text-primary transition-colors duration-300"
            >
              {dataOne}
            </a>
            <a
              href={getHref(dataTwo)}
              className="hover:text-primary transition-colors duration-300"
            >
              {dataTwo}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

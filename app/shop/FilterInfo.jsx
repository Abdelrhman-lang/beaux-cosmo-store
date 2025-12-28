"use client";
import { AlignRightIcon, LayoutIcon } from "@phosphor-icons/react";
import React, { useState } from "react";

const icons = [
  { id: 1, icon: LayoutIcon, value: "layout", gridValue: 4 },
  { id: 2, icon: AlignRightIcon, value: "align", gridValue: 3 },
];

export default function FilterInfo({
  productsNumber,
  totalProducts,
  setGridCols,
}) {
  const [activeIcon, setActiveIcon] = useState("layout");
  return (
    <div className="p-6 mb-5 bg-primary-foreground border">
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center justify-between">
        <div className="bg-white border flex items-center gap-3 p-3">
          {icons.map((icon) => {
            return (
              <icon.icon
                key={icon.id}
                size={30}
                className={`cursor-pointer ${
                  activeIcon === icon.value ? "text-primary" : "text-secondary"
                }`}
                onClick={() => {
                  setActiveIcon(icon.value);
                  setGridCols(icon.gridValue);
                }}
              />
            );
          })}
        </div>
        <div>
          <p className="text-secondary font-semibold text-xl">
            {productsNumber} Products of {totalProducts}
          </p>
        </div>
      </div>
    </div>
  );
}

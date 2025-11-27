import React from "react";
import SectionHeader from "../sec-head/SectionHeader";
import MainBtn from "../main-btn/MainBtn";

export default function SpecialCollection() {
  return (
    <section className="px-12 pt-24 pb-16">
      <SectionHeader subTitle={"beauty forever"} title={"special collection"} />
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-primary opacity-0 group-hover:opacity-[0.7] transition-all duration-500"></div>
            <img src="/category-1.webp" alt="category-img" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="flex flex-col gap-5">
                <p className="uppercase text-secondary text-center text-[20px]">
                  new in
                </p>
                <MainBtn title={"view more"} />
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-primary opacity-0 group-hover:opacity-[0.7] transition-all duration-500"></div>
            <img src="/category-2.webp" alt="category-img" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="flex flex-col gap-5">
                <p className="uppercase text-secondary text-center text-[20px]">
                  Cosmetic
                </p>
                <MainBtn title={"view more"} />
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-primary opacity-0 group-hover:opacity-[0.7] transition-all duration-500"></div>
            <img src="/category-3.webp" alt="category-img" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="flex flex-col gap-5">
                <p className="uppercase text-secondary text-center text-[20px]">
                  Skin Care
                </p>
                <MainBtn title={"view more"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

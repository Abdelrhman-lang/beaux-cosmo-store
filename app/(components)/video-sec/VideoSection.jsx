import React from "react";
import MainBtn from "../main-btn/MainBtn";

export default function VideoSection() {
  return (
    <section className="min-h-[400px] relative mt-10">
      <div className="absolute top-0 right-0 bottom-0 bg-primary-foreground w-full h-full opacity-[0.7]"></div>
      <video loop muted autoPlay playsInline>
        <source
          src="https://cdn.shopify.com/videos/c/o/v/3b1368ef525243daadd6443088c8880e.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent text-secondary w-full flex flex-col items-center  gap-5 text-center px-3 md:px-0">
        <h3 className="uppercase text-2xl">
          Clean organic and natural cosmetic products
        </h3>
        <p className="max-w-[850px] leading-relaxed">
          Deal with hyperpigmentation, Beaux skin lightening products are
          formulated to even out skin tone and restore the skin’s natural color
          get even, clear and radiant
        </p>
        <div className="flex items-center justify-center">
          <MainBtn title={"view products"} />
        </div>
      </div>
    </section>
  );
}

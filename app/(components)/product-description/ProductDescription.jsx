"use client";
import React, { useState } from "react";
import SecondryBtn from "../sec-btn/SecondryBtn";

export default function ProductDescription({ product }) {
  const [activeBtn, setActiveBtn] = useState("des");
  return (
    <div className="mt-20">
      <div className="flex items-center gap-3">
        <SecondryBtn
          title={"Description"}
          className={`${
            activeBtn === "des" ? "bg-primary text-secondary" : ""
          }`}
          onClick={() => setActiveBtn("des")}
        />
        <SecondryBtn
          title={"Review"}
          className={`${
            activeBtn === "rev" ? "bg-primary text-secondary" : ""
          }`}
          onClick={() => setActiveBtn("rev")}
        />
      </div>
      <div className="p-4 border border-secondary mt-3 space-y-5">
        <p>
          Cosmetics are more effective in protecting the skin. Thus, they
          provide several types of moisturizing creams for both men and women.
          It will provide a more natural appearance for the skin. Smoothing
          cream is suitable for all skin types, and body lotion may be used to
          protect the skin on the hands and legs.
        </p>
        <h3 className="font-bold">Benefits of Creams/Lotion:</h3>
        <ol type="1" className="pl-7 list-decimal space-y-2">
          <li>Nutrition for skin</li>
          <li>Enhances self-confidence</li>
          <li>Creates a professional look</li>
          <li>Maintain skin health</li>
          <li>Provides skin protection</li>
        </ol>
        <h4 className="font-bold">Product Description:</h4>
        <p className="leading-relaxed">{product?.description}</p>
        <h4 className="font-bold">How To Use:</h4>
        <ul className="list-disc space-y-4 pl-4">
          <li>
            Apply a coin-sized quantity of “Beaux Foam” on your fingertip. For a
            few minutes, gently wash your face and neck using circular strokes.
            Wash it away with cold water.
          </li>
          <li>
            Apply 2 or 3 drops of Serum on your fingertips. Apply the Serum on
            the skin in circular strokes. Use a large amount of “ Beaux creme”
            during the day and “Night Creme” at night.
          </li>
          <li>
            Gently massage the creme into your skin with your fingers. Begin
            with circular strokes on your cheeks, then move on to your neck,
            forehead, and T-zone.
          </li>
        </ul>
      </div>
    </div>
  );
}

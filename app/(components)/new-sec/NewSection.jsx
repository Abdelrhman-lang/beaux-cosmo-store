"use client";
import SectionHeader from "../sec-head/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../product-card/ProductCard";

export default function NewSection() {
  const cards = [
    {
      id: 1,
      img: "/new-1.webp",
      title: "Luke Moisturizing (Copy)",
      newPrice: "6.07",
      oldPrice: "7.50",
    },
    {
      id: 2,
      img: "/new-2.webp",
      title: "Luke Moisturizing",
      newPrice: "6.07",
      oldPrice: "7.50",
    },
    {
      id: 3,
      img: "/new-3.webp",
      title: "Laura Face Wash Lotion",
      newPrice: "6.43",
      oldPrice: "",
    },
    {
      id: 4,
      img: "/new-4.webp",
      title: "Nyka Face Creams",
      newPrice: "3.88",
      oldPrice: "",
    },
    {
      id: 5,
      img: "/new-5.webp",
      title: "Fabell Body Lotion",
      newPrice: "7.91",
      oldPrice: "",
    },
    {
      id: 6,
      img: "/new-6.webp",
      title: "Masa Lotion",
      newPrice: "6.42",
      oldPrice: "50",
    },
    {
      id: 7,
      img: "/new-7.webp",
      title: "Maven Dark Circle",
      newPrice: "4.5",
      oldPrice: "",
    },
    {
      id: 8,
      img: "/new-8.webp",
      title: "Leila Face Creams",
      newPrice: "2.43",
      oldPrice: "",
    },
    {
      id: 9,
      img: "/new-9.webp",
      title: "Prime Moisturizer Lotion",
      newPrice: "5.16",
      oldPrice: "",
    },
    {
      id: 10,
      img: "/new-10.webp",
      title: "Frag Dark Spot Cream",
      newPrice: "3.15",
      oldPrice: "4.10",
    },
    {
      id: 11,
      img: "/new-11.webp",
      title: "Elite Face Wash Lotion",
      newPrice: "3.59",
      oldPrice: "",
    },
    {
      id: 12,
      img: "/new-12.webp",
      title: "Royal Beauty Lotion",
      newPrice: "9.37",
      oldPrice: "",
    },
  ];
  return (
    <section className="pt-28 pb-16">
      <SectionHeader
        subTitle={"choose your type"}
        title={"What's New For You"}
      />
      <Swiper
        className="swiper"
        modules={[Navigation]}
        navigation={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {cards.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <ProductCard card={card} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

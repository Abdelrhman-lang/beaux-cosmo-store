"use client";
import SectionHeader from "../sec-head/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../product-card/ProductCard";
export default function BlockBusterCollection() {
  const cards = [
    {
      id: 1,
      img: "/block-1.webp",
      title: "New Age Miracle",
      newPrice: "6.07",
      oldPrice: "7.50",
    },
    {
      id: 2,
      img: "/block-2.webp",
      title: "Leila Face Creams",
      newPrice: "6.07",
      oldPrice: "7.50",
    },
    {
      id: 3,
      img: "/block-3.webp",
      title: "Masa Lotion",
      newPrice: "6.43",
      oldPrice: "",
    },
    {
      id: 4,
      img: "/block-4.webp",
      title: "Maven Dark Circle",
      newPrice: "3.88",
      oldPrice: "",
    },
    {
      id: 5,
      img: "/block-5.webp",
      title: "Barbi Moisturizer",
      newPrice: "7.91",
      oldPrice: "",
    },
    {
      id: 6,
      img: "/block-6.webp",
      title: "Ox Nourishing Cream",
      newPrice: "6.42",
      oldPrice: "50",
    },
    {
      id: 7,
      img: "/block-7.webp",
      title: "Prime Beauty Lotion",
      newPrice: "4.5",
      oldPrice: "",
    },
    {
      id: 8,
      img: "/block-8.webp",
      title: "Royal Beauty Lotion",
      newPrice: "2.43",
      oldPrice: "",
    },
  ];
  return (
    <section className="pt-16 pb-8">
      <SectionHeader
        subTitle={"Divine beauty"}
        title={"Blockbuster collections"}
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

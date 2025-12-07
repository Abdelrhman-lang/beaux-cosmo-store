"use client";
import SectionHeader from "../sec-head/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../product-card/ProductCard";

export default function BlockClient({ products }) {
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
        {products.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

"use client";
import SectionHeader from "../sec-head/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
export default function GallerySection() {
  const imgs = [
    { id: 1, src: "/insta-1.jpg" },
    { id: 2, src: "/insta-2.webp" },
    { id: 3, src: "/insta-3.webp" },
    { id: 4, src: "/insta-4.webp" },
    { id: 5, src: "/insta-5.jpg" },
    { id: 6, src: "/insta-6.webp" },
    { id: 7, src: "/insta-7.webp" },
    { id: 8, src: "/insta-8.webp" },
    { id: 9, src: "/insta-9.webp" },
    { id: 10, src: "/insta-10.webp" },
  ];
  return (
    <section className="pt-20">
      <SectionHeader subTitle={"our gallery"} title={"choose your beuty"} />
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 hidden">
        {imgs.map((img) => {
          return (
            <div key={img.id} className="relative gallery-overlay">
              <img src={img.src} alt="insta-img" />
            </div>
          );
        })}
      </div>
      <div className="md:hidden">
        <Swiper
          className="swiper"
          modules={[Navigation]}
          navigation={true}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {imgs.map((img) => {
            return (
              <SwiperSlide key={img.id}>
                <div>
                  <img src={img.src} alt="gallery-img" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

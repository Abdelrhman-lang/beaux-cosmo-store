"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SecondryBtn from "../sec-btn/SecondryBtn";
export default function Hero() {
  return (
    <div className="relative h-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper"
        loop={true}
      >
        <SwiperSlide>
          <div className="relative  min-h-screen flex items-center justify-center lg:justify-start px-6 lg:px-20 overflow-hidden">
            {/* الخلفية الكبيرة (Desktop) */}
            <motion.div
              style={{ backgroundImage: "url(/hero_3.webp)" }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="absolute inset-0 hidden xl:block bg-cover bg-center bg-no-repeat"
            ></motion.div>

            {/* الخلفية الصغيرة (Mobile / Tablet) */}
            <div className="absolute inset-0 xl:hidden bg-[url('/hero_3.webp')] bg-cover bg-right opacity-[0.2] bg-no-repeat"></div>

            {/* المحتوى */}
            <div className="relative z-10">
              <div className="flex flex-col gap-3 max-w-[720px]">
                <h2 className="heading text-[30px] lg:text-[80px] text-center lg:text-left text-secondary capitalize">
                  gentel for winter
                </h2>

                <p className="text text-[30px] lg:text-[42px] text-center lg:text-left uppercase font-light">
                  Skin Lightening
                </p>

                <p className="text text-[16px] lg:text-lg text-center lg:text-left text-secondary leading-relaxed font-medium">
                  Deal with hyperpigmentation, Beaux skin lightening products
                  are formulated to even out skin tone and restore the skin’s
                  natural color get even, clear and radiant skin.
                </p>
                <div className="mt-5 text-center lg:text-start">
                  <SecondryBtn title={"View More"} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative min-h-screen flex items-center justify-center xl:justify-end px-6 lg:px-20 overflow-hidden">
            {/* الخلفية الكبيرة (Desktop) */}
            <motion.div
              style={{ backgroundImage: "url(/hero_2.webp)" }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="absolute inset-0  hidden xl:block bg-cover bg-center bg-no-repeat"
            ></motion.div>

            {/* الخلفية الصغيرة (Mobile / Tablet) */}
            <div className="absolute inset-0 xl:hidden bg-[url('/hero_4.webp')] bg-cover bg-left opacity-[0.2] bg-no-repeat"></div>

            {/* المحتوى */}
            <div className="relative min-h-screen flex items-center justify-end  ">
              <div className="relative z-10 xl:text-end">
                <div className="flex flex-col gap-3 max-w-[720px]">
                  <h2 className="heading text-[30px] lg:text-[80px] text-center lg:text-right text-secondary capitalize">
                    Look Gorgeous
                  </h2>

                  <p className="text text-[30px] lg:text-[42px] text-center lg:text-right uppercase font-light">
                    Natural Glow
                  </p>

                  <p className="text text-[16px] lg:text-lg text-center lg:text-right text-secondary leading-relaxed font-medium">
                    Beaux products protect, moisturize, and lubricate your skin.
                    It smartly nourish your skin with lotions, day creams, night
                    creams, tinted moisturizers, and more.
                  </p>
                  <div className="mt-5">
                    <SecondryBtn title={"View More"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

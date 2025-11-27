"use client";
import { motion } from "framer-motion";
export default function Brands() {
  const imgs = [
    { id: 1, src: "/brand-1.webp" },
    { id: 2, src: "/brand-2.avif" },
    { id: 3, src: "/brand-3.webp" },
    { id: 4, src: "/brnd-4.webp" },
    { id: 5, src: "/brand-5.avif" },
    { id: 6, src: "/brand-6.avif" },
  ];
  return (
    <section className="py-10 lg:py-16 bg-primary-foreground">
      <div className="overflow-hidden w-full">
        <motion.ul
          className="flex items-center gap-20"
          animate={{ x: ["-100%", "0%", "100%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {imgs.map((img) => (
            <li key={img.id} className="shrink-0">
              <img
                src={img.src}
                alt="brand-img"
                className="opacity-50 hover:opacity-100 transition-all duration-500"
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

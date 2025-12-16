"use client";
import {
  EyedropperIcon,
  FlaskIcon,
  LeafIcon,
  SnowflakeIcon,
} from "@phosphor-icons/react";
export default function AboutHero() {
  const heroBlocks = [
    {
      id: 1,
      title: "No Parabens",
      icon: <EyedropperIcon size={40} weight="fill" />,
    },
    { id: 2, title: "Anti-Oxidants", icon: <SnowflakeIcon size={40} /> },
    {
      id: 3,
      title: "carefully formulated",
      icon: <FlaskIcon size={40} weight="fill" />,
    },
    {
      id: 4,
      title: "Bluetooth Ear Shot",
      icon: <LeafIcon size={40} />,
    },
  ];
  return (
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-3 lg:grid lg:grid-cols-2 lg:gap-3 mt-20 px-5">
      <div className="space-y-8">
        <h1 className="text-xl text-secondary">
          BREAK UNIVERSAL BEAUTY MYTH WITH BEAUX COSMETICS
        </h1>
        <p className="text-gray-500 text-md leading-relaxed">
          Enim nulla aliquet porttitor lacus. Enim ut tellus elementum sagittis.
          Amet consectetur adipiscing elit duis tristique sollicitudin nibh.
          Elementum pulvinar etiam non quam lacus suspendisse. Sit amet purus
          gravida quis blandit turpis. Risus quis varius quam quisque id diam
          vel.
        </p>
        <ul className="flex flex-col gap-8">
          {heroBlocks.map((item) => {
            return (
              <li className="flex items-center gap-4" key={item.id}>
                <div className="w-[60px] h-[60px] bg-primary-foreground flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <p className="text-xl">{item.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="-order-1 md:order-0">
        <img src="/about-1.webp" alt="about-img" loading="lazy" />
      </div>
    </div>
  );
}

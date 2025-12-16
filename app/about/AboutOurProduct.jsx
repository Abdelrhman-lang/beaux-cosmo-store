import React from "react";
import SectionHeader from "../(components)/sec-head/SectionHeader";
export default function AboutOurProduct() {
  const cards = [
    {
      id: 1,
      number: "1,250",
      title: "Cosmetic Creams",
      text: "Semper viverra nam libero justo laoreet sit amet cursus sit. Ut consequat semper viverra nam. Eu turpis egestas. Vulputate ispsum sed.",
      image: "/icon-1.png",
    },
    {
      id: 2,
      number: "1,100",
      title: "Facial Creams",
      text: "Elementum curabitur vitae nunc sed velit. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae sit amet.",
      image: "/icon-2.png",
    },
    {
      id: 3,
      number: "1,750",
      title: "Lipsticks",
      text: "Imperdiet nulla malesuada pellentesque elit. Ac turpis egestas maecenas pharetra convallis posuere morbi sit eouleo.",
      image: "/icon-3.png",
    },
    {
      id: 4,
      number: "1,200",
      title: "Face Colors",
      text: "Sit amet consectetur adipiscing elit duis tristique sollicitudin. Lobortis mattis aliquam faucibus purus in massa tempor nec.",
      image: "/icon-1.png",
    },
  ];
  return (
    <div className="mt-12 bg-primary-foreground py-20">
      <SectionHeader title={"our products"} subTitle={"cosmatics"} />
      <div className="max-w-5xl mx-auto">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-20 px-5">
          {cards.map((card) => {
            return (
              <div
                className="border-4 border-primary pt-14 px-5 pb-5 lg:py-8 lg:pr-8 lg:pl-20 bg-white relative"
                key={card.id}
              >
                <ul className="flex flex-col gap-2">
                  <li className="text-2xl">{card.number}K</li>
                  <li className="text-2xl">{card.title}</li>
                  <li>{card.text}</li>
                </ul>
                <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 lg:top-1/2 lg:left-0 lg:-translate-y-1/2 w-[100px] h-[100px] bg-primary-foreground flex items-center justify-center border-4 border-primary">
                  <img
                    src={card.image}
                    className="w-[50px] h-[50px]"
                    alt="about-icon"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

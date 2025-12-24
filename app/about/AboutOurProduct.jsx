import React from "react";
import SectionHeader from "../(components)/sec-head/SectionHeader";
import AboutCard from "../(components)/about-card/AboutCard";
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
export default function AboutOurProduct() {
  return (
    <div className="mt-12 bg-primary-foreground py-20 relative -z-10">
      <SectionHeader
        title={"our products"}
        subTitle={"cosmatics"}
        hasBg={true}
      />
      <div className="max-w-5xl mx-auto">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-20 px-5">
          {cards.map((card) => {
            return <AboutCard card={card} key={card.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

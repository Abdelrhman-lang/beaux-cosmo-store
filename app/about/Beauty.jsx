"use client";
import BeautyCard from "../(components)/beauty-card/BeautyCard";
import SectionHeader from "../(components)/sec-head/SectionHeader";
import { DropIcon, LeafIcon, ShowerIcon, TagIcon } from "@phosphor-icons/react";

const cards = [
  {
    id: 1,
    title: "Cleansers & Face Wash",
    text: "Zliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl. Sed vestibulum nulla elementum auctor tincidunt.",
    icon: ShowerIcon,
  },
  {
    id: 2,
    title: "Vitamin Rich",
    text: "Jed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl",
    icon: DropIcon,
  },
  {
    id: 3,
    title: "Herbal Products",
    text: "Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl. Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum.",
    icon: LeafIcon,
  },
  {
    id: 4,
    title: "Extremely Worthy",
    text: "Sollicitudin ac hendrerit nec, tempor quis nisl. Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla,",
    icon: TagIcon,
  },
];
export default function Beauty() {
  return (
    <section className="pt-32 pb-20 bg-primary-foreground relative -z-10 px-5 lg:px-0">
      <SectionHeader
        hasBg={true}
        title={"Adorable beauty"}
        subTitle={"Most Luxurious"}
      />
      <div className="custom-container">
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => {
            return (
              <BeautyCard
                key={card.id}
                {...card}
                isReversed={index % 2 != 0}
                isEnd={index % 2 == 0}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

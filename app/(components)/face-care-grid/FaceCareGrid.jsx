import FaceCareGridCard from "./FaceCareGridCard";

const cards = [
  {
    id: 1,
    title: "Organic Skin Care",
    subTitle: "Anti-Aging",
    imgSrc: "/face-care-2.webp",
    desc: "Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl. Sed vestibulum nulla elementum auctor tincidunt.",
  },
  {
    id: 2,
    title: "Home Makeup Kit",
    subTitle: "Beauty Pack",
    desc: "Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl. Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum.",
    imgSrc: "/face-care-3.webp",
  },
];
export default function FaceCareGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <FaceCareGridCard
        imgSrc={"/face-care-1.webp"}
        title={"Ayurvedic Herbal"}
        subTitle={"Beauty Cream"}
        desc={
          "Tortor aliquam nulla facilisi cras fermentum odio eu. Amet consectetur adipiscing elit pellentesque habitant morbi. Nunc sed velit dignissim sodales ut."
        }
      />
      <div className="flex flex-col gap-5">
        {cards.map((card) => {
          return <FaceCareGridCard key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
}

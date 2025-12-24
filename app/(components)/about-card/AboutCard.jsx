import Image from "next/image";

export default function AboutCard({ card }) {
  return (
    <div className="border-4 border-primary pt-14 px-5 pb-5 lg:py-8 lg:pr-8 lg:pl-20 bg-white relative">
      <div className="flex flex-col gap-2">
        <strong className="text-2xl">{card.number}K</strong>
        <h3 className="text-2xl">{card.title}</h3>
        <p>{card.text}</p>
      </div>
      <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 lg:top-1/2 lg:left-0 lg:-translate-y-1/2 w-[100px] h-[100px] bg-primary-foreground flex items-center justify-center border-4 border-primary">
        <Image
          width={50}
          height={50}
          src={card.image}
          alt={card.title}
          loading="lazy"
        />
      </div>
    </div>
  );
}

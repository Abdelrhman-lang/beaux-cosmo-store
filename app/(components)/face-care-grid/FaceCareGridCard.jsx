import Image from "next/image";

export default function FaceCareGridCard({ imgSrc, subTitle, title, desc }) {
  return (
    <div className="relative group">
      <Image
        src={imgSrc}
        alt="face-care-img"
        width={400}
        height={600}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-primary-foreground top-0 left-0 opacity-0 group-hover:opacity-[0.8] transition-opacity duration-300"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="flex flex-col gap-2.5 text-center">
          <span className="text-[#333333bF]">{subTitle}</span>
          <h3 className="text-xl text-secondary">{title}</h3>
          <p className="text-secondary leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

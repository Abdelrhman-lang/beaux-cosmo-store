import MainBtn from "../main-btn/MainBtn";
import { Eye, Heart, ShoppingCart } from "lucide-react";
export default function ProductCard({ card }) {
  return (
    <div className="group">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <ul className="flex items-center gap-4 cursor-pointer">
            <li className="w-[40px] h-[40px] bg-white flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-500">
              <Eye className="w-5 h-5" />
            </li>
            <li className="w-[40px] h-[40px] bg-white flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-500">
              <ShoppingCart className="w-5 h-5" />
            </li>
            <li className="w-[40px] h-[40px] bg-white flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-500">
              <Heart className="w-5 h-5" />
            </li>
          </ul>
        </div>
        <img src={card.img} alt="card-img" />
      </div>
      <div className="pt-8 text-center flex flex-col gap-2">
        <h2 className="uppercase text-secondary">{card.title}</h2>
        <div className="flex items-center justify-center gap-4">
          <span className="text-secondary">${card.newPrice}</span>
          {card.oldPrice ? (
            <span className="text-accent line-through">${card.oldPrice}</span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <MainBtn title={"add to cart"} />
      </div>
    </div>
  );
}

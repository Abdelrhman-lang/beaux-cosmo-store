import {
  ChevronRight,
  Clock3Icon,
  FacebookIcon,
  Instagram,
  LocationEdit,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import CopyRight from "../copyright/CopyRight";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="px-7 lg:px-20 py-14 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8">
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-bold text-xl">Store</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className="block">
                <LocationEdit className="w-5 h-5" />
              </span>
              <span className="block">Baltimore, MD, USA 4508</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>
                <Clock3Icon className="w-5 h-5" />
              </span>
              <span>09.00 am - 06.00 pm</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-bold text-xl">Reach us</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className="block">
                <Phone className="w-5 h-5" />
              </span>
              <span className="block">(0000) 123 - 456789</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>
                <Mail className="w-5 h-5" />
              </span>
              <span>info@example.com</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-bold text-xl">Info</h3>
            <div className="flex items-center gap-1 text-sm">
              <span className="block">
                <ChevronRight className="w-5 h-5" />
              </span>
              <span className="block">Contact</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span>
                <ChevronRight className="w-5 h-5" />
              </span>
              <span>Shipping & Returns</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span>
                <ChevronRight className="w-5 h-5" />
              </span>
              <span>Search</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-bold text-xl">Share with us</h3>
            <ul className="flex items-center gap-5">
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                <Twitter className="w-5 h-5" />
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                <FacebookIcon className="w-5 h-5" />
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                <Youtube className="w-5 h-5" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
}

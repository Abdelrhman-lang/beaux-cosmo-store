"use client";
import GridBox from "./GridBox";
import { PaperPlaneIcon, PhoneCallIcon } from "@phosphor-icons/react";
import { Mail } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Phone",
    dataOne: "011-1828-2107",
    dataTwo: "010-2093-6195",
    icon: PhoneCallIcon,
    type: "tel",
  },
  {
    id: 2,
    title: "Email",
    dataOne: "abdokhaled766@gmail.com",
    dataTwo: "support@gmail.com",
    icon: Mail,
    type: "mailto",
  },
  {
    id: 3,
    title: "Address",
    dataOne: "No: 7, First Elsalam, Eltaqwa Street,",
    dataTwo: "Cairo, Egypt",
    icon: PaperPlaneIcon,
    type: "map",
  },
];

export default function ContactGrid() {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="lg:w-2/3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.60642840287184!2d31.41185966017038!3d30.15991038967396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145810ce3acd6b5d%3A0x35c7398cb8f2158d!2z2KfZhNmF2LHZg9iyINin2YTZgdmG2Ykg2YTYtdmK2KfZhtipINin2YTZhdin2LHYtCDZiNin2YTYr9mK2YbYp9mF2Yg!5e0!3m2!1sen!2seg!4v1766498911128!5m2!1sen!2seg"
          className="w-full border-0"
          height={600}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col gap-8">
        {cards.map((card) => {
          return <GridBox key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
}

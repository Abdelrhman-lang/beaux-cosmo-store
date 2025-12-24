import React from "react";
import BreadCramp from "../(components)/bread-cramp/BreadCramp";
import ContactGrid from "./ContactGrid";
import SectionHeader from "../(components)/sec-head/SectionHeader";
import ContactForm from "./ContactForm";

export default function page() {
  return (
    <section className="py-24 px-5 lg:px-0">
      <BreadCramp />
      <div className="custom-container mt-24 pt-20">
        <SectionHeader title={"Contatc Us"} subTitle={"Get In Touch"} />
        <ContactGrid />
        <ContactForm />
      </div>
    </section>
  );
}

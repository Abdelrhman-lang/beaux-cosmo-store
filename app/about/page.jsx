import BreadCramp from "../(components)/bread-cramp/BreadCramp";

import AboutHero from "./AboutHero";
import AboutOurProduct from "./AboutOurProduct";

export default function page() {
  return (
    <section className="py-20">
      <BreadCramp />

      <div className="flex flex-col items-center justify-center gap-2 mt-20">
        <h3 className="text-primary uppercase font-bold tracking-[10px]">
          beaux love
        </h3>
        <p className="uppercase text-secondary text-xl">
          For Red Carpet Beauty
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <AboutHero />
      </div>
      <AboutOurProduct />
    </section>
  );
}

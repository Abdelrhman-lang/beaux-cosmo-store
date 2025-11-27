import React from "react";
import SecondryBtn from "../sec-btn/SecondryBtn";

export default function NewsletterSection() {
  return (
    <section className="mt-7 px-3 md:px-0 md:mt-0 py-20 flex items-center justify-center bg-primary-foreground">
      <div className="flex flex-col items-center gap-5 text-center">
        <h3 className="text-2xl uppercase text-secondary ">
          Sign-up the beauty fan club today
        </h3>
        <p className="text-secondary">
          Subscribe to our mailing list to be notified about news, collections
          and special offers
        </p>
        <div className="w-full md:px-7 flex flex-col md:flex-row gap-2 items-center">
          <div className="w-3/4 flex-1">
            <input
              type="text"
              className="px-2.5 py-5 bg-white text-sm w-full"
              placeholder="Your Email Adress"
            />
          </div>

          <div>
            <SecondryBtn title={"submit"} />
          </div>
        </div>
      </div>
    </section>
  );
}

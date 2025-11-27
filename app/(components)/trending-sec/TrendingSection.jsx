import MainBtn from "../main-btn/MainBtn";

export default function TrendingSection() {
  return (
    <section className="min-h-[1000px] bg-[url(/trending.webp)] bg-cover bg-right lg:bg-center bg-no-repeat flex items-center justify-center">
      <div className="bg-white flex flex-col gap-5 py-9 px-14 text-center">
        <h2 className="uppercase text-secondary text-2xl  font-medium">
          Bring out the hidden beauty
        </h2>
        <p>Get styled with the high-fashion products and transform yourself.</p>
        <div className=" flex items-center justify-center">
          <MainBtn title={"trending"} />
        </div>
      </div>
    </section>
  );
}

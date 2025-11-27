import BlockBusterCollection from "./(components)/blockbuster-collection-sec/BlockBusterCollection";
import Brands from "./(components)/brands-sec/Brands";
import Deal from "./(components)/deal-section/Deal";
import GallerySection from "./(components)/gallery-sec/GallerySection";
import Hero from "./(components)/hero/Hero";
import NewSection from "./(components)/new-sec/NewSection";
import NewsletterSection from "./(components)/newsletter-sec/NewsletterSection";
import SpecialCollection from "./(components)/special-collection-sec/SpecialCollection";
import TrendingSection from "./(components)/trending-sec/TrendingSection";
import VideoSection from "./(components)/video-sec/VideoSection";

export default function Home() {
  return (
    <section>
      <main>
        <Hero />
        <Deal />
        <SpecialCollection />
        <TrendingSection />
        <NewSection />
        <VideoSection />
        <BlockBusterCollection />
        <Brands />
        <GallerySection />
        <NewsletterSection />
      </main>
    </section>
  );
}

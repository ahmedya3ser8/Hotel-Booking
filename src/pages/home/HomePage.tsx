import { 
  ExclusiveOffers, 
  FeaturedHotels, 
  Hero, 
  NewsLetter, 
  Testimonials 
} from "@/components";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedHotels />
      <ExclusiveOffers />
      <Testimonials />
      <NewsLetter />
    </>
  )
}

export default HomePage;

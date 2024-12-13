import HomeLayout from "../layouts/home";
import Hero from "../components/home/hero";
import Features from "../components/home/features";
import Category from "../components/home/category";
import Testimonials from "../components/home/testimonials";
import Bento_grids from "../components/home/bento_grids";
import CTA from "../components/home/cta";
import Products from "../components/home/products";
import Gallery from "../components/home/gallery";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Category />
      <Bento_grids />
      <CTA />
      <Products />
      <Gallery />
      <Testimonials />
    </>
  );
};

Home.layout = HomeLayout;
export default Home;

import HomeLayout from "../layouts/home";
import Hero from "../components/home/hero";
import Features from "../components/home/features";
import Category from "../components/home/category";
import Testimonials from "../components/home/testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Category />
      <Testimonials />
    </>
  );
};

Home.layout = HomeLayout;
export default Home;

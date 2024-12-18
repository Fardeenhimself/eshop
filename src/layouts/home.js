import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { Poppins } from "next/font/google";
import Cart from "@/components/common/cart";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const HomeLayout = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <div className={`${poppins.className} min-h-screen flex flex-col`}>
      <Header toggleCart={toggleCart} />
      {cartOpen && <Cart toggleCart={toggleCart} />}
      <main className="flex-grow pb-16 lg:pb-0">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;

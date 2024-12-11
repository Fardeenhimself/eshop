import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const HomeLayout = ({ children }) => {
  return (
    <div className={`${poppins.className} min-h-screen flex flex-col`}>
      <Header />
      <main className="flex-grow pb-16 lg:pb-0">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;

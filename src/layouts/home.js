import Header from "../components/common/header";
import Footer from "../components/common/footer";


const HomeLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-16 lg:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;

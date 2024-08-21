import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
const HomeLayout = ({ children }: any) => {
  return (
    <div className="">
      <Header />
      <main className="mx-auto py-0 px-0 flex-grow bg-white">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;

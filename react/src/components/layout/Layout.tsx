import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="">
      <Header />
      <main className="mx-auto py-4 px-36 flex-grow bg-white">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

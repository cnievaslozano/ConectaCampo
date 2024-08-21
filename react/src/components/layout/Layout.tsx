import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="mx-auto py-4 px-36 flex-grow bg-lightGreen3">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

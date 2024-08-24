import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="mx-auto py-4 px-36 flex-grow bg-lightGreen3">
        <div className="mx-auto max-w-[1500px] p-11 bg-gray-50 rounded-lg shadow-lg overflow-hidden">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

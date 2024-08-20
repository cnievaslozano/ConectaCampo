import Footer from '@components/layout/Footer';
import Header2 from '@components/layout/Header2'
const HomeLayout = ({ children }:any) => {
  return (
    <div className="">
      <Header2 />
      <main className="mx-auto py-0 px-0 flex-grow bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
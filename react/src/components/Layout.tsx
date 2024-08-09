import Header from './Header';
import Footer from './Footer';
import Header2 from './Header2'
const Layout = ({ children }:any) => {
  return (
    <div className="">
      <Header2 />
      <main className="mx-auto py-4 px-36 flex-grow bg-lightGreen3">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

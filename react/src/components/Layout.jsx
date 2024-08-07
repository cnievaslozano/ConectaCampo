import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main className="mx-auto py-4 px-36 flex-grow bg-lightGreen3">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

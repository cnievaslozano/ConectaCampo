import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="px-5 sm:mx-auto sm:max-w-2xl sm:px-8 lg:px-0 antialiased md:max-w-6xl grid gap-12 mt-4 overflow-hidden md:overflow-visible">
      <Header />
      <main className="container mx-auto p-4 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

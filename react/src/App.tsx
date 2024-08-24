import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Product from "@pages/Product";
import User from "@pages/Profile";
import ProductoVenta from "@components/products/ProfileProducts";
import ProfileFollowList from "@pages/ProfileFollowList";
import Configuration from "@pages/UserSettings";
import Signin from "@pages/Signin";
import Register from "@pages/Register";
import Search from "@pages/Search";
import AddProduct from "@components/products/AddProduct";
import Feed from "@pages/Feed";
import Profile from "@pages/Profile";
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/*" element={<Product />} />

          <Route path="signIn" element={<Signin />} />
          <Route path="register" element={<Register />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="search/*" element={<Search />} />
          <Route path="feed" element={<Feed />} />
          <Route path="addProduct/*" element={<AddProduct />} />
          <Route path={"profile/:usernameUrl/followList"} element={<ProfileFollowList type="following"/>} />
          <Route path={"profile/"+"/followerList"} element={<ProfileFollowList type="followers" />} />
          <Route path="profile/configuration" element={<Configuration />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error("No se pudo encontrar el elemento raíz en el DOM");
}

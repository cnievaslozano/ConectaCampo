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
import Product from "@pages/Product";
import NotFound from "@pages/NotFound";
import ProfileFollowList from "@components/user/ProfileFollowList";
import Configuration from "@pages/UserSettings";
import Signin from "@pages/Signin";
import Register from "@pages/Register";
import Search from "@pages/Search";
import AddProduct from "@components/products/AddProduct";
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
          <Route path="product/:productId" element={<Product />} />
          <Route path="signIn" element={<Signin />} />
          <Route path="register" element={<Register />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="search/*" element={<Search />} />
          <Route path="addProduct/*" element={<AddProduct />} />
          <Route
            path={"profile/:usernameUrl/followList"}
            element={<ProfileFollowList type="following" />}
          />
          <Route
            path={"profile/:usernameUrl/followerList"}
            element={<ProfileFollowList type="followers" />}
          />
          <Route path="profile/configuration" element={<Configuration />} />

          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error("No se pudo encontrar el elemento raíz en el DOM");
}

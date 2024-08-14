import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import  Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import User from "./pages/Profile";
import ProductoVenta from './components/ProfileProducts';
import ProfileFollowList from './pages/ProfileFollowList';
import Configuration from './pages/UserSettings';
import Signin from './components/Signin';
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
      <ScrollToTop /> 
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signIn" element={<Signin />} />
          <Route path="profile" element={<ProductoVenta />} />
          <Route path="profile/followList" element={<ProfileFollowList />} />
          <Route path="profile/followerList" element={<ProfileFollowList />} />
          <Route path="profile/configuration" element={<Configuration />} />


      </Routes>
    </Router>
  </React.StrictMode>,
)


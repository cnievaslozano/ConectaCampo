import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import User from "./pages/Profile";
import ProductoVenta from './components/ProfileProducts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<ProductoVenta />} />

      </Routes>
    </Router>
  </React.StrictMode>,
)


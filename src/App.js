import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import Catering from './pages/Catering';
import Franchising from './pages/Franchising';
import Careers from './pages/Careers';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/menu" element={<Menu />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/franchising" element={<Franchising />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 
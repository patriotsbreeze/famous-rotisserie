import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import Catering from './pages/Catering';
import Franchising from './pages/Franchising';
import Careers from './pages/Careers';
import Offers from './pages/Offers';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Famous Rotisserie & Grill - Fresh Mexican Style Chicken</title>
        <meta name="description" content="Famous Rotisserie & Grill - Fresh Mexican 'rostisado' style chicken in New York and Maryland. Delivery and takeout with fresh, locally-sourced ingredients since 2010." />
        <link rel="canonical" href="https://famousrotisserie.com" />
      </Helmet>
      
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/franchising" element={<Franchising />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 
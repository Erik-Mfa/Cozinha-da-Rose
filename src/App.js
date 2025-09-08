import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-900 font-poppins">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Footer />
    </div>
  );
}

export default App;

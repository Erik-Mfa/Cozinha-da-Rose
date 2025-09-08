import React from 'react';

const Hero = () => {
  return (
    <section className="hero-bg h-screen flex items-center justify-center text-center">
      <div className="bg-white/95 p-10 rounded-xl shadow-2xl">
        <h1 className="text-7xl font-bold font-dancing text-pink-500 mb-2">
          Cozinha da Rose
        </h1>
        <p className="text-2xl font-bold text-orange-500">
          BRAZILIAN RESTAURANT
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Authentic Brazilian flavors with a tropical touch.
        </p>
        <p className="text-lg text-gray-700">
          856.562.0858
        </p>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <section className="hero-bg h-screen flex items-center justify-center text-center relative">
      <div className="bg-white/95 p-12 rounded-xl shadow-2xl max-w-4xl mx-4 mt-10">
        <h1 className="text-7xl font-bold font-dancing text-pink-500 mb-2">
          Cozinha da Rose
        </h1>
        <p className="text-2xl font-bold text-orange-500 mb-6">
          BRAZILIAN RESTAURANT
        </p>
        
        <div className="mb-8">
          <p className="text-xl text-gray-700 mb-2">
            Authentic Brazilian flavors with a tropical touch
          </p>
          <p className="text-lg text-gray-600">
            Experience the warmth of Brazilian hospitality and the richness of our traditional cuisine
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="bg-pink-100 p-3 rounded-full mb-2">
              <svg className="h-6 w-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-800">Call Us</p>
            <p className="text-gray-600">856.562.0858</p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="bg-orange-100 p-3 rounded-full mb-2">
              <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-800">Hours</p>
            <p className="text-gray-600 text-sm">Tue-Sun: 11AM-9PM</p>
            <p className="text-gray-600 text-sm">Closed Mondays</p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-3 rounded-full mb-2">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-800">Location</p>
            <p className="text-gray-600 text-sm">South Jersey</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg">
            View Menu
          </button>
        </div>

        <div className="border-t pt-6 mt-6">
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="text-green-500 mr-1">✓</span>
              Fresh Daily Ingredients
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-1">✓</span>
              Traditional Recipes
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-1">✓</span>
              Family Owned
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

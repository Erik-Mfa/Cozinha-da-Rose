import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              alt="Cozinha da Rose restaurant interior" 
              className="rounded-lg shadow-2xl" 
              src="/images/cozinha.png"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              About <span className="font-dancing text-pink-500">Cozinha da Rose</span>
            </h2>
            <p className="text-gray-700 mb-4">
              "Cozinha da Rose" translates to "Rose's Kitchen," and that's exactly the 
              feeling we want to share with you. Our restaurant is a tribute to the 
              matriarch of our family, Rose, whose passion for cooking brought joy to 
              everyone around her. She believed that food is an expression of love, a 
              way to create memories and connect with people.
            </p>
            <p className="text-gray-700 mb-4">
              We bring the vibrant, diverse flavors of Brazil to your table, infused 
              with the warmth and care of a home-cooked meal. Our dishes are prepared 
              with traditional recipes passed down through generations, using fresh, 
              high-quality ingredients. The atmosphere is inspired by Brazil's tropical 
              beauty, with a touch of feminine elegance – think lush plants, vibrant 
              pink flowers, and the playful spirit of jungle animals.
            </p>
            <p className="text-gray-700">
              Come and experience a piece of Brazil. We invite you to our kitchen, 
              where every meal is a celebration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

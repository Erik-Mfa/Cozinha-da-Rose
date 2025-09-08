import React from 'react';

const Menu = () => {
  const mainPlates = [
    {
      name: "Feijoada Completa",
      description: "The national dish of Brazil, a hearty black bean stew with various cuts of pork and beef."
    },
    {
      name: "Picanha na Chapa",
      description: "Grilled top sirloin cap, a prized Brazilian cut, served with farofa and vinaigrette."
    },
    {
      name: "Moqueca de Peixe",
      description: "A delicious fish stew with coconut milk, tomatoes, onions, and dendê oil."
    },
    {
      name: "Frango a Passarinho",
      description: "Crispy fried chicken pieces marinated in garlic and lime."
    },
    {
      name: "Bobó de Camarão",
      description: "A creamy shrimp stew made with manioc purée, coconut milk, and spices."
    },
    {
      name: "Vaca Atolada",
      description: "'Cow stuck in the mud', a rich beef rib and manioc casserole."
    }
  ];

  const desserts = [
    {
      name: "Brigadeiro",
      description: "The beloved Brazilian chocolate truffle, a must-try."
    },
    {
      name: "Pudim de Leite",
      description: "A creamy and rich Brazilian-style flan with caramel sauce."
    }
  ];

  const sodas = [
    {
      name: "Guaraná Antarctica",
      description: "The most popular soda in Brazil, made from the guaraná fruit."
    },
    {
      name: "Coca-Cola",
      description: ""
    },
    {
      name: "Sprite",
      description: ""
    },
    {
      name: "Fanta Orange",
      description: ""
    },
    {
      name: "Club Soda",
      description: ""
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="menu">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Menu</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Main Plates Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-3xl font-semibold text-pink-500 mb-6 flex items-center">
              <svg 
                className="h-8 w-8 mr-3" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H4.72l-.38-1.52A1 1 0 003 1z" />
              </svg>
              Main Plates
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {mainPlates.map((dish, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-orange-600">{dish.name}</h4>
                  <p className="text-gray-600 mt-2">{dish.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts Section */}
          <div>
            <h3 className="text-3xl font-semibold text-pink-500 mb-6 flex items-center">
              <svg 
                className="h-8 w-8 mr-3" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  clipRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" 
                  fillRule="evenodd"
                />
              </svg>
              Desserts
            </h3>
            <div className="space-y-8">
              {desserts.map((dessert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-orange-600">{dessert.name}</h4>
                  <p className="text-gray-600 mt-2">{dessert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sodas Section */}
          <div>
            <h3 className="text-3xl font-semibold text-pink-500 mb-6 flex items-center">
              <svg 
                className="h-8 w-8 mr-3" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4 9a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 12a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM5 15a1 1 0 100 2h10a1 1 0 100-2H5z" />
              </svg>
              Sodas
            </h3>
            <div className="space-y-8">
              {sodas.map((soda, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-orange-600">{soda.name}</h4>
                  {soda.description && (
                    <p className="text-gray-600 mt-2">{soda.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

// FeaturedProducts.js
import React from 'react';
import { IceCream, Apple, Coffee } from 'lucide-react'; // Cambié Fruit por Apple

const FeaturedProducts = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <IceCream size={40} />, title: "Helados Cremosos" },
            { icon: <Apple size={40} />, title: "Paletas de Fruta" }, // Cambié Fruit a Apple
            { icon: <Coffee size={40} />, title: "Aguas Frescas" }
          ].map((product, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-center text-gray-200">Deliciosos sabores elaborados con ingredientes frescos y naturales.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

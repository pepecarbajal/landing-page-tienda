import React from 'react';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Aquí pueden ir Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Paletas",
              image: "https://editorialtelevisa.brightspotcdn.com/dims4/default/8991eaf/2147483647/strip/true/crop/920x920+230+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F6c%2Fa9%2F8e809bcf45a9baeb438f81f64eb9%2Fpaletas-de-hielo.jpg", // Cambia esto por la ruta de tu imagen
              description: "Con más de 125 sabores y 5 categorías, nuestras famosas paletas son una explosión de sabores en tu boca."
            },
            {
              title: "Gelatos y Nieves",
              image: "https://madridsalud.es/wp-content/uploads/2024/03/helados.webp", // Cambia esto por la ruta de tu imagen
              description: "Contamos con más de 50 sabores de helado. Prueba nuestros deliciosos gelatos y siéntete como si estuvieras en Italia."
            },
            {
              title: "Otros Productos",
              image: "https://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2019/05/portada-wp-heladerias.jpg", // Cambia esto por la ruta de tu imagen
              description: "Si quieres una riquísima y económica opción, te recomendamos que pruebes nuestros bolis y todos nuestros productos."
            }
          ].map((product, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-secondary text-black border-color-primary px-4 py-2 rounded">
                Ver más
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

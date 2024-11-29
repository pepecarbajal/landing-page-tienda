import { useState } from "react";
const Acerca = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }
    return (
      <div className="container rounded-3xl mx-auto px-6 py-12 min-h-[90vh] bg-gray-100 mt-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Acerca de</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">Misión</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ofrecer paletas saludables y deliciosas con toppings innovadores, elaboradas con ingredientes de alta calidad y bajos en azúcar, brindando una experiencia única de sabor que promueve el bienestar y la satisfacción de nuestros clientes en Chilpancingo, Guerrero.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">Visión</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ser la marca líder en paletas saludables en el mercado local, reconocida por su compromiso con la salud, la innovación y la sostenibilidad, inspirando a las personas a disfrutar de opciones dulces sin comprometer su bienestar.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">Valores</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
              <li>Calidad</li>
              <li>Innovación</li>
              <li>Responsabilidad</li>
              <li>Compromiso</li>
              <li>Confianza</li>
            </ul>
          </div>
          

        </div>
        <div className="mt-8 flex justify-center items-center space-x-4">
  <button
    onClick={openModal}
    className="text-gray-500 hover:underline"
  >
    Código de Ética
  </button>
</div>
        {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-lg sm:w-96 max-h-[70vh] overflow-y-auto">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
              Código de Ética de HAME
            </h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed text-justify">
              En HAME, nos comprometemos a mantener los más altos estándares éticos en todas nuestras operaciones y relaciones comerciales. Nuestro código de ética refleja nuestros valores fundamentales y nuestro compromiso con la integridad, la transparencia y la responsabilidad social. Todos los empleados y colaboradores de HAME están obligados a cumplir con los siguientes principios:
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-700 mb-4 space-y-2 text-justify">
              <li>
                <strong>Calidad y Excelencia:</strong> Nos comprometemos a ofrecer productos de la más alta calidad, elaborados con ingredientes frescos y naturales, siguiendo los más altos estándares de higiene y seguridad alimentaria.
              </li>
              <li>
                <strong>Transparencia y Honestidad:</strong> Nos comprometemos a ser transparentes y honestos en todas nuestras comunicaciones y transacciones comerciales. No toleramos el fraude, la corrupción ni ningún tipo de comportamiento deshonesto.
              </li>
              <li>
                <strong>Sostenibilidad y Responsabilidad Ambiental:</strong> Nos comprometemos a minimizar nuestro impacto ambiental y a promover prácticas comerciales sostenibles. Buscamos reducir el desperdicio de recursos, reciclar siempre que sea posible y apoyar iniciativas que contribuyan a la protección del medio ambiente.
              </li>
              <li>
                <strong>Servicio al Cliente:</strong> Nos comprometemos a brindar un servicio al cliente excepcional, basado en la cortesía, la amabilidad y la atención personalizada. Nos esforzamos por superar las expectativas de nuestros clientes en cada interacción.
              </li>
              <li>
                <strong>Comunidad y Compromiso Social:</strong> Nos comprometemos a ser buenos ciudadanos corporativos y a contribuir positivamente al bienestar de las comunidades donde operamos. Apoyamos iniciativas sociales y comunitarias que promuevan la equidad, la inclusión y el desarrollo sostenible.
              </li>
              <li>
                <strong>Ética en la Competencia:</strong> Nos comprometemos a competir de manera justa y ética en el mercado, respetando las leyes y regulaciones vigentes. No participamos en prácticas comerciales desleales ni en actividades que puedan dañar la reputación de nuestra empresa o de la industria en general.
              </li>
            </ol>
            <p className="text-sm text-gray-700 mb-4 text-justify">
              Todos los empleados y colaboradores de HAME son responsables de conocer y cumplir con este código de ética en todo momento. Cualquier violación de estos principios será tratada con seriedad y puede dar lugar a medidas disciplinarias, incluida la terminación del empleo o la relación comercial.
            </p>
            <p className="text-sm text-gray-500 text-center">
              Fecha de Entrada en Vigencia: 12/05/2024
            </p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-rojo text-white rounded-md hover:bg-red-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    );
  };
  
  export default Acerca;
  
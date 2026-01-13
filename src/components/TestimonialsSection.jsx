// components/TestimonialsSection.jsx
import React from 'react';
import { Star } from 'lucide-react';
// import { testimonialsData } from 'data/businessData';

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Carlos Martínez",
      device: "MacBook Pro 2020",
      comment: "Recuperaron todos mis datos profesionales cuando mi computadora falló. ¡Salvaron meses de trabajo!",
      rating: 5,
      date: "15 Feb 2024"
    },
    {
      id: 2,
      name: "Ana Rodríguez",
      device: "iPhone 13",
      comment: "Cambiaron la pantalla de mi iPhone en 2 horas. Quedó como nuevo y con garantía incluida.",
      rating: 5,
      date: "28 Ene 2024"
    },
    {
      id: 3,
      name: "Roberto Sánchez",
      device: "Lenovo ThinkPad",
      comment: "Diagnóstico gratuito y reparación de mi laptop de trabajo en el mismo día. Excelente servicio técnico.",
      rating: 4,
      date: "5 Feb 2024"
    },
    {
      id: 4,
      name: "María González",
      device: "Samsung Galaxy S22",
      comment: "Solucionaron el problema de carga de mi celular y me explicaron cómo prevenir daños futuros.",
      rating: 5,
      date: "10 Feb 2024"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lo que dicen nuestros clientes sobre <span className="text-yellow-600">sus reparaciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 1,000 computadoras y celulares reparados con satisfacción garantizada
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.map(testimonio => (
            <div key={testimonio.id} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  {testimonio.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonio.name}</h4>
                  <p className="text-sm text-gray-600">Reparación de {testimonio.device}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < testimonio.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonio.comment}"</p>
              
              <div className="text-sm text-gray-500">{testimonio.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
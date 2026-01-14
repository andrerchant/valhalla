// @ts-nocheck
// components/ServicesSection.jsx
import React from 'react';
import { Laptop, Smartphone, Cpu, CheckCircle, Zap, Battery } from 'lucide-react';
// import { commonIssues } from 'data/businessData';

const ServicesSection = () => {

  const servicesData = [
    {
      id: 1,
      icon: <Laptop className="w-10 h-10" />,
      title: "Reparación de Computadoras",
      description: "Desde laptops hasta equipos de escritorio. Solucionamos problemas de hardware, software, pantallas, teclados y más.",
      features: ["Diagnóstico gratuito", "Repuestos originales", "Recuperación de datos", "Mantenimiento preventivo"]
    },
    {
      id: 2,
      icon: <Smartphone className="w-10 h-10" />,
      title: "Reparación de Celulares",
      description: "Reparamos todas las marcas: Samsung, Xiaomi, Motorola y más. Pantallas, baterías, puertos de carga y sistemas.",
      features: ["Pantallas originales", "Cambio de baterías", "Reparación de agua", "Software y liberación"]
    },
    {
      id: 3,
      icon: <Cpu className="w-10 h-10" />,
      title: "Servicios Especializados",
      description: "Soluciones avanzadas para problemas complejos en tus dispositivos electrónicos.",
      features: ["Recuperación de datos críticos", "Reparación de placas madre", "Overheating en laptops", "Optimización de sistemas"]
    }
  ];

  const commonIssues = [
    { id: 1, problema: "Pantalla rota o dañada", dispositivo: "Celulares/Computadoras" },
    { id: 2, problema: "Batería que no carga", dispositivo: "Celulares/Laptops" },
    { id: 3, problema: "Problemas de rendimiento", dispositivo: "Computadoras" },
    { id: 4, problema: "Fallo de software o virus", dispositivo: "Computadoras/Celulares" },
    { id: 5, problema: "Daño por líquidos", dispositivo: "Celulares/Computadoras" },
    { id: 6, problema: "Problemas de conectividad", dispositivo: "Todos los dispositivos" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Reparamos <span className="text-amber-600">diversos tipos de dispositivos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde una pantalla rota de un Smartphone hasta una laptop que no enciende, tenemos la solución técnica que necesitas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map(servicio => (
            <div key={servicio.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="text-amber-600 mb-4">{servicio.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{servicio.title}</h3>
              <p className="text-gray-600 mb-6">{servicio.description}</p>
              <ul className="space-y-2">
                {servicio.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Problemas comunes que reparamos */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            ¿Tu dispositivo tiene alguno de estos problemas?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {commonIssues.map(problema => (
              <div key={problema.id} className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center hover:bg-amber-100 transition duration-300">
                <div className="text-amber-600 font-bold text-lg mb-1">{problema.problema}</div>
                <div className="text-sm text-amber-800">{problema.dispositivo}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#contacto" className="inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-700 transition duration-300">
              ¡Sí, necesito reparación!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
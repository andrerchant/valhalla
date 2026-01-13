// components/HeroSection.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import RepairForm from './RepairForm';
import RepairFormEnhanced from './RepairFormEnhanced';

const HeroSection = ({ businessInfo, onFormSubmit, isFormSubmitted }) => {
  const benefits = [
    "Diagnóstico profesional",
    "Repuestos Originales",
    "Garantía de 90 Días",
    "Mismo Día*"
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-700 to-yellow-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Está tu <span className="text-amber-300">Computadora</span> o <span className="text-amber-300">Celular</span> roto?<br />
              <span className="text-3xl md:text-4xl">Nosotros lo <span className="text-amber-300">reparamos</span></span>
            </h1>
            
            <p className="text-xl mb-8 text-amber-100">
              Especialistas en reparación de <strong>laptops, PCs, Mac, iPhones y Android</strong>. 
              Diagnóstico profundo y garantía de un servicio confiable en todas nuestras reparaciones.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-amber-300 mr-2" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-2">🚨 ¿Problemas con tu dispositivo?</h3>
              <p className="mb-4">
                ¡No pierdas tiempo! Agenda tu diagnóstico hoy y obtén un <strong>10% de descuento</strong> en tu primera reparación.
              </p>
              <a 
                href="#contacto" 
                className="inline-block bg-amber-600 text-white-700 font-bold py-3 px-8 rounded-lg hover:bg-amber-500 transition duration-300 transform hover:scale-105"
              >
                SOLICITAR DIAGNÓSTICO
              </a>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          {/* <RepairForm 
            onSubmit={onFormSubmit}
            isSubmitted={isFormSubmitted}
            variant="hero"
          /> */}

            <RepairFormEnhanced businessInfo={businessInfo} variant="hero" />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import {businessData} from './data/businessData';

// const [isFormSubmitted, setIsFormSubmitted] = useState(false);
const isFormSubmitted = false;

const handleFormSubmit = (formData) => {
    console.log('Formulario enviado:', formData);
    // setIsFormSubmitted(true);
    // Aquí iría la lógica para enviar a backend
  };

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header businessInfo={businessData} />
      <HeroSection 
        businessInfo={businessData} 
        onFormSubmit={handleFormSubmit}
        isFormSubmitted={isFormSubmitted}
      />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection 
        businessInfo={businessData}
        onFormSubmit={handleFormSubmit}
      />
      <Footer businessInfo={businessData} />
    </div>
  );
};

export default App;
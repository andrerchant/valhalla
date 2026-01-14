// components/Footer.jsx
import React from 'react';
import { Wrench } from 'lucide-react';

const Footer = ({ businessInfo }) => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    "Reparación de Laptops",
    "Reparación de PCs",
    "Reparación de Android",
    "Recuperación de Datos"
  ];

  const companyLinks = [
    "Sobre Nosotros",
    "Garantías",
    "Política de Privacidad",
    "Términos y Condiciones"
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              {/* <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="w-8 h-8" />
              </div> */}
              <div className=" p-2 rounded-lg opacity-20">

              <img src="/logotipo_blanco.svg" alt={businessInfo.name} width={100} />
            </div>
              <div>
                <h3 className="text-2xl font-bold"></h3>
                <p className="text-sm text-gray-400"></p>
              </div>
            </div>
            <p className="text-gray-400">
              Especialistas en reparación de dispositivos electrónicos certificados.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">¡Síguenos!</h4>
            <p className="text-gray-400 mb-4">Consejos de mantenimiento y promociones exclusivas</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 transition p-3 rounded-lg">
                <span className="font-bold">FB</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 transition p-3 rounded-lg">
                <span className="font-bold">IG</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 transition p-3 rounded-lg">
                <span className="font-bold">WA</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} {businessInfo.name} - {businessInfo.slogan}. Todos los derechos reservados.</p>
          <p className="mt-2">{businessInfo.address} | Tel: {businessInfo.phone}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// components/Header.jsx
import React from 'react';
import { Phone, Clock } from 'lucide-react';

const Header = ({ businessInfo }) => {
  return (
    <header className="bg-white shadow-md sm:sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className=" p-2 rounded-lg">

              <img src="/logotipo.svg" alt={businessInfo.name} width={88} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{businessInfo.slogan}</h1>
              <p className="text-sm text-gray-600">Reparación de computadoras y celulares</p>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="flex gap-4 md:gap-8 sm:flex-row flex-col">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-amber-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Llámanos ahora</p>
                <a href={`tel:+52${businessInfo.phone.replace(/\D/g, '')}`} className="font-semibold text-gray-800 hover:text-amber-600">
                  {businessInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-amber-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Horario de atención</p>
                <p className="font-semibold text-gray-800">Lun-Vie: 9am - 7pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
// components/ContactSection.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import RepairForm from './RepairForm';

const ContactSection = ({ businessInfo, onFormSubmit }) => {
  return (
    <section id="contacto" className="py-16 bg-gradient-to-r from-yellow-800 to-yellow-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para reparar tu dispositivo?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Estamos listos para ayudarte a devolverle la vida a tu equipo o celular.
            </p>
            

            <div className="space-y-6"> 
              <p className="mb-8">
                  <em>Envía o recibe tu equipo por medio de nuestro servicio de paquetería o agenda una visita con técnico:</em>
              </p>
            </div>


            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-yellow-300 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Puntos de recolección</h4>
                  {/* <p>{businessInfo.address}</p> */}
                  <p> <a href="https://maps.app.goo.gl/CtBgVaeQayUekUdv5" target='blank' className="hover:text-yellow-300 transition"> &bull; Fórum buenavista </a> </p>
                  <p> <a href="https://maps.app.goo.gl/XPMnydLVKKRMbkfp9" target='blank' className="hover:text-yellow-300 transition"> &bull; Metro San Cosme </a> </p>
                  <p> <a href="https://maps.app.goo.gl/9DtmWT5ceqr69eER7" target='blank' className="hover:text-yellow-300 transition"> &bull; Metrobus Reforma </a> </p>
                  <p> <a href="https://maps.app.goo.gl/63kJGA8sckaC95eE9" target='blank' className="hover:text-yellow-300 transition"> &bull; Hamburgo </a> </p>
                  {/* <p className="text-blue-200 mt-2">Estacionamiento gratuito para clientes</p> */}
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-yellow-300 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Teléfonos de Contacto</h4>
                  <p className="text-2xl font-bold mb-1">
                    <a href={`tel:+52${businessInfo.phone.replace(/\D/g, '')}`} className="hover:text-yellow-300 transition">
                      {businessInfo.phone}
                    </a>
                  </p>
                  <p className="text-blue-200">
                    WhatsApp: <a href={`https://wa.me/52${businessInfo.whatsapp.replace(/\D/g, '')}`} className="underline hover:text-yellow-300">
                      {businessInfo.whatsapp}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-yellow-300 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Correo Electrónico</h4>
                  <p>
                    <a href={`mailto:${businessInfo.email}`} className="underline hover:text-yellow-300 transition">
                      {businessInfo.email}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-yellow-300 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Horarios de Atención</h4>
                  <p>
                    {businessInfo.hours.weekdays}<br />
                    {businessInfo.hours.saturday}<br />
                    {/* <span className="text-yellow-300">¡Servicio de emergencia los fines de semana!</span> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <RepairForm 
              businessInfo={businessInfo}
              variant="contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
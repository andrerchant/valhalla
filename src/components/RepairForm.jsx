// components/RepairForm.jsx
import React, { useState } from 'react';
import { Laptop, Smartphone } from 'lucide-react';

const RepairForm = ({ businessInfo, variant = 'default' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deviceType: 'computadora',
    issue: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatWhatsAppMessage = () => {
    // Número de WhatsApp del taller (cámbialo por el real)
    const whatsappNumber = '5215512345678'; // Ejemplo: México (+52)
    
    // Formato del mensaje profesional
    const message = `📱 *SOLICITUD DE DIAGNÓSTICO* 📱

👤 *Nombre:* ${formData.name}
📞 *Teléfono:* ${formData.phone}
📧 *Email:* ${formData.email || 'No proporcionado'}

🖥️ *Tipo de dispositivo:* ${formData.deviceType === 'computadora' ? 'Computadora/Laptop' : 'Celular/Tablet'}
🔧 *Problema reportado:*
${formData.issue}

⏱️ *Solicitud enviada desde la web*
🏪 *Taller:* ${businessInfo?.name || 'TechFixPro'}

_Por favor, contactar para agendar diagnóstico._`;
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Crear el enlace de WhatsApp
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name.trim() || !formData.phone.trim() || !formData.issue.trim()) {
      alert('Por favor completa los campos obligatorios: Nombre, Teléfono y Descripción del problema');
      return;
    }
    
    // Abrir WhatsApp con el mensaje predefinido
    window.open(formatWhatsAppMessage(), '_blank');
    
    // Opcional: Resetear el formulario
    setFormData({
      name: '',
      phone: '',
      email: '',
      deviceType: 'computadora',
      issue: ''
    });
    
    // Opcional: Mostrar confirmación
    alert('¡Redirigiendo a WhatsApp! Complete su solicitud en el chat.');
  };

  // ... (resto del JSX del formulario se mantiene igual)
  
  return (
    <div className={`rounded-xl shadow-2xl p-8 ${variant === 'hero' ? 'bg-white text-gray-800' : 'bg-white/10 backdrop-blur-sm text-white'}`}>
      <h3 className="text-2xl font-bold mb-2">
        {variant === 'hero' ? '¡Reparación Express!' : 'Solicita tu presupuesto sin compromiso'}
      </h3>
      <p className="mb-6">
        {variant === 'hero' 
          ? 'Cuéntanos qué le pasa a tu dispositivo y te contactaremos por WhatsApp' 
          : 'Envíanos los detalles y te daremos un estimado por WhatsApp en la brevedad.'}
      </p>
      
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario existentes... */}
        
        <button 
          type="submit"
          className={`w-full font-bold py-4 rounded-lg transition duration-300 shadow-lg ${
            variant === 'hero' 
              ? 'bg-gradient-to-r from-green-600 to-green-800 text-white hover:from-green-700 hover:to-green-900'
              : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500'
          }`}
        >
          📱 ENVIAR POR WHATSAPP
        </button>
        
        <p className="text-xs text-center mt-4">
          {variant === 'hero' 
            ? 'Al enviar, serás redirigido a WhatsApp para completar tu solicitud.'
            : 'Te responderemos directamente por WhatsApp.'}
        </p>
      </form>
    </div>
  );
};

export default RepairForm;
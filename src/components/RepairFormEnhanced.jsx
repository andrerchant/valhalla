// components/RepairFormEnhanced.jsx
import React, { useState } from 'react';
import { Laptop, Smartphone, MessageCircle, Check } from 'lucide-react';

const RepairFormEnhanced = ({ businessInfo, variant = 'default' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deviceType: 'computadora',
    brand: '',
    model: '',
    issue: '',
    urgency: 'normal'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Configuración del negocio (ajusta estos valores)
  const config = {
    whatsappNumber: '5215512345678', // Número con código de país
    defaultCountryCode: '52', // México
    businessName: businessInfo?.name || 'TechFix Pro',
    hours: '9:00 AM - 7:00 PM'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatPhoneNumber = (phone) => {
    // Limpiar y formatear número de teléfono
    const cleaned = phone.replace(/\D/g, '');
    
    // Si no tiene código de país, agregarlo
    if (!cleaned.startsWith('52') && cleaned.length === 10) {
      return `52${cleaned}`;
    }
    
    return cleaned;
  };

  const formatWhatsAppMessage = () => {
    const phone = formatPhoneNumber(formData.phone);
    
    // Plantilla de mensaje profesional
    const messageTemplate = `📋 *NUEVA SOLICITUD DE REPARACIÓN* 📋
    
👤 *Cliente:* ${formData.name}
📞 *Contacto:* ${formData.phone}
${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}

🛠️ *INFORMACIÓN DEL DISPOSITIVO*
• *Tipo:* ${formData.deviceType === 'computadora' ? '💻 Computadora' : '📱 Celular'}
${formData.brand ? `• *Marca:* ${formData.brand}\n` : ''}
${formData.model ? `• *Modelo:* ${formData.model}\n` : ''}
• *Urgencia:* ${formData.urgency === 'urgente' ? '🚨 URGENTE' : '🕐 Normal'}

🔧 *DESCRIPCIÓN DEL PROBLEMA:*
${formData.issue}

🏪 *Taller:* ${config.businessName}
⏰ *Horario:* ${config.hours}
🌐 *Solicitud vía web*

_Por favor, confirme recepción y proporcione disponibilidad para diagnóstico._`;
    
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(messageTemplate)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validaciones
    if (!formData.name.trim()) {
      alert('Por favor ingresa tu nombre');
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      alert('Por favor ingresa un número de teléfono válido (mínimo 10 dígitos)');
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.issue.trim()) {
      alert('Por favor describe el problema de tu dispositivo');
      setIsSubmitting(false);
      return;
    }
    
    // Simular procesamiento
    setTimeout(() => {
      const whatsappUrl = formatWhatsAppMessage();
      
      // Abrir WhatsApp en nueva pestaña
      window.open(whatsappUrl, '_blank');
      
      // Mostrar confirmación
      setShowSuccess(true);
      setIsSubmitting(false);
      
      // Resetear después de 3 segundos
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          deviceType: 'computadora',
          brand: '',
          model: '',
          issue: '',
          urgency: 'normal'
        });
      }, 3000);
      
    }, 1000);
  };

  if (showSuccess) {
    return (
      <div className="bg-white rounded-xl shadow-2xl p-8 text-center">
        <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2">¡Solicitud enviada!</h3>
        <p className="mb-4">Redirigiendo a WhatsApp para que completes tu solicitud.</p>
        <p className="text-sm text-gray-600">
          Si no se abre automáticamente, por favor abre WhatsApp manualmente.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8">
      <div className="flex items-center mb-6">
        <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
        <div>
          <h3 className="text-2xl font-bold text-gray-700">Contacto por WhatsApp</h3>
          <p className="text-gray-600">Te responderemos en la brevedad.</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Tipo de dispositivo */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-3 font-medium">¿Qué dispositivo necesita reparación?</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, deviceType: 'computadora' }))}
              className={`p-4 border rounded-lg text-center transition-all ${
                formData.deviceType === 'computadora' 
                  ? 'border-green-500 bg-green-50 text-green-700' 
                  : 'border-gray-300 text-gray-400 hover:border-green-300'
              }`}
            >
              <Laptop className="w-6 h-6 mx-auto mb-2" />
              <span>Computadora/Laptop</span>
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, deviceType: 'celular' }))}
              className={`p-4 border rounded-lg text-center transition-all ${
                formData.deviceType === 'celular' 
                  ? 'border-green-500 bg-green-50 text-green-700' 
                  : 'border-gray-300 text-gray-400 hover:border-green-300'
              }`}
            >
              <Smartphone className="w-6 h-6 mx-auto mb-2" />
              <span>Celular/Tablet</span>
            </button>
          </div>
        </div>
        
        {/* Información personal */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Nombre completo *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Ej: María López"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">WhatsApp/Teléfono *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Ej: 55 1234 5678"
            />
          </div>
        </div>
        
        {/* Información del dispositivo */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Marca (opcional)</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Ej: Lenovo, Dell, Samsung"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Modelo (opcional)</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Ej: Pavilion 15, ThinkPad X1"
            />
          </div>
        </div>
        
        {/* Urgencia */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">¿Qué tan urgente es la reparación?</label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-500 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:text-green-700"
          >
            <option value="sin_prisa">Sin prisa 😎</option>
            <option value="baja">Baja 🌌</option>
            <option value="normal">Normal ✌️</option>
            <option value="moderada">Moderada‼️</option>
            <option value="urgente">Urgente🚨 </option>
          </select>
        </div>
        
        {/* Descripción del problema */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Describe el problema *</label>
          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Ej: Pantalla rota, no enciende, se mojó, problemas de rendimiento..."
            required
          />
        </div>
        
        {/* Botón de envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              PROCESANDO...
            </>
          ) : (
            <>
              <MessageCircle className="w-5 h-5 mr-2" />
              ENVIAR POR WHATSAPP
            </>
          )}
        </button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          * Campos obligatorios. Al enviar, aceptas ser contactado por WhatsApp.
        </p>
      </form>
    </div>
  );
};

export default RepairFormEnhanced;
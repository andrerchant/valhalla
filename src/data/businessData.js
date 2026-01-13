// data/businessData.js
const businessData = {
  name: "Valhalla",
  slogan: "Soporte técnico",
  phone: "(56) 1083-4124",
  whatsapp: "56 1083 4124",
  whatsappNumber: '5215610834124',
  email: "valhalla.repairworkshop@gmail.com",
  address: "Av. Tecnología #123, Col. Centro, Ciudad de México, CDMX 06000",
  hours: {
    weekdays: "Lunes a Viernes: 9:00 AM - 7:00 PM",
    saturday: "Sábados: 10:00 AM - 3:00 PM"
  }
};

const servicesData = [
  {
    id: 1,
    icon: "Laptop",
    title: "Reparación de Computadoras",
    description: "Desde laptops hasta equipos de escritorio. Solucionamos problemas de hardware, software, pantallas, teclados y más.",
    features: ["Diagnóstico gratuito", "Repuestos originales", "Recuperación de datos", "Mantenimiento preventivo"]
  },
  // ... más servicios
];

const testimonialsData = [
  {
    id: 1,
    name: "Carlos Martínez",
    device: "MacBook Pro 2020",
    comment: "Recuperaron todos mis datos profesionales cuando mi computadora falló. ¡Salvaron meses de trabajo!",
    rating: 5,
    date: "15 Feb 2024"
  },
  // ... más testimonios
];

export { businessData, servicesData, testimonialsData };
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
      device: "Motorola Edge 60",
      comment: "Cambiaron la pantalla de mi Motorola en tiempo record. Quedó como nuevo y con garantía incluida.",
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

    const commonIssues = [
    { id: 1, problema: "Pantalla rota o dañada", dispositivo: "Celulares/Computadoras" },
    { id: 2, problema: "Batería que no carga", dispositivo: "Celulares/Laptops" },
    { id: 3, problema: "Problemas de rendimiento", dispositivo: "Computadoras" },
    { id: 4, problema: "Fallo de software o virus", dispositivo: "Computadoras/Celulares" },
    { id: 5, problema: "Daño por líquidos", dispositivo: "Celulares/Computadoras" },
    { id: 6, problema: "Problemas de conectividad", dispositivo: "Todos los dispositivos" }
  ];

export { businessData, testimonialsData, commonIssues };
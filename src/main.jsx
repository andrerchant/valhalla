// src/main.jsx (o src/index.js)
import React from 'react'
import ReactDOM from 'react-dom/client' // ← ¡Importar desde 'client'!
import App from './App' // o './App.jsx'
import './index.css'

// 1. Encuentra el elemento root del HTML
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('No se encontró el elemento #root')

// 2. Crea la raíz de React
const root = ReactDOM.createRoot(rootElement)

// 3. Renderiza la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://andrerchant.github.io/',
  // Esta línea ayuda a resolver importaciones
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})

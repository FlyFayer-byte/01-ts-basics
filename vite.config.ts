import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/01-ts-basics/', // <<< ОБОВ’ЯЗКОВО для GitHub Pages
})

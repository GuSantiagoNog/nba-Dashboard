import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nba-Dashboard/',  // adicione esta linha para o GitHub Pages
  plugins: [react()],
  server: {
    open: true
  }
})

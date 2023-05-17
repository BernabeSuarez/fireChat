import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      icons: [
        {
          src: '/favicon.ico',
          sizes: '64x64',
          type: 'image/x-icon',
          purpose: "any maskable"
        }
      ]
    }
  })],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  "redirects": [
    {
      "source": "/domains",
      "destination": "https://www.secureserver.net?pl_id=592577",
      "permanent": false
    }
  ]
})

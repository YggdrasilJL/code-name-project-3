import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl'


export default defineConfig({
  plugins: [
    react(), 
    basicSsl()
  ],
  server: {
    https: true,
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

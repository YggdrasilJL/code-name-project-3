import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
// import dotenv from 'dotenv';

// dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    open: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3002",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

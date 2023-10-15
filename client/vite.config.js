import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig(({ mode }) => {
  return {
    define: {
      'process.env.REACT_APP_AUTH0_DOMAIN': JSON.stringify(
        process.env.REACT_APP_AUTH0_DOMAIN
      ),
      'process.env.REACT_APP_AUTH0_CLIENT_ID': JSON.stringify(
        process.env.REACT_APP_AUTH0_CLIENT_ID
      ),
    },
    plugins: [react()],
  };
});
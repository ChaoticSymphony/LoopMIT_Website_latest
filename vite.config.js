import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/LoopMIT_Website_latest/', // 👈 ADD THIS LINE
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  }
});

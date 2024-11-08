import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Asegúrate de que se escuche en todas las interfaces
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL || 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    // Ajuste el límite de tamaño de fragmentos
    chunkSizeWarningLimit: 1000, // Aumenta el límite de advertencia a 1000 KB

    rollupOptions: {
      output: {
        // Manualmente divide fragmentos grandes
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'chart.js'], // Ejemplo con librerías comunes
        },
      },
    },
  },
});

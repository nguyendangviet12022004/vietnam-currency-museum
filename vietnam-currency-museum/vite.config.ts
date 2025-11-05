import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure correct base path for deployment
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-vertical-timeline-component'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation': ['framer-motion', 'react-transition-group'],
          'timeline': ['react-vertical-timeline-component'],
        },
      },
    },
  },
  publicDir: 'public', // Explicitly set public directory
})

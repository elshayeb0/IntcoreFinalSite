import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({

  root: '.',            // project root
  publicDir: 'public',  // if you have static assets
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        ecommerce: resolve(__dirname, 'e-commerce.html'),
      }
    }
  },

   css: {
    postcss: resolve(__dirname, 'config/postcss.config.js'),
  },

  server: {
    port: 3000,
    host: true,
    open: true
  }
  
})
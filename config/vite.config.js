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
        main: resolve(__dirname, '../index.html'),
        about: resolve(__dirname, '../about.html'),
        ecommerce: resolve(__dirname, '../e-commerce.html'),
        mobile: resolve(__dirname, '../mobile.html'),
        cms: resolve(__dirname, '../cms.html'),
        design: resolve(__dirname, '../design.html'),
        marketing: resolve(__dirname, '../marketing.html'),
        reusable: resolve(__dirname, '../reusable.html'),
      }
    }
  },

   css: {
    postcss: resolve(__dirname, 'postcss.config.js'),
  },

  server: {
    port: 3000,
    host: true,
    open: true
  }
  
})

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  appType: "mpa",

  root: resolve(__dirname, ".."), // project root
  publicDir: resolve(__dirname, "../public"), // if you have static assets
  build: {
    outDir: resolve(__dirname, "../dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "../index.html"),
        about: resolve(__dirname, "../about.html"),
        ecommerce: resolve(__dirname, "../e-commerce.html"),
        mobile: resolve(__dirname, "../mobile.html"),
        cms: resolve(__dirname, "../cms.html"),
        design: resolve(__dirname, "../design.html"),
        marketing: resolve(__dirname, "../marketing.html"),
        reusable: resolve(__dirname, "../reusable.html"),
        webapp: resolve(__dirname, "../web-app.html"),
        hosting: resolve(__dirname, "../hosting.html"),
        devops: resolve(__dirname, "../devops.html"),
        aichatbot: resolve(__dirname, "../ai-chatbot.html"),
        aiautomation: resolve(__dirname, "../ai-automation.html"),
        aistrategy: resolve(__dirname, "../ai-strategy.html"),
        careers: resolve(__dirname, "../careers.html"),
        casestudies: resolve(__dirname, "../case-studies.html"),
      },
    },
  },

  base: "/", // safe for Netlify root deploys
  css: {
    postcss: resolve(__dirname, "postcss.config.js"),
  },

  server: {
    port: 3000,
    host: true,
    open: true,
  },
});

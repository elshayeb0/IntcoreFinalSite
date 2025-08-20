/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./e-commerce.html",
    "./src/**/*.{js,ts,jsx,tsx,css,html}"
  ],
  theme: {
    extend: {
      colors: {
        "page-background": "#232931",
        "service-background": "#f5f5f4",
        "trusted-background": "#fefefe",
        section: "#0D0E10",
        card: "#131416",
        accent: "#e97176",
        secondary: "#a9a9b3",
        "border-custom": "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
}
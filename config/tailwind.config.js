/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,css,html}"
  ],
  theme: {
    extend: {
      colors: {
        "page-background": "#232931",
        "dark-bg": "#232931",
        "service-background": "#f5f5f4",
        "trusted-background": "#fefefe",
        section: "#0D0E10",
        card: "#131416",
        accent: "#e97176",
        secondary: "#a9a9b3",
        "border-custom": "rgba(255, 255, 255, 0.1)",
      },
      spacing: {
        '22': '5.5rem',
        '30': '7.5rem',
      },
      fontSize: {
        'lg2': '1.125rem',
      }
    },
  },
  plugins: [],
}

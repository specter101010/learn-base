/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // penting untuk dark mode manual
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          wa: {
            primary: "#25D366",
            secondary: "#128C7E",
            dark: "#111B21",
            card: "#202C33",
            text: "#E9EDF0",
            light: "#f0f2f5"
          }
        }
      },
    },
    plugins: [],
  }
  
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: "oswald",
      },
    colors: {
      'primary': "#283618",
      'secondary': "#606c38",
      'solid': "#fefae0",
      'accent-1': "#bc6c25",
      'accent-2': "#dda15e"
    }
    },
  },
  plugins: [],
  images: {
    minimumCacheTTL: 60,
  },
}
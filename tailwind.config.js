/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2540', // dark navy similar to Momentous site
        secondary: '#0070f3', // bright blue accent
        accent: '#00B4D8', // lighter blue accent
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define custom background colors
        customBackground: "#ffffff1a",
        // Define custom text colors
        customText: "#333333",
        customBg: "#333",
      },
    },
  },
  plugins: [],
};

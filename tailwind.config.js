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
      colors: {
        c1: "#a2bde5",
        c2: "#91baec",
        c3: "#7bb8f3",
        c4: "#5fb7f9",
        c5: "#2cb5ff",
        c6: "#47c0b8",
        c7: " #e9c5d5",
      },
      screens: { sm: "480px", md: "768px", lg: "976px", xl: "1440pd" },
      animation: {
        fadeIn: "fadeIn 1.3s",
        bounce: "bounce 0.5s infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
        bubble: {
          "0%": { transform: "scale(0)", opacity: 0 },
          "50%": { transform: "scale(1.2)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

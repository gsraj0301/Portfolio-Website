/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFF3D6",
        card: "#FFFFFF",
        ink: "#1C1713",
        "ink-soft": "#5A4E44",
        tomato: "#FF5A36",
        "tomato-light": "#ee907b",
        marigold: "#FFC93C",
        mint: "#BFE3D0",
        blush: "#FFE1D6",
        teal: "#9e00d8",
        skill: "#faf884",
        book: "#fbaf74",
      },
      borderRadius: {
        sticker: "12px",
        panel: "20px",
        pill: "999px",
      },
      boxShadow: {
        "hard-sm": "2px 2px 0 #1C1713",
        hard: "4px 4px 0 #1C1713",
        "hard-lg": "6px 6px 0 #1C1713",
      },
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "ui-sans-serif", "system-ui", "sans-serif"],
        figtree: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};

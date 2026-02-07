/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* ================= FONT ================= */
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Montserrat"', 'sans-serif'],
      },

    //   /* =============== ANIMATION ============== */
    //   animation: {
    //     slowSpin: "spin 14s linear infinite",
    //   },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('src/data/lofi.gif')",
        // "hero-pattern": "url('src/data/bg.svg')",
      },
      // colors:{
      //   "blue":
      // }
    },
  },
  plugins: [],
};

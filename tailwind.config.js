/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "supporter-normal": "#FFE44B",
        "supporter-saturate": "#FFD900",
        "creator-normal": "#A1E3D9",
        "creator-saturate": "#01C7D0",
        "radomtoon-dark": "#05262D",
        "radomtoon-bright": "#0B5868",
      },
    },
  },
  plugins: [daisyui],
};

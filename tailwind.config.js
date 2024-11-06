/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"], // light, dark, cupcake, bumblebee, emerald, halloween, techno, synthwave, cyberpunk, valentine, lofi, pastel, forest, aqua, unicorn, dracula
  }
}


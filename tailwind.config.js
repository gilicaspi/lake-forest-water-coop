// prettier-ignore
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'Arial', 'sans-serif'],
      'serif': ['Roboto Slab', 'Georgia', 'serif'],
      'mono': ['Roboto Mono', 'SFMono-Regular', 'courier'],
    },
    // TODO: Gil Note: Implement snazzy color palette
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

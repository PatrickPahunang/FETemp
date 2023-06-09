/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '110': '28rem',
        '128': '32rem',
      },
      width: {
        '110': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
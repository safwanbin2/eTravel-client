/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: [
    {
      colors: {
        "primary": "#5EA8FF",

        "secondary": "#AC68F7",

        "accent": "#41789F",

        "neutral": "#1E1929",

        "base-100": "#324B62",

        "info": "#82D8F7",

        "success": "#00BA88",

        "warning": "#F4C91A",

        "error": "#B82418",
      },
    },
  ],
  plugins: [require('flowbite/plugin')],
}

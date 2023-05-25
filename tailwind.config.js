/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  // plugins: [require('daisyui')],
  corePlugins: {
    preflight: false
  },
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
}

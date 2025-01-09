module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

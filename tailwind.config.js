/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Fraunces', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        paper: {
          DEFAULT: '#FAFAF7',
          1: '#F3F3F0',
          2: '#E8E8E3',
          3: '#D4D4CC',
        },
        ink: {
          DEFAULT: '#1A1A17',
          1: '#333330',
          2: '#4D4D4A',
          3: '#666662',
        },
      },
      spacing: {
        'safe-top': 'max(0px, env(safe-area-inset-top))',
        'safe-bottom': 'max(0px, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ops: {
          bg: '#0F1417',
          surface: '#161E23',
          surface2: '#1D262C',
          border: '#2A343A',
          text: '#E8EDEF',
          muted: '#8B99A1',
        },
        ok: '#4FD1A5',
        warn: '#F2B84B',
        critical: '#EF5B5B',
        agent: '#6FA8FF',
        brand: {
          DEFAULT: '#5B4FE9',
          dark: '#241E5C',
          light: '#F5F4FD',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'SFMono-Regular', 'monospace'],
        display: ['"Fraunces"', 'serif'],
      },
    },
  },
  plugins: [],
};

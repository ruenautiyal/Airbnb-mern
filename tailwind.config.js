/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5A5F',
          dark: '#FF385D',
        },
        secondary: {
          DEFAULT: '#00A699',
          dark: '#008F86',
        },
        accent: '#FC642D',
        success: '#008A05',
        warning: '#FFB400',
        error: '#FF385D',
        dark: '#222222',
        'text-primary': '#222222',
        'text-secondary': '#717171',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
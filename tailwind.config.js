/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5CAEE2',
        'primary-dark': '#4a98c7',
        secondary: '#FFFFFF',
        'text-dark': '#1e293b', // slate-800
        'text-light': '#f8fafc', // slate-50
        background: '#f1f5f9', // slate-100
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(92, 174, 226, 0.5), 0 0 20px rgba(92, 174, 226, 0.3)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};

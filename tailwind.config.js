/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5EB',
          100: '#FFE6CC',
          200: '#FFD1A3',
          300: '#FFBC7A',
          400: '#FFA752',
          500: '#FF8C42', // Main primary color
          600: '#F57A2F',
          700: '#E56420',
          800: '#D24F14',
          900: '#B33A0C',
        },
        secondary: {
          50: '#ECFAEF',
          100: '#D0F0D9',
          200: '#A2E0B4',
          300: '#76CD91',
          400: '#5EBD7E',
          500: '#4F9D69', // Main secondary color
          600: '#3D8854',
          700: '#2D7341',
          800: '#215E31',
          900: '#154924',
        },
        accent: {
          50: '#F3F8FF',
          100: '#E4EFFF',
          200: '#C9DFFF',
          300: '#A9CAFF',
          400: '#83B0FF',
          500: '#5A91FF', // Main accent color
          600: '#4476E6',
          700: '#2F5CC7',
          800: '#2345A4',
          900: '#1A3582',
        },
        success: {
          300: '#86EFAC',
          500: '#22C55E',
          700: '#15803D',
        },
        warning: {
          300: '#FDE68A',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          300: '#FCA5A5',
          500: '#EF4444',
          700: '#B91C1C',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};
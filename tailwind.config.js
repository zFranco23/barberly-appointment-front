/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './modules/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#322A7D',
        },
        secondary: {
          DEFAULT: '#FFA101'
        },
        gray: {
          900: '#11141A',
          700: '#354052',
          500: '#7F8FA4',
          400: '#BBC5D5',
          300: '#F7F8FA',
          200: '#D3D3D3',
        }
      }
    },
  },
  plugins: [],
}


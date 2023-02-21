/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#333333',
      red: '#FF7154',
      pink: '#FF7179',
      orange: '#FFB673',
      skyblue: '#7CCAE2',
      blue: '#5B9DFF',
      purple: '#7E85FF',
      gray: {
        50: '#F9F9F9',
        100: '#F2F3F5',
        200: '#E3E4E6',
        300: '#D5D5DB',
        400: '#B7BABF',
        500: '#979A9E',
      },
      textGray: {
        50: '#999999',
        100: '#767676',
        200: '#505050',
      },
    },
    borderRadius: {
      sm: '8px',
      md: '12px',
      lg: '14px',
      full: '50%',
    },
    extend: {
      fontSize: {
        sm: ['12px', '130%'],
        base: ['14px', '130%'],
        lg: ['16px', '140%'],
        xl: ['18px', '140%'],
        '2xl': ['20px', '140%'],
      },
    },
    backgroundImage: {
      'bottom-button-layout':
        'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.09147408963585435) 7%, rgba(255,255,255,1) 23%, rgba(255,255,255,1) 100%)',
    },
  },
  plugins: [],
}

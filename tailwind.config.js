/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#333333',
      red: '#FF7154',
      orange: '#FFB673',
      skyblue: '#7CCAE2',
      blue: '#5B9DFF',
      purple: '#7E85FF',
      gray: {
        100: '#F2F3F5',
        200: '#999999',
        300: '#767676',
      },
    },
    borderRadius: {
      sm: '8px',
      md: '12px',
      lg: '14px',
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
  },
  plugins: [],
}

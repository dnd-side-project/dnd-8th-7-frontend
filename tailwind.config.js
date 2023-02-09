/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#333333',
      red: '#FF7154',
      orange: '#FFB673',
      skyblue: '#7CCAE2',
      blue: '#5B9DFF',
      purple: '#7E85FF',
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

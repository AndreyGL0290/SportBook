/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "views/**/*.ejs",
    "public/js/search.js",
    "public/css/global.css"
  ],
  theme: {
    extend: {
      screens: {
        'phone': { 'max': '740px' },
        'tablet': { 'min': '741px', 'max': '1379px' },
        'laptop': { 'min': '1380px', 'max': '1600px' },
        'desktop': { 'min': '1601px' }
      },
      colors: {
        'beige': {
          '100': '#eee2de',
          '200': '#d6cbc8',
          '300': '#beb5b2',
          '400': '#a79e9b',
          '500': '#8f8885',
          '600': '#77716f',
          '700': '#5f5a59',
          '800': '#474443',
          '900': '#302d2c',
        },

        'apricot': {
          '50': '#fdf4ef',
          '100': '#fae5da',
          '200': '#f4c8b4',
          '300': '#ea906c',
          '400': '#e57352',
          '500': '#df5130',
          '600': '#d13925',
          '700': '#ad2a21',
          '800': '#8a2522',
          '900': '#70211e',
          '950': '#3c0e0e',
        },

        'tabasco': {
          '50': '#fff1f1',
          '100': '#ffe0e0',
          '200': '#ffc7c7',
          '300': '#ffa1a0',
          '400': '#ff6b6a',
          '500': '#f83c3b',
          '600': '#e61d1c',
          '700': '#b31312',
          '800': '#a01514',
          '900': '#841918',
          '950': '#480707',
        },

        'martinique': {
          '50': '#f3f4fb',
          '100': '#e4e7f5',
          '200': '#cfd5ee',
          '300': '#adb8e3',
          '400': '#8695d4',
          '500': '#6974c8',
          '600': '#565bba',
          '700': '#4b4baa',
          '800': '#44428b',
          '900': '#39396f',
          '950': '#2b2a4c',
        }
      }
    }
  },
  plugins: [],
}

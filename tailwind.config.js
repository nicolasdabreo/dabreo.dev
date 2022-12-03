const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    fontSize: {
      sm: '12px',
      base: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '28px',
      '5xl': '32px'
    },
    boxShadow: {
      sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
      DEFAULT: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
      md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)'
    },
    extend: {
      fontFamily: {
        // 'sans': ['Rubik', ...defaultTheme.fontFamily.sans]
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],

      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

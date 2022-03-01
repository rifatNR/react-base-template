module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
          height: 'height',
          maxHeight: 'max-height'
      },
      boxShadow: {
        'c1': '0 3px 10px 1px rgba(0,0,0,.20)',
        'c2': '0 9px 30px 3px rgba(0,0,0,.46)',
        'c3': '0 18px 30px 3px rgba(0,0,0,.46)',
        'c4': '0 30px 50px 5px rgba(0,0,0,.44)',
        'c5': '0 45px 60px 6px rgba(0,0,0,.44)',
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'poppins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
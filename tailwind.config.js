module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato' : ['Lato', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'source-code': ['Source Code Pro', 'monospace']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

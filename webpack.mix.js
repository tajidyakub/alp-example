let mix = require('laravel-mix')

mix.js('./src/js/app.js', './public/js')
    .js('./src/js/alp.js', './public/js')
    .postCss('./src/css/app.css', './public/css', [
        require('autoprefixer'),
        require('tailwindcss'),
    ])
    .copyDirectory('./src/notes', './public/notes')
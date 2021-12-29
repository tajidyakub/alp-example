# Alpinejs simple elements

> Example of simple html elemets utilizing Alpinejs.

https://github.com/tajidyakub/alp-example
Tajid Yakub <tajid.yakub@gmail.com>

Clone this repo `git clone https://github.com/tajidyakub/alp-example.git` and `npm i` to install alpinejs and tools used. Tailwindcss is included to make the examples look better :).

## Browse the samples

Once you clone this repo and install required node modules you could spawn a local web server by using `npm run start` from the command line and point your browser to `http://localhost:9988/`

If modifications made to the files inside `src/` it will reflect to the final elements after the assets are rebuild using `npm run build`. To `build` and keep the process running watching changes on your your source dir you could execute `npm run watch`.

Use `npm run dev` to concurrently execute `npm run watch` and `npm run start`.


## Parts

- `src`, it will have `css/` and `js/` source files of css and javascript.
- `public`, the root path of web server to access the element.
- `src/notes/` markdown files, notes for the element
- `src/js/app.js` general javascript file
- `src/js/alp.js` import `alpinejs` and some additional files (such as store) if any.
- `webpack.mix.js` `laravel-mix` configuration file.
- `tailwind.config.js` `tailwindcss` config file.

## Difficulty

The sample elements are basic to itermediate implementation of alpinejs. At any case please refer to **the official docs** https://alpinejs.dev/start-here.

## Import to your html

In each of the sample html files the some basic external file imported;

- `/js/alp.js` import with defer in the head section. `<script src="/public/js/alp.js" defer></script>` this is the alpine js and imported store or data components for some of the examples.

- `/js/app.js` imported before the body closing tag.

- `/css/app.css` linked in the html head `<link rel="stylesheet" href="/public/css/app.css">` this is the css file.

- Some additional scripts per example basis generally put in the bottom section of the html file.

## Notes

Some notes on some of the examples are accessible in the public path, created from the markdown files in `src/notes/`, you can follow the link in the example element's html.

## Elements

- **Responsive Navbar**, a navbar that adjust its child elements and styles based on viewport width. 
- **Search Box**, modal kind search form which set overlay div on the main page, state between element shared through event.

## References

- **Alpinejs** https://alpinejs.dev
- **Tailwindcss** https://tailwindcss.com
- Tailwindcss plugins `@tailwindcss/forms` and  `@tailwindcss/typography`
- Postcss plugin `autoprefixed`
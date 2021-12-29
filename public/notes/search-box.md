`# Search Box

> Search modal, put a full screen overlay behind it. Sharing state between elements via dispatching event.

## What is it

- A search button in the navbar will open a blocking search modal when clicked.
- The main page will be blocked with an absolute overlay `div`.
- `showoverlay` event will be dispatch when search buttton is clicked and `hideoverlay` dispatched when the close button click.

## Inside the Search Box element

- Search Box is basically a `div` with `absolute` position hidden somewhere in the DOM, this can be achieved using `x-show` directive of the element. As shown in the code below, the data component is initialized with `x-data` directive of the Search Box element, and it will be modified by the event listener added to the element through `x-on:showsearchbox` `.window` is added since it will be listening for bubbling event from window object.

```html
<div
    id="searchBox"
    x-data="{ show: false, search: '', searchNow(){}}"
    x-on:showsearchbox.window="show = true"
    x-on:closesearchbox="show = false"
    x-on:closesearchbox="$dispatch('hideoverlay')">
    <button
        x-on:click="$dispatch('closesearchbox')">close</button>
    <form id="searchForm">
        <input
            x-on:keyup.enter="searchNow" 
            x-show="show" type="text" x-modal="search" placeholder="Search">
    </form>
</div>
```

- Pairing the search box, there is a hidden overlay `div` also with `absolute` positioning with lower `z-index` which will appear at the same time with the Search Box listening to event `showoverlay`.
- Html `body` tag also listen to event `showoverlay` and put `overflow: hidden` style when it happens. The listener on `body` will be using vanilla js in the script section of the html page.
```html
<script>
    document.getElementsByTagName('body')[0].addEventListener('showoverlay', () => {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden'
        })
        document.getElementsByTagName('body')[0].addEventListener('hideoverlay', () => {
            document.getElementsByTagName('body')[0].style.overflow = 'auto'
        })
</script>
```
- There is a close button in the Search Box which will fired `hideoverlay` when clicked. The triggered event will revert back all the element changes executed earlier.

## Directives used

- `x-show`, put a hidden attribute on an element and set it to false when the condition value changer.
- `x-model`, bind an input field with data component value of the element.
- `x-transition`, implement simple transition while transitioning between `x-show=true` and `x-show=false`.
- `$dispatch`, dispatch a custom event from an alpinejs element.
- `x-on:eventname`, bind an event listener to the element, it will listen to the event `eventname`.
`
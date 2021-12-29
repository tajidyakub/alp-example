# Responsive Navbar

> Control element's visibility based on viewPort width.

## What it does

Use the same `nav` element to serve as a navbar in the small width screen `< 768px` and larger `>=768px` by hiding most of its child element on the small screen.

```html
<!-- on the larger screen -->
<nav>
    <div>Logo</div>
    <div><a href="#"></a>...</div>
    <div>Search form</div>
    <div>Logout Button</div>
</nav>
<!-- on the small screen -->
<nav>
    <div>Logo</div>
    <div>Menu Button</div>
</nav>
```

## What do we need

- It needs to know the width of the viewport at any given time, `window` property `window.innerWidth` hold that value.
- It needs to know when (if) the width changes to adjust our navbar accordingly, this can be done by listening to event resize on the `window` element.

```javascript
    window.addEventListener('resize', (ev) => {
        // executed when resize event triggerred.
    })
```
- It needs to hide and show certain elements based on the viewport width. For this purpose we are going to use `x-show` attribute which assigned to check on a data value. The data component will be defined seperate from the componennt through `Alpine.data())`.

```html
<!-- navbar element -->
<nav x-data>
    <div>Logo</div>
    <div x-show="fullNav"><a href="#"></a>...</div>
    <div x-show="fullNav">Search form</div>
    <div x-show="fullNav">Logout Button</div>
    <div x-show="!fullNav">Button Menubar</div>
</nav>
```
```javascript
// data component property
{
    fullNav: true,
    vpWidth: 0,
    breakPoint: 768
}
```

- It needs to able to change the value of the data property `fullNav` when a `resize` event occured and the viewport width is passing the break point of `768px`, for this we will have to provide a data method inside the data component which will toggle `fullNav`.

- It needs to define the initial value of each property, this will be done from the init() method inside the data component.

```javascript
// data component property
{
    init() {
        this.vpWidth = window.innerWidth
        this.toggleNav()
    },
    fullNav: true,
    vpWidth: 0,
    breakPoint: 768

    toggleNav() {
        if (this.vpWidth >= this.breakPoint)
        {
            if (!this.fullNav) {
                this.fullNav = true
            }   
        } else {
            if (this.fullNav) {
                this.fullNav = false
            }   
        }
    },
}
```

## Data component

The data component holds a crucial part of this element. We will install `resize` eventListener on the alpine element using `x-on` with `.window`  `<nav x-on:resize.window="toggleNav" >`.

Assign `x-data` of the `nav` element to the data component name and be sure to define the data component during `alpine:init` event. Check the full html in the example.

```html
<nav x-data="navbar">....</nav>

<script>
    document.addEventListener('alpine:init', () => {
        Alpine.data('navbar', () => ({
            init() {},
            fullNav: true,
            ...
        })))
    })
</script>
```
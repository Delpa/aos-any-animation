Welcome to AOSAA!
=================

Small library to animate elements on your page as you scroll.

**If you need to use external CSS, this is your repository.**
If not, then I recommend [AOS](http://michalsnik.github.io/aos/) that comes with its integrated animations
### :shipit: [Demo](http://Delpa.github.io/aos-any-animation/)
----------

## ⚙ Setup
### Install AOSAA
Using `npm`
  
```bash
  npm install github:delpa/aos-any-animation --save
```
  
### Add scripts

```html
<script src="node_modules/aos-any-animation/dist/aosaa.js"></script>
```

### Init AOSAA

```javascript
<script>
  AOSAA.init();
</script>
```
## ⚙ How to use it?

### Usage

  All you have to do is to add `data-aosaa` attribute to html element, like so:

```html
  <div data-aosaa="animation_name">
```
  Script will added "animation name" in the class on this element, if you scroll to it
  
####Examples:
```html
  <div class="foo " data-aosaa="bar">
```
to
```html
  <div class="foo bar" data-aosaa="bar">
```
####API

AOSAA object is exposed as a global variable, for now there are three methods available:

  * `init` - initialize AOSAA
  * `refresh` - recalculate all offsets and positions of elements (called on window resize)
  * `refreshHard` - reinit array with AOSAA elements and trigger `refresh` (called on DOM changes that are related to `aosaa` elements)

Example execution:
```javascript
  AOSAA.refresh();
```
##### Disabling AOSAA

If you want to disable AOS on certain device or under any statement you can set `disable` option. Like so:

```javascript
  <script>
    AOSAA.init({
      disable: 'mobile'
    });
  </script>
```

There are several options that you can use to fit AOSAA perfectly into your project, you can pass one of three device types:
`mobile` (phones and tablets), `phone` or `tablet`. This will disable AOS on those certains devices. But if you want make your own condition, simple type your statement instead of device type name:

```javascript
  disable: window.innerWidth < 1024
```

There is also posibility to pass a `function`, which should at the end return `true` or `false`:

```javascript
  disable: function () {
    var maxWidth = 1024;
    return window.innerWidth < maxWidth;
  }
```

### :v: this is a fork of AOS

Welcome to AOSAA!
=================

Small library to animate elements on your page as you scroll.

**If you need to use external CSS, this is your repository.**
If not, then I recommend [AOS](http://michalsnik.github.io/aos/) that comes with its integrated animations
### :shipit: [Demo](http://Delpa.github.io/aos-any-animation/)
----------

## ⚙ Setup
- Using `npm`
    
    ```bash
      npm install npm install github:delpa/aos-any-animation --save
    ```
### Init AOSAA

```javascript
  <script>
    AOSAA.init();
  </script>
```
## 🤔 How to use it?

### Usage

  All you have to do is to add `data-aosaa` attribute to html element, like so:

```html
  <div data-aosaa="animation_name">
```
  Script will added "animation name" in the class on this element, if you scroll to it
example
```html
  <div class="foo " data-aosaa="bar">
```
to
```html
  <div class="foo bar" data-aosaa="bar">
```

  [Down below](https://github.com/michalsnik/aos#animations) is a list of all available animations for now :)

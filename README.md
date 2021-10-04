# SA

Easy and simple scroll animation.
<br>
[Demo](https://ppotatog.github.io/SA/demo/)

## Usage

### CDN

css
```html
<link href="https://cdn.jsdelivr.net/gh/ppotatoG/sa/css/sa.css">
```

javascript
```html
<script src="https://cdn.jsdelivr.net/gh/ppotatoG/sa/js/sa.js"></script>
```

### Example
```html
<div class="sa sa-fade-in">fade-in</div>
<div class="sa sa-scale">scale</div>
<div class="sa sa-from-left">from-left</div>
<div class="sa sa-from-right">from-right</div>
<div class="sa sa-from-top">from-top</div>
<div class="sa sa-from-bottom">from-bottom</div>
<div class="sa sa-flip">flip</div>
```
### property
And adjust behaviour by using `data-sa-*` attributes
```html
<div
    data-sa-offset="200px"
    data-sa-delay="50"
    data-sa-duration="1000"
>
</div>
```
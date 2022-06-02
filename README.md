# SA

[Demo](https://ppotatog.github.io/SA/demo/)   

### CDN

css
```html
<link href="https://raw.githack.com/ppotatoG/SA/main/css/sa.css">
```

javascript
```html
<script src="https://raw.githack.com/ppotatoG/SA/main/js/sa.js"></script>
```

## animation value   
|property|property-value|
|-|-|
|animation-name|${dataset.sa}|
|animation-duration|1000ms|
|animation-delay|0ms|
|animation-direction|normal|
|animation-iteration-count|1|
|animation-play-state|running|
|animation-timing-function|ease|
|animation-fill-mode|none|


## Type
```html
<div data-sa="from-left">from-left</div>
<div data-sa="from-right">from-right</div>
<div data-sa="from-top">from-top</div>
<div data-sa="from-bottom">from-bottom</div>
<div data-sa="flip-left">flip-left</div>
<div data-sa="flip-right">flip-right</div>
<div data-sa="flip-top">flip-top</div>
<div data-sa="flip-bottom">flip-bottom</div>
<div data-sa="scale">scale</div>
<div data-sa="fade">fade</div>
```

## Property

모든 속성은 `data-sa-*`로 사용합니다.

```html
<div
    data-sa-offset="400"
    data-sa-delay="50"
    data-sa-duration="1000"
    data-sa-once="false"
>
</div>
```

### data-sa-offset
```html
<div data-sa-offset="300"></div>
```
`data-sa-from-position`에 사용 가능합니다. (from-left, from-top, ...)

해당 앨리먼트가 `n만큼 먼 곳에서부터` 애니메이션이 실행됩니다.

기본값은 `200`이며, 50부터 10000까지 가능합니다.

`숫자형`으로 들어와야 하며, 단위는 `px`입니다.

### data-sa-delay
```html
<div data-sa-delay="1500"></div>
```

앨리먼트의 애니메이션이 `n초 후 실행`됩니다.

기본값은 `0`이며, 500부터 10000까지 가능합니다.

`숫자형`으로 들어와야 하며, 단위는 `ms`입니다.

### data-sa-duration
```html
<div data-sa-duration="2000"></div>
```
앨리먼트의 애니메이션이 `n초동안 지속`됩니다.

기본값은 `1000`이며, 500부터 10000까지 가능합니다.

`숫자형`으로 들어와야 하며, 단위는 `ms`입니다.

### data-sa-once
```html
<div data-sa-once="true"></div>
```
앨리먼트의 애니메이션이 스크롤에 따라 `반복`됩니다.

기본값은 `true`이며, `boolean`입니다.

### data-sa-time
```html
<div data-sa-time="ease-out"></div>
```
앨리먼트에 애니메이션의 `전환방법을 변경`합니다.

기본값은 `ease`이며, `['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end']` 중에서 사용 가능합니다.
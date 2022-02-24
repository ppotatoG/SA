# SA

`Vanilla JS`와 `SCSS`를 사용한 스크롤 애니메이션 플러그인 입니다 (≧∇≦)ﾉ

[Demo](https://ppotatog.github.io/SA/demo/)

[SA 일기](https://blog.naver.com/thgus2270/222523584611)

### CDN

css
```html
<link href="https://cdn.jsdelivr.net/gh/ppotatoG/sa/dist/sa.css">
```

javascript
```html
<script src="https://cdn.jsdelivr.net/gh/ppotatoG/sa/dist/sa.js"></script>
```

## Initialize

스크롤 이벤트 발생 없이 애니메이션을 동작시키려면 직접 함수를 실행시켜야 합니다.
```js
SA.scrollHandler();
```

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
```

## Property

모든 속성은 `data-sa-*`로 사용합니다.

```html
<div
    data-sa-offset="200px"
    data-sa-delay="50"
    data-sa-duration="1000"
    data-sa-once="false"
>
</div>
```

### data-sa-offset
```html
<div data-sa-offset="10vh"></div>
```
`data-sa-n-position`에 사용 가능합니다. (from-left, flip-top, ...)

해당 앨리먼트가 `n만큼 먼 곳에서부터 애니메이션이 실행`됩니다.

기본값은 `100px`이며, 숫자형으로 들어오면 `px`로 사용됩니다.

문자열로 추가할 수 있습니다 (data-sa-offset="10vh")

### data-sa-delay
```html
<div data-sa-delay="1500"></div>
```

해당 앨리먼트의 애니메이션이 `n초 후 실행`됩니다.

기본값은 `0`이며, 500부터 10000까지 가능합니다.

`숫자형`으로 들어와야 하며, 단위는 `ms`입니다.

### data-sa-duration
```html
<div data-sa-duration="2000"></div>
```
해당 앨리먼트의 애니메이션이 `n초동안 지속`됩니다.

기본값은 `1000`이며, 500부터 10000까지 가능합니다.

`숫자형`으로 들어와야 하며, 단위는 `ms`입니다.

### data-sa-once
```html
<div data-sa-once="true"></div>
```
해당 앨리먼트의 애니메이션이 스크롤에 따라 `반복`됩니다.

기본값은 `true`이며, `boolean`입니다.

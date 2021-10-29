# SA

`Vanilla JS`와 `SCSS`를 사용한 스크롤 애니메이션 플러그인 입니다 (≧∇≦)ﾉ

[Demo](https://ppotatog.github.io/SA/demo/)

[SA 일기](https://blog.naver.com/thgus2270/222523584611)

### CDN

css
```html
<link href="https://cdn.jsdelivr.net/gh/ppotatoG/sa@0834b78/css/sa.css">
```

javascript
```html
<script src="https://cdn.jsdelivr.net/gh/ppotatoG/sa@0834b78/js/sa.js"></script>
```

### type
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

### property

- `data-sa-*`로 사용합니다

- `offset`은 `-position`에 사용 가능하며, 단위까지 설정 가능합니다.

- `delay`의 기본값은 0이며, 500ms부터 500단위로 10000ms까지 가능합니다.

- `duration`의 기본값은 1000이며, 500ms부터 500단위로 10000ms까지 가능합니다.

- `once`의 기본값은 true이며, boolean입니다.

```html
<div
    data-sa-offset="200px"
    data-sa-delay="50"
    data-sa-duration="1000"
    data-sa-once="false"
>
</div>
```
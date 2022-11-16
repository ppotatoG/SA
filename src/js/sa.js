/**

 node 생성
 node별 Threshold 세팅
 최고 시작
 초기화
 값 다시 찾기

 Intersection_Observer_API
 1. node 변수에 담기
 2. 1별 옵저버 옵션 변수 저장
 3. 1, 2를 기준으로 옵저버 실행
 - 전역 threshold, node offset-position
 - 1. rootMargin
 - 2. threshold
 - 3. once
 **/
var sa = {
    saNodes: [],
    threshold: .1,
    setThreshold: function (param) {
        if (!isNaN(param)) {
            return Number(param);
        }
        else if ((/[0-9]+%/).test(param.toString())) {
            return Number(100 * (+param / 100));
        }
        return null;
    },
    intersection: function () {
        console.log('intersection');
        io.observe(this.saNodes);
    },
    init: function (el, threshold) {
        console.log('init');
        this.saNodes = document.querySelectorAll(el);
        console.log(this.saNodes);
        if (threshold)
            this.setThreshold(threshold);
        this.intersection();
    }
};
var io = new IntersectionObserver(function (nodes, observer) {
    nodes.forEach(function (node) {
        var target = node.target;
        console.log(target);
        console.dir(target);
        // if (node.target.dataset.saOnce === 'false') {
        //     if (node.isIntersecting) {
        //         target.classList.add('saShow');
        //     }
        //     target.classList.remove('saShow');
        // }
        if (node.isIntersecting) {
            target.classList.add('saShow');
            observer.unobserve(target);
        }
    });
}, {
    threshold: sa.threshold
});
window.addEventListener('DOMContentLoaded', function () {
    sa.init('[data-sa]');
});

interface saObj {
    saNodes: NodeListOf<HTMLElement> | [] | any;
    threshold: number;
    setThreshold: Function;
    intersection: Function;
    init: Function;
}

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

const sa: saObj = {
    saNodes: [],
    threshold: .1,
    setThreshold: function (param: string | number): number | null {
        if (!isNaN(<number>param)) {
            return Number(param);
        } else if ((/[0-9]+%/).test(param.toString())) {
            return Number(100 * (+param / 100));
        }
        return null;
    },
    intersection: function (): void {
        console.log('intersection')

        io.observe(this.saNodes);
    },
    init: function (el: string, threshold?: number | string): void {
        console.log('init')
        this.saNodes = document.querySelectorAll(el);
        console.log(this.saNodes)
        if (threshold) this.setThreshold(threshold);
        this.intersection();
    }
}

const io = new IntersectionObserver((nodes : any | [], observer) => {
    nodes.forEach((node : IntersectionObserverEntry) => {
        const target: Element | HTMLElement = node.target;

        console.log(target)
        console.dir(target)
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
    })
}, {
    threshold: sa.threshold
});

window.addEventListener('DOMContentLoaded', (): void => {
    sa.init('[data-sa]');
});
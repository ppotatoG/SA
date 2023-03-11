var sa = {
    /** 교차점을 지나는 대상 요소들을 저장할 NodeList */
    saNodes: [],
    /** Scroll 위치와 대상 요소의 교차점을 판단하는 기준값 */
    threshold: 0.1,
    /** threshold 값을 설정하는 함수 */
    setThreshold: function (threshold) {
        if (typeof threshold === 'string') {
            threshold = threshold.trim();
            if (threshold === '') {
                console.warn('threshold value is empty, using default value 0.1');
                threshold = 0.1;
            }
            if (!isFinite(Number(threshold))) {
                console.warn("invalid threshold value \"".concat(threshold, "\", using default value 0.1"));
                threshold = 0.1;
            }
            threshold = Number(threshold);
        }
        if (typeof threshold !== 'number') {
            console.warn("invalid threshold value \"".concat(threshold, "\", using default value 0.1"));
            threshold = 0.1;
        }
        if (threshold > 1) {
            console.warn("threshold value \"".concat(threshold, "\" cannot be greater than 1, using maximum value 1"));
            threshold = 1;
        }
        else if (threshold < 0) {
            console.warn("threshold value \"".concat(threshold, "\" cannot be less than 0, using minimum value 0"));
            threshold = 0;
        }
        sa.threshold = threshold;
    },
    /** intersection observer 등록 함수 */
    intersection: function () {
        if (sa.saNodes && sa.saNodes.length) {
            for (var _i = 0, _a = sa.saNodes; _i < _a.length; _i++) {
                var saNode = _a[_i];
                io.observe(saNode);
            }
        }
    },
    /** 플러그인 초기화 함수 */
    init: function (threshold) {
        var nodes = document.querySelectorAll('[data-sa]');
        if (!nodes || nodes.length === 0) {
            throw new Error('No matching elements found');
        }
        sa.saNodes = nodes;
        if (threshold !== undefined) {
            sa.setThreshold(threshold);
        }
        sa.intersection();
    },
};
/** js Observer API 커스텀 함수 */
var io = new IntersectionObserver(function (nodes) {
    nodes.forEach(function (node) {
        var target = node.target;
        if (!(target instanceof HTMLDivElement))
            return false;
        /** 애니메이션을 한 번만 실행할 것인지 여부 */
        var once = target.dataset.saOnce !== 'true';
        if (once) {
            if (node.isIntersecting) {
                target.classList.add('saShow'); // 애니메이션 클래스 추가
            }
            else if (!node.isIntersecting && target.classList.contains('saShow')) {
                target.classList.remove('saShow'); // 애니메이션 클래스 제거
            }
        }
        else {
            if (node.isIntersecting) {
                target.classList.add('saShow'); // 애니메이션 클래스 추가
                io.unobserve(target); // 교차점 감시 중지
            }
        }
    });
}, {
    threshold: sa.threshold, // 기준값 설정
});
window.sa = sa;

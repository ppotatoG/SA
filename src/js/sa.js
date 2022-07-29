var sa = {
    saNodes: [],
    threshold: .1,
    start: function () {
        var _this = this;
        if (this.saNodes.length > 0) {
            var point_1 = window.innerHeight;
            this.saNodes.forEach(function (saNode, i) {
                var rect = saNode.getBoundingClientRect();
                var threshold = saNode.dataset.saThreshold || _this.threshold;
                if (rect.top < point_1 - (+threshold * point_1)) {
                    saNode.classList.add('saShow');
                }
                if (saNode.dataset.saOnce === 'false') {
                    if ((rect.top < point_1 - (+threshold) || rect.top > point_1)) {
                        saNode.classList.remove('saShow');
                    }
                }
            });
        }
    },
    init: function (el) {
        this.saNodes = document.querySelectorAll(el);
    }
};
window.addEventListener('DOMContentLoaded', function () {
    sa.init('[data-sa]');
});
window.addEventListener('scroll', function () {
    sa.start();
});

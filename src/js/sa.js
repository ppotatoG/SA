var sa = {
    saNodes: [],
    viewPoint: .1,
    start: function () {
        var _this = this;
        if (this.saNodes.length > 0) {
            var point_1 = window.innerHeight;
            this.saNodes.forEach(function (saNode) {
                var rect = saNode.getBoundingClientRect();
                var viewPoint = saNode.dataset.viewPoint || _this.viewPoint;
                if (rect.top <= point_1 - (+viewPoint)) {
                    saNode.classList.add('saShow');
                    console.log(viewPoint);
                    console.log(saNode);
                }
                if (saNode.dataset.saOnce === 'false') {
                    if ((rect.top < point_1 - (+viewPoint) || rect.top > point_1)) {
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

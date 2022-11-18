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
        this.saNodes.forEach(function (saNode) { return io.observe(saNode); });
    },
    init: function (el, threshold) {
        this.saNodes = document.querySelectorAll(el);
        if (threshold)
            this.setThreshold(threshold);
        this.intersection();
    }
};
var io = new IntersectionObserver(function (nodes, observer) {
    nodes.forEach(function (node) {
        var target = node.target;
        var onceBool = target.dataset.saOnce === 'false';
        if (onceBool) {
            console.log(node.isIntersecting);
            if (node.isIntersecting) {
                target.classList.add('saShow');
            }
            else if (node.isIntersecting === false) {
                console.log(node);
            }
        }
        else {
            if (node.isIntersecting) {
                target.classList.add('saShow');
                io.unobserve(target);
            }
        }
    });
}, {
    threshold: sa.threshold
});
window.addEventListener('DOMContentLoaded', function () {
    sa.init('[data-sa]');
});

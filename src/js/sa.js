"use strict";
const sa = {
    saNodes: null,
    threshold: 0.1,
    setThreshold: function (param) {
        if (typeof param === 'number') {
            return param;
        }
        if (/^[0-9]+%$/.test(param.toString())) {
            return Number(param.replace(/%/, '')) / 100;
        }
        return Number(0.1);
    },
    intersection: function () {
        if (this.saNodes && this.saNodes.length) {
            this.saNodes.forEach((saNode) => io.observe(saNode));
        }
    },
    init: function (threshold) {
        const nodes = document.querySelectorAll('[data-sa]');
        if (!nodes || nodes.length === 0) {
            throw new Error('No matching elements found');
        }
        this.saNodes = nodes;
        if (threshold !== undefined) {
            this.threshold = this.setThreshold(threshold);
        }
        this.intersection();
    },
};
const io = new IntersectionObserver((nodes) => {
    nodes.forEach((node) => {
        const target = node.target;
        if (!(target instanceof HTMLDivElement))
            return false;
        const once = target.dataset.saOnce === 'false';
        if (once) {
            if (node.isIntersecting) {
                target.classList.add('saShow');
            }
            else if (!node.isIntersecting && target.classList.contains('saShow')) {
                target.classList.remove('saShow');
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
    threshold: sa.threshold,
});
window.addEventListener('DOMContentLoaded', () => {
    sa.init('10%');
});

const sa = {
    saNodes: [], 
    viewPonit: .1,
    scroll: function() {
        if(sa.saNodes.length > 0) {
            const point = window.innerHeight;
            this.saNodes.forEach(saNode => {
                const rect = saNode.getBoundingClientRect();
                const viewPonit = saNode.dataset.viewPonit || this.viewPonit;
    
                if(rect.top <= point - viewPonit) {
                    saNode.classList.add('saShow');
                }
    
                if(saNode.dataset.saOnce === 'false') {
                    if((rect.top < point - viewPonit || rect.top > point)) {
                        saNode.classList.remove('saShow');
                    }
                }
            });          
        }
    },
    init: function(el) {
        this.saNodes = document.querySelectorAll(el);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    sa.init('[data-sa]');
})

window.addEventListener('scroll', () => {
    sa.scroll();
});
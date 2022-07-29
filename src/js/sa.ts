interface saObj {
    saNodes: NodeListOf<HTMLElement> | [];
    threshold: Number;
    start: Function;
    init: Function;
}

const sa : saObj = {
    saNodes: [], 
    threshold: .1,
    start: function() : void {
        if(this.saNodes.length > 0) {
            const point = window.innerHeight;
            this.saNodes.forEach((saNode : HTMLElement, i : number) : void => {
                const rect = saNode.getBoundingClientRect();
                const threshold = saNode.dataset.saThreshold || this.threshold;
    
                if(rect.top < point - (+ threshold * point)) {
                    saNode.classList.add('saShow');
                }
    
                if(saNode.dataset.saOnce === 'false') {
                    if((rect.top < point - (+ threshold) || rect.top > point)) {
                        saNode.classList.remove('saShow');
                    }
                }
            });
        }
    },
    init: function(el : string) : void {
        this.saNodes = document.querySelectorAll(el);
    }
}

window.addEventListener('DOMContentLoaded', () : void => {
    sa.init('[data-sa]');
})

window.addEventListener('scroll', () : void => {
    sa.start();
});
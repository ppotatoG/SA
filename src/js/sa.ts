interface saObj {
    saNodes: NodeListOf<HTMLElement> | [];
    viewPoint: Number;
    start: Function;
    init: Function;
}

const sa : saObj = {
    saNodes: [], 
    viewPoint: .1,
    start: function() : void {
        if(this.saNodes.length > 0) {
            const point = window.innerHeight;
            this.saNodes.forEach((saNode : HTMLElement) : void => {
                const rect = saNode.getBoundingClientRect();
                const viewPoint = saNode.dataset.viewPoint || this.viewPoint;
    
                if(rect.top <= point - (+ viewPoint)) {
                    saNode.classList.add('saShow');
                }
    
                if(saNode.dataset.saOnce === 'false') {
                    if((rect.top < point - (+ viewPoint) || rect.top > point)) {
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
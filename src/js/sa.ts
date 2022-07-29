interface saObj {
    saNodes: NodeListOf<HTMLElement> | [];
    setThreshold: (n: number) => number;
    start: Function;
    init: Function;
}

const sa : saObj = {
    saNodes: [],
    setThreshold: function(value : string | number | undefined) : number | undefined {
        if(value) {
            if(Number(value)) {
                return Number(value);
            }

            else if((/[0-9]+%/).test(value.toString())) {
                return Number(100 * (+ value / 100));
            }
        }

        else {
            return Number(.1);
        }
    },
    start: function(test : string | number | undefined) : void {
        if(this.saNodes.length > 0) {
            const point = window.innerHeight;
            this.saNodes.forEach((saNode : HTMLElement) : void => {
                const rect = saNode.getBoundingClientRect();
                const threshold = this.setThreshold(test);
    
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
    sa.start(0);
});
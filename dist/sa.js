(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.SA = {}));
})(this, (function (exports) { 'use strict';

    const scrollHandler = () => {
        const saNodes = document.querySelectorAll("[data-sa]");
        const point = window.innerHeight;
        for ( const saNode of saNodes){
            const rect = saNode.getBoundingClientRect();
            if(rect.top <= point) {
                saStyleSet(saNode);  
                saNode.classList.add('show');
            } else if(saNode.dataset.saOnce === 'false'){
                if(rect.top > point + point*(0.1)) {
                    saNode.classList.remove('show');
                }
            }
        }
    };

    const saStyleSet = (saNode) => {
        const match = saNode.dataset.sa.match(/from-(.*)/);

        if(match) { 
            const from = match[1];
            let offset = saNode.dataset.saOffset;

            if(offset){
                Number(offset) ? offset += 'px' : offset;
                switch(from) {
                    case 'top' :
                        saNode.style.transform = `translate(0, -${offset})`;
                        break;
                    case 'bottom' :
                        saNode.style.transform = `translate(0, ${offset})`;
                        break;
                    case 'left': 
                        saNode.style.transform = `translate(-${offset}, 0)`;
                        break;
                    case 'right': 
                        saNode.style.transform = `translate(-${offset}, 0)`;
                        break;
                }
            }
        }    
    };
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();

    exports.scrollHandler = scrollHandler;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

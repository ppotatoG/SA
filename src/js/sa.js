const saInit = () => {
    const saNodes = document.querySelectorAll("[data-sa]");
    const point = window.innerHeight;
    for ( const saNode of saNodes){
        const rect = saNode.getBoundingClientRect();
        if(rect.top <= point) {
            if(saNode.dataset.saDelay) {
                setTimeout(() => {
                    saNode.classList.add('saShow');
                    }, saNode.dataset.saDelay)
            }
            else {
                saNode.classList.add('saShow');
            }
        } else if(saNode.dataset.saOnce === 'false'){
            if(rect.top > point + point*(0.1)) {
                saNode.classList.remove('saShow');
            }
        }
    }
}

window.addEventListener('scroll', saInit);
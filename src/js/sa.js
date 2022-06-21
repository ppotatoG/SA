const init = () => {
    const saNodes = document.querySelectorAll('[data-sa]');
    const point = window.innerHeight;
    for (const saNode of saNodes) {
        const rect = saNode.getBoundingClientRect();

        if(rect.top <= point - point * .1) {
            if(saNode.dataset.saDelay) {
                setTimeout(() => {
                    saNode.classList.add('saShow');
                }, saNode.dataset.saDelay)
            }
            else {
                saNode.classList.add('saShow');
            }
        }

        if(saNode.dataset.saOnce === 'false') {
            if((rect.top < point * -1 || rect.top > point)) {
                saNode.classList.remove('saShow');
            }
        }
    }
}

window.addEventListener('scroll', init);

export default init;
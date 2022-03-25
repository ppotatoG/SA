const saInit = () => {
    const saNodes = document.querySelectorAll("[data-sa]");
    const point = window.innerHeight;
    for ( const saNode of saNodes){
        const rect = saNode.getBoundingClientRect();
        if(rect.top <= point) {
            saNode.classList.add('show');
        } else if(saNode.dataset.saOnce === 'false'){
            if(rect.top > point + point*(0.1)) {
                saNode.classList.remove('show');
            }
            
        }
    }
}

window.addEventListener('scroll', saInit);

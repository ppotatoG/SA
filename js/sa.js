window.addEventListener('scroll', () => {
    const saNodes = document.querySelectorAll("[data-sa]");
    const point = window.innerHeight;
    for ( const saNode of saNodes){
        const rect = saNode.getBoundingClientRect();
        if(rect.top <= point) {
            saStyleSet(saNode);  
            saNode.classList.add('show');
        } else if(rect.top > point + point*(0.1)) {
            saNode.classList.remove('show');
        }
            
    }
});

function saStyleSet(saNode){
    const match = saNode.dataset.sa.match(/from-(.*)/);

    // saNode.dataset.sa 'from-'으로 시작할 때
    if(match) { 
        const from = match[1];
        const offset = saNode.dataset.saOffset;

        if(offset) {
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
}
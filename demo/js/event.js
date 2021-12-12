window.onscroll = function() {headerFunction()};

const header = document.querySelector("header");
const sticky = header.offsetTop;


function headerFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fix");
    } else {
        header.classList.remove("fix");
    }
}

(() => {
    const mainText = document.querySelector('.mainText');
    const mainTextArr = ['easy', 'simple'];
    
    mainTextArr.forEach((val) => {
        const li = document.createElement('li');
        li.innerText = `[ ${val} ]`;
        
        mainText.appendChild(li);
    });
    
    let count = 0;
    let height = mainText.offsetHeight;

    setInterval(() => {
        count <= 0 ? count++ : count --;    
        mainText.style.transform = `translateY(-${height * count}px)`;
    }, 4000);
})();

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

    const boxs = document.querySelectorAll('#form .box');
    
    boxs.forEach((box) => {
        const datasetList = Object.entries({...box.dataset});

        const code = document.createElement('code');
        datasetList.map((val) => {
            if (val[0].match(/sa/)) {
                console.log()
                code.innerHTML += `data-${val[0]}="${val[1]}"<br>`;
            }
        })

        box.appendChild(code);
    })
})();

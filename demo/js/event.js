(() => {
    const mainText = document.querySelector('.mainText');
    const mainTextArr = ['easy', 'simple'];
    
    mainTextArr.forEach((val) => {
        const li = document.createElement('li');
        li.innerText = `[ ${val} ]`;
        
        mainText.appendChild(li);
    });
    
    const height = mainText.offsetHeight;
    let flag = false;
    let i = 1;

    setInterval(() => {
        mainText.style.transform = `translateY(-${height * i}px)`;
        if ( flag ) {
            if ( i === 0 ) {
                flag = false;
                i++;
                return;
            }
            i--;
        } else {
            if ( i === mainTextArr.length - 1 ) {
                flag = true;
                i--;
                return;
            }
            i++;
        }
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

const header = document.querySelector("header");
const sticky = header.offsetTop;

document.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        header.classList.add("fix");
    } else {
        header.classList.remove("fix");
    }
})
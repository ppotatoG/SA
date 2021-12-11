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
    let count = mainText.children.length + 1;
    
    setInterval(() => {
        let height = mainText.offsetHeight;

        if(count === 1) {
            count++;
        } else {
            count--;
        }
        
        height = (height * count)- height;
        mainText.style.transform = `translateY(-${height}px)`;

        console.log(height, count)
    }, 4000);
})()
"use strict";
const boxesData = [
    { 'data-sa': 'fade' },
    { 'data-sa': 'from-right' },
    { 'data-sa': 'from-top' },
    { 'data-sa': 'from-bottom' },
    { 'data-sa': 'from-left' },
    { 'data-sa': 'flip-right' },
    { 'data-sa': 'flip-top' },
    { 'data-sa': 'flip-bottom' },
    { 'data-sa': 'flip-left' },
    { 'data-sa': 'scale' },
    {
        'data-sa': 'from-top',
        'data-sa-duration': '2500',
        'data-sa-once': 'true',
    },
    {
        'data-sa': 'from-bottom',
        'data-sa-delay': '1000',
    },
    {
        'data-sa': 'from-right',
        'data-sa-once': 'false',
    },
    {
        'data-sa': 'scale',
        'data-sa-scale': '20',
        'data-sa-once': 'false',
        'data-sa-duration': '5000',
        'data-sa-time': 'ease-out',
    },
    {
        'data-sa': 'scale',
        'data-sa-duration': '5000',
        'data-sa-time': 'ease-in',
    },
    {
        'data-sa': 'fade',
        'data-sa-duration': '1500',
        'data-sa-delay': '500',
    },
];
const createdBoxes = () => {
    const boxWrap = document.querySelector('#box_wrap');
    boxesData.forEach((boxData) => {
        const div = document.createElement('div');
        const pre = document.createElement('pre');
        for (const dataKey in boxData) {
            const dataValue = boxData[`${dataKey}`];
            div.classList.add('box');
            div.setAttribute(dataKey, dataValue);
            pre.innerHTML += `${dataKey}="${dataValue}"\n`;
        }
        div.appendChild(pre);
        boxWrap === null || boxWrap === void 0 ? void 0 : boxWrap.appendChild(div);
    });
};
(() => {
    const mainText = document.querySelector('.mainText');
    const mainTextArr = ['easy', 'simple'];
    const mainTextUl = document.createElement('ul');
    mainText === null || mainText === void 0 ? void 0 : mainText.appendChild(mainTextUl);
    mainTextArr.forEach((val) => {
        const li = document.createElement('li');
        li.innerText = `${val}`;
        mainTextUl.appendChild(li);
    });
    const height = (mainText === null || mainText === void 0 ? void 0 : mainText.offsetHeight) || 0;
    let flag = false;
    let i = 1;
    setInterval(() => {
        mainTextUl.style.transform = `translateY(-${height * i}px)`;
        if (flag) {
            if (i === 0) {
                flag = false;
                i++;
                return;
            }
            i--;
        }
        else {
            if (i === mainTextArr.length - 1) {
                flag = true;
                i--;
                return;
            }
            i++;
        }
    }, 4000);
    createdBoxes();
})();
const header = document.querySelector('header');
const sticky = (header === null || header === void 0 ? void 0 : header.offsetTop) || 0;
document.addEventListener('scroll', () => {
    if (window.screenY > sticky) {
        header === null || header === void 0 ? void 0 : header.classList.add('fix');
    }
    else {
        header === null || header === void 0 ? void 0 : header.classList.remove('fix');
    }
});
window.addEventListener('DOMContentLoaded', () => {
    sa.init(0.2);
});

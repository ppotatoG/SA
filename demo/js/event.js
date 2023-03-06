const createdBoxes = () => {
  const boxData = [
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
      'data-sa-time': ' ease-in',
    },
    {
      'data-sa': 'fade',
      'data-sa-duration': '1500',
      'data-sa-delay': '500',
    },
  ];

  const boxWrap = document.querySelector('#box_wrap');

  boxData.forEach((data) => {
    const boxDataLists = Object.entries({ ...data });
    const div = document.createElement('div');
    div.classList.add('box');

    boxDataLists.map((boxDataList) => {
      let dataName = boxDataList[0].slice(5);
      if (/-/.test(dataName)) {
        dataName = dataName.split('-');
        dataName = dataName[0] + dataName[1][0].toUpperCase() + dataName[1].slice(1);
      }

      div.dataset[dataName] = boxDataList[1];
    });

    const pre = document.createElement('pre');
    boxDataLists.map((boxDataList) => {
      pre.innerHTML += `${boxDataList[0]}="${boxDataList[1]}"\n`;
    });

    div.appendChild(pre);

    boxWrap.appendChild(div);
  });
};

(() => {
  const mainText = document.querySelector('.mainText');
  const mainTextArr = ['easy', 'simple'];

  const mainTextUl = document.createElement('ul');
  mainText.appendChild(mainTextUl);

  mainTextArr.forEach((val) => {
    const li = document.createElement('li');
    li.innerText = `${val}`;

    mainTextUl.appendChild(li);
  });

  const height = mainText.offsetHeight;
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
    } else {
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
const sticky = header.offsetTop;

document.addEventListener('scroll', () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('fix');
  } else {
    header.classList.remove('fix');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  sa.init('10%');
});

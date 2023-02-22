`use strict`;
// console.log();
const button_28 = document.getElementById('button_28');
button_28.addEventListener('click', () => {
    // alert('クリックした');
    button_28.classList.add('blue');
    // document.getElementById('buttonanswer').insertAdjacentHTML('beforeend' , '不正解');
    document.getElementById('incorrect').classList.add('display-block');
});

const button_79 = document.getElementById('button_79');
button_79.addEventListener('click', () => {
    // alert('クリックした');
    button_79.classList.add('blue');
    // document.getElementById('buttonanswer').insertAdjacentHTML('beforeend' , '正解！！！');
    document.getElementById('right').classList.add('display-block');
});


const button_183 = document.getElementById('button_183');
button_183.addEventListener('click', () => {
    // alert('クリックした');
    button_183.classList.add('blue');
    // document.getElementById('buttonanswer').insertAdjacentHTML('beforeend' , '不正解');
    document.getElementById('incorrect').classList.add('display-block');
});



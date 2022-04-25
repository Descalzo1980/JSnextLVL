"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.length); // получаем кол-во классов

// console.log(btns[0].classList.item(1)); // классы получаем

// console.log(btns[1].classList.add('red', 'tttttttt')); // классы добавляем? можно несколько

// // console.log(btns[0].classList.remove('blue_some')); // классы удаляем

// console.log(btns[0].classList.toggle('blue_some')); // классы переключаем

// if (btns[1].classList.contains('red')){
//     console.log('Ура');
// }

btns[0].addEventListener('click', () => {  // в рот мне ноги, Девид Блейн!
    if (!btns[1].classList.contains('red')){
        btns[1].classList.add('red');
    }else{
        btns[1].classList.remove('red');
    }
    // btns[1].classList.toggle('red'); // тоже работает но 
                                    //тоггл не всегда доступен
});

console.log(btns[0].className);

// делегирование

// wrapper.addEventListener('click', (event) => {
//     // console.dir(event.target);
//     if (event.target && event.target.tagName == "BUTTON"){
//         console.log('Hello');
//     }
// });

wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    if (event.target && event.target.matches("button.red")){ // проверка на класс
        console.log('Hello');
    }
});

// то же самое что и где wrapper но не пашет динамическая кнопка
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn); // здесь добавляем кнопку и она тоже делает Хеллоу


const box = document.querySelector('.box'),
      btnNext = document.querySelector('.btn-next');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width,height);

btnNext.addEventListener('click', () => { // расрываем содержимое
    box.style.height = box.scrollHeight + 'px';
});
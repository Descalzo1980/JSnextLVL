"use strict";

// const timeId = setTimeout((text) =>{
//     console.log(text);
// }, 2000, 'Hello'); 

const btn = document.querySelector('.btn');
let timerId,
    i = 0;
//     max = 300,
//     min = 0;
// let minNum = Math.floor(Math.random() * 300);
// let maxNum = Math.floor(Math.random() * 300);
// let sum = maxNum - minNum;

function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame,10);
    function frame (){
        if (pos == 300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
            // elem.style.top = sum + "px";
            // elem.style.top = pos + `${maxNum} + "px"`;
            // elem.style.left = pos + Math.random() * (max - min) + min;
        }
    }
}

btn.addEventListener('click', myAnimation);


// function logger () {
//     if (i === 3){
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 2000);

// },2000);
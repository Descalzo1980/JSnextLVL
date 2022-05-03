"use strict";

// function sayHi(name){ // когда описываем функцию это параметры
//     console.log(`Привет, ${name}! Как твои дела?`);
// }

// sayHi("Stas"); // когда вызываем это аргумент
// sayHi("Ol"); // когда вызываем это аргумент
// sayHi("GGGG"); // когда вызываем это аргумент

// function sum(a, b){
//     const result = a + b;
//     return result; // функция завершает свою работу после return
//     console.log("Not execute"); // ide пишет удОли!
// }

 // функция как аргумент

// function sum(a, b){
//     return a + b;
// }

// function diff(a, b){
//     return a - b;
// }

// console.log(sum(10,5));

// const res = sum(sum(15, 15), sum(20,20)); // шЫкарно

// console.log(res);

// function doSome(func){
//     let x = 10;
//     let y = 15;
//     let result = func(x, y);
//     console.log(result);
    
// }

// doSome(sum);
// doSome(diff);

let userName = 'Stas';

// let userName = 'Stas !!'; //Identifier 'userName' has already been declared 

const user = 'Sats';

// user = 'Saaaa'; //Assignment to constant variable.

// const univer = {
//     "социология" : 5,
//     "этика" : 4,
//     "философия" : 5
// };

// univer["физика"] = 5;
// univer.химия = 5;

// console.log(univer);

// const univerResult = [3,4,5]; //Uncaught TypeError: Assignment to constant variable.
// // univerResult = [4,4,5];
// univerResult[0] = 5;

// console.log(univerResult);

// Import Export

import otmazka1 from "./otmazka.js"; //Uncaught SyntaxError: Cannot use import statement outside a module
import otmazka from "./otmazka.js"; //Uncaught SyntaxError: Cannot use import statement outside a module
import otmazka2 from "./otmazka.js"; //Uncaught SyntaxError: Cannot use import statement outside a module

// let text = "работа нихера";

console.log(otmazka1("работа нихера"));
console.log(otmazka("труды"));
console.log(otmazka2("уборка"));

import { checkLS, showMessage } from "./cookies.js";

if(!checkLS()) console.log(showMessage('Problem'));


// стрелочная функция

document.querySelector('.out-1').onclick = () => console.log('show click');

const a1 = () => 4; // бер фигуных скобок происходит return
const a2 = b => b*4; // беp фигуных скобок происходит return

console.log(a2(2));

// spread - расширение распространение ... (так пишется)

const normalWork = ["медик", "токарь", "бухгалтер"];

const work = [...normalWork, "блогер", "инстамодель"];

console.log(work);

const worker = {
    "name": "Stas",
    "job": "Account"
};

const macDuk = {
    ...worker,
    "position": "clean manager"
};

console.log(macDuk);


//rest

const num = (...args) => args;

console.log(num(1,2, 88,77,99,100));

// desctucturing

const arr = [33,44,55,66,77];

const [d1, , , d2] = arr;

console.log(d1,d2); // 33 55

const {name, job} = macDuk;

console.log(name,job);


// map , filter
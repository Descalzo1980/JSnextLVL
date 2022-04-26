"use strict";

const now = new Date('2022-04-24');
// new Date.parse('2022-04-24');

console.log(now.setHours(40));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getDay()); // воскр. 0 отсчет идет с нуля
// console.log(now.getMonth()); // апрель 3
// console.log(now.getDate());
// console.log(now.getUTCHours());
// console.log(now.getHours());

// console.log(now.getTimezoneOffset()); // -180 3 часа по Гринвичу
// console.log(now.getTime()); // ms с 01011970


// функция для просмотра скорости обработки цикла

let start = new Date();

for(let i = 0; i < 100000; i++){
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд`);
"use strict";

// filter

const names = ["Stas", "Ann", "Ksenia", "Volandemort"];

const shortNames = names.filter(function (name) {
  return name.length < 5;
});

console.log(shortNames);

// map

/*map создаёт новый массив, меняя каждый 
элемент массива индивидуально. filter создаёт 
новый массив убирая элементы, которые не 
соответствуют условиям.
*/

let answers = ["STas", "AnnAAA", "LJKDkddk"];

const result = answers.map((item) => {
  return item.toLowerCase();
});

console.log(result);

const result1 = answers.map((item) => item.toLowerCase());

console.log(result1);

/*every/some 
Метод every() проверяет, 
удовлетворяют ли все элементы массива условию, заданному
в передаваемой функции. 

Метод some() проверяет, удовлетворяет ли какой-либо элемент
массива условию, заданному в передаваемой функции.
*/

// const some = [4,5,7];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

/*reduce
Метод reduce() применяет функцию reducer к каждому 
элементу массива (слева-направо), возвращая одно результирующее значение.

*/

// const arr = ['Stas', 'Leo', 'Kra'];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`, 3);
// console.log(res);

const obj = {
  name: "person",
  ann: "person",
  dog: "animal",
  cat: "animal",
};

const newArray = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArray);

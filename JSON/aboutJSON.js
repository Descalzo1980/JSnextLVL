"use strict";

// JSON это пара ключ-значение, строки д.б. в двойных кавычках

// stringify преобразует значение JavaScript в строку JSON
/* parse разбирает строку JSON, возможно с 
преобразованием получаемого в процессе разбора значения.*/

const persone = {
    name: 'Stas',
    tel: '+78888888',
    parents: {
        mom: 'MyMam',
        father: 'MyFather'
    }
};

// console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone)); // глубокий клон

clone.parents.mom = 'Other';

// console.log(persone.parents.mom); // MyMam
// console.log(clone.parents.mom); // Other
console.log(persone); 
console.log(clone); 
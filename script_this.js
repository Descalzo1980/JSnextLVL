"use strict";

// function showThis(a, b){ // window
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 20,
//     sum: function(){
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name, id){ // функция для конструирования объектов
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let stas = new User('Stas', 42);

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Stas'
// };

// sayName.call(user, 'Leonov');
// sayName.apply(user, ['Leonov']);

// function count(num){
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));
// 1 обычная функция this = window, "use strict" = undefined
// 2 контекст у методов объекта - сам объект
// 3 this в конструкторах и классах это новый экземпляр объекта
// 4 ручная привязка this: call, aplay, bind

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => { // если поменять на стрелочную. выдаст undefained
    e.target.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function(){
        const say = () =>{ // у стрелочной функции нет своего контекста, контекст берет от родителя
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();

const double = a => a * 2; // здесь return не нужен

console.log(double(4));

const double1 = (a, b) => {
        return (a + b)* 2;
};

console.log(double1(4,5));
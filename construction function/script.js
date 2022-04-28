"use strict";

// const num = new Number(3);

// console.log(num);

// const num = new Function(3);// новый обьект 

// console.log(num);

function User(name, id){ // функция для конструирования объектов
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
}

class User{
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.human = true;   
    }
    hello(){
        console.log(`Hello ${this.name}`);
    }
    exit(){
        console.log(`Пользователь ${this.name} покинул здание`);
    }
}


User.prototype.exit = function(){
    console.log(`Пользователь ${this.name} покинул здание`);
};

const stas = new User('Stas', '42'); // объект со свойствами
const elvis = new User('Elvis', '24');// объект со свойствами

elvis.exit();

stas.hello();
elvis.hello();

console.log(stas);
console.log(elvis);
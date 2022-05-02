"use strict";

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{ // наследование
    constructor(height, width, text, bgColor){
        super(height, width); // СУПЕРКОНСТРУКТОР! КТО НИБУДЬ, ПОЗВОНИТЕ СУПЕРМЕНУ!
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyPropers(){
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25,10,'Hello world','red');

div.showMyPropers();
console.log(div.calcArea());

// const square = new Rectangle(10,10);
// const long = new Rectangle(100,20);

// console.log(square.calcArea());
// console.log(long.calcArea());

// абстракция - отделение концепции от экземпляра (класс и его экземпляры)
// наследование - способность объекта или класса базироваться на другом объекте или классе или классе
// 


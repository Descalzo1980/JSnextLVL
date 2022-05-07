"use strict";

const inputRub = document.querySelector("#rub"),
    inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    // методы XMLHttpRequest
    // request.open(method,url,async,login,pass); собирает информацию
    request.open("GET", "js/current.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    // request.addEventListener('readystatechange', () =>{ // readystatechange используется не так часто
    //     if (request.readyState === 4 && request.status === 200){
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     }else{
    //         inputUsd.value = "НетМонет";
    //     }
    // });

    // с load
    request.addEventListener("load", () => {
        if (isNaN(inputRub.value)) {
            alert("Введите число");
        } else if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Какая то ошибка";
        }
    });

    // status всякие там 404 и 200
    // statusTEXT уже текстом ошибки
    // response ответ от разраба
    // readyState от 0 до 4

    //
});
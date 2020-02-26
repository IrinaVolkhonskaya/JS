"use strict";

const admin = prompt('Ваш логин?', "");

if (admin === 'admin') {
    let passw = prompt('Введите пароль');

    if(passw === null) {
        alert('Вход отменен');
       }else if (passw === 'Чёрный Властелин') {
        alert('Добро пожаловать!');
      } else {
        alert('Пароль неверен');
    }
} else if (admin === null) {
    alert ('Вход отменён');
} else {
    alert('Я вас не знаю');
}

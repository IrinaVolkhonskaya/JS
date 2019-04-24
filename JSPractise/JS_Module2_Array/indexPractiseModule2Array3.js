"use strict";
/*
* Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
* Гравировка одного слова стоит 10 кредитов.
*/

// В переменной message хранится произвольная строка
const message = "Proin sociis natoque et magnis parturient montes mus";
let priceWord = 10;


// Разбить строку в массив, разделитель - пробел, и записать в переменную words
const words = message.split(" ");
console.log(words);

// Выведи в консоли длину массива words
console.log(words.length); // 8

// Вычисли сколько будет стоить гравировка и запиши результат в переменную price
let price = words.length * priceWord;
console.log(price); // 80
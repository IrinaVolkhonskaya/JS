"use strict";

/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const matched = [];

for (let i = 0; i<numbers.length; i++) {
    if(num < numbers[i]) {
       matched.push(numbers[i]);
    } 
}

console.log(matched); // [17, 14, 14, 32, 18, 26]

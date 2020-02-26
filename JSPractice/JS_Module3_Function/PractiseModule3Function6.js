"use strict";

/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
// let num = [];
let largestNumber = 0;

function findLargestNumber (numbers) {

  for (let i = 0; i < numbers.length; i++){
      if(numbers[i] > largestNumber) {
         largestNumber = numbers[i];
         // console.log(numbers[i]);
      }
 }
 return largestNumber;
};

// Вызовы функции для проверки
console.log(
  findLargestNumber([1, 2, 3])
); // 3

console.log(
  findLargestNumber([27, 12, 18, 5])
); // 27

console.log(
  findLargestNumber([31, 128, 14, 74])
); // 128

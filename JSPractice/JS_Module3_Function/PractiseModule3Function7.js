"use strict";
/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers  = [2, 1, 4, 9];
let numbers = [];///[1, 2, 3]

function addUniqueNumbers() {
  // debugger;
        numbers = Array.from(arguments);
        //  console.log(Array.isArray(numbers));//numbers - это массив
         console.log(`numbers: ${numbers}`);
         for(let i = 0; i < numbers.length; i++) {
             if (uniqueNumbers.indexOf(numbers[i]) ===  -1) {
             uniqueNumbers.push(numbers[i]);
    }
  }
  return uniqueNumbers;
};

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
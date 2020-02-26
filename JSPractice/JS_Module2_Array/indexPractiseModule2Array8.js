"use strict";
/*DONE!!!
  Напиши скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

let numbers = [];
let total = 0;
let userInput;

do {
  userInput = +prompt("Введите число");
  numbers.push(userInput);
  console.log(`numbers ${numbers}`);
} while (userInput !== 0);

  //  вариант 1 через for of
for (let num of numbers){
 total +=num;
}
//  вариант 2 через for
// for(let i=0; i <= numbers.length; i++){
//   total +=numbers[i];
// }
if (numbers.length !==0) {
 alert( `Общая сумма чисел равна ${total}`);
}




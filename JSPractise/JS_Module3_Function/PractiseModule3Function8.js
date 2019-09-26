"use strict";

/* DONE!!
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/


let result = [];
let items;

const filterFromArray = function(arr, ...items) {
  
  // console.log(arr);
  // console.log(items);

  for (let i = 0; i < arr.length; i++){
      // console.log(Array.isArray(items));
     if (items.includes(arr[i]) === false){
        result.push (arr[i]);
        // console.log(result);
     }
  }
  return result;
}; 
console.log(result);

// Вызовы функции для проверки
console.log(
  filterFromArray([1, 2, 3, 4, 5], 2, 4)
); // [1, 3, 5]

console.log(
  filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]
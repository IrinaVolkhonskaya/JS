"use strict";

/*
 Задание 2
Напиши функцию logItems(array), которая получает массив и использует цикл for, 
который для каждого элемента массива будет выводить в консоль 
сообщение в формате [номер элемента] - [значение элемента].

Нумерация должна начинаться с 1. 
примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', 
а для индекса 2 выведет '3 - Ajax'.

Вызовы функции для проверки работоспособности твоей реализации.

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
*/

// const getItems = logItems(array){
//   for(let i=0; i < array.length; i+=1) {
//       console.log(array.length `-`array[i]);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);


function logItems(array) {
    for(let i=0; i < array.length; i+=1) {
        
        console.log((i+1)+ `-` +array[i]);
    };
  };
  
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
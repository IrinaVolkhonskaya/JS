"use strict";

// DONE!!!
// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и 
// возвращает имя самого продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".


// debugger
function findBestEmployee(employees) {
 let max = 0;
 let name;

// вариант 1
//  const keys = Object.keys(employees);
//  console.log(keys);
//  for (const key of keys) {
//    if (max < employees[key]){
//      max = employees[key];
//      name = key;
//    }
//  }
// console.log('max: ', max);
// console.log('name:', name);
// ===================================================================
//  вариант 2

  const entry = Object.entries(employees);
  // console.log(entry);
  for (let i = 0; i < entry.length; i++) {
    for(let j = 0; j < entry[i].length; j++){
      if (entry[i][j] > max) {
        max = entry[i][j];
        name = entry[i][0];
       }
     }
  }
  return name;
};
 
// Вызовы функции для проверки работоспособности твоей реализации.

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
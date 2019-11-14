"use strict";

// DONE!!!  Задание 6
// Напиши функцию calculateTotalPrice(arr, productName), 
// которая получает массив объектов и имя продукта (значение свойства name). 
// Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
// debugger
function calculateTotalPrice(products, productName) {
  for(let i = 0; i < products.length; i++){
  if (products[i].name=== productName){

    // const price = products[i].price;
    // const quantity = products[i].quantity;
    const value = products[i].price*products[i].quantity;
    return value;
  } 
}
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
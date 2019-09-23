"use strict";

/*  DONE!!!
Задание 3
Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию 
calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы)
 и цену гравировки одного слова, и возвращающую цену гравировки.

Вызовы функции для проверки работоспособности твоей реализации.

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
 
*/
let priceText;

function calculateEngravingPrice (message, pricePerWord) {

  const madeArray = message.split(" ");
  // console.log(madeArray);//[...]
  const word = madeArray.length;//[кол-во слов = длина массива]
  // console.log (word);//5
  priceText = word*pricePerWord;// 5*40
  // console.log(priceText);
  return priceText;
}

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
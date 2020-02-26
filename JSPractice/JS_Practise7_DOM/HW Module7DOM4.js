"use strict";
// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// 33минута вебинар

/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */

let clickCount = 0;// объявляем счетчик
let counterValue = document.getElementById('value');// <span id="value">0</span>
let val = +counterValue.textContent;// переводим строку в число

const incrementBtn = document.querySelector('button[data-action="increment"]');// кнопка инкремент
const decrementBtn = document.querySelector('button[data-action="decrement"]');// кнопка декремент

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

function increment (event) {
  clickCount += 1;
  counterValue.innerHTML = clickCount;
  console.log(clickCount);
}

function decrement (event) {
  clickCount -= 1;
  counterValue.innerHTML = clickCount;
  console.log(clickCount);
}

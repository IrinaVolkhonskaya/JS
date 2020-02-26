"use strict";

const num = prompt("Введите произвольное целое число");

if (num === null) {
  alert("Ну и ладно, пока!");
} else if (Number.isInteger(Number(num))) {
  alert("Спасибо!");
} else {
  alert("Необходимо было ввести целое число!");
}

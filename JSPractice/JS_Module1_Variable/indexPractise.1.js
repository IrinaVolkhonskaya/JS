"use strict";

const correctPassword = "jqueryismyjam";
const enterPassword = prompt("Введите пароль доступа");

if (enterPassword === correctPassword) {
  alert("Доступ в секретный бункер разрешен!");
} else if (enterPassword === null) {
  alert("Была нажата отмена!");
} else {
  alert("Неверный пароль, активирована система защиты!");
}

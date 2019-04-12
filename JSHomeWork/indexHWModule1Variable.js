"use strict";

const adminLogin = "a";
const adminPassword = "p";
const login = prompt("Введите Ваш логин");

const alertMessage = "Отменено пользователем!";
const alertLogin = "Доступ запрещен, неверный логин!";
const alertPassword = "Доступ запрещен, неверный пароль!";
const alertPassword1 = "Добро пожаловать!";

if (login === null) {
  alert(alertMessage);
} else if (login !== adminLogin) {
  alert(alertLogin);
} else {
  const password = prompt("Введите Ваш пароль!");
  if (password === null) {
    alert(alertMessage);
  } else if (password !== adminPassword) {
    alert(alertPassword);
  } else {
    alert(alertPassword1);
  }
}

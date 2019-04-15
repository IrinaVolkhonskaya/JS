"use strict";

const num = prompt("Введите число от 1 до 5");

if (num === null) {
  alert("Очень жаль, приходите еще!");
} else if (num < 1 || num > 5) {
  alert("Неверный ввод, возможные варианты 1-5!");
} else if (num >= 1 || num <= 5) {
  switch (num) {
    case "1":
      alert("Каталог хостелов");
      break;
    case "2":
      alert("Каталог бюджетных отелей");
      break;
    case "3":
      alert("Каталог отелей ***");
      break;
    case "4":
      alert("Каталог отелей ****");
      break;
    case "5":
      alert("Каталог лучших отелей");
      break;
    default:
      alert("Введите число");
  }
}

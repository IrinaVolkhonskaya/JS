"use strict";

const total = 100;
const ordered = 130;

if (ordered > total) {
  alert("На складе недостаточно твоаров!");
} else if (total === ordered) {
  alert("Вы забираете весь товар cо склада!");
} else {
  alert("Заказ оформлен, с вами свяжется менеджер");
}

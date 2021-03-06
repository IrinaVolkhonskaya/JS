"use strict";
/* Напиши программу, которая проверяет, является ли число палиндромом.
Число записано в переменную poly.
Переменная, куда нужно записать «перевёрнутую» версию числа, называется ylop.
Выясни, является ли число из переменной poly палиндромом. Если да, значение флага isPalindrome должно быть true,
  eсли число не палиндром, то false. */

  const poly = 1221;
  let ylop = 0;
  const isPalindrome = false;
  
  for (var i = poly; i > 0; i /= 10) {
      ylop+= i % 10;
      if (i >= 10) {
          ylop*= 10;
      }
      i-= i % 10;
  }
  
  if (poly === ylop) {
      isPalindrome = true;
  }

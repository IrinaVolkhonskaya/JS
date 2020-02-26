"use strict";

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

function getPx (str) {
  //вариант 1

  if (typeof str === 'string') {
    return Number.parseFloat(str);
  }
  else
  return null;

  
 /////////////////
 // вариант 2

  // const result = (typeof str === 'string') 
  //   ? Number.parseFloat(str) 
  //   : null

  // return result
};

// Вызовы функции для проверки
console.log( getPx("10px") === 10 ); // true
console.log( getPx("10.5") === 10.5 ); // true
console.log( getPx("0") === 0 ); // true
console.log( getPx(true) ); // null
console.log( getPx(10) ); // null

"use strict";

/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

const checkNumberType1 = num => num % 2 === 0 ? 'Even' : 'Odd'

const checkNumberType2 = num => {
    if (num % 2 === 0)
      return 'Even'
    else 
      return 'Odd'
  }

  function checkNumberType3(num) {
    if (num % 2 === 0)
      return 'Even'
    else 
      return 'Odd'
  }
  
  const checkNumberType4 = function(num) {
    if (num % 2 === 0)
      return 'Even'
    else 
      return 'Odd'
  }


console.log( checkNumberType1(2) ); // 'Even'

console.log( checkNumberType2(46) ); // 'Even'

console.log( checkNumberType3(3) ); // 'Odd'

console.log( checkNumberType4(17) ); // 'Odd'






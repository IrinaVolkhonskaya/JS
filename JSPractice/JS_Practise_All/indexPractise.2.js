"use strict";

/*Программа должна анализировать числа.
Если число делится на 3, результат работы программы — строка 'Fizz'.
Если число делится на 5 — строка 'Buzz'.
Если число одновременно делится на 3 и на 5 — результат 'FizzBuzz'.
В остальных случаях результат работы программы — изначальное число.
Число записано в переменную number.
Результат работы программы записывайте в переменную taskResult.*/

const number = 15;
let taskResult;

if (number % 3 === 0 && number % 5 === 0) {
  taskResult = "FizzBuzz";
} else if (number % 5 === 0) {
  taskResult = "Buzz";
} else if (number % 3 === 0) {
  taskResult = "Fizz";
} else {
  taskResult = number;
}
